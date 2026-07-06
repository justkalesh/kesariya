import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "filled" | "outlined" | "tonal";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "filled",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-5 md:px-[var(--spacing-lg)] py-2.5 md:py-[var(--spacing-sm)] rounded-full font-[var(--font-body)] text-sm font-semibold tracking-[0.05em] leading-[1.2] transition-all duration-300 cursor-pointer active:scale-95 select-none";

  const variants = {
    filled:
      "bg-primary-container text-on-primary-container hover:bg-secondary-container shadow-sm hover:shadow-md",
    outlined:
      "border border-primary text-primary hover:bg-primary-container hover:text-on-primary-container",
    tonal:
      "bg-primary text-on-primary hover:bg-secondary",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
