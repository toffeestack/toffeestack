import { DevelopmentHero } from "@/components/services/development/hero";
import { DevelopmentServices } from "@/components/services/development/services";
import { DevelopmentTechStack } from "@/components/services/development/tech-stack";
import { DevelopmentProcess } from "@/components/services/development/process";
import { DevelopmentCTA } from "@/components/services/development/cta";

export const metadata = {
  title: "Full Stack Development Services | ToffeeStack",
  description:
    "Custom full stack development services for businesses that need portals, dashboards, booking systems, integrations and bespoke website features.",
};

export default function DevelopmentPage() {
  return (
    <main className="bg-white">
      <DevelopmentHero />
      <DevelopmentServices />
      <DevelopmentTechStack />
      <DevelopmentProcess />
      <DevelopmentCTA />
    </main>
  );
}