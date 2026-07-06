import Button from "../components/ui/Button";

export default function MenuWIP() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center bg-surface pt-24 px-4 text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <span className="material-symbols-outlined text-[64px] md:text-[80px] text-primary">
          restaurant_menu
        </span>
        <h1 className="font-[var(--font-display)] text-3xl md:text-5xl font-bold text-primary">
          Menu Coming Soon
        </h1>
        <p className="font-[var(--font-body)] text-base md:text-lg text-on-surface-variant">
          We are currently curating an exquisite digital menu experience for you. Please check back later or visit us to explore our culinary offerings in person.
        </p>
        <div className="pt-6">
          <Button href="/" variant="filled">
            Return to Home
          </Button>
        </div>
      </div>
    </main>
  );
}
