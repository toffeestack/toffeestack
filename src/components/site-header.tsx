"use client";

import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Code2,
  MonitorSmartphone,
  PlugZap,
  ShieldCheck,
  X,
} from "lucide-react";

const services = [
  {
    title: "Website Design",
    description:
      "Clean, modern websites for businesses ready to look professional online.",
    href: "/services/website-design",
    icon: MonitorSmartphone,
  },
  {
    title: "Site Care",
    description: "Hosting, updates, small changes, email support and monitoring.",
    href: "/services/site-care",
    icon: ShieldCheck,
  },
  {
    title: "Development",
    description: "Custom dashboards, portals, booking systems and business tools.",
    href: "/services/development",
    icon: Code2,
  },
  {
    title: "Integration",
    description: "Connect your tools, automate tasks and reduce manual admin.",
    href: "/services/integration",
    icon: PlugZap,
  },
];

const links = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [showScrolledHeader, setShowScrolledHeader] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const scrollingUp = y < lastY;

      setShowScrolledHeader(y > 120 && scrollingUp);
      setLastY(y);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`z-50 w-full transition-all duration-300 ${
          showScrolledHeader
            ? "fixed top-0 translate-y-0 bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            : "relative bg-transparent shadow-none"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="ToffeeStack logo"
              width={100}
              height={150}
              className="h-10 w-auto"
              priority
            />
            <span className="text-2xl font-black tracking-tight text-[var(--heading)]">
              ToffeeStack
            </span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {links.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[16px] font-bold text-[var(--heading)] transition hover:text-[var(--primary)]"
              >
                {link.label}
              </Link>
            ))}

            <div
              ref={servicesRef}
              className="static"
              onMouseEnter={() => setServicesOpen(true)}
            >
              <button
                onClick={() => setServicesOpen((prev) => !prev)}
                className="flex cursor-pointer items-center gap-1.5 text-[16px] font-bold text-[var(--heading)] transition hover:text-[var(--primary)]"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                onMouseLeave={() => setServicesOpen(false)}
                className={`fixed left-0 right-0 top-24 w-screen bg-white/95 shadow-[0_18px_24px_-22px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-all duration-300 ${
                  servicesOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible translate-y-3 opacity-0"
                }`}
              >
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-4 px-8 py-8">
                  {services.map((service) => {
                    const Icon = service.icon;

                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setServicesOpen(false)}
                        className="rounded-3xl border border-[#E8EDF7] p-6 text-center transition-colors duration-300 hover:bg-[var(--border)]"
                      >
                        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#EEF3FF] text-[var(--primary)]">
                          <Icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-base font-black text-[var(--heading)]">
                          {service.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
                          {service.description}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {links.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[16px] font-bold text-[var(--heading)] transition hover:text-[var(--primary)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="/new-project">
              Start Project
              <ArrowRight />
            </ButtonLink>
          </div>

          <button
            onClick={() => {
              setMobileOpen(true);
              setMobileServicesOpen(false);
            }}
            className="flex h-11 w-11 flex-col cursor-pointer items-center justify-center gap-1.5 rounded-2xl lg:hidden"
            aria-label="Open menu"
          >
            <span className="h-0.5 w-6 rounded-full bg-[var(--heading)]" />
            <span className="h-0.5 w-6 rounded-full bg-[var(--heading)]" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[70] bg-black/30 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => {
          setMobileOpen(false);
          setMobileServicesOpen(false);
        }}
      />

      <aside
        className={`fixed right-0 top-0 z-[80] h-screen w-full bg-white transition-transform duration-500 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between">
          <button
            onClick={() => setMobileServicesOpen(false)}
            className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F7FA] transition-opacity ${
              mobileServicesOpen ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-label="Back to main menu"
          >
            <ArrowLeft className="h-6 w-6 text-[var(--heading)]" />
          </button>

          <button
            onClick={() => {
              setMobileOpen(false);
              setMobileServicesOpen(false);
            }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F7FA]"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-[var(--heading)]" />
          </button>
        </div>

        <div
          className={`flex h-full w-[200%] transition-transform duration-500 ease-out ${
            mobileServicesOpen ? "-translate-x-1/2" : "translate-x-0"
          }`}
        >
          <div className="h-full w-1/2 px-6 pt-24">
            <nav className="space-y-2">
              {links.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-3xl px-5 py-5 text-2xl font-black text-[var(--heading)]"
                >
                  {link.label}
                </Link>
              ))}

              <button
                onClick={() => setMobileServicesOpen(true)}
                className="flex w-full items-center justify-between rounded-3xl px-5 py-5 text-left text-2xl font-black text-[var(--heading)]"
              >
                Services
                <ArrowRight className="h-6 w-6" />
              </button>

              {links.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-3xl px-5 py-5 text-2xl font-black text-[var(--heading)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-5 text-base font-bold text-white"
            >
              Start Project
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="h-full w-1/2 overflow-y-auto px-6 pt-24">
            <nav className="space-y-2 pb-8">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-4 rounded-3xl px-5 py-5 text-xl font-black text-[var(--heading)]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[var(--primary)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    {service.title}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}