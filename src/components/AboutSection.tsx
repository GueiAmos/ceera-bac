import { Users, Heart, GraduationCap, MapPin } from "lucide-react";
import communityImage from "@/assets/community-solidarity.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: "Solidarité",
      description: "Créer des liens de solidarité entre tous les ressortissants d'Agnibilékrou."
    },
    {
      icon: Heart,
      title: "Réseau d'entraide",
      description: "Un réseau d'entraide intellectuel, social et professionnel pour tous."
    },
    {
      icon: GraduationCap,
      title: "Sensibilisation",
      description: "Organiser des événements de sensibilisation pour la jeunesse."
    },
    {
      icon: MapPin,
      title: "Développement local",
      description: "Contribuer au développement d'Agnibilékrou par le bénévolat."
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
            est une association apolitique, laïque et à but non lucratif, créée officiellement 
            le 3 février 2023 par récépissé N°195/P-AGNI/CAB. Notre mission : promouvoir 
            la solidarité et le développement de nos ressortissants.
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
              Association officielle depuis février 2023
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Le CEERA œuvre pour le bien-être des élèves et étudiants d'Agnibilékrou, 
              où qu'ils poursuivent leurs études. En tant qu'association apolitique, 
              laïque et à but non lucratif, nous créons un environnement favorable 
              à l'épanouissement de tous nos membres.
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