import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutProcess } from "@/components/about/about-process";
import { AboutCTA } from "@/components/about/about-cta";

export const metadata = {
  title: "About ToffeeStack | Websites Built With Long-Term Support",
  description:
    "Learn more about ToffeeStack, founded by Adam to help businesses build a stronger online presence with professional websites and ongoing support.",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      <AboutHero />
      <AboutStory />
      <AboutCTA />
      <AboutProcess />
    </main>
  );
}