import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users2, HandHeart, Sparkles, Calendar, Trophy } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Users2,
      title: "Réseau d'entraide professionnel",
      description: "Bénéficiez d'un réseau d'entraide intellectuel, social et professionnel pour votre développement.",
    },
    {
      icon: HandHeart,
      title: "Actions sociales",
      description: "Participez aux actions sociales, économiques et culturelles pour le développement communautaire.",
    },
    {
      icon: Sparkles,
      title: "Accompagnement personnalisé",
      description: "Recevez appui et conseils pour vos projets personnels et professionnels.",
    },
    {
      icon: Calendar,
      title: "Événements culturels",
      description: "Participez à nos événements culturels et journées de sensibilisation pour la jeunesse.",
    },
    {
      icon: Trophy,
      title: "Programmes de mentorat",
      description: "Bénéficiez de nos programmes de soutien scolaire et de mentorat académique.",
    },
    {
      icon: CheckCircle,
      title: "Adhésion simple",
      description: "Rejoignez facilement notre communauté de plus de 150 membres solidaires.",
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
            Pourquoi rejoindre le CEERA ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez tous les avantages qui vous attendent en devenant membre 
            de notre grande famille !
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group bg-white border-0 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call-to-action section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 text-center shadow-lg border border-gray-100">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Prêt à rejoindre notre communauté ?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Association officielle depuis 2023, nous accompagnons déjà plus de 150 élèves et étudiants. 
            Rejoignez notre communauté solidaire et bénéficiez de tous ces avantages !
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
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