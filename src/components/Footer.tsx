import { Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-semibold">Hassan Musaddaq</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>

          <div className="flex gap-6">
            <a 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              About
            </a>
            <a 
              href="#work" 
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              Work
            </a>
            <a 
              href="#pricing" 
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
