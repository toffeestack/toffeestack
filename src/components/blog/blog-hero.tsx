import { PageHero } from "@/components/ui/page-hero";

export function BlogHero() {
  return (
    <PageHero
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      title="Website advice made simple."
      description="Helpful articles for business owners who want better websites, clearer online presence and less technical confusion."
    />
  );
}
