import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$999",
      description: "Perfect for small projects",
      features: [
        "3 Page Design",
        "Responsive Layout",
        "2 Revisions",
        "Source Files",
        "2 Week Delivery",
      ],
      featured: false,
    },
    {
      name: "Professional",
      price: "$2,499",
      description: "Ideal for growing businesses",
      features: [
        "10 Page Design",
        "Advanced Animations",
        "5 Revisions",
        "Source Files + Assets",
        "Priority Support",
        "1 Week Delivery",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale projects",
      features: [
        "Unlimited Pages",
        "Custom Features",
        "Unlimited Revisions",
        "Complete Package",
        "Dedicated Support",
        "Flexible Timeline",
      ],
      featured: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose a plan that fits your needs. All plans include professional design and consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`p-8 backdrop-blur-sm transition-smooth animate-fade-in-up ${
                plan.featured
                  ? "bg-primary/5 border-primary scale-105 shadow-lg shadow-primary/20"
                  : "bg-card/50 border-border hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.featured && (
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">
                  {plan.price}
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                className={`w-full ${
                  plan.featured
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
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
