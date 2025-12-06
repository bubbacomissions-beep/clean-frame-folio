import { Card } from "@/components/ui/card";
import { Mail, MessageSquare, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient-purple">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="glass-card gradient-border p-6 animate-fade-in-up hover:scale-105 transition-smooth">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-primary/20 to-pink-500/20 rounded-xl">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Discord</h3>
                <p className="text-muted-foreground">bubakbububu1</p>
              </div>
            </div>
          </Card>

          <Card className="glass-card gradient-border p-6 animate-fade-in-up hover:scale-105 transition-smooth" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-accent/20 to-cyan-400/20 rounded-xl">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground text-sm">bubbacomissions@gmail.com</p>
              </div>
            </div>
          </Card>

          <Card className="glass-card gradient-border p-6 animate-fade-in-up hover:scale-105 transition-smooth" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-success/20 to-emerald-400/20 rounded-xl">
                <Clock className="w-6 h-6 text-success" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Response Time</h3>
                <p className="text-muted-foreground">Usually within 24 hours</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;