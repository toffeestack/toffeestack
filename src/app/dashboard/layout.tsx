import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { DashboardFooter } from "@/components/dashboard/dashboard-footer";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-[#F8FAFD]">
      <DashboardSidebar
        name={session.user.name}
        email={session.user.email}
      />

      <section className="min-h-screen lg:pl-72">
        <div className="p-5 pt-24 sm:p-8 sm:pt-28 lg:p-10">
            <div className="mx-auto max-w-7xl">{children}<DashboardFooter /></div>
        </div>
      </section>
    </main>
  );
}