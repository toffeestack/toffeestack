import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function DevelopmentHero() {
  return (
    <Section className="relative overflow-hidden pb-16 pt-10 sm:pb-20 lg:pb-24 lg:pt-14">
      <div className="absolute inset-0 -z-10 bg-[#F8FAFD]" />
      <div className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(to_right,#305CDE_1px,transparent_1px),linear-gradient(to_bottom,#305CDE_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute left-0 top-32 -z-10 h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-3xl" />
      <div className="absolute right-0 top-20 -z-10 h-80 w-80 rounded-full bg-[var(--secondary)]/10 blur-3xl" />

      <Container>
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
            <Link href="/" className="transition hover:text-[var(--primary)]">
              Home
            </Link>
            <span className="text-[var(--primary)]">/</span>
            <span className="text-[var(--primary)]">/</span>
            <span className="text-[var(--heading)]">Development</span>
          </div>

          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[var(--heading)] sm:text-6xl lg:text-[4.5rem]">
            Custom development for websites, systems and business tools.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
            Full stack development for businesses that need custom features,
            dashboards, client portals, booking systems or tools built around
            how they work.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/new-project">
              Start Development Request
              <ArrowRight />
            </ButtonLink>

            <ButtonLink href="/contact" variant="secondary">
              Ask A Question
              <ArrowRight />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}