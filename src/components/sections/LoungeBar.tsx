import { images, barDrinks } from "../../data/siteData";
import Image from "../ui/Image";

export default function LoungeBar() {
  return (
    <div className="px-4 md:px-[var(--spacing-md)]">
      <div className="bg-inverse-surface text-inverse-on-surface rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-lg">
        <Image
          src={images.bar}
          alt="The Lounge Bar at Kesariya — sophisticated cocktail bar with warm amber lighting"
          decoding="async"
          width={640}
          height={400}
          className="w-full h-56 md:h-full object-cover min-h-[250px] md:min-h-[300px]"
        />
        <div className="p-6 md:p-[var(--spacing-xl)] flex flex-col justify-center">
          <h3 className="font-[var(--font-display)] text-2xl md:text-[clamp(28px,4vw,40px)] font-bold leading-[1.2] text-primary-fixed mb-2 md:mb-[var(--spacing-sm)]">
            The Lounge Bar
          </h3>
          <p className="font-[var(--font-body)] text-sm md:text-base leading-relaxed opacity-90 mb-4 md:mb-[var(--spacing-lg)]">
            Sophisticated cocktails and premium spirits in an intimate setting.
          </p>

          <div className="grid grid-cols-2 gap-x-4 md:gap-x-[var(--spacing-md)] gap-y-2 md:gap-y-[var(--spacing-sm)] font-[var(--font-body)] text-xs md:text-sm font-semibold tracking-[0.05em]">
            {barDrinks.map((drink) => (
              <span
                key={drink.name}
                className="border-b border-outline/30 pb-1 text-primary-fixed-dim"
              >
                {drink.name}
              </span>
            ))}
            <span className="col-span-2 text-center text-primary-fixed opacity-80 mt-2 italic text-xs md:text-sm">
              & many more...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
