import { WebsiteDesignHero } from "@/components/services/website-design/hero";
import { WebsiteDesignIncludes } from "@/components/services/website-design/includes";
import { WebsiteDesignProcess } from "@/components/services/website-design/process";
import { WebsiteDesignPricing } from "@/components/services/website-design/pricing";
import { WebsiteDesignCTA } from "@/components/services/website-design/cta";

export const metadata = {
  title: "Website Design Services | ToffeeStack",
  description:
    "Professional website design for businesses that want a clean, modern and trustworthy online presence without the technical stress.",
};

export default function WebsiteDesignPage() {
  return (
    <main className="bg-white">
      <WebsiteDesignHero />
      <WebsiteDesignPricing />
      <WebsiteDesignProcess />
      <WebsiteDesignIncludes />
      <WebsiteDesignCTA />
    </main>
  );
}