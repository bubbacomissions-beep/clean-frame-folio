import { Card } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

const Work = () => {
  const gfxProjects = [
    { id: 1, gradient: "from-purple-600/30 to-pink-500/30" },
    { id: 2, gradient: "from-cyan-500/30 to-blue-600/30" },
    { id: 3, gradient: "from-orange-500/30 to-red-500/30" },
    { id: 4, gradient: "from-green-500/30 to-teal-500/30" },
    { id: 5, gradient: "from-indigo-500/30 to-purple-500/30" },
    { id: 6, gradient: "from-rose-500/30 to-pink-500/30" },
  ];

  const uiProjects = [
    { id: 1, gradient: "from-amber-500/30 to-orange-500/30" },
    { id: 2, gradient: "from-blue-500/30 to-indigo-500/30" },
    { id: 3, gradient: "from-emerald-500/30 to-green-500/30" },
    { id: 4, gradient: "from-fuchsia-500/30 to-purple-500/30" },
    { id: 5, gradient: "from-sky-500/30 to-cyan-500/30" },
    { id: 6, gradient: "from-violet-500/30 to-pink-500/30" },
  ];

  const ProjectCard = ({ project, index }: { project: { id: number; gradient: string }; index: number }) => (
    <Card
      className="glass-card gradient-border overflow-hidden group cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 ease-out"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Click for better view text */}
      <div className="text-center py-2 text-sm text-muted-foreground border-b border-border/50 group-hover:text-foreground transition-colors duration-300">
        Click for better view
      </div>
      
      {/* Image Placeholder */}
      <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-card/30 group-hover:bg-transparent transition-all duration-500" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-background/80 to-transparent transition-opacity duration-500" />
        <ImageIcon className="w-12 h-12 text-muted-foreground/50 group-hover:scale-110 group-hover:text-muted-foreground transition-all duration-500" />
      </div>
    </Card>
  );

  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Past <span className="text-gradient-purple">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Versatile designs including game HUDs, thumbnails, icons, and more. From dark themes to colorful styles.
          </p>
        </div>

        {/* GFX Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <h3 className="text-2xl md:text-3xl font-bold text-gradient-purple">GFX</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
          <p className="text-center text-muted-foreground mb-8">Thumbnails, icons, and visual assets</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {gfxProjects.map((project, index) => (
              <ProjectCard key={`gfx-${project.id}`} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* UI Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <h3 className="text-2xl md:text-3xl font-bold text-gradient-cyan">UI</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          </div>
          <p className="text-center text-muted-foreground mb-8">Game interfaces and HUD designs</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {uiProjects.map((project, index) => (
              <ProjectCard key={`ui-${project.id}`} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;