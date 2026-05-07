import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";

export function IntegrationHero() {
  return (
    <PageHero
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Integration" },
      ]}
      title="Website integrations that connect your tools, data and systems."
      description="From theme and plugin integrations to API-powered panels, ToffeeStack helps your website work with the tools your business already uses."
      actions={[
        {
          href: "/new-project",
          label: "Start Integration Request",
          icon: <ArrowRight />,
        },
        {
          href: "/contact",
          label: "Ask A Question",
          variant: "secondary",
          icon: <ArrowRight />,
        },
      ]}
    />
  );
}
