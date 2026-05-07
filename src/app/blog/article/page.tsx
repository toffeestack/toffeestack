import { BlogArticleHero } from "@/components/blog/blog-article-hero";
import { BlogArticleContents } from "@/components/blog/blog-article-contents";

export const metadata = {
  title: "How A Professional Website Helps Your Business Look More Trusted",
  description:
    "Learn how professional web design helps businesses build trust online.",
};

export default function BlogArticlePage() {
  return (
    <main className="overflow-hidden bg-white">
      <BlogArticleHero
        category="Website Design"
        title="How A Professional Website Helps Your Business Look More Trusted"
        author="Adam"
        updatedAt="May 7, 2026"
        readTime="5 min read"
        image="/blog/website-trust.jpg"
      />

      <BlogArticleContents category="Website Design" />
    </main>
  );
}