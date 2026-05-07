import Link from "next/link";
import { ArrowRight, MonitorSmartphone } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function WebsiteDesignHero() {
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
            <Link
              href="/services"
              className="transition hover:text-[var(--primary)]"
            >
              Services
            </Link>
            <span className="text-[var(--primary)]">/</span>
            <span className="text-[var(--heading)]">Website Design</span>
          </div>

          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[var(--heading)] sm:text-6xl lg:text-[4.5rem]">
            Professional websites built to help your business look trusted.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
            Clean, modern website design for businesses that want a stronger
            online presence without dealing with the technical side.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/new-project">
              Start Your Website
              <ArrowRight />
            </ButtonLink>

            <ButtonLink href="#pricing" variant="secondary">
              View Pricing
              <ArrowRight />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}