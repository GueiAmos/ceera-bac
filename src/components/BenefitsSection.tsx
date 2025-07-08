import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users2, HandHeart, Sparkles, Calendar, Trophy, GraduationCap } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Users2,
      title: "Réseau d'étudiants solidaires",
      description: "Intègre un réseau d'étudiants solidaires et motivés partageant tes ambitions.",
    },
    {
      icon: HandHeart,
      title: "Soutien en cas de difficultés",
      description: "Reçois du soutien en cas de coup dur (deuil, maladie...) grâce à notre solidarité.",
    },
    {
      icon: Calendar,
      title: "Activités extra-scolaires",
      description: "Participe à des activités extra-scolaires variées (sorties, loisirs, événements...).",
    },
    {
      icon: GraduationCap,
      title: "Conseils d'orientation",
      description: "Bénéficie de conseils pour ton orientation et tes choix d'études supérieures.",
    },
    {
      icon: Trophy,
      title: "Opportunités académiques",
      description: "Reste informé sur les concours, bourses et opportunités académiques disponibles.",
    },
    {
      icon: Sparkles,
      title: "Emploi et stages",
      description: "Trouve des petits boulots, stages ou offres d'emploi grâce à notre réseau.",
    },
    {
      icon: CheckCircle,
      title: "Aide aux projets personnels",
      description: "Reçois de l'aide pour tes projets et initiatives personnelles innovantes.",
    },
    {
      icon: Users2,
      title: "Ressources et documents",
      description: "Accède facilement à des documents et ressources utiles pour tes études.",
    },
    {
      icon: Sparkles,
      title: "Ateliers et formations",
      description: "Profite d'ateliers et de formations pratiques (informatique, langues, etc.).",
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
            Pourquoi rejoindre le CEERA après ton BAC ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            En tant que nouveau bachelier, découvre tous les avantages concrets 
            qui t'attendent pour réussir tes études supérieures !
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
            Prêt à commencer ton parcours étudiant avec nous ?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Plus de 150 étudiants nous font déjà confiance. Rejoins notre communauté 
            et profite de tous ces avantages dès maintenant !
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              Soutien personnalisé
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              Réseau professionnel
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              Opportunités d'emploi
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              Formations gratuites
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;