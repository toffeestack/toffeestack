import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";

export function DevelopmentHero() {
  return (
    <PageHero
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Development" },
      ]}
      title="Custom development for websites, systems and business tools."
      description="Full stack development for businesses that need custom features, dashboards, client portals, booking systems or tools built around how they work."
      actions={[
        {
          href: "/new-project",
          label: "Start Development Request",
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
