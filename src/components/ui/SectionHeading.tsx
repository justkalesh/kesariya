interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "text-center" : "text-left"} mb-8 md:mb-[var(--spacing-xl)] ${className}`}
    >
      <h2 className="font-[var(--font-display)] text-2xl md:text-[clamp(28px,5vw,40px)] font-bold leading-[1.2] text-primary mb-2 md:mb-[var(--spacing-sm)]">
        {title}
      </h2>
      {subtitle && (
        <p className="font-[var(--font-body)] text-sm md:text-base leading-relaxed text-on-surface-variant mx-auto" style={{ maxWidth: "640px" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
