import { ArrowRight } from "lucide-react";

import { ServiceChoiceForm } from "@/components/new-project/service-choice-form";
import { PageHero } from "@/components/ui/page-hero";

export const metadata = {
  title: "Start A Project | ToffeeStack",
  description:
    "Start a new website, development, site care or integration project with ToffeeStack.",
};

export default function NewProjectPage() {
  return (
    <main className="overflow-hidden bg-white">
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "New Project" }]}
        title="What are you looking to build?"
        description="Select the service that best matches your project. We’ll then ask a few simple questions to understand your business, goals and what you’re looking to build."
        actions={[
          {
            href: "mailto:hello@toffeestack.com",
            label: "Email Instead",
            variant: "secondary",
            icon: <ArrowRight />,
          },
        ]}
      />
      <ServiceChoiceForm />
    </main>
  );
}
