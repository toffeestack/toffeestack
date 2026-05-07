import { SiteCareHero } from "@/components/services/site-care/hero";
import { SiteCareIncludes } from "@/components/services/site-care/includes";
import { SiteCareProcess } from "@/components/services/site-care/process";
import { SiteCarePricing } from "@/components/services/site-care/pricing";
import { SiteCareCTA } from "@/components/services/site-care/cta";

export const metadata = {
  title: "Site Care Plans | Website Hosting, Support & Maintenance",
  description:
    "ToffeeStack Site Care keeps your website hosted, managed, updated and supported from £39 per month.",
};

export default function SiteCarePage() {
  return (
    <main className="bg-white">
      <SiteCareHero />
      <SiteCarePricing />
      <SiteCareProcess />
      <SiteCareIncludes />
      <SiteCareCTA />
    </main>
  );
}