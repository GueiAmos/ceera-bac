import { Button } from "@/components/ui/button";
import { Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/group_invite_link_here", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://facebook.com/ceera.official", "_blank");
  };

  const handleTikTokClick = () => {
    window.open("https://tiktok.com/@ceera.official", "_blank");
  };

  return (
    <footer className="bg-gradient-primary text-white py-16">
      <div className="container mx-auto px-6">
        {/* Main CTA Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎓 Ton aventure étudiante commence ici !
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Rejoins dès maintenant la famille officielle des étudiants d'Agnibilékrou ! 
            Association apolitique, laïque et à but non lucratif créée en 2023. 
            Cotisation : seulement 1000 FCFA.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={handleWhatsAppClick}
            className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="mr-2 h-6 w-6" />
            Rejoindre le groupe WhatsApp
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <Button
            variant="ghost"
            size="lg"
            onClick={handleFacebookClick}
            className="text-white hover:bg-white/20 rounded-full p-4"
          >
            <Facebook className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={handleTikTokClick}
            className="text-white hover:bg-white/20 rounded-full p-4"
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.947-1.482-2.17-1.482-3.338V1h-3.128v13.832c0 2.054-1.668 3.722-3.722 3.722s-3.722-1.668-3.722-3.722 1.668-3.722 3.722-3.722c.337 0 .662.045.97.129V7.375a7.847 7.847 0 00-.97-.061c-4.126 0-7.472 3.346-7.472 7.472s3.346 7.472 7.472 7.472 7.472-3.346 7.472-7.472V8.9a9.901 9.901 0 005.64 1.748V6.72a6.18 6.18 0 01-2.7-1.158z"/>
            </svg>
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={handleWhatsAppClick}
            className="text-white hover:bg-white/20 rounded-full p-4"
          >
            <MessageCircle className="h-8 w-8" />
          </Button>
        </div>

        {/* Footer Info */}
        <div className="border-t border-white/20 pt-8 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold mb-4">CEERA</h3>
          <p className="text-lg mb-4 opacity-90">
            Collectif des Élèves et Étudiants Ressortissants d'Agnibilékrou
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8 text-sm opacity-80">
            <div>
              <h4 className="font-semibold mb-2">🎯 Notre Mission</h4>
              <p>Promouvoir la solidarité et le développement de nos ressortissants d'Agnibilékrou.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📅 Création</h4>
              <p>Association officielle créée le 3 février 2023 (Récépissé N°195/P-AGNI/CAB).</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">💰 Adhésion</h4>
              <p>Rejoignez-nous pour seulement 1000 FCFA et bénéficiez de tous nos services.</p>
            </div>
          </div>
          <p className="text-sm opacity-70">
            © 2024 CEERA - Tous droits réservés | Créé avec ❤️ pour les étudiants d'Agnibilékrou
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;