import { CheckCircle2, ClipboardList, PlugZap, Rocket, Settings2 } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const steps = [
  {
    title: "Review What You Use",
    text: "We look at the platforms, plugins, themes or tools you want your website to connect with.",
    icon: ClipboardList,
  },
  {
    title: "Plan The Connection",
    text: "We decide the safest and cleanest way to connect everything, whether that is through plugins, APIs or custom code.",
    icon: Settings2,
  },
  {
    title: "Build The Integration",
    text: "The integration is built and tested so your website works with the tools or data it needs.",
    icon: PlugZap,
  },
  {
    title: "Launch And Support",
    text: "Once working, we can support the setup and make future changes as your requirements grow.",
    icon: Rocket,
  },
];

export function IntegrationWorkflow() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="rounded-[2.5rem] bg-[#F8FAFD] p-7 lg:p-10">
            <CheckCircle2 className="h-8 w-8 text-[var(--secondary)]" />

            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-[var(--primary)]">
              Integration Process
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--heading)] sm:text-4xl lg:text-5xl">
              Connected properly, not patched together.
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
              Integrations need to be planned carefully so they are reliable,
              clear and easy to support later.
            </p>
          </div>

          <div className="grid gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="rounded-[2rem] border border-[#E8EDF7] bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
                >
                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[var(--secondary)]">
                      <Icon className="h-7 w-7" />
                    </div>

                    <div>
                      <p className="text-sm text-[var(--primary)]">
                        Step {index + 1}
                      </p>

                      <h3 className="mt-1 text-xl font-black text-[var(--heading)]">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}