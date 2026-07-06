import { dishes } from "../../data/dishes";
import DishCard from "../ui/DishCard";
import Button from "../ui/Button";

export default function SignatureDishes() {
  // Triple the dishes to ensure seamless wrapping at all viewport widths
  const loopedDishes = [...dishes, ...dishes, ...dishes];

  return (
    <div className="mb-10 md:mb-[var(--spacing-xl)]">
      <h3 className="font-[var(--font-display)] text-xl md:text-[32px] font-semibold leading-[1.3] text-primary mb-4 md:mb-[var(--spacing-md)] px-4 md:px-[var(--spacing-md)]">
        Signature Dishes
      </h3>

      {/* Infinite marquee wrapper */}
      <div className="overflow-hidden">
        <div
          className="flex gap-3 md:gap-[var(--spacing-md)] px-4 md:px-[var(--spacing-md)] pb-3 md:pb-[var(--spacing-md)] animate-marquee hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {loopedDishes.map((dish, i) => (
            <DishCard key={`${dish.id}-${i}`} dish={dish} />
          ))}
        </div>
      </div>

      <div className="mt-4 md:mt-[var(--spacing-md)] text-center px-4 md:px-[var(--spacing-md)]">
        <Button href="/menu" variant="outlined" className="text-sm">View Full Menu</Button>
      </div>
    </div>
  );
}
