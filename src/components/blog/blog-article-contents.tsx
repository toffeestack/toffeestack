import Link from "next/link";
import { Mail } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const contents = [
  "Why a professional website matters",
  "Clear design builds trust",
  "Speed and support after launch",
  "What to improve first",
];

function shortTitle(title: string) {
  return title.length > 15 ? `${title.slice(0, 15)}...` : title;
}

export function BlogArticleContents() {
  const articleTitle =
    "How A Professional Website Helps Your Business Look More Trusted";

  return (
    <Section className="bg-white pt-0 overflow-visible">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[270px_1fr] lg:items-start">
          <aside className="lg:sticky lg:top-28">
            <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted-foreground)]">
              <Link href="/" className="transition hover:text-[var(--primary)]">
                Home
              </Link>
              <span className="text-[var(--primary)]">/</span>
              <Link
                href="/blog"
                className="transition hover:text-[var(--primary)]"
              >
                Blog
              </Link>
              <span className="text-[var(--primary)]">/</span>
              <span className="text-[var(--heading)]">
                {shortTitle(articleTitle)}
              </span>
            </div>

            <div className="mt-8 rounded-[2rem] border border-[#E8EDF7] bg-[#F8FAFD] p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
              <h2 className="text-xl font-black text-[var(--heading)]">
                Share
              </h2>

              <div className="mt-5 flex items-center gap-3">
                {["X", "f", "in"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white text-sm text-[var(--heading)] transition hover:bg-[var(--secondary)] hover:text-white"
                  >
                    {item}
                  </button>
                ))}

                <button
                  type="button"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white text-[var(--heading)] transition hover:bg-[var(--secondary)] hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="mt-8 border-t border-dashed border-[#CBD5E1] pt-8">
              <h2 className="text-xl font-black text-[var(--heading)]">
                Table of contents
              </h2>

              <nav className="mt-5 space-y-4">
                {contents.map((item, index) => (
                  <a
                    key={item}
                    href={`#section-${index + 1}`}
                    className={`block text-sm leading-6 transition hover:text-[var(--primary)] ${
                      index === 0
                        ? "text-[var(--primary)]"
                        : "text-[var(--muted-foreground)]"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="max-w-5xl">
            <div className="space-y-7 text-lg leading-8 text-[var(--muted-foreground)]">
              <p>
                A professional website is often the first proper impression a
                customer gets of your business. Before they call, email or ask a
                question, they usually look at your website to decide whether
                your business feels trustworthy.
              </p>

              <p>
                A strong website does not need to be complicated. It needs clear
                wording, simple structure, fast loading pages and a design that
                makes people feel confident in what you offer.
              </p>

              <p>
                For many businesses, the biggest problem is not having a website
                at all — it is having one that no longer reflects the quality of
                the business behind it.
              </p>
            </div>

            <section id="section-1" className="mt-12 scroll-mt-32">
              <h2 className="text-3xl font-black tracking-tight text-[var(--heading)] sm:text-4xl">
                Why a professional website matters
              </h2>

              <div className="mt-6 space-y-6 text-lg leading-8 text-[var(--muted-foreground)]">
                <p>
                  Your website should help people quickly understand who you
                  are, what you do and why they should trust you.
                </p>

                <p>
                  A clean website gives your business a stronger online presence
                  and makes it easier for potential customers to take the next
                  step.
                </p>
              </div>
            </section>

            <section id="section-2" className="mt-12 scroll-mt-32">
              <h2 className="text-3xl font-black tracking-tight text-[var(--heading)] sm:text-4xl">
                Clear design builds trust
              </h2>

              <div className="mt-6 space-y-6 text-lg leading-8 text-[var(--muted-foreground)]">
                <p>
                  Good design is not just about making a website look nice. It
                  helps guide visitors, explain your services and make your
                  business feel more reliable.
                </p>

                <p>
                  Spacing, headings, buttons, images and wording all work
                  together to create a better experience.
                </p>
              </div>
            </section>

            <section id="section-3" className="mt-12 scroll-mt-32">
              <h2 className="text-3xl font-black tracking-tight text-[var(--heading)] sm:text-4xl">
                Speed and support after launch
              </h2>

              <div className="mt-6 space-y-6 text-lg leading-8 text-[var(--muted-foreground)]">
                <p>
                  A website also needs to be maintained. Updates, fixes,
                  security checks and small changes help keep your website
                  running properly after it goes live.
                </p>
              </div>
            </section>

            <section id="section-4" className="mt-12 scroll-mt-32">
              <h2 className="text-3xl font-black tracking-tight text-[var(--heading)] sm:text-4xl">
                What to improve first
              </h2>

              <div className="mt-6 space-y-6 text-lg leading-8 text-[var(--muted-foreground)]">
                <p>
                  Start with clear services, strong calls to action,
                  mobile-friendly pages, fast loading speeds and simple wording
                  that your customers understand.
                </p>
              </div>
            </section>
          </article>
        </div>
      </Container>
    </Section>
  );
}