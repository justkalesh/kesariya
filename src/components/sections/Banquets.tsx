import { images, banquetFeatures } from "../../data/siteData";
import SectionHeading from "../ui/SectionHeading";
import FeatureItem from "../ui/FeatureItem";
import Button from "../ui/Button";
import Image from "../ui/Image";

export default function Banquets() {
  return (
    <section
      id="banquet"
      className="py-12 md:py-[var(--spacing-xl)] bg-surface-container-low"
    >
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-4 md:px-[var(--spacing-md)]">
        <SectionHeading
          title="Celebrate at Kesariya Banquets"
          subtitle="Grand spaces for your most memorable occasions, tailored to perfection."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[var(--spacing-lg)] items-center">
          {/* Features */}
          <div className="order-2 md:order-1 flex flex-col gap-4 md:gap-[var(--spacing-md)]">
            <ul className="space-y-4 md:space-y-[var(--spacing-md)] stagger-children">
              {banquetFeatures.map((feature) => (
                <FeatureItem
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </ul>
            <Button href="https://wa.me/918881013100" target="_blank" rel="noopener noreferrer" className="self-start mt-2 text-sm">
              Inquire Now
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 h-52 md:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={images.banquet}
              alt="A grand, lavishly decorated banquet hall set for a wedding reception at Kesariya"
              decoding="async"
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
