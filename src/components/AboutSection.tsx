import { Users, Heart, GraduationCap, MapPin } from "lucide-react";
import communityImage from "@/assets/community-solidarity.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: "Solidarité",
      description: "Une communauté unie qui se soutient mutuellement dans tous les défis de la vie étudiante."
    },
    {
      icon: Heart,
      title: "Entraide",
      description: "L'accompagnement académique et social pour réussir ses études et s'épanouir personnellement."
    },
    {
      icon: GraduationCap,
      title: "Excellence",
      description: "Promouvoir la réussite académique et encourager l'excellence dans tous les domaines d'études."
    },
    {
      icon: MapPin,
      title: "Intégration",
      description: "Faciliter l'adaptation dans les villes universitaires grâce à un réseau bienveillant."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
            Qui sommes-nous ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Le CEERA (Collectif des Élèves et Étudiants Ressortissants d'Agnibilékrou) 
            est une association dynamique qui unit les jeunes d'Agnibilékrou à travers 
            la solidarité, l'entraide et l'accompagnement dans leur parcours académique.
          </p>
        </div>

        {/* Main content with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <img 
              src={communityImage} 
              alt="Communauté CEERA"
              className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
            />
          </div>
          
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold text-foreground">
              Une famille étudiante depuis plus de 15 ans
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Depuis sa création, le CEERA rassemble les élèves et étudiants originaires 
              d'Agnibilékrou pour créer un environnement familial et bienveillant. 
              Notre mission est de faciliter l'intégration, promouvoir l'excellence 
              académique et maintenir les liens avec notre terre natale.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-primary/10 p-4 rounded-2xl">
                <h4 className="font-semibold text-primary mb-2">Notre Vision</h4>
                <p className="text-sm text-muted-foreground">
                  Être une référence en matière d'accompagnement étudiant et de promotion de l'excellence.
                </p>
              </div>
              <div className="bg-gradient-secondary/10 p-4 rounded-2xl">
                <h4 className="font-semibold text-secondary mb-2">Notre Mission</h4>
                <p className="text-sm text-muted-foreground">
                  Créer un réseau solide d'entraide pour la réussite de tous nos membres.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-warm transition-all duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;