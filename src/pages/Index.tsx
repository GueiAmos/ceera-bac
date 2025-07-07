import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <ActivitiesSection />
      <Footer />
    </div>
  );
};

export default Index;
