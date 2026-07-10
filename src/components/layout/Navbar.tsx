import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navLinks, images } from "../../data/siteData";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
  const activeId = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);

    // If it's a menu link
    if (href === "/menu") {
      navigate("/menu");
      window.scrollTo(0, 0);
      return;
    }

    // It's a hash link
    const id = href.replace("#", "");
    
    if (location.pathname !== "/") {
      // If we are on another page, go home first, then scroll
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Already on home, just scroll
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 border-b transition-all duration-300 px-[var(--spacing-md)] py-[var(--spacing-sm)] ${
          scrolled
            ? "bg-surface/95 backdrop-blur-md border-outline-variant shadow-sm"
            : "bg-surface/80 backdrop-blur-sm border-transparent"
        }`}
      >
        <div className="flex justify-between items-center max-w-[var(--spacing-container-max)] mx-auto">
          {/* Logo — Image replaces text */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center"
          >
            <img
              src={images.logoNavbar}
              alt="Kesariya — Stay · Celebrate · Dine"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-[var(--spacing-md)] font-[var(--font-body)] text-sm font-semibold tracking-[0.05em] items-center">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              // Active state only applies on home page
              const isActive = location.pathname === "/" && activeId === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`cursor-pointer transition-all duration-300 active:scale-95 pb-1 ${
                    isActive
                      ? "text-primary border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-primary border-b-2 border-transparent"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            {/* Added Menu Link */}
            <a
              href="/menu"
              onClick={(e) => handleNavClick(e, "/menu")}
              className={`cursor-pointer transition-all duration-300 active:scale-95 pb-1 ${
                location.pathname === "/menu"
                  ? "text-primary border-b-2 border-primary"
                  : "text-on-surface-variant hover:text-primary border-b-2 border-transparent"
              }`}
            >
              Menu
            </a>
          </div>

          {/* Desktop CTA — "Contact Now" */}
          <a
            href="tel:+918881013100"
            className="hidden md:inline-flex bg-primary-container text-on-primary-container px-[var(--spacing-md)] py-[var(--spacing-sm)] rounded-full font-[var(--font-body)] text-sm font-semibold tracking-[0.05em] hover:bg-secondary-container transition-colors shadow-sm items-center gap-[var(--spacing-xs)] active:scale-95"
          >
            Contact Now
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-primary p-2 rounded-lg hover:bg-surface-container transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileOpen}
        activeId={location.pathname === "/" ? activeId : ""}
        onNavClick={handleNavClick}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
