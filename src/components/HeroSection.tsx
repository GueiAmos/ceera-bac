import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-celebration.jpg";
import ceeraLogo from "@/assets/ceera-logo.png";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://chat.whatsapp.com/GAzhT7xlSVvIS0ndMUxdzp?mode=r_c", "_blank");
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative min-h-screen bg-gradient-warm overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Navigation/Header */}
      <nav className="relative z-20 flex items-center justify-between p-6 lg:px-12">
        <div className="flex items-center space-x-3">
          <img 
            src={ceeraLogo} 
            alt="Logo CEERA"
            className="w-16 h-16 lg:w-20 lg:h-20"
          />
          <div className="hidden sm:block">
            <h3 className="text-lg lg:text-xl font-bold text-foreground">CEERA</h3>
            <p className="text-sm text-muted-foreground">Collectif des Élèves et Étudiants et Ressortissants d'Agnibilékrou</p>
          </div>
        </div>
        <Button 
          variant="outline" 
          size="sm"
          onClick={scrollToAbout}
          className="border-primary text-primary hover:bg-primary hover:text-white"
        >
          En savoir plus
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-100px)] px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Message */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-primary">🎉 FÉLICITATIONS !</span>
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nouveaux Bacheliers 2025
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Votre réussite au baccalauréat marque le début d'une nouvelle aventure ! 
              Le CEERA est là pour vous accompagner dans cette étape importante.
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              variant="hero"
              onClick={handleWhatsAppClick}
              className="text-lg px-8 py-6 mb-8"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Rejoins la famille CEERA !
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-warm">
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Membres actifs</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-success">
              <div className="text-2xl lg:text-3xl font-bold text-secondary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">années d'existence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;