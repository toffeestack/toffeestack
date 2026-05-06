import { Award, Headphones, Rocket, ShieldCheck } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const reasons = [
  {
    title: "10+ Years Building Websites",
    text: "Experience building websites, fixing problems and understanding what businesses actually need online.",
    icon: Award,
  },
  {
    title: "Modern And Reliable Setup",
    text: "Your website is built using a modern setup designed to be fast, secure and easy to manage.",
    icon: ShieldCheck,
  },
  {
    title: "Ongoing Support Available",
    text: "After launch, we can help with updates, small changes, support and general website care.",
    icon: Headphones,
  },
  {
    title: "Built To Grow With Your Business",
    text: "Blogs, booking systems, online stores and new features can all be added later as your business grows.",
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
          title="A simpler way to get a professional website."
          description="You get more than just a website. You get someone who understands how to build it properly, keep it running and make it easy for your customers to use."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-[2rem] border border-[#E8EDF7] bg-[#F8FAFD] p-7 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[var(--primary)]">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-black text-[var(--heading)]">
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