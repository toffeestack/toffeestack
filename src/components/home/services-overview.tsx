import Link from "next/link";
import {
  ArrowRight,
  Code2,
  MonitorSmartphone,
  PlugZap,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const services = [
  {
    title: "Website Design",
    text: "Professional business websites designed to help you look trusted online and make a strong first impression.",
    href: "/services/website-design",
    icon: MonitorSmartphone,
  },
  {
    title: "Site Care",
    text: "Ongoing updates, support, security checks and small changes after your website goes live.",
    href: "/services/site-care",
    icon: ShieldCheck,
  },
  {
    title: "Custom Development",
    text: "Booking systems, portals, dashboards and custom features built around how your business works.",
    href: "/services/development",
    icon: Code2,
  },
  {
    title: "Integrations",
    text: "Connect forms, emails and software together to reduce manual work and save time.",
    href: "/services/integration",
    icon: PlugZap,
  },
];

export function ServicesOverview() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="What We Help With"
              title="Website support that keeps things simple."
              description="Whether you need a brand new website or help managing an existing one, everything is explained clearly and handled properly from start to finish."
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-[2rem] border border-[#E8EDF7] bg-[#F8FAFD] p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D8E2F2] hover:bg-white hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[var(--secondary)]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-black leading-tight text-[var(--heading)]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                    {service.text}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)]">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}