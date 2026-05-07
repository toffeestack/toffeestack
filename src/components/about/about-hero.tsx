import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";

export function AboutHero() {
  return (
    <PageHero
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      title="Built properly, supported properly and designed around your business."
      description="ToffeeStack helps businesses create a stronger online presence with professional websites, direct support and long-term website care."
      actions={[
        { href: "/contact", label: "Start A Project", icon: <ArrowRight /> },
        {
          href: "/#services",
          label: "View Services",
          variant: "secondary",
          icon: <ArrowRight />,
        },
      ]}
    />
  );
}
