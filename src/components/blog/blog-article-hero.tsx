import Image from "next/image";

import { PageHero } from "@/components/ui/page-hero";

type BlogArticleHeroProps = {
  category: string;
  title: string;
  author: string;
  updatedAt: string;
  readTime: string;
  image: string;
};

export function BlogArticleHero({
  category,
  title,
  author,
  updatedAt,
  readTime,
  image,
}: BlogArticleHeroProps) {
  return (
    <PageHero
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Article" },
      ]}
      title={title}
      align="center"
      backgroundImage={image}
      contentClassName="max-w-[56rem]"
      badge={
        <span className="rounded-full bg-white px-5 py-2 text-sm font-black text-black shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
          {category}
        </span>
      }
      meta={
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--muted-foreground)]">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border-4 border-white shadow-[0_10px_30px_rgba(15,23,42,0.12)]">
            <Image
              src="/adam.png"
              alt="Adam from ToffeeStack"
              fill
              className="object-cover"
            />
          </div>

          <span>
            By <span className="font-semibold text-[var(--primary)]">{author}</span>
          </span>

          <span>•</span>

          <span>Updated: {updatedAt}</span>

          <span>•</span>

          <span>{readTime}</span>
        </div>
      }
    />
  );
}
