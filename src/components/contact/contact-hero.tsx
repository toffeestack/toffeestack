import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";

export function ContactHero() {
  return (
    <PageHero
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      title="Get in touch with ToffeeStack."
      description="Have a general question about websites, support or working with ToffeeStack? Send a message and we’ll point you in the right direction."
      actions={[
        {
          href: "mailto:hello@toffeestack.com",
          label: "Email ToffeeStack",
          icon: <ArrowRight />,
        },
        {
          href: "/new-project",
          label: "Start New Project",
          variant: "secondary",
          icon: <ArrowRight />,
        },
      ]}
    />
  );
}
