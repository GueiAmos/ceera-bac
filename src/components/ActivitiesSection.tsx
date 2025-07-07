import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Trophy } from "lucide-react";

const ActivitiesSection = () => {
  const activities = [
    {
      icon: Calendar,
      title: "Journée culturelle",
      description: "Célébration de notre patrimoine avec danses et plats traditionnels.",
      image: "https://ceera.lovable.app/lovable-uploads/c857cd43-bf05-42d3-8abc-301024db7a68.png",
      color: "primary"
    },
    {
      icon: Trophy,
      title: "Soutien scolaire",
      description: "Programmes de mentorat pour la réussite académique.",
      image: "https://ceera.lovable.app/lovable-uploads/f70a5dca-15ad-4000-8cfb-9be5ae1cb5bd.png",
      color: "secondary"
    },
    {
      icon: Users,
      title: "Actions sociales",
      description: "Initiatives communautaires et solidaires.",
      image: "https://ceera.lovable.app/lovable-uploads/7c8e631b-c3d7-418c-8e1d-8d07d546d1ae.png",
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

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Nos activités récentes 📸
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les événements et initiatives qui animent notre collectif 
            et renforcent nos liens de solidarité.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card 
              key={index}
              className="group bg-white border-0 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute top-4 left-4 w-12 h-12 ${getGradientClass(activity.color)} rounded-xl flex items-center justify-center shadow-lg`}>
                  <activity.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg text-muted-foreground mb-4">
            Et ce n'est que le début ! De nombreuses autres activités vous attendent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;