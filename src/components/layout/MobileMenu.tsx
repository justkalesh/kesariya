import { navLinks, images } from "../../data/siteData";

interface MobileMenuProps {
  isOpen: boolean;
  activeId: string;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  activeId,
  onNavClick,
  onClose,
}: MobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-surface z-50 shadow-2xl transition-transform duration-300 ease-out md:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-[var(--spacing-md)] py-[var(--spacing-sm)] border-b border-outline-variant">
          <img
            src={images.logoNavbar}
            alt="Kesariya"
            className="h-8 w-auto object-contain"
          />
          <button
            onClick={onClose}
            className="text-on-surface-variant p-2 rounded-lg hover:bg-surface-container transition-colors"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-[var(--spacing-md)] py-[var(--spacing-lg)] flex flex-col gap-1">
          {navLinks.map((link, i) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => onNavClick(e, link.href)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary-container text-on-primary-container"
                    : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                }`}
                style={{
                  animationDelay: isOpen ? `${i * 50}ms` : "0ms",
                }}
              >
                {link.label}
              </a>
            );
          })}
          {/* Menu Link */}
          <a
            href="/menu"
            onClick={(e) => onNavClick(e, "/menu")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
              window.location.pathname === "/menu"
                ? "bg-primary-container text-on-primary-container"
                : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
            }`}
          >
            Menu
          </a>
        </nav>

        {/* CTA */}
        <div className="px-[var(--spacing-md)] pb-[var(--spacing-lg)]">
          <a
            href="tel:+918881013100"
            className="flex items-center justify-center gap-2 w-full bg-primary-container text-on-primary-container px-[var(--spacing-md)] py-3 rounded-full font-[var(--font-body)] text-sm font-semibold tracking-[0.05em] hover:bg-secondary-container transition-colors shadow-sm"
          >
            Contact Now
          </a>
        </div>
      </div>
    </>
  );
}
