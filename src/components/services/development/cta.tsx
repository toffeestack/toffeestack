import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function DevelopmentCTA() {
  return (
    <Section className="bg-white pt-10">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#050816] px-6 py-12 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] sm:px-8 lg:px-12 lg:py-16">
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[var(--primary)]/35 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[var(--secondary)]/25 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                Custom Development
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Need something custom built for your business?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                Tell us what you need and we’ll help plan the best way to build
                it, support it and make sure it can grow with your business.
              </p>
            </div>

            <div className="shrink-0">
              <ButtonLink href="/new-project" variant="secondary">
                Start Development Request
                <ArrowRight />
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}