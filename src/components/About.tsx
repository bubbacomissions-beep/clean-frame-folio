import { Card } from "@/components/ui/card";
import { Lightbulb, Star, Monitor, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      color: "text-accent",
      title: "Need UI fast?",
      description: "I deliver in 24 hours or less",
    },
    {
      color: "text-accent",
      title: "Need any style?",
      description: "I cover dark, neon, minimal, cartoony, fantasy, and more",
    },
    {
      color: "text-pink-400",
      title: "Need it perfect?",
      description: "I offer unlimited revisions until you're 100% happy",
    },
  ];

  const whyChooseMe = [
    { icon: Star, text: "Pixel-perfect layouts with pro readability", color: "text-yellow-400" },
    { icon: Monitor, text: "Import and scale for all devices FREE", color: "text-accent" },
    { icon: Zap, text: "Fast communication & clear task breakdown", color: "text-success" },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Left Column - About Text */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient-cyan">Me</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              Hi, I'm <span className="text-foreground font-semibold">Bubba</span> — a UI & GFX Designer with years of experience crafting beautiful, game-ready UI from futuristic sci-fi dashboards to colorful RPG menus.
            </p>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div 
                  key={item.title}
                  className="flex items-start gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-2 h-2 rounded-full ${item.color} bg-current mt-2 shrink-0`} />
                  <p className="text-muted-foreground">
                    <span className={`font-semibold ${item.color}`}>{item.title}</span>{" "}
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Why Choose Me Card */}
          <Card className="glass-card gradient-border p-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              <h3 className="text-xl font-semibold">Why Choose Me?</h3>
            </div>

            <div className="space-y-4">
              {whyChooseMe.map((item, index) => (
                <div 
                  key={item.text}
                  className="flex items-center gap-3"
                >
                  <item.icon className={`w-5 h-5 ${item.color} shrink-0`} />
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;