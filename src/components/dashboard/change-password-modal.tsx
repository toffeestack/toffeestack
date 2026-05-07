"use client";

import { useActionState, useState } from "react";
import { KeyRound, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChangePasswordModal({
  action,
}: {
  action: (
    prevState: { success?: string; error?: string },
    formData: FormData
  ) => Promise<{ success?: string; error?: string }>;
}) {
  const [open, setOpen] = useState(false);
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl bg-[#FFF7E8] text-[#D4A017] transition hover:scale-105 hover:bg-[#FFECC2]"
      >
        <KeyRound className="h-5 w-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-5 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-[2rem] border border-[#E8EDF7] bg-white p-7 shadow-[0_30px_90px_rgba(15,23,42,0.18)] sm:p-8">
            <div className="mb-9 flex items-start justify-between gap-6">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-[var(--heading)]">
                  Change Password
                </h2>

                <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                  Choose a strong new password to keep your account secure.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-2xl bg-[#F8FAFD] text-[#596073] transition hover:text-[var(--secondary)]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form action={formAction} className="space-y-7">
              <PasswordField label="Current Password" name="currentPassword" />
              <PasswordField label="New Password" name="newPassword" />
              <PasswordField label="Confirm Password" name="confirmPassword" />

              {state?.error && (
                <div className="rounded-2xl bg-red-50 px-5 py-4 text-sm font-bold text-red-600">
                  {state.error}
                </div>
              )}

              {state?.success && (
                <div className="rounded-2xl bg-green-50 px-5 py-4 text-sm font-bold text-green-700">
                  {state.success}
                </div>
              )}

              <div className="pt-2">
                <Button type="submit" className="w-full" disabled={pending}>
                  {pending ? "Saving..." : "Save Password"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

function PasswordField({ label, name }: { label: string; name: string }) {
  return (
    <div className="group relative">
      <label
        htmlFor={name}
        className="absolute left-5 top-[-10px] z-10 bg-white px-2 text-[13px] font-bold text-[#596073] transition-colors group-focus-within:text-[var(--secondary)]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type="password"
        required
        className="h-16 w-full rounded-[1.5rem] border border-[#E8EDF7] bg-white px-5 text-sm outline-none transition focus:border-[var(--primary)]"
      />
    </div>
  );
}