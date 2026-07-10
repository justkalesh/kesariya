import MenuBook from "../components/menu/MenuBook";
import Button from "../components/ui/Button";

export default function Menu() {
  return (
    <main className="min-h-[110vh] bg-surface pt-20 md:pt-24 pb-20 px-2 md:px-4">
      <div className="max-w-[1100px] mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-4 md:mb-6">
          <h1 className="font-[var(--font-display)] text-2xl md:text-4xl font-bold text-primary mb-1">
            Our Menu
          </h1>
          <p className="font-[var(--font-body)] text-sm md:text-base text-on-surface-variant">
            Flip through our curated selection of dishes & drinks
          </p>
        </div>

        {/* Book Viewer */}
        <MenuBook />

        {/* Back to home */}
        <div className="text-center mt-6">
          <Button href="/" variant="outlined" className="text-sm">
            ← Back to Home
          </Button>
        </div>
      </div>
    </main>
  );
}

