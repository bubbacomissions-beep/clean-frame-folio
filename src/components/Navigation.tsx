import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import bubbaPfp from "@/assets/bubba-pfp.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/50">
              <img src={bubbaPfp} alt="Bubba" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold">Bubba</span>
              <span className="text-xs text-muted-foreground">UI/GFX Designer</span>
            </div>
          </a>

          {/* Contact Button */}
          <Button
            variant="outline"
            onClick={() => scrollToSection("#contact")}
            className="hidden md:flex border-primary/50 hover:bg-primary/10 hover:border-primary transition-smooth"
          >
            Contact Me
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("#about")}
                className="text-left text-foreground hover:text-primary transition-smooth py-2 px-3 rounded-lg hover:bg-card"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("#work")}
                className="text-left text-foreground hover:text-primary transition-smooth py-2 px-3 rounded-lg hover:bg-card"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("#pricing")}
                className="text-left text-foreground hover:text-primary transition-smooth py-2 px-3 rounded-lg hover:bg-card"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="text-left text-foreground hover:text-primary transition-smooth py-2 px-3 rounded-lg hover:bg-card"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;