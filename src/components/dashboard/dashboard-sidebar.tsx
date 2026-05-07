"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  MessageCircle,
  Globe2,
  BriefcaseBusiness,
  FileText,
  FolderKanban,
  CreditCard,
  Settings,
  X,
} from "lucide-react";

const links = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Projects", href: "/dashboard/projects", icon: FolderKanban },
  { title: "Websites", href: "/dashboard/websites", icon: Globe2 },
  { title: "Services", href: "/dashboard/services", icon: BriefcaseBusiness },
  { title: "Quotes", href: "/dashboard/quotes", icon: FileText },
  { title: "Payments", href: "/dashboard/payments", icon: CreditCard },
  { title: "Messages", href: "/dashboard/chat", icon: MessageCircle },
];

function SidebarContent({
  name,
  email,
  onNavigate,
  showClose,
  onClose,
}: {
  name?: string | null;
  email?: string | null;
  onNavigate?: () => void;
  showClose?: boolean;
  onClose?: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-[#2F5BDB] via-[#3C63DD] to-[#8D57D9]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute left-[-30%] top-[10%] h-[400px] w-[400px] rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-[-30%] top-[0%] h-[400px] w-[400px] rounded-full bg-[#FD3C7C]/20 blur-3xl" />

      <div className="relative flex h-full flex-col border-r border-white/10 px-6 py-7">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/dashboard"
            onClick={onNavigate}
            className="flex h-14 w-14 items-center justify-center"
          >
            <Image
              src="/logo-white.svg"
              alt="ToffeeStack"
              width={54}
              height={54}
              priority
              className="h-14 w-14"
            />
          </Link>

          {showClose && (
            <button
              onClick={onClose}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white transition hover:bg-white hover:text-[#2F5BDB]"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          )}
        </div>

        <nav className="scrollbar-hide min-h-0 flex-1 overflow-y-auto pr-1">
        <div className="flex flex-col gap-2">
          {links.map((link) => {
            const Icon = link.icon;
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onNavigate}
                className={`group flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-200 ${
                  active
                    ? "bg-white text-[#2F5BDB] shadow-[0_20px_40px_rgba(0,0,0,0.14)]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Icon
                  className={`h-5 w-5 transition ${
                    active
                      ? "text-[#2F5BDB]"
                      : "text-white/90 group-hover:text-white"
                  }`}
                />

                <span
                  className={`text-[16px] font-bold tracking-[-0.01em] ${
                    active ? "text-[#2F5BDB]" : "text-white"
                  }`}
                >
                  {link.title}
                </span>
              </Link>
            );
          })}
        </div>
        </nav>

        <div className="mt-4 shrink-0 rounded-[1.8rem] border bg-white/10 p-4 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-[16px] font-bold tracking-[-0.01em] text-white">
                {name || "Customer"}
              </p>
            </div>

            <Link
              href="/dashboard/account"
              onClick={onNavigate}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white transition hover:bg-white hover:text-[#2F5BDB]"
            >
              <Settings className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export function DashboardSidebar({
  name,
  email,
}: {
  name?: string | null;
  email?: string | null;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 overflow-hidden lg:hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2F5BDB] via-[#3C63DD] to-[#8D57D9]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative flex h-20 items-center justify-between px-5">
          <Link href="/dashboard" className="flex h-12 w-12 items-center justify-center">
            <Image
              src="/logo-white.svg"
              alt="ToffeeStack"
              width={48}
              height={48}
              priority
              className="h-12 w-12"
            />
          </Link>

          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-2xl"
            aria-label="Open menu"
          >
            <span className="h-0.5 w-6 rounded-full bg-white" />
            <span className="h-0.5 w-6 rounded-full bg-white" />
          </button>
        </div>
      </header>

      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-72 overflow-hidden lg:flex lg:flex-col">
        <SidebarContent name={name} email={email} />
      </aside>

      <div
        className={`fixed inset-0 z-[70] bg-black/30 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={`fixed left-0 top-0 z-[80] h-screen w-full overflow-hidden transition-transform duration-500 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent
          name={name}
          email={email}
          showClose
          onClose={() => setMobileOpen(false)}
          onNavigate={() => setMobileOpen(false)}
        />
      </aside>
    </>
  );
}