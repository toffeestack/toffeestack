"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <section className="relative flex min-h-screen items-center overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[#F8FAFD]" />
          <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#305CDE_1px,transparent_1px),linear-gradient(to_bottom,#305CDE_1px,transparent_1px)] [background-size:44px_44px]" />
          <div className="absolute left-0 top-40 h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-3xl" />
          <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-[var(--secondary)]/10 blur-3xl" />
        </div>

        <Container>
          <div className="mx-auto max-w-md">
            <div className="rounded-[2rem] bg-white/90 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
              <form
                onSubmit={handleLogin}
                className="rounded-[1.6rem] border border-[#E8EDF7] bg-white p-6 sm:p-8"
              >
                <div className="mb-8 text-center">
                  <Image
                    src="/logo.svg"
                    alt="ToffeeStack"
                    width={54}
                    height={54}
                    className="mx-auto mb-5 h-14 w-14"
                    priority
                  />

                  <h1 className="text-3xl font-black tracking-tight text-[var(--heading)]">
                    Login
                  </h1>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
                    Sign in to access your ToffeeStack dashboard.
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9AA3B2]" />

                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      className="h-16 w-full rounded-[2rem] border border-[#E8EDF7] bg-white pl-14 pr-5 text-sm text-[#050816] outline-none transition-all duration-200 placeholder:font-medium placeholder:text-[#9AA3B2] hover:border-[var(--secondary)] focus:border-[var(--secondary)]"
                    />
                  </div>

                  <div className="relative">
                    <LockKeyhole className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9AA3B2]" />

                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="h-16 w-full rounded-[2rem] border border-[#E8EDF7] bg-white pl-14 pr-14 text-sm text-[#050816] outline-none transition-all duration-200 placeholder:font-medium placeholder:text-[#9AA3B2] hover:border-[var(--secondary)] focus:border-[var(--secondary)]"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-[#9AA3B2] transition hover:text-[var(--primary)]"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>

                  {error && (
                    <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-600">
                      {error}
                    </p>
                  )}

                  <Button type="submit" className="w-full py-4">
                    Login
                  </Button>
                </div>
              </form>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/reset-password"
                className="text-sm font-black text-[var(--primary)] transition hover:text-[var(--secondary)]"
              >
                Reset Password
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}