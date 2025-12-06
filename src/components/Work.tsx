import { Card } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

const Work = () => {
  const projects = [
    { id: 1, gradient: "from-purple-600/30 to-pink-500/30" },
    { id: 2, gradient: "from-cyan-500/30 to-blue-600/30" },
    { id: 3, gradient: "from-orange-500/30 to-red-500/30" },
    { id: 4, gradient: "from-green-500/30 to-teal-500/30" },
    { id: 5, gradient: "from-indigo-500/30 to-purple-500/30" },
    { id: 6, gradient: "from-rose-500/30 to-pink-500/30" },
  ];

  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient-purple">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Versatile designs — buttons, HUDs, shops, upgrades, settings, perks, and more. From dark themes to colorful styles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="glass-card gradient-border overflow-hidden group cursor-pointer hover:scale-[1.02] transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Click for better view text */}
              <div className="text-center py-2 text-sm text-muted-foreground border-b border-border/50">
                Click for better view
              </div>
              
              {/* Image Placeholder */}
              <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-card/20 group-hover:bg-transparent transition-smooth" />
                <ImageIcon className="w-12 h-12 text-muted-foreground/50" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;