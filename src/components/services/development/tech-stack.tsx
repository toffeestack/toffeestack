import {
  siNextdotjs,
  siReact,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siNodedotjs,
  siPostgresql,
  siWordpress,
  siWoocommerce,
  siShopify,
  siGithub,
  siDocker,
} from "simple-icons";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const technologies = [
  { title: "Next.js", icon: siNextdotjs },
  { title: "React", icon: siReact },
  { title: "TypeScript", icon: siTypescript },
  { title: "JavaScript", icon: siJavascript },
  { title: "Tailwind CSS", icon: siTailwindcss },
  { title: "Node.js", icon: siNodedotjs },
  { title: "PostgreSQL", icon: siPostgresql },
  { title: "WordPress", icon: siWordpress },
  { title: "WooCommerce", icon: siWoocommerce },
  { title: "Shopify", icon: siShopify },
  { title: "GitHub", icon: siGithub },
  { title: "Docker", icon: siDocker },
];

export function DevelopmentTechStack() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--secondary)] px-6 py-12 text-white shadow-[0_24px_80px_rgba(253,60,124,0.24)] sm:px-8 lg:px-12 lg:py-16">
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />

          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />

          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                Development Stack
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Built with modern, reliable technology.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                We use trusted coding languages, frameworks and platforms to
                build modern websites, dashboards, systems and custom business
                tools.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-[1.5rem] bg-white/10 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)] backdrop-blur-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                      aria-label={item.title}
                    >
                      <path d={item.icon.path} />
                    </svg>
                  </div>

                  <span className="text-sm text-white">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}