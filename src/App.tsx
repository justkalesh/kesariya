import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Restaurant from "./components/sections/Restaurant";
import SignatureDishes from "./components/sections/SignatureDishes";
import LoungeBar from "./components/sections/LoungeBar";
import Banquets from "./components/sections/Banquets";
import Rooms from "./components/sections/Rooms";
import Reviews from "./components/sections/Reviews";
import SchemaMarkup from "./seo/SchemaMarkup";

export default function App() {
  return (
    <>
      <SchemaMarkup />
      <Navbar />
      <main>
        <Hero />

        {/* Restaurant Section */}
        <section id="restaurant" className="py-12 md:py-[var(--spacing-xl)] bg-surface">
          <div className="max-w-[var(--spacing-container-max)] mx-auto">
            <Restaurant />
            <SignatureDishes />
            <LoungeBar />
          </div>
        </section>

        <Banquets />
        <Rooms />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
