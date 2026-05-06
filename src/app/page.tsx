import { Hero } from "@/components/home/hero";
import { ServicesOverview } from "@/components/home/services-overview";
import { HowItWorks } from "@/components/home/how-it-works";
import { WhyToffeeStack } from "@/components/home/why-toffeestack";
import { ProofSection } from "@/components/home/proof-section";
import { TechStack } from "@/components/home/tech-stack";

export const metadata = {
  title: "ToffeeStack | Website Design, Development & Site Care",
  description:
    "Modern website design, custom development and ongoing Site Care for businesses that want a reliable online presence without the technical stress.",
};

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ServicesOverview />
      <HowItWorks />
      <WhyToffeeStack />
      <ProofSection />
      <TechStack />
    </main>
  );
}