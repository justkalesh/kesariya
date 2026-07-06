import type { Dish } from "../../data/dishes";

interface DishCardProps {
  dish: Dish;
}

export default function DishCard({ dish }: DishCardProps) {
  return (
    <div className="min-w-[220px] md:min-w-[280px] snap-center bg-surface-container-lowest rounded-lg shadow-sm border border-outline-variant p-2 md:p-[var(--spacing-sm)] flex flex-col gap-2 md:gap-[var(--spacing-sm)] hover:shadow-md transition-shadow duration-300 group">
      <div className="overflow-hidden rounded-md">
        <img
          src={dish.image}
          alt={dish.alt}
          loading="lazy"
          decoding="async"
          width={280}
          height={192}
          className="w-full h-36 md:h-48 object-cover rounded-md group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <h4 className="font-[var(--font-display)] text-base md:text-[24px] font-semibold leading-[1.4] text-on-surface">
        {dish.name}
      </h4>
    </div>
  );
}
