import { ArrowRight, CheckCircle2, MessageCircle, PencilRuler, Rocket } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const steps = [
  {
    title: "Tell Us What You Need",
    text: "We start with a simple conversation about your business, what you offer and what you want your website to do.",
    icon: MessageCircle,
  },
  {
    title: "We Design And Build It",
    text: "We create the pages, structure, wording and design so your website looks professional and easy to understand.",
    icon: PencilRuler,
  },
  {
    title: "Launch And Look After It",
    text: "Once your site is live, we can keep it updated, secure and running smoothly with ongoing support.",
    icon: Rocket,
  },
];

export function HowItWorks() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--primary)] px-6 py-12 text-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] sm:px-8 lg:px-12 lg:py-16">
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[var(--secondary)]/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                How It Works
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                A simple process from idea to launch.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
                You do not need to know anything technical. We guide you through
                the process, explain things clearly and handle the build for you.
              </p>

              <div className="mt-8 flex flex-col gap-3 text-sm font-bold text-white sm:flex-row sm:flex-wrap">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--white)]" />
                  Clear Advice
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--white)]" />
                  Simple Guidance
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--white)]" />
                  Support After Launch
                </span>
              </div>

              <div className="mt-9">
                <ButtonLink href="/contact" variant="secondary">
                  Start The Process
                  <ArrowRight />
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="rounded-[2rem] bg-white/[0.09] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] backdrop-blur-md"
                  >
                    <div className="flex gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[var(--primary)]">
                        <Icon className="h-7 w-7" />
                      </div>

                      <div>
                        <p className="text-sm font-black text-white/45">
                          Step {index + 1}
                        </p>
                        <h3 className="mt-1 text-xl font-black">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-white/72">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}