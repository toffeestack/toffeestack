import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";

export const metadata = {
  title: "Portfolio | ToffeeStack",
  description:
    "ToffeeStack is currently preparing its latest website design and development portfolio work.",
};

export default function PortfolioPage() {
  return (
    <main className="overflow-hidden bg-white">
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
        title="Our portfolio is coming soon."
        description="We are currently working on releasing our latest portfolio pieces. Soon you will be able to view recent ToffeeStack website design, development and support projects here."
        actions={[
          { href: "/new-project", label: "Start A Project", icon: <ArrowRight /> },
          {
            href: "/#services",
            label: "View Services",
            variant: "secondary",
            icon: <ArrowRight />,
          },
        ]}
      />
    </main>
  );
}
