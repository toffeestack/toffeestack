import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";

export function WebsiteDesignHero() {
  return (
    <PageHero
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Website Design" },
      ]}
      title="Professional websites built to help your business look trusted."
      description="Clean, modern website design for businesses that want a stronger online presence without dealing with the technical side."
      actions={[
        { href: "/new-project", label: "Start Your Website", icon: <ArrowRight /> },
        {
          href: "#pricing",
          label: "View Pricing",
          variant: "secondary",
          icon: <ArrowRight />,
        },
      ]}
    />
  );
}
