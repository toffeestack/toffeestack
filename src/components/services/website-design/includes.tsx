import {
  FileText,
  Layout,
  Mail,
  SearchCheck,
  Smartphone,
  Wrench,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const items = [
  {
    title: "Mobile-first design",
    text: "Your website is designed to work clearly across phones, tablets and desktops.",
    icon: Smartphone,
  },
  {
    title: "Clear page structure",
    text: "Pages are planned properly so visitors can understand what you do quickly.",
    icon: Layout,
  },
  {
    title: "Simple wording layout",
    text: "Content is arranged in a way that feels clear, professional and easy to follow.",
    icon: FileText,
  },
  {
    title: "Contact options",
    text: "Your website can include contact forms, enquiry buttons and clear call-to-actions.",
    icon: Mail,
  },
  {
    title: "SEO-ready setup",
    text: "Pages are structured with search engines in mind from the start.",
    icon: SearchCheck,
  },
  {
    title: "Managed after launch",
    text: "Your website is hosted, supported and available for ongoing updates.",
    icon: Wrench,
  },
];

export function WebsiteDesignIncludes() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--primary)]">
              What Is Included
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--heading)] sm:text-4xl lg:text-5xl">
              Everything needed for a professional business website.
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
              Your website is built around your business, your customers and the
              information people need before they contact you.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[#E8EDF7] bg-[#F8FAFD] p-7 shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[var(--secondary)]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-[var(--heading)]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}