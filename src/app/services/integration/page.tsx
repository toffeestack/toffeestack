import { IntegrationHero } from "@/components/services/integration/hero";
import { IntegrationTypes } from "@/components/services/integration/types";
import { IntegrationApiPanels } from "@/components/services/integration/api-panels";
import { IntegrationWorkflow } from "@/components/services/integration/workflow";
import { IntegrationCTA } from "@/components/services/integration/cta";

export const metadata = {
  title: "Website Integration Services | ToffeeStack",
  description:
    "Website integration services for themes, plugins, APIs, forms, dashboards and connected business tools.",
};

export default function IntegrationPage() {
  return (
    <main className="bg-white">
      <IntegrationHero />
      <IntegrationTypes />
      <IntegrationApiPanels />
      <IntegrationWorkflow />
      <IntegrationCTA />
    </main>
  );
}