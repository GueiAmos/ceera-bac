import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-celebration.jpg";
import ceeraLogo from "@/assets/ceera-logo.png";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://chat.whatsapp.com/GAzhT7xlSVvIS0ndMUxdzp?mode=r_c", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-warm">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-bounce-soft" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-bounce-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-accent/10 rounded-full animate-bounce-soft" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* CEERA Logo */}
        <div className="animate-fade-in-up mb-8">
          <img 
            src={ceeraLogo} 
            alt="Logo CEERA"
            className="w-32 h-32 mx-auto mb-6"
          />
        </div>

        {/* Main heading */}
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            🎉 FÉLICITATIONS ! 🎉
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nouveaux Bacheliers 2025
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Votre réussite au baccalauréat marque le début d'une nouvelle aventure ! 
            Le CEERA, association officielle créée en 2023, est là pour vous accompagner 
            dans cette étape importante de votre parcours étudiant.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="animate-scale-in flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.3s' }}>
          <Button 
            size="lg" 
            variant="hero"
            onClick={handleWhatsAppClick}
            className="text-lg px-8 py-6 shadow-warm"
          >
            <MessageCircle className="mr-2 h-6 w-6" />
            Rejoins-nous maintenant !
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Découvrir le CEERA
          </Button>
        </div>

        {/* Quick stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-warm">
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Élèves et étudiants membres</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-success">
            <div className="text-3xl font-bold text-secondary mb-2">2</div>
            <div className="text-sm text-muted-foreground">Années d'existence officielle</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;