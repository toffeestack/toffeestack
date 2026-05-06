"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const recentArticles = [
  {
    title: "How a modern website helps small businesses look more trusted",
    excerpt:
      "A simple breakdown of why clean design, speed and clear messaging matter online.",
    href: "/blog",
  },
  {
    title: "What to include on your business website before launch",
    excerpt:
      "The key pages, sections and trust signals every new website should include.",
    href: "/blog",
  },
  {
    title: "Why website speed matters more than you think",
    excerpt:
      "Fast websites feel more professional, improve trust and help visitors stay engaged.",
    href: "/blog",
  },
  {
    title: "How automation can save hours of admin every week",
    excerpt:
      "A practical look at connecting tools, forms, emails and workflows together.",
    href: "/blog",
  },
  {
    title: "When your business should move beyond a basic website",
    excerpt:
      "Signs it might be time for dashboards, portals, bookings or custom tools.",
    href: "/blog",
  },
  {
    title: "What makes a website feel premium",
    excerpt:
      "Spacing, typography, animation and clean structure all work together.",
    href: "/blog",
  },
];

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Website Design", href: "/services/website-design" },
      { label: "Site Care", href: "/services/site-care" },
      { label: "Development", href: "/services/development" },
      { label: "Integration", href: "/services/integration" },
      { label: "API Setup", href: "/services/api" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  const articlesRef = useRef<HTMLDivElement>(null);

  const scrollArticles = (direction: "left" | "right") => {
    articlesRef.current?.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-24">
      <div className="relative overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[var(--secondary)]/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                From the blog
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight lg:text-4xl">
                Recent Articles
                </h2>
            </div>

            <div className="hidden items-center gap-3 md:flex">
                <button
                onClick={() => scrollArticles("left")}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Previous articles"
                >
                <ArrowLeft className="h-5 w-5" />
                </button>

                <button
                onClick={() => scrollArticles("right")}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Next articles"
                >
                <ArrowRight className="h-5 w-5" />
                </button>
            </div>
            </div>

          <div className="relative mt-8">
            <div
              ref={articlesRef}
              className="flex snap-x gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {recentArticles.map((article) => (
                <Link
                  key={article.title}
                  href={article.href}
                  className="group min-w-[82%] snap-start rounded-3xl bg-white/[0.055] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14),0_10px_40px_rgba(15,23,42,0.10)] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.075] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18),0_10px_40px_rgba(15,23,42,0.14)] sm:min-w-[48%] lg:min-w-[calc(25%-15px)]"
                >
                  <h3 className="text-xl font-black leading-tight">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/75">
                    {article.excerpt}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">
                    Read article
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>

            
          </div>
        </div>
      </div>

      <div className="bg-[#F7F8FB]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="ToffeeStack logo"
                width={80}
                height={80}
                className="h-10 w-auto"
              />
              <span className="text-2xl font-black text-[var(--heading)]">
                ToffeeStack
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--muted-foreground)]">
              Modern website design, custom development and ongoing Site Care for businesses that want a reliable online presence without the technical stress.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-black text-[var(--heading)]">
                {group.title}
              </h3>

              <div className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm font-medium text-[var(--muted-foreground)] transition hover:text-[var(--primary)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3 className="font-black text-[var(--heading)]">
              Contact Details
            </h3>

            <div className="mt-4 space-y-3 text-sm text-[var(--muted-foreground)]">
              <Link
                href="mailto:hello@toffeestack.com"
                className="flex gap-3 transition hover:text-[var(--primary)]"
              >
                <Mail className="mt-0.5 h-4 w-4 text-[var(--primary)]" />
                hello@toffeestack.com
              </Link>

              <Link
                href="/contact"
                className="flex gap-3 transition hover:text-[var(--primary)]"
              >
                <MessageCircle className="mt-0.5 h-4 w-4 text-[var(--primary)]" />
                Live Chat
              </Link>

              <p className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[var(--primary)]" />
                Available by enquiry
              </p>

              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--primary)]" />
                Liverpool, UK
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)]">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-[var(--muted-foreground)] md:flex-row md:items-center md:justify-between lg:px-8">
            <p>© {new Date().getFullYear()} ToffeeStack. All rights reserved.</p>

            <div className="flex gap-5">
              <Link href="/privacy" className="hover:text-[var(--primary)]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[var(--primary)]">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}