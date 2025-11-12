import { Card } from "@/components/ui/card";
import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful, intuitive interfaces that users love",
    },
    {
      icon: Code2,
      title: "Clean Code",
      description: "Building responsive designs with modern technologies",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Delivering high-quality work within agreed timelines",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate UI/UX designer with a keen eye for detail and a love for creating seamless digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-smooth group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <feature.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
