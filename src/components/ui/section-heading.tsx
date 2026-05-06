type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      } ${className}`}
    >
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--heading)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}