import { CheckCircle2, ClipboardList, Code2, LifeBuoy, Rocket } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const steps = [
  {
    title: "Understand Requirements",
    text: "We start by understanding what you need built, who will use it and what problem it needs to solve.",
    icon: ClipboardList,
  },
  {
    title: "Plan The Structure",
    text: "We map out the pages, data, features and user flow before development starts.",
    icon: CheckCircle2,
  },
  {
    title: "Build And Test",
    text: "The system is coded, tested and refined so it works properly across the right devices and use cases.",
    icon: Code2,
  },
  {
    title: "Launch And Support",
    text: "Once live, we can continue supporting, improving and expanding the system as your business grows.",
    icon: Rocket,
  },
];

export function DevelopmentProcess() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2.5rem] bg-[#F8FAFD] p-7 lg:p-10">
            <LifeBuoy className="h-8 w-8 text-[var(--secondary)]" />

            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-[var(--primary)]">
              Development Process
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--heading)] sm:text-4xl lg:text-5xl">
              Built carefully, not rushed together.
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
              Custom development needs proper planning. We keep the process
              clear so the finished system works the way your business needs it
              to.
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