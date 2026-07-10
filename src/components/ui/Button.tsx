import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type ButtonProps = {
  children: ReactNode;
  variant?: "filled" | "outlined" | "tonal";
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
  children,
  variant = "filled",
  href,
  onClick,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href) return;

    if (href.startsWith("/") || href.startsWith("#")) {
      // Prevent default anchor behavior for internal links to keep URL clean
      e.preventDefault();

      if (href.startsWith("/")) {
        navigate(href);
        window.scrollTo(0, 0);
        return;
      }

      if (href.startsWith("#")) {
        const id = href.replace("#", "");
        if (location.pathname !== "/") {
          navigate("/");
          setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        } else {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    // If it's an external link (like tel:, mailto:, https:), do not prevent default.
  };

  if (href) {
    return (
      <a href={href} onClick={handleClick} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
