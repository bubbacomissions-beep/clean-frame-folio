import { User } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center border border-border">
              <User className="w-5 h-5 text-muted-foreground" />
            </div>
            <span className="font-semibold">Bubba</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} Bubba. All rights reserved.
          </p>

          <div className="flex gap-6">
            <button 
              onClick={() => scrollToSection("#about")}
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("#work")}
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("#pricing")}
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection("#contact")}
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;