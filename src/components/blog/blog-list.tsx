"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const categories = [
  "All",
  "Website Design",
  "Site Care",
  "Development",
  "Business Advice",
];

const posts = [
  {
    title: "How A Professional Website Helps Your Business Look More Trusted",
    excerpt:
      "A simple guide to how better design, clearer wording and stronger structure can improve the way customers see your business online.",
    href: "/blog/article",
    image: "/blog/website-trust.jpg",
  },
  {
    title: "What To Include On Your Business Website Before Launch",
    excerpt:
      "The key pages, sections and details every business website should include before going live, written in plain English.",
    href: "/blog/article",
    image: "/blog/website-launch.jpg",
  },
  {
    title: "Why Ongoing Website Support Matters After Launch",
    excerpt:
      "Your website should not be left alone after launch. Regular updates, fixes and support help keep it working properly.",
    href: "/blog/article",
    image: "/blog/site-care.jpg",
  },
];

function trimExcerpt(text: string) {
  return text.length > 100 ? `${text.slice(0, 100)}...` : text;
}

export function BlogList() {
  const [searchOpen, setSearchOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) {
      inputRef.current?.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Section className="bg-white pt-0">
      <Container>
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`cursor-pointer rounded-full px-5 py-3 text-sm font-bold transition ${
                  index === 0
                    ? "bg-[var(--primary)] text-white"
                    : "bg-[#F5F7FA] text-[var(--heading)] hover:bg-[#EEF3FF]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div ref={searchRef} className="flex justify-end">
            <div className="relative flex h-12 items-center justify-end">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search articles..."
                className={`h-12 rounded-full border border-[#E8EDF7] bg-[#F5F7FA] pl-5 pr-14 text-sm font-bold text-[var(--heading)] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[var(--secondary)] ${
                  searchOpen
                    ? "w-[320px] opacity-100"
                    : "pointer-events-none w-12 opacity-0"
                }`}
              />

              <button
                type="button"
                onClick={() => setSearchOpen((current) => !current)}
                className="absolute right-0 top-0 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[var(--secondary)] text-white transition hover:scale-105"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-x-5 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#E8EDF7] bg-[#F8FAFD] shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            >
              <div className="relative h-56 overflow-hidden bg-[#EEF3FF]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h2 className="text-xl font-black leading-tight text-[var(--heading)]">
                  {post.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                  {trimExcerpt(post.excerpt)}
                </p>

                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[var(--primary)]">
                  Read More
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-3 items-center">
          <div className="flex justify-start">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F7FA] text-[var(--heading)] transition hover:bg-[#EEF3FF]">
              <ArrowLeft className="h-5 w-5" />
            </button>
          </div>

          <div className="flex justify-center gap-3">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold transition ${
                  page === 1
                    ? "bg-[var(--secondary)] text-white"
                    : "bg-[#F5F7FA] text-[var(--heading)] hover:bg-[#EEF3FF]"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <div className="flex justify-end">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F7FA] text-[var(--heading)] transition hover:bg-[#EEF3FF]">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}