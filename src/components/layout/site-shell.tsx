"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/login" || pathname.startsWith("/dashboard");

  return (
    <>
      {!hideLayout && <SiteHeader />}
      {children}
      {!hideLayout && <SiteFooter />}
    </>
  );
}