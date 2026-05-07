import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";

export function SiteCareHero() {
  return (
    <PageHero
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Site Care" },
      ]}
      title="Website, domain and email management."
      description="Site Care keeps your website hosted, managed, updated and supported so you are not left dealing with the technical side after launch."
      actions={[
        { href: "/new-project", label: "Start Site Care", icon: <ArrowRight /> },
        {
          href: "#pricing",
          label: "View Plan",
          variant: "secondary",
          icon: <ArrowRight />,
        },
      ]}
    />
  );
}
