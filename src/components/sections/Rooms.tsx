import { images, roomAmenities } from "../../data/siteData";
import Button from "../ui/Button";

export default function Rooms() {
  return (
    <section
      id="rooms"
      className="py-12 md:py-[var(--spacing-xl)] bg-surface relative overflow-hidden"
    >
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-4 md:px-[var(--spacing-md)] grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-[var(--spacing-lg)] items-center">
        {/* Text Content */}
        <div className="md:col-span-5 flex flex-col gap-3 md:gap-[var(--spacing-md)] z-10 relative">
          <h2 className="font-[var(--font-display)] text-2xl md:text-[clamp(28px,5vw,40px)] font-bold leading-[1.2] text-primary">
            Stay With Us
          </h2>
          <p className="font-[var(--font-body)] text-sm md:text-base leading-relaxed text-on-surface-variant">
            Experience comfort and tranquility in our thoughtfully appointed
            rooms.{" "}
            <span className="font-bold text-on-surface inline-flex items-center gap-1 bg-secondary-container px-2 py-0.5 rounded text-xs md:text-sm">
              <span className="material-symbols-outlined text-xs md:text-sm">
                schedule
              </span>
              Open 24 Hours
            </span>
          </p>

          {/* Amenities Grid */}
          <div className="grid grid-cols-2 gap-2 md:gap-[var(--spacing-sm)] mt-1 md:mt-[var(--spacing-sm)]">
            {roomAmenities.map((amenity) => (
              <div
                key={amenity.label}
                className={`flex items-center gap-1.5 font-[var(--font-body)] text-xs font-medium text-on-surface ${
                  amenity.colSpan === 2 ? "col-span-2" : ""
                } ${amenity.label === "& many more" ? "italic text-on-surface-variant" : ""}`}
              >
                <span className="material-symbols-outlined text-primary text-[18px] md:text-[24px]">
                  {amenity.icon}
                </span>
                {amenity.label}
              </div>
            ))}
          </div>

          <Button
            href="#contact"
            variant="tonal"
            className="w-max mt-3 md:mt-[var(--spacing-md)] text-sm"
          >
            Book a Room
          </Button>
        </div>

        {/* Image */}
        <div className="md:col-span-7 h-60 md:h-[600px] rounded-2xl overflow-hidden shadow-lg z-10">
          <img
            src={images.room}
            alt="Luxurious hotel room at Kesariya with premium bedding and modern amenities"
            loading="lazy"
            decoding="async"
            width={896}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
