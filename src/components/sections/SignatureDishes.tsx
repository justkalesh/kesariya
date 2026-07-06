import { useRef, useEffect } from "react";
import { dishes } from "../../data/dishes";
import DishCard from "../ui/DishCard";
import Button from "../ui/Button";

export default function SignatureDishes() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const scrollSpeed = 0.5;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let paused = false;

    const animate = () => {
      if (!paused && el) {
        el.scrollLeft += scrollSpeed;
        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const pause = () => { paused = true; };
    const resume = () => { paused = false; };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume);

    return () => {
      cancelAnimationFrame(animationRef.current);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
    };
  }, []);

  const loopedDishes = [...dishes, ...dishes];

  return (
    <div className="mb-10 md:mb-[var(--spacing-xl)]">
      <h3 className="font-[var(--font-display)] text-xl md:text-[32px] font-semibold leading-[1.3] text-primary mb-4 md:mb-[var(--spacing-md)] px-4 md:px-[var(--spacing-md)]">
        Signature Dishes
      </h3>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-3 md:gap-[var(--spacing-md)] px-4 md:px-[var(--spacing-md)] pb-3 md:pb-[var(--spacing-md)] hide-scrollbar"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {loopedDishes.map((dish, i) => (
          <DishCard key={`${dish.id}-${i}`} dish={dish} />
        ))}
      </div>

      <div className="mt-4 md:mt-[var(--spacing-md)] text-center px-4 md:px-[var(--spacing-md)]">
        <Button variant="outlined" className="text-sm">View Full Menu</Button>
      </div>
    </div>
  );
}
