import { MessageCircle, PencilRuler, Rocket } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    title: "Understand The Business",
    text: "We take time to understand your business, customers, goals and what your website needs to achieve.",
    icon: MessageCircle,
  },
  {
    title: "Design Around Your Vision",
    text: "Your website is designed to reflect your values, services and the way you want your business to be seen.",
    icon: PencilRuler,
  },
  {
    title: "Support After Launch",
    text: "Once your website is live, ongoing support is available for updates, changes and future improvements.",
    icon: Rocket,
  },
];

export function AboutProcess() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How We Work"
          title="A personal process from start to finish."
          description="You get a clear process, direct communication and a website that is built around your business, not rushed from a template."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-[2rem] border border-[#E8EDF7] bg-[#F8FAFD] p-7 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[var(--secondary)]">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-black text-[var(--heading)]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}