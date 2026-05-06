import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function ContactHero() {
  return (
    <Section className="relative overflow-hidden pb-16 pt-10 sm:pb-20 lg:pb-24 lg:pt-14">
      <div className="absolute inset-0 -z-10 bg-[#F8FAFD]" />
      <div className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(to_right,#305CDE_1px,transparent_1px),linear-gradient(to_bottom,#305CDE_1px,transparent_1px)] [background-size:44px_44px]" />

      <Container>
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-sm font-bold">
            <Link
              href="/"
              className="text-[var(--muted-foreground)] transition hover:text-[var(--primary)]"
            >
              Home
            </Link>
            <span className="text-[var(--primary)]">/</span>
            <span className="text-[var(--heading)]">Contact</span>
          </div>

          <h1 className="mt-10 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[var(--heading)] sm:text-6xl lg:text-[4.5rem]">
            Get in touch with ToffeeStack.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
            Have a general question about websites, support or working with
            ToffeeStack? Send a message and we’ll point you in the right
            direction.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="mailto:hello@toffeestack.com">
              Email ToffeeStack
              <ArrowRight />
            </ButtonLink>

            <ButtonLink href="/new-project" variant="secondary">
              Start New Project
              <ArrowRight />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}