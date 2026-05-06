import { Award, Headphones, Rocket, ShieldCheck } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const reasons = [
  {
    title: "10+ Years Building Websites",
    text: "Years of experience building websites and helping businesses improve their online presence.",
    icon: Award,
  },
  {
    title: "Modern And Reliable Setup",
    text: "Built using modern technology designed to keep your website fast, secure and reliable.",
    icon: ShieldCheck,
  },
  {
    title: "Ongoing Support Available",
    text: "Support is available after launch for updates, changes, fixes and general website help.",
    icon: Headphones,
  },
  {
    title: "Built To Grow Later",
    text: "Blogs, booking systems, online stores and extra features can all be added in future.",
    icon: Rocket,
  },
];

export function WhyToffeeStack() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Why Work With ToffeeStack"
          title="Professional websites with long-term support."
          description="ToffeeStack focuses on building websites properly, explaining things clearly and providing ongoing support when businesses need it."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-[2rem] border border-[#E8EDF7] bg-[#F8FAFD] p-7 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D8E2F2] hover:bg-white hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[var(--secondary)]">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-black leading-tight text-[var(--heading)]">
                  {reason.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                  {reason.text}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}