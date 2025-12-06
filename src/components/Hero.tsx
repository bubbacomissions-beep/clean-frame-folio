import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Star, Zap, User } from "lucide-react";

const Hero = () => {
  const scrollToWork = () => {
    const element = document.querySelector("#work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Card */}
          <div className="animate-fade-in-up">
            <Card className="glass-card gradient-border p-8 w-72 flex flex-col items-center">
              {/* Avatar Placeholder */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-4 border-2 border-border">
                <User className="w-16 h-16 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Bubba</h3>
            </Card>
          </div>

          {/* Hero Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Available Badge */}
            <Badge 
              className="mb-6 px-4 py-2 bg-success/20 text-success border-success/30 hover:bg-success/30 transition-smooth"
            >
              <Zap className="w-3 h-3 mr-2" />
              Open for Commissions
            </Badge>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-foreground">UI Designer</span>
              <br />
              <span className="text-gradient-purple">Extraordinaire</span>
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Crafting beautiful, game-ready UI from stunning modern themes to vibrant artistic styles, backed by years of experience.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              <Badge variant="outline" className="px-4 py-2 bg-card/50 border-border">
                <Clock className="w-4 h-4 mr-2 text-accent" />
                Fast Turnaround
              </Badge>
              <Badge variant="outline" className="px-4 py-2 bg-card/50 border-border">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                Unlimited Revisions
              </Badge>
              <Badge variant="outline" className="px-4 py-2 bg-card/50 border-border">
                <Zap className="w-4 h-4 mr-2 text-success" />
                Fast Communication
              </Badge>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg"
              onClick={scrollToWork}
              className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 text-primary-foreground transition-smooth group glow-primary"
            >
              View Past Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;