import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function AboutCTA() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#050816] px-6 py-12 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] sm:px-8 lg:px-12 lg:py-16">
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />

          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[var(--primary)]/35 blur-3xl" />

          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[var(--secondary)]/25 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/60">
              Ready To Get Started?
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Let’s build a website that properly represents your business.
            </h2>

            <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">
              Get a professional website with direct support, long-term care and
              a setup designed to grow alongside your business.
            </p>

            <div className="mt-9">
              <ButtonLink href="/contact" variant="secondary">
                Start A Project
                <ArrowRight />
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}