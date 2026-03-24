import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { StatsBar } from "./components/StatsBar";
import { FarmGallery } from "./components/FarmGallery";
import { CTABanner } from "./components/CTABanner";
import { HealthSection } from "./components/HealthSection";
import { ProduceSection } from "./components/ProduceSection";
import { FAQSection } from "./components/FAQSection";
import { OrganicFoodSection } from "./components/OrganicFoodSection";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <StatsBar />
      <FarmGallery />
      <CTABanner />
      <HealthSection />
      <ProduceSection />
      <FAQSection />
      <OrganicFoodSection />
      <ContactCTA />
      <Footer />
    </div>
  );
}
