import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import About from "@/components/About";
import Work from "@/components/Work";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Index = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div className="min-h-screen" ref={scrollRef}>
      <Navigation />
      <main>
        <Hero />
        <div className="scroll-animate">
          <WhyChoose />
        </div>
        <div className="scroll-animate scroll-animate-delay-1">
          <Work />
        </div>
        <div className="scroll-animate scroll-animate-delay-2">
          <About />
        </div>
        <div className="scroll-animate scroll-animate-delay-1">
          <Pricing />
        </div>
        <div className="scroll-animate scroll-animate-delay-2">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;