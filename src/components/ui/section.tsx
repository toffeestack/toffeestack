import type { ComponentPropsWithoutRef, ReactNode } from "react";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
};

export function Section({ children, className = "", ...props }: SectionProps) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`} {...props}>
      {children}
    </section>
  );
}
