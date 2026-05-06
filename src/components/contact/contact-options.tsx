import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const contactOptions = [
  {
    title: "General Enquiries",
    text: "For general questions about ToffeeStack, services, support or working together.",
    detail: "hello@toffeestack.com",
    href: "mailto:hello@toffeestack.com",
    icon: Mail,
  },
  {
    title: "Project Questions",
    text: "Have a question before starting a website or development project?",
    detail: "Ask before you start",
    href: "/new-project",
    icon: MessageCircle,
  },
  {
    title: "Location",
    text: "UK based, working with businesses remotely.",
    detail: "Remote support available",
    href: "/about",
    icon: MapPin,
  },
];

export function ContactOptions() {
  return (
    <Section className="bg-white pt-0">
      <Container>
        <div className="grid gap-5 md:grid-cols-3">
          {contactOptions.map((option) => {
            const Icon = option.icon;

            return (
              <Link
                key={option.title}
                href={option.href}
                className="group rounded-[2rem] border border-[#E8EDF7] bg-[#F8FAFD] p-7 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[var(--secondary)]">
                  <Icon className="h-7 w-7" />
                </div>

                <h2 className="mt-6 text-xl font-black text-[var(--heading)]">
                  {option.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                  {option.text}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)]">
                  {option.detail}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}