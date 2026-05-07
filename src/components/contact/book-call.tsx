import { BookCallModal } from "@/components/contact/book-call-modal";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function BookCallCTA() {
  return (
    <Section className="bg-white pt-10">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#050816] px-6 py-12 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] sm:px-8 lg:px-12 lg:py-16">
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[var(--primary)]/35 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[var(--secondary)]/25 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/60">
                Prefer To Talk?
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Pick a time that works for you.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                Book a call to discuss your website, support needs or project
                ideas directly with ToffeeStack.
              </p>
            </div>

            <div className="shrink-0">
              <BookCallModal />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
