import { useState, useEffect } from "react";

/**
 * Tracks which section is currently in the viewport and returns its ID.
 * Used for highlighting the active nav link.
 */
export function useScrollSpy(sectionIds: string[], offset = 100): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset;

      // Walk sections in reverse to find the last one that's scrolled past
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveId(sectionIds[i]);
          return;
        }
      }
      // Default to first if nothing matched
      setActiveId(sectionIds[0]);
    };

    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
