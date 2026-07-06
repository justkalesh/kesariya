import { images } from "../../data/siteData";
import SectionHeading from "../ui/SectionHeading";
import Image from "../ui/Image";

export default function Restaurant() {
  return (
    <div className="mb-10 md:mb-[var(--spacing-xl)] px-4 md:px-[var(--spacing-md)]">
      <SectionHeading
        title="Culinary Excellence"
        subtitle="Experience a blend of rich traditions and modern flavors in our elegantly designed spaces."
      />

      {/* Descriptive text above ambience photos */}
      <div className="text-center mb-6 md:mb-[var(--spacing-lg)]">
        <h3 className="font-[var(--font-display)] text-lg md:text-[clamp(20px,3vw,28px)] font-semibold leading-snug text-on-surface mb-2">
          Step into a world of warmth, tradition &amp; elegance
        </h3>
        <p className="font-[var(--font-body)] text-sm md:text-base leading-relaxed text-on-surface-variant mx-auto" style={{ maxWidth: "560px" }}>
          Our interiors are thoughtfully crafted to blend modern luxury with the charm of Indian heritage — making every meal a memorable occasion.
        </p>
      </div>

      {/* Ambience Masonry */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-[var(--spacing-md)]">
        <div className="rounded-xl overflow-hidden shadow-sm">
          <Image
            src={images.ambienceLeft}
            alt="Kesariya restaurant warm ambience with traditional Indian decor"
            decoding="async"
            width={640}
            height={384}
            className="w-full h-48 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="rounded-xl overflow-hidden shadow-sm">
          <Image
            src={images.ambienceRight}
            alt="Kesariya restaurant interior details and elegant table settings"
            decoding="async"
            width={640}
            height={384}
            className="w-full h-48 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </div>
  );
}
