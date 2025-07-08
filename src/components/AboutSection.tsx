import { Users, Heart, GraduationCap, MapPin } from "lucide-react";
import ceeraLogo from "@/assets/496094715_668895912520256_6015292786784474806_n.jpg";

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
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
            Qui sommes-nous ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Le CEERA (Collectif des Élèves et Étudiants Ressortissants d'Agnibilékrou) 
            est une association apolitique, laïque et à but non lucratif, créée officiellement 
            le 3 février 2023. Le CEERA œuvre pour le bien-être et l'épanouissement des élèves et étudiants d'Agnibilékrou, 
              où qu'ils poursuivent leurs études. En tant qu'association apolitique, 
              laïque et à but non lucratif, nous créons un environnement favorable 
              à l'épanouissement de tous nos membres.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img 
              src={ceeraLogo} 
              alt="Logo officiel du CEERA"
              className="w-full h-[300px] lg:h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
              Notre histoire
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Officialisé par récépissé de déclaration d'association N⁰195/P-AGNI/CAB le 03 février 2023, tel que régi par la loi N⁰60-315 du 21 septembre 1960 relative aux associations, le CEERA s'est donné comme mission principale de rassembler les élèves et étudiants ressortissants d'Agnibilékrou.


              Après le baccalauréat, les étudiants sont orientés dans diverses universités, grandes écoles et villes. Pour maintenir les liens entre les ressortissants malgré cette dispersion géographique, le CEERA a été créé comme un point de ralliement et une structure d'entraide.

Aujourd'hui, le CEERA fonctionne sur la base d'un statut et d'un règlement intérieur et est reconnu par les autorités politiques, témoignant du sérieux qui règne au sein de ce collectif.
            </p>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-primary/5 border border-primary/20 p-4 rounded-xl">
                <h4 className="font-semibold text-primary mb-2">Notre Vision</h4>
                <p className="text-sm text-muted-foreground">
                  Être une référence en matière d'accompagnement étudiant et de promotion de l'excellence.
                </p>
              </div>
              <div className="bg-secondary/5 border border-secondary/20 p-4 rounded-xl">
                <h4 className="font-semibold text-secondary mb-2">Notre Mission</h4>
                <p className="text-sm text-muted-foreground">
                  Créer un réseau solide d'entraide pour la réussite de tous nos membres.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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