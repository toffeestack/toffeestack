import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Settings, LogOut } from "lucide-react";
import bcrypt from "bcrypt";

import { auth, signOut } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { ChangePasswordModal } from "@/components/dashboard/change-password-modal";

async function updateAccount(formData: FormData) {
  "use server";

  const session = await auth();

  if (!session?.user?.email) redirect("/login");

  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const businessName = String(formData.get("businessName") || "");
  const phone = String(formData.get("phone") || "");
  const address = String(formData.get("address") || "");
  const city = String(formData.get("city") || "");
  const county = String(formData.get("county") || "");
  const postCode = String(formData.get("postCode") || "");

  const user = await prisma.user.update({
    where: { email: session.user.email },
    data: { name, email },
  });

  await prisma.customerProfile.upsert({
    where: { userId: user.id },
    update: { businessName, phone, address, city, county, postCode },
    create: { userId: user.id, businessName, phone, address, city, county, postCode },
  });

  revalidatePath("/dashboard/account");
}

async function updatePassword(
  _prevState: { success?: string; error?: string },
  formData: FormData
) {
  "use server";

  const session = await auth();

  if (!session?.user?.email) return { error: "You must be logged in." };

  const currentPassword = String(formData.get("currentPassword") || "");
  const newPassword = String(formData.get("newPassword") || "");
  const confirmPassword = String(formData.get("confirmPassword") || "");

  if (!currentPassword || !newPassword || !confirmPassword) {
    return { error: "Please fill in all password fields." };
  }

  if (newPassword !== confirmPassword) {
    return { error: "New passwords do not match." };
  }

  if (newPassword.length < 8) {
    return { error: "Password must be at least 8 characters long." };
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) return { error: "User not found." };

  const currentPasswordMatches = await bcrypt.compare(
    currentPassword,
    user.password
  );

  if (!currentPasswordMatches) {
    return { error: "Current password is incorrect." };
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: { id: user.id },
    data: { password: hashedPassword },
  });

  revalidatePath("/dashboard/account");

  return { success: "Password change has been successful." };
}

async function logout() {
  "use server";

  await signOut({
    redirectTo: "/login",
  });
}

export default async function AccountPage() {
  const session = await auth();

  if (!session?.user?.email) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { customerProfile: true },
  });

  if (!user) redirect("/login");

  return (
    <div>
      <div className="rounded-[2rem] border border-[#E8EDF7] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-8">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)]">
              <Settings className="h-5 w-5" />
            </div>

            <div>
              <h1 className="text-3xl font-black tracking-tight text-[var(--heading)]">
                Account Settings
              </h1>

              <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                Update your personal and business details.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <ChangePasswordModal action={updatePassword} />

            <form action={logout}>
              <button
                type="submit"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl bg-red-50 text-red-500 transition hover:scale-105 hover:bg-red-100 hover:text-red-600"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        <form action={updateAccount} className="grid gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Full Name" name="name" defaultValue={user.name || ""} />
            <Field label="Email Address" name="email" defaultValue={user.email} />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field
              label="Business Name"
              name="businessName"
              defaultValue={user.customerProfile?.businessName || ""}
            />

            <Field
              label="Phone Number"
              name="phone"
              defaultValue={user.customerProfile?.phone || ""}
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field
              label="Address"
              name="address"
              defaultValue={user.customerProfile?.address || ""}
            />

            <Field
              label="City"
              name="city"
              defaultValue={user.customerProfile?.city || ""}
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field
              label="County"
              name="county"
              defaultValue={user.customerProfile?.county || ""}
            />

            <Field
              label="Post Code"
              name="postCode"
              defaultValue={user.customerProfile?.postCode || ""}
            />
          </div>

          <div className="flex justify-end pt-3">
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  defaultValue,
}: {
  label: string;
  name: string;
  defaultValue: string;
}) {
  return (
    <div className="group relative">
      <label
        htmlFor={name}
        className="absolute left-4 top-[-10px] z-10 bg-white px-2 text-[13px] font-bold text-[#596073] transition-colors group-focus-within:text-[var(--secondary)]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        defaultValue={defaultValue}
        className="h-14 w-full rounded-2xl border border-[#E8EDF7] bg-white px-5 text-sm outline-none transition focus:border-[var(--primary)]"
      />
    </div>
  );
}