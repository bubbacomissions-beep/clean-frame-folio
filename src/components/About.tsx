import { Card } from "@/components/ui/card";
import { Lightbulb, Zap, RefreshCw } from "lucide-react";

const About = () => {
  const bullets = [
    {
      icon: Zap,
      question: "Need the work done fast while keeping the quality perfect?",
      answer: "I deliver high-quality work efficiently without compromising standards.",
      color: "text-accent",
    },
    {
      icon: RefreshCw,
      question: "Need to adjust anything?",
      answer: "Infinite amount of revisions is offered until you are 100% satisfied.",
      color: "text-pink-400",
    },
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
              Hi, I'm <span className="text-foreground font-semibold">Bubba</span> — a UI & GFX Designer with months of experience making beautiful game thumbnails and icons, together with game-ready UI.
            </p>

            <div className="space-y-6">
              {bullets.map((item, index) => (
                <div 
                  key={item.question}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <item.icon className={`w-5 h-5 ${item.color} shrink-0 mt-1`} />
                    <p className={`font-semibold ${item.color}`}>{item.question}</p>
                  </div>
                  <p className="text-muted-foreground ml-8">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Why Choose Me Card */}
          <Card className="glass-card gradient-border p-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              <h3 className="text-xl font-semibold">What I Offer</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <p className="text-muted-foreground">Professional UI designs for games</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <p className="text-muted-foreground">Eye-catching thumbnails & icons</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-400" />
                <p className="text-muted-foreground">Fast delivery with unlimited revisions</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;