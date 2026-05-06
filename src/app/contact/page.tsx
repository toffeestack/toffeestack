import { BookCallCTA } from "@/components/contact/book-call";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactOptions } from "@/components/contact/contact-options";

export const metadata = {
  title: "Contact ToffeeStack | General Website Enquiries",
  description:
    "Contact ToffeeStack for general questions about websites, support, site care, development or working together.",
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white">
      <ContactHero />
      <ContactOptions />
      <BookCallCTA />
    </main>
  );
}