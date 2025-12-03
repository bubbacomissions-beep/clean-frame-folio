import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center animate-fade-in-up">
          {/* Commission Badge */}
          <Badge 
            variant="outline" 
            className="mb-6 px-4 py-2 bg-secondary/50 backdrop-blur-sm border-success/30 hover:border-success transition-smooth"
          >
            <span className="w-2 h-2 bg-success rounded-full mr-2 animate-glow"></span>
            Commissions Opened!
          </Badge>

          {/* Greeting */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Hello, I'm Bubba 👋
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 max-w-5xl">
            <span className="text-foreground">UI & GFX Designer </span>
            <span className="text-muted-foreground">crafting</span>
            <br />
            <span className="text-muted-foreground">clean & modern designs</span>
          </h1>

          {/* CTA Button */}
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="mt-8 px-8 py-6 text-lg bg-transparent border-2 border-foreground hover:bg-foreground hover:text-background transition-smooth group"
          >
            Contact Me
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
