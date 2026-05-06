import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  PencilRuler,
  Rocket,
} from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const steps = [
  {
    title: "Tell Us About Your Business",
    text: "We start with a simple conversation about your business, what you do and what you want your website to help with.",
    icon: MessageCircle,
  },
  {
    title: "We Design And Build Everything",
    text: "We handle the layout, wording, pages and design so your website looks clear, professional and easy to use.",
    icon: PencilRuler,
  },
  {
    title: "Launch With Ongoing Support",
    text: "Once your website is live, we can continue looking after updates, support, security and future improvements.",
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
                Everything is explained clearly and handled properly, so you do
                not need to worry about the technical side of your website.
              </p>

              <div className="mt-8 flex flex-col gap-3 text-sm font-bold text-white sm:flex-row sm:flex-wrap">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <CheckCircle2 className="h-4 w-4 text-[var(--secondary)]" />
                  Clear Advice
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <CheckCircle2 className="h-4 w-4 text-[var(--secondary)]" />
                  Simple Process
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <CheckCircle2 className="h-4 w-4 text-[var(--secondary)]" />
                  Ongoing Support
                </span>
              </div>

              <div className="mt-9">
                <ButtonLink href="/contact" variant="secondary">
                  Start Your Project
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
                    className="rounded-[2rem] bg-white/[0.09] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.12]"
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