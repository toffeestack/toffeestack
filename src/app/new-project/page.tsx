import { ServiceChoiceForm } from "@/components/new-project/service-choice-form";

export const metadata = {
  title: "Start A Project | ToffeeStack",
  description:
    "Start a new website, development, site care or integration project with ToffeeStack.",
};

export default function NewProjectPage() {
  return (
    <main className="overflow-hidden bg-white">
      <ServiceChoiceForm />
    </main>
  );
}