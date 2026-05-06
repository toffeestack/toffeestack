import Link from "next/link";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata = {
  title: "Portfolio | ToffeeStack",
  description:
    "ToffeeStack is currently preparing its latest website design and development portfolio work.",
};

export default function PortfolioPage() {
  return (
    <main className="overflow-hidden bg-white">
      <Section className="relative overflow-hidden pb-20 pt-10 lg:pb-28 lg:pt-14">
        <div className="absolute inset-0 -z-10 bg-[#F8FAFD]" />
        <div className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(to_right,#305CDE_1px,transparent_1px),linear-gradient(to_bottom,#305CDE_1px,transparent_1px)] [background-size:44px_44px]" />

        <Container>
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-sm font-bold">
              <Link href="/" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">
                Home
              </Link>
              <span className="text-[var(--primary)]">/</span>
              <span className="text-[var(--heading)]">Portfolio</span>
            </div>

            <h1 className="mt-10 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[var(--heading)] sm:text-6xl lg:text-[4.5rem]">
              Our portfolio is coming soon.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
              We are currently working on releasing our latest portfolio pieces.
              Soon you will be able to view recent ToffeeStack website design,
              development and support projects here.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/new-project">
                Start A Project
                <ArrowRight />
              </ButtonLink>

              <ButtonLink href="/services" variant="secondary">
                View Services
                <ArrowRight />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}