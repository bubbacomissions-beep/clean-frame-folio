import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Work = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern shopping experience with sleek UI",
      tags: ["UI Design", "UX Research", "Prototyping"],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive financial management",
      tags: ["Mobile Design", "User Flow", "Testing"],
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "SaaS Dashboard",
      description: "Data visualization with clean aesthetics",
      tags: ["Dashboard", "Analytics", "Components"],
      gradient: "from-violet-500/20 to-purple-500/20",
    },
    {
      title: "Social Media Platform",
      description: "Engaging user experience and interactions",
      tags: ["Social", "Interaction Design", "Responsive"],
      gradient: "from-pink-500/20 to-rose-500/20",
    },
    {
      title: "Health & Fitness App",
      description: "Motivating design for wellness tracking",
      tags: ["Mobile", "Gamification", "Wellness"],
      gradient: "from-orange-500/20 to-amber-500/20",
    },
    {
      title: "Educational Platform",
      description: "Interactive learning environment",
      tags: ["EdTech", "Interactive", "Accessibility"],
      gradient: "from-indigo-500/20 to-blue-500/20",
    },
  ];

  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my design philosophy and technical skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-smooth cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-background/40"></div>
                <ExternalLink className="w-8 h-8 text-foreground/60 group-hover:scale-110 transition-transform relative z-10" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
