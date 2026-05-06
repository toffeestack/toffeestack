import {
  BadgeCheck,
  CalendarDays,
  Headphones,
  UserRound,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const stats = [
  {
    title: "10+ Years Experience",
    text: "Building websites for businesses across different industries.",
    icon: BadgeCheck,
  },
  {
    title: "Founded In 2026",
    text: "Created to help businesses build a stronger online presence.",
    icon: CalendarDays,
  },
  {
    title: "Direct Contact",
    text: "Speak directly with the person building and managing your website.",
    icon: UserRound,
  },
  {
    title: "Ongoing Website Care",
    text: "Long-term support, updates and improvements after launch.",
    icon: Headphones,
  },
];

export function AboutStory() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F8FAFD] px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#305CDE_1px,transparent_1px),linear-gradient(to_bottom,#305CDE_1px,transparent_1px)] [background-size:44px_44px]" />
          <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[var(--primary)]/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[var(--secondary)]/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                The Story Behind ToffeeStack
              </p>

              <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-tight text-[var(--heading)] sm:text-5xl">
                Built from years of real website experience.
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-[var(--muted-foreground)]">
                <p>
                  After more than 10 years building websites, Adam founded
                  ToffeeStack in 2026 to help businesses get noticed online with
                  websites that look professional, work properly and are easy to
                  look after.
                </p>

                <p>
                  ToffeeStack was created for businesses that want a reliable
                  website partner without being passed around between different
                  people who do not understand their website.
                </p>

                <p>
                  Every project starts with understanding the business properly,
                  including its values, goals, customers and long-term vision.
                  That understanding is then reflected in the design, structure
                  and wording of the website.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.title}
                    className="rounded-[2rem] border border-[#E8EDF7] bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[var(--secondary)]">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mt-6 text-xl font-black text-[var(--heading)]">
                      {stat.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                      {stat.text}
                    </p>
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