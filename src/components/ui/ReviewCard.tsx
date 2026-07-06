import type { Review } from "../../data/reviews";

interface ReviewCardProps {
  review: Review;
}

function StarRating({ rating }: { rating: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <span key={i} className="material-symbols-outlined text-primary-container material-filled text-[18px] md:text-[24px]">
          star
        </span>
      );
    } else if (i - 0.5 <= rating) {
      stars.push(
        <span key={i} className="material-symbols-outlined text-primary-container text-[18px] md:text-[24px]">
          star_half
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="material-symbols-outlined text-outline-variant text-[18px] md:text-[24px]">
          star
        </span>
      );
    }
  }
  return <div className="flex mb-1">{stars}</div>;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-surface p-4 md:p-[var(--spacing-md)] rounded-xl shadow-sm border border-outline-variant flex flex-col gap-2 hover:shadow-md transition-shadow duration-300 h-full">
      <StarRating rating={review.rating} />
      <p className="font-[var(--font-body)] text-sm leading-relaxed text-on-surface-variant italic flex-grow">
        "{review.text}"
      </p>
      <div className="font-[var(--font-body)] text-xs md:text-sm font-semibold tracking-[0.05em] text-primary mt-2 border-t border-outline-variant pt-2">
        {review.name}
      </div>
    </div>
  );
}
