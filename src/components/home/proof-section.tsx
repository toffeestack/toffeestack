import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const stats = [
  {
    number: "10+",
    label: "Years Building Websites",
  },
  {
    number: "100%",
    label: "Built In-House",
  },
  {
    number: "Future",
    label: "Ready To Grow Later",
    },
  {
    number: "Care",
    label: "Ongoing Support Available",
  },
];

export function ProofSection() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#050816] px-6 py-12 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] sm:px-8 lg:px-12 lg:py-16">
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[var(--primary)]/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[var(--secondary)]/30 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/60">
                Built Properly
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                A website that is made to last, not just launch.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                Every ToffeeStack website is coded in-house on a modern
                foundation, so it can be supported, improved and expanded as
                your business grows.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[2rem] bg-white/[0.08] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] backdrop-blur-md"
                >
                  <p className="text-4xl font-black tracking-tight text-white">
                    {stat.number}
                  </p>
                  <p className="mt-2 text-sm font-bold text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}