import {
  ArrowRight,
  CheckCircle2,
  Code2,
  HeartHandshake,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const highlights = [
  "Built For You",
  "Managed For You",
  "Unlimited Support",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#F8FAFD]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#305CDE_1px,transparent_1px),linear-gradient(to_bottom,#305CDE_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute left-0 top-40 h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-[var(--secondary)]/10 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-bold text-[var(--primary)] shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <Code2 className="h-4 w-4" />
              Websites Without The Technical Stress
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight text-[var(--heading)] sm:text-6xl lg:text-[4.35rem]">
              Your business website, built and looked after properly.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted-foreground)]">
              ToffeeStack builds clean, professional websites for businesses
              that want to look better online without dealing with the technical
              side. We can also keep your website updated, secure and running
              smoothly for you.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact">
                Start Project
                <ArrowRight />
              </ButtonLink>

              <ButtonLink href="/services/site-care" variant="secondary">
                See Support Plans
                <ArrowRight />
              </ButtonLink>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-6">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm font-bold text-[var(--heading)]"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--secondary)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto max-w-[520px] rounded-[2rem] border border-white/60 bg-white/80 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.6rem] bg-[#050816] p-5 text-white">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#FF5C96]" />
                  <span className="h-3 w-3 rounded-full bg-[#FFD166]" />
                  <span className="h-3 w-3 rounded-full bg-[#4ADE80]" />
                </div>

                <div className="mt-7 space-y-5">
                  <p className="font-mono text-sm text-white/35">
                    {"// Your website, handled for you"}
                  </p>

                  <div className="rounded-3xl bg-white/[0.08] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                    <Layers3 className="h-5 w-5 text-[#7DD3FC]" />
                    <h3 className="mt-4 text-base font-black">
                      A Website That Looks Professional
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      Clear pages, modern design and simple wording that helps
                      people understand what you do.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-white/[0.08] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                    <ShieldCheck className="h-5 w-5 text-[#86EFAC]" />
                    <h3 className="mt-4 text-base font-black">
                      Ongoing Help After Launch
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      Updates, small changes, support and care so you are not
                      left trying to manage everything alone.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-white/[0.08] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                    <HeartHandshake className="h-5 w-5 text-[#F9A8D4]" />
                    <h3 className="mt-4 text-base font-black">
                      Plain English, No Jargon
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      We explain things clearly and keep the process simple from
                      start to finish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}