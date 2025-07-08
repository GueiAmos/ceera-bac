import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users2, HandHeart, Sparkles, Calendar, Trophy } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Users2,
      title: "Réseau d'entraide professionnel",
      description: "Bénéficiez d'un réseau d'entraide intellectuel, social et professionnel pour votre développement.",
      color: "primary"
    },
    {
      icon: HandHeart,
      title: "Actions sociales",
      description: "Participez aux actions sociales, économiques et culturelles pour le développement communautaire.",
      color: "secondary"
    },
    {
      icon: Sparkles,
      title: "Accompagnement personnalisé",
      description: "Recevez appui et conseils pour vos projets personnels et professionnels.",
      color: "accent"
    },
    {
      icon: Calendar,
      title: "Événements culturels",
      description: "Participez à nos événements culturels et journées de sensibilisation pour la jeunesse.",
      color: "primary"
    },
    {
      icon: Trophy,
      title: "Programmes de mentorat",
      description: "Bénéficiez de nos programmes de soutien scolaire et de mentorat académique.",
      color: "secondary"
    },
    {
      icon: CheckCircle,
      title: "Adhésion simple",
      description: "Rejoignez facilement notre communauté de plus de 150 membres solidaires.",
      color: "accent"
    }
  ];

  const getGradientClass = (color: string) => {
    switch (color) {
      case 'secondary': return 'bg-gradient-secondary';
      case 'accent': return 'bg-gradient-accent';
      default: return 'bg-gradient-primary';
    }
  };

  const getShadowClass = (color: string) => {
    switch (color) {
      case 'secondary': return 'shadow-success';
      case 'accent': return 'shadow-accent';
      default: return 'shadow-warm';
    }
  };

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Pourquoi rejoindre le CEERA ? 🚀
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez tous les avantages qui vous attendent en devenant membre 
            de notre grande famille étudiante !
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group bg-white/90 backdrop-blur-sm border-0 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${getGradientClass(benefit.color)} rounded-2xl flex items-center justify-center mb-6 group-hover:${getShadowClass(benefit.color)} transition-all duration-300`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call-to-action section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center shadow-xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Prêt à rejoindre notre communauté ? 🎯
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Association officielle depuis 2023, nous accompagnons déjà plus de 150 élèves et étudiants. 
            Rejoignez notre communauté solidaire et bénéficiez de tous ces avantages !
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              Plus de 150 membres
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              Association officielle
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              Accompagnement personnalisé
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;