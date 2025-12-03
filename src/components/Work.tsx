import { Card } from "@/components/ui/card";

const Work = () => {
  const projects = [
    { gradient: "from-blue-500/20 to-cyan-500/20" },
    { gradient: "from-emerald-500/20 to-teal-500/20" },
    { gradient: "from-violet-500/20 to-purple-500/20" },
    { gradient: "from-pink-500/20 to-rose-500/20" },
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-smooth cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-smooth"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
