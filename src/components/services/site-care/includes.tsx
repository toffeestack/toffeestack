import {
  FileImage,
  Globe2,
  Mail,
  RefreshCw,
  Server,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const items = [
  {
    title: "Domain registration",
    text: "Your domain is the address people use to visit your website. We can help manage this as part of your setup.",
    icon: Globe2,
  },
  {
    title: "Website hosting",
    text: "Hosting keeps your website online and available for visitors. Without hosting, your website cannot be accessed.",
    icon: Server,
  },
  {
    title: "Managed support",
    text: "You get help when something needs updating, checking or explaining, without dealing with technical settings.",
    icon: ShieldCheck,
  },
  {
    title: "Custom email address",
    text: "A professional @yourdomain.com email address helps your business look more trusted and established.",
    icon: Mail,
  },
  {
    title: "Image and text updates",
    text: "Minor image and wording changes can be requested regularly to keep your website accurate and current.",
    icon: FileImage,
  },
  {
    title: "Security and uptime care",
    text: "Your website is looked after to help keep it secure, stable and available for your customers.",
    icon: RefreshCw,
  },
];

export function SiteCareIncludes() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--primary)]">
              What Is Included
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--heading)] sm:text-4xl lg:text-5xl">
              Everything your website needs after launch.
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
              Site Care is built for businesses that want their website managed
              properly without having to understand hosting, domains, updates or
              technical maintenance.
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