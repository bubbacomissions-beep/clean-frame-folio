import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "GFX",
      price: "1,500 – 5,000 Robux",
      description: "Perfect for quick visual assets",
      features: [
        "One thumbnail / icon of your choice",
        "Unlimited revisions",
        "24-hour delivery",
      ],
      gradient: "from-accent to-cyan-400",
    },
    {
      name: "UI",
      price: "500 – 2,000 Robux",
      description: "Ideal for small in-game feature design",
      features: [
        "One UI frame",
        "Unlimited revisions",
        "Any UI theme",
        "24-hour delivery",
      ],
      gradient: "from-primary to-pink-500",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-purple">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple, transparent pricing for all your design needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className="glass-card gradient-border p-8 transition-smooth animate-fade-in-up hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center`}>
                <span className="text-2xl font-bold text-white">{plan.name.charAt(0)}</span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-2xl font-bold mb-2 text-gradient-purple">
                  {plan.price}
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;