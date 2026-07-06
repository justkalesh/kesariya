import { GOOGLE_MAPS_URL } from "../../data/siteData";
import { useNavigate, useLocation } from "react-router-dom";

const tags = [
  "Gorakhpur",
  "Nauka Vihar",
  "Ram Garh Tal",
  "Taramandal",
  "Fine Dining",
  "Budget Fine Dining",
  "Multi-Cuisine",
  "Mocktails",
  "Cocktails",
  "Drinks Lounge",
  "Banquet in GKP",
  "Wedding Venue",
  "Hotel",
  "Family Restaurant",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
  };

  return (
    <footer
      id="contact"
      className="bg-surface-container-highest border-t border-outline-variant w-full py-12 md:py-[var(--spacing-xl)] px-4 md:px-[var(--spacing-md)]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-[var(--spacing-lg)] max-w-[var(--spacing-container-max)] mx-auto">
        {/* Brand + Address */}
        <div className="flex flex-col gap-3 sm:col-span-2">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-[var(--font-display)] text-xl md:text-[24px] font-semibold leading-[1.4] text-primary"
          >
            Kesariya
          </a>
          <p className="font-[var(--font-body)] text-sm leading-relaxed text-on-surface-variant">
            Contact Us Now
          </p>

          {/* Location — opens Google Maps */}
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-on-surface-variant hover:text-primary transition-colors group cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px] mt-0.5 shrink-0 group-hover:text-primary">
              location_on
            </span>
            <p className="font-[var(--font-body)] text-sm leading-relaxed group-hover:underline">
              Gautam, Plot No. D, Buddha Vihar Colony,
              <br />
              Taramandal, Gorakhpur, UP 273017
            </p>
          </a>

          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-[20px] shrink-0">schedule</span>
            <p className="font-[var(--font-body)] text-sm">Open 24 Hours</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-[#1877F2] transition-colors" aria-label="Facebook">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-[#E4405F] transition-colors" aria-label="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-[var(--font-body)] text-sm font-bold tracking-[0.05em] text-primary">
            Links
          </h4>
          <a href="#restaurant" onClick={(e) => handleNavClick(e, "#restaurant")} className="font-[var(--font-body)] text-sm text-on-surface-variant hover:text-primary transition-colors">
            Restaurant
          </a>
          <a href="#banquet" onClick={(e) => handleNavClick(e, "#banquet")} className="font-[var(--font-body)] text-sm text-on-surface-variant hover:text-primary transition-colors">
            Banquet Hall
          </a>
          <a href="#rooms" onClick={(e) => handleNavClick(e, "#rooms")} className="font-[var(--font-body)] text-sm text-on-surface-variant hover:text-primary transition-colors">
            Hotel Rooms
          </a>
          <a href="#reviews" onClick={(e) => handleNavClick(e, "#reviews")} className="font-[var(--font-body)] text-sm text-on-surface-variant hover:text-primary transition-colors">
            Reviews
          </a>
        </div>

        {/* Tags */}
        <div className="flex flex-col gap-3 sm:col-span-2">
          <h4 className="font-[var(--font-body)] text-sm font-bold tracking-[0.05em] text-primary">
            Tags
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-surface-container text-on-surface-variant text-[11px] font-medium px-2.5 py-1 rounded-full border border-outline-variant hover:bg-primary-container hover:text-on-primary-container transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Row */}
      <div className="max-w-[var(--spacing-container-max)] mx-auto mt-10 md:mt-[var(--spacing-xl)] pt-4 border-t border-outline-variant/50 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="font-[var(--font-body)] text-xs md:text-sm text-on-surface-variant text-center md:text-left">
          © {currentYear} Kesariya Restaurant Banquet &amp; Hotel. All rights reserved.
        </p>
        <div className="flex gap-6 font-[var(--font-body)] text-xs md:text-sm">
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>

      {/* Credit Bar */}
      <div className="mt-4 pt-3 border-t border-outline-variant/30 text-center">
        <p className="font-[var(--font-body)] text-xs md:text-sm text-on-surface-variant">
          Made By{" "}
          <a
            href="https://buildingitlive.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary hover:text-secondary transition-colors"
          >
            Building It Live
          </a>
        </p>
      </div>
    </footer>
  );
}
