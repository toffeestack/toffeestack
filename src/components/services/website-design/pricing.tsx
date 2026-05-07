import { ArrowRight, CheckCircle2 } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const plans = [
  {
    name: "Landing Page",
    price: "£199",
    description:
      "A focused one-page website for businesses that need a clean online presence quickly.",
    features: [
      "One professional landing page",
      "Mobile-first responsive design",
      "Clear sections for your services",
      "Contact call-to-action",
      "SEO-ready page structure",
    ],
    href: "/new-project",
  },
  {
    name: "5 Page Design",
    price: "£499",
    description:
      "A complete small business website with the key pages needed to explain what you do.",
    features: [
      "Up to 5 designed pages",
      "Home, about, services and contact pages",
      "Mobile-first responsive design",
      "Clear website structure",
      "SEO-ready setup",
    ],
    href: "/new-project",
    featured: true,
  },
  {
    name: "Custom Request",
    price: "Custom",
    description:
      "For larger websites, extra features, booking systems, ecommerce or custom requirements.",
    features: [
      "Custom page requirements",
      "Advanced features available",
      "Booking or enquiry flows",
      "Future expansion options",
      "Quoted around your needs",
    ],
    href: "/new-project",
  },
];

const careFeatures = [
  "Website hosting included",
  "Managed website support",
  "@yourdomain.com email address",
  "Image and text updates",
  "Security and uptime care",
];

export function WebsiteDesignPricing() {
  return (
    <Section id="pricing" className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--primary)]">
            Website Pricing
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--heading)] sm:text-4xl lg:text-5xl">
            Simple website pricing with ongoing care included.
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
            Landing Page and 5 Page Design websites require Site Care at
            £39/month so your website stays hosted, managed and looked after
            properly.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col overflow-hidden rounded-[2rem] border p-7 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] ${
                plan.featured
                  ? "border-[var(--primary)] bg-white"
                  : "border-[#E8EDF7] bg-[#F8FAFD]"
              }`}
            >
              {plan.featured && (
                <div className="absolute right-5 top-5 rounded-full bg-[var(--secondary)] px-4 py-2 text-xs text-white">
                  Popular
                </div>
              )}

              <h3 className="text-2xl font-black text-[var(--heading)]">
                {plan.name}
              </h3>

              <p className="mt-5 text-5xl font-black tracking-tight text-[var(--heading)]">
                {plan.price}
              </p>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-foreground)]">
                {plan.description}
              </p>

              <div className="mt-7 space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-3 text-sm leading-6 text-[var(--muted-foreground)]"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--secondary)]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {plan.price !== "Custom" && (
                <div className="mt-7 rounded-[1.5rem] border border-[#E8EDF7] bg-white p-5">
                  <p className="text-sm text-[var(--heading)]">
                    Plus required Site Care
                  </p>
                  <p className="mt-2 text-2xl font-black text-[var(--heading)]">
                    £39/month
                  </p>

                  <div className="mt-4 space-y-3">
                    {careFeatures.map((feature) => (
                      <div
                        key={feature}
                        className="flex gap-3 text-sm leading-6 text-[var(--muted-foreground)]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-auto pt-8">
                <ButtonLink href={plan.href}>
                  Start Enquiry
                  <ArrowRight />
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}