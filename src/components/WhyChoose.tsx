import { Card } from "@/components/ui/card";
import { Palette, Monitor, Zap } from "lucide-react";

const WhyChoose = () => {
  const features = [
    {
      icon: Palette,
      title: "Pixel-Perfect Layouts",
      description: "Professional readability with attention to every detail",
      gradient: "from-pink-500 to-primary",
    },
    {
      icon: Monitor,
      title: "Multi-Device Ready",
      description: "Import and scale for all devices FREE",
      gradient: "from-accent to-cyan-400",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Same-day delivery with clear task breakdown",
      gradient: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient-purple">Bubba</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="glass-card gradient-border p-8 text-center hover:scale-105 transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;