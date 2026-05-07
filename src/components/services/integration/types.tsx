import {
  Blocks,
  DatabaseZap,
  FileCode2,
  FormInput,
  PlugZap,
  Workflow,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const integrations = [
  {
    title: "Theme Integration",
    text: "Need a theme adjusted, styled properly or connected into your website setup? We can help make it feel more custom and less generic.",
    icon: FileCode2,
  },
  {
    title: "Plugin Integration",
    text: "Plugins can add useful features, but they often need configuring properly so they work cleanly with your website.",
    icon: Blocks,
  },
  {
    title: "API Connections",
    text: "Connect your website to external platforms, data sources, payment tools, CRMs or custom systems using APIs.",
    icon: PlugZap,
  },
  {
    title: "Forms & Notifications",
    text: "Send enquiries, bookings and form submissions to the right place with email notifications and smarter workflows.",
    icon: FormInput,
  },
  {
    title: "Automation Workflows",
    text: "Reduce manual admin by connecting tools together and automating repeated steps inside your business.",
    icon: Workflow,
  },
  {
    title: "Data-Powered Panels",
    text: "Build dashboards and panels that pull live information from APIs, databases or connected platforms.",
    icon: DatabaseZap,
  },
];

export function IntegrationTypes() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--primary)]">
              What We Connect
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--heading)] sm:text-4xl lg:text-5xl">
              Integration work that makes your website more useful.
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
              Integrations help your website work with your tools, your data and
              your business processes instead of standing on its own.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {integrations.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[#E8EDF7] bg-[#F8FAFD] p-7 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
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