import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

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
    <Section className="relative overflow-hidden pb-16 pt-10 text-center sm:pb-20 lg:pb-24 lg:pt-14">
      <div className="absolute inset-0 -z-20">
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-[#F8FAFD]/90" />
      <div className="absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(to_right,#305CDE_1px,transparent_1px),linear-gradient(to_bottom,#305CDE_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-[var(--primary)]/10 blur-3xl" />
      <div className="absolute right-0 top-20 -z-10 h-96 w-96 rounded-full bg-[var(--secondary)]/10 blur-3xl" />

      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="flex justify-center">
            <span className="rounded-full bg-white px-5 py-2 text-sm font-black text-black">
              {category}
            </span>
          </div>

          <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-black leading-[1] tracking-tight text-[var(--heading)] sm:text-5xl lg:text-[4rem]">
            {title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--muted-foreground)]">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border-4 border-white shadow-[0_10px_30px_rgba(15,23,42,0.12)]">
                <img
                src="/adam.png"
                alt="Adam from ToffeeStack"
                className="h-full w-full object-cover"
                />
            </div>

            <span>
                By{" "}
                <span className="font-semibold text-[var(--primary)]">
                {author}
                </span>
            </span>

            <span>•</span>

            <span>Updated: {updatedAt}</span>

            </div>
        </div>
      </Container>
    </Section>
  );
}