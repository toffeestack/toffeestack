import {
  siBootstrap,
  siCloudflare,
  siCss,
  siDocker,
  siGithub,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siShopify,
  siTailwindcss,
  siTypescript,
  siWordpress,
  siWoocommerce,
} from "simple-icons";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const technologies = [
  { title: "Next.js", icon: siNextdotjs },
  { title: "React", icon: siReact },
  { title: "TypeScript", icon: siTypescript },
  { title: "JavaScript", icon: siJavascript },
  { title: "Tailwind CSS", icon: siTailwindcss },
  { title: "Bootstrap", icon: siBootstrap },
  { title: "WordPress", icon: siWordpress },
  { title: "WooCommerce", icon: siWoocommerce },
  { title: "Shopify", icon: siShopify },
  { title: "Node.js", icon: siNodedotjs },
  { title: "HTML5", icon: siHtml5 },
  { title: "CSS3", icon: siCss },
  { title: "GitHub", icon: siGithub },
  { title: "Docker", icon: siDocker },
  { title: "Cloudflare", icon: siCloudflare },
];

const scrollingItems = [...technologies, ...technologies];

export function TechStack() {
  return (
    <Section className="bg-white pt-0">
      <div className="py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              Modern Website Technology
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--heading)] sm:text-4xl lg:text-5xl">
              Built using reliable platforms and modern tools.
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
              We use trusted website platforms and modern development tools to
              create websites that are fast, secure and ready to grow with your
              business.
            </p>
          </div>
        </Container>

        <div className="tech-marquee mt-14 w-full overflow-hidden">
          <div className="tech-marquee-track flex w-max gap-5 px-5">
            {scrollingItems.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="flex shrink-0 items-center gap-4 rounded-full border border-[#E8EDF7] bg-white px-7 py-4 text-base font-bold text-[var(--heading)] shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="h-7 w-7 text-[var(--secondary)]"
                  fill="currentColor"
                  aria-label={item.title}
                >
                  <path d={item.icon.path} />
                </svg>

                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}