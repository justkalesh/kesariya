import { useState } from "react";
import { reviews, overallRating } from "../../data/reviews";
import ReviewCard from "../ui/ReviewCard";

export default function Reviews() {
  const [paused, setPaused] = useState(false);
  const loopedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section id="reviews" className="py-12 md:py-[var(--spacing-xl)] bg-surface-container-highest">
      <div className="max-w-[var(--spacing-container-max)] mx-auto">
        {/* Header */}
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

        {/* Infinite marquee — click to toggle pause */}
        <div className="overflow-hidden">
          <div
            onClick={() => setPaused((p) => !p)}
            className="flex gap-3 md:gap-[var(--spacing-md)] px-4 md:px-[var(--spacing-md)] pb-3 md:pb-[var(--spacing-md)] animate-marquee-slow cursor-pointer"
            style={{
              width: "max-content",
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {loopedReviews.map((review, i) => (
              <div key={`${review.id}-${i}`} className="min-w-[260px] md:min-w-[320px] max-w-[320px] md:max-w-[380px] shrink-0">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
