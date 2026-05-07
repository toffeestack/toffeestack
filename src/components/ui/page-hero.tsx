import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";

import { ButtonLink, buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeroAction = {
  href: string;
  label: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
};

type PageHeroProps = {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  description?: string;
  badge?: ReactNode;
  meta?: ReactNode;
  actions?: PageHeroAction[];
  align?: "left" | "center";
  backgroundImage?: string;
  className?: string;
  contentClassName?: string;
};

export function PageHero({
  breadcrumbs,
  title,
  description,
  badge,
  meta,
  actions,
  align = "left",
  backgroundImage,
  className,
  contentClassName,
}: PageHeroProps) {
  const isCentered = align === "center";

  return (
    <Section
      className={cn(
        "relative overflow-hidden pt-10 pb-10 sm:pb-12 lg:pt-14 lg:pb-14",
        className
      )}
    >
      {backgroundImage && (
        <div className="absolute inset-0 -z-20">
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      <div
        className={cn(
          "absolute inset-0 -z-10 bg-[#F8FAFD]",
          backgroundImage && "bg-[#F8FAFD]/90"
        )}
      />
      <div className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(to_right,#305CDE_1px,transparent_1px),linear-gradient(to_bottom,#305CDE_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute left-0 top-28 -z-10 h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-3xl" />
      <div className="absolute right-0 top-16 -z-10 h-80 w-80 rounded-full bg-[var(--secondary)]/10 blur-3xl" />

      <Container>
        <div
          className={cn(
            "max-w-4xl",
            isCentered && "mx-auto text-center",
            contentClassName
          )}
        >
          <nav
            aria-label="Breadcrumb"
            className={cn(
              "flex flex-wrap items-center gap-2 text-sm font-bold",
              isCentered && "justify-center"
            )}
          >
            {breadcrumbs.map((item, index) => (
              <div key={`${item.label}-${index}`} className="flex items-center gap-2">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-[var(--muted-foreground)] transition hover:text-[var(--primary)]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[var(--heading)]">{item.label}</span>
                )}

                {index < breadcrumbs.length - 1 && (
                  <span className="text-[var(--primary)]">/</span>
                )}
              </div>
            ))}
          </nav>

          {badge && (
            <div className={cn("mt-6", isCentered && "flex justify-center")}>
              {badge}
            </div>
          )}

          <h1
            className={cn(
              "mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[var(--heading)] sm:text-6xl lg:text-[4.5rem]",
              isCentered && "mx-auto"
            )}
          >
            {title}
          </h1>

          {description && (
            <p
              className={cn(
                "mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]",
                isCentered && "mx-auto"
              )}
            >
              {description}
            </p>
          )}

          {meta && <div className="mt-6">{meta}</div>}

          {actions && actions.length > 0 && (
            <div
              className={cn(
                "mt-8 flex flex-col gap-4 sm:flex-row",
                isCentered && "justify-center"
              )}
            >
              {actions.map((action) => (
                <ButtonLink
                  key={`${action.href}-${action.label}`}
                  href={action.href}
                  variant={action.variant}
                >
                  {action.label}
                  {action.icon}
                </ButtonLink>
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
