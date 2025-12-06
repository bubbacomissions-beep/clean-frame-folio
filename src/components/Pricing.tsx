import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const uiPlans = [
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

  const gfxPlans = [
    {
      name: "Basic",
      price: "$299",
      description: "Simple graphics & assets",
      features: [
        "Logo Design",
        "2 Concepts",
        "2 Revisions",
        "Source Files",
        "1 Week Delivery",
      ],
      featured: false,
    },
    {
      name: "Professional",
      price: "$799",
      description: "Full branding package",
      features: [
        "Logo + Brand Kit",
        "5 Concepts",
        "5 Revisions",
        "All Source Files",
        "Social Media Assets",
        "5 Day Delivery",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Complete visual identity",
      features: [
        "Full Brand Identity",
        "Unlimited Concepts",
        "Unlimited Revisions",
        "Marketing Materials",
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

  const renderPlanCard = (plan: typeof uiPlans[0], index: number) => (
    <Card
      key={plan.name}
      className={`glass-card p-8 transition-smooth animate-fade-in-up ${
        plan.featured
          ? "gradient-border scale-105 glow-primary"
          : "border-border/50 hover:border-primary/30"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {plan.featured && (
        <div className="text-center mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-primary to-pink-500 text-primary-foreground rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <div className="text-4xl font-bold mb-2 text-gradient-purple">
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
        className={`w-full ${
          plan.featured
            ? "bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90"
            : "bg-secondary hover:bg-secondary/80 border border-border"
        }`}
      >
        Get Started
      </Button>
    </Card>
  );

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        {/* UI Design Pricing */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-purple">UI Design</span> Pricing
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional UI design services for websites and applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {uiPlans.map((plan, index) => renderPlanCard(plan, index))}
          </div>
        </div>

        {/* GFX Design Pricing */}
        <div>
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-cyan">GFX Design</span> Pricing
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Creative graphics and branding solutions for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {gfxPlans.map((plan, index) => renderPlanCard(plan, index))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;