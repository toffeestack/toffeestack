import { BlogHero } from "@/components/blog/blog-hero";
import { BlogList } from "@/components/blog/blog-list";

export const metadata = {
  title: "Blog | ToffeeStack Website Advice",
  description:
    "Helpful website advice, support tips and online business guidance from ToffeeStack.",
};

export default function BlogPage() {
  return (
    <main className="overflow-hidden bg-white">
      <BlogHero />
      <BlogList />
    </main>
  );
}