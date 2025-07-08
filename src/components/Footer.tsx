import { Button } from "@/components/ui/button";
import { Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://chat.whatsapp.com/GAzhT7xlSVvIS0ndMUxdzp?mode=r_c", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://facebook.com/CEERA.Collectif des Élèves et Étudiants Ressortissants d’Agnibilekrou", "_blank");
  };

  const handleTikTokClick = () => {
    window.open("https://tiktok.com/@ceera.life", "_blank");
  };

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main CTA Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">
            Ton aventure étudiante commence ici !
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Rejoins dès maintenant la famille officielle des élèves et étudiants d'Agnibilékrou ! 
            Association apolitique, laïque et à but non lucratif créée officiellement en 2023.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={handleWhatsAppClick}
            className="text-lg px-8 py-3 bg-white text-foreground hover:bg-white/90"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Rejoindre le groupe WhatsApp
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-12">
          <Button
            variant="ghost"
            size="lg"
            onClick={handleFacebookClick}
            className="text-white hover:bg-white/10 rounded-full p-3"
          >
            <Facebook className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={handleTikTokClick}
            className="text-white hover:bg-white/10 rounded-full p-3"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.947-1.482-2.17-1.482-3.338V1h-3.128v13.832c0 2.054-1.668 3.722-3.722 3.722s-3.722-1.668-3.722-3.722 1.668-3.722 3.722-3.722c.337 0 .662.045.97.129V7.375a7.847 7.847 0 00-.97-.061c-4.126 0-7.472 3.346-7.472 7.472s3.346 7.472 7.472 7.472 7.472-3.346 7.472-7.472V8.9a9.901 9.901 0 005.64 1.748V6.72a6.18 6.18 0 01-2.7-1.158z"/>
            </svg>
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={handleWhatsAppClick}
            className="text-white hover:bg-white/10 rounded-full p-3"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>

        {/* Footer Info */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8 text-sm">
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-3">Notre Mission</h4>
              <p className="opacity-80">
                Promouvoir la solidarité et le développement de nos ressortissants d'Agnibilékrou.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-3">Création</h4>
              <p className="opacity-80">
                Association officielle créée le 3 février 2023 (Récépissé N°195/P-AGNI/CAB).
              </p>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-3">Communauté</h4>
              <p className="opacity-80">
                Rejoignez une communauté de plus de 150 élèves et étudiants solidaires.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">CEERA</h3>
            <p className="text-sm opacity-80 mb-4">
              Collectif des Élèves et Étudiants et Ressortissants d'Agnibilékrou
            </p>
            <p className="text-xs opacity-60">
              © 2025 CEERA - Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;