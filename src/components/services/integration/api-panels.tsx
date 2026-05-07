import { ArrowRight, CheckCircle2, Database, KeyRound, PanelsTopLeft } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const features = [
  "API-powered customer panels",
  "Live data from connected tools",
  "Admin dashboards and internal views",
  "Secure login areas where needed",
  "Custom forms and enquiry flows",
  "Email, SMS or system notifications",
];

export function IntegrationApiPanels() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--primary)] px-6 py-12 text-white shadow-[0_24px_80px_rgba(48,92,222,0.24)] sm:px-8 lg:px-12 lg:py-16">
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[var(--secondary)]/30 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                API Powered Builds
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Custom panels powered by your data and tools.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                If your business uses platforms with APIs, we can help connect
                that data into panels, dashboards, customer areas or internal
                tools.
              </p>

              <div className="mt-8">
                <ButtonLink href="/new-project" variant="secondary">
                  Start Integration Request
                  <ArrowRight />
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-5 text-[var(--heading)] shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
            <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex flex-col items-center justify-center rounded-[1.5rem] bg-[#F8FAFD] p-6 text-center">
                <PanelsTopLeft className="h-7 w-7 text-[var(--secondary)]" />

                <p className="mt-4 text-sm text-[var(--muted-foreground)]">
                    Panel
                </p>
                </div>

                <div className="flex flex-col items-center justify-center rounded-[1.5rem] bg-[#F8FAFD] p-6 text-center">
                <Database className="h-7 w-7 text-[var(--secondary)]" />

                <p className="mt-4 text-sm text-[var(--muted-foreground)]">
                    Data
                </p>
                </div>

                <div className="flex flex-col items-center justify-center rounded-[1.5rem] bg-[#F8FAFD] p-6 text-center">
                <KeyRound className="h-7 w-7 text-[var(--secondary)]" />

                <p className="mt-4 text-sm text-[var(--muted-foreground)]">
                    Access
                </p>
                </div>
            </div>

              <div className="mt-5 grid gap-3">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-3 rounded-2xl bg-[#F8FAFD] px-5 py-4 text-sm text-[var(--muted-foreground)]"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}