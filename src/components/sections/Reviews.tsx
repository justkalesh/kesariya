import { useRef, useEffect } from "react";
import { reviews, overallRating } from "../../data/reviews";
import ReviewCard from "../ui/ReviewCard";

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const scrollSpeed = 0.4;

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

  const loopedReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-12 md:py-[var(--spacing-xl)] bg-surface-container-highest">
      <div className="max-w-[var(--spacing-container-max)] mx-auto">
        {/* Header - Has Padding */}
        <div className="px-4 md:px-[var(--spacing-md)] flex flex-col items-center text-center mb-6 md:mb-[var(--spacing-lg)] gap-2 md:gap-[var(--spacing-sm)]">
          <h2 className="font-[var(--font-display)] text-xl md:text-[32px] font-semibold leading-[1.3] text-primary">
            Guest Experiences
          </h2>
          <div className="inline-flex items-center gap-1.5 bg-surface text-on-surface px-3 md:px-[var(--spacing-md)] py-1.5 md:py-[var(--spacing-sm)] rounded-full shadow-sm text-sm">
            <span className="material-symbols-outlined text-primary-container material-filled text-[18px]">
              star
            </span>
            <span className="font-[var(--font-body)] font-bold tracking-[0.05em]">
              {overallRating.score}/{overallRating.maxScore}
            </span>
            <span className="font-[var(--font-body)] text-on-surface-variant">
              on {overallRating.platform}
            </span>
          </div>
        </div>

        {/* Auto-scrolling Review Cards - Full Width Bleed */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-3 md:gap-[var(--spacing-md)] px-4 md:px-[var(--spacing-md)] pb-3 md:pb-[var(--spacing-md)] hide-scrollbar"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {loopedReviews.map((review, i) => (
            <div key={`${review.id}-${i}`} className="min-w-[260px] md:min-w-[320px] max-w-[320px] md:max-w-[380px] shrink-0">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
