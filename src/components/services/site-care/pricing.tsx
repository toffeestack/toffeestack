import { ArrowRight, CheckCircle2 } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const features = [
  "Domain registration",
  "Website hosting included",
  "Managed website support",
  "@yourdomain.com email address",
  "Image and text updates",
  "Security and uptime care",
];

export function SiteCarePricing() {
  return (
    <Section className="bg-white">
      <div id="pricing">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--primary)]">
              Site Care Pricing
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--heading)] sm:text-4xl lg:text-5xl">
              One simple monthly plan to keep your website looked after.
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
              Site Care is £39/month and includes the essentials your business
              needs to keep your website online, supported and up to date.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-3xl">
            <div className="relative flex flex-col overflow-hidden rounded-[2rem] border border-[var(--primary)] bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="absolute right-5 top-5 rounded-full bg-[var(--secondary)] px-4 py-2 text-xs text-white">
                Monthly Plan
              </div>

              <h3 className="text-2xl font-black text-[var(--heading)]">
                Site Care
              </h3>

              <p className="mt-5 text-5xl font-black tracking-tight text-[var(--heading)]">
                £39
                <span className="text-base font-normal text-[var(--muted-foreground)]">
                  {" "}
                  / month
                </span>
              </p>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-foreground)]">
                A managed website care plan for businesses that want their
                website hosted, supported and kept up to date without managing
                everything themselves.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-3 text-sm leading-6 text-[var(--muted-foreground)]"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--secondary)]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-[1.5rem] border border-[#E8EDF7] bg-[#F8FAFD] p-5">
                <p className="text-sm text-[var(--heading)]">
                  Additional email addresses
                </p>

                <p className="mt-2 text-2xl font-black text-[var(--heading)]">
                  £6/month
                </p>

                <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                  Per additional mailbox, ideal for extra team members or
                  addresses such as sales@, info@ or support@.
                </p>
              </div>

              <div className="mt-8">
                <ButtonLink href="/new-project">
                  Start Site Care
                  <ArrowRight />
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}