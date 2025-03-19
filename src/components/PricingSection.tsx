
import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

const pricingPlans = [
  {
    name: "Business Card Only",
    description: "Professional QR-coded business cards",
    price: "3-5",
    currency: "Birr",
    per: "per card",
    features: [
      "Front-only design (3 Birr)",
      "Front & Back design (5 Birr)",
      "High-quality paper",
      "Custom QR code",
      "Professional design",
      "Quick turnaround",
      "Free delivery in Addis Ababa"
    ],
    cta: "Order Now",
    popular: false
  },
  {
    name: "Website Only",
    description: "Custom website linked to your QR code",
    price: "10,000",
    currency: "Birr",
    per: "one-time",
    features: [
      "Personalized domain",
      "Mobile responsive design",
      "Up to 5 pages",
      "Contact form",
      "Social media integration",
      "Basic SEO setup",
      "One month free maintenance"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Basic Package",
    description: "Business cards + Website",
    price: "10,500",
    currency: "Birr",
    per: "one-time",
    features: [
      "100 Business cards (front & back)",
      "Custom website",
      "Mobile responsive design",
      "Social media integration",
      "One month free maintenance",
      "10% discount on renewal",
      "Priority support"
    ],
    cta: "Choose Plan",
    popular: false
  },
  {
    name: "Gold Package",
    description: "Our complete solution",
    price: "15,000",
    currency: "Birr",
    per: "one-time",
    features: [
      "200 Business cards (front & back)",
      "Premium website design",
      "Social media integration",
      "TikTok promotional video",
      "Three months free maintenance",
      "15% discount on renewal",
      "Priority support 24/7"
    ],
    cta: "Choose Plan",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <div className="section-container">
      <AnimatedSection animation="fade-in">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block">
            <h2 className="text-sm uppercase tracking-wider text-ethiopia-red font-semibold">Pricing Plans</h2>
            <div className="h-1 w-1/2 bg-ethiopia-gold mx-auto"></div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-ethiopia-brown mt-4">
            Transparent Pricing for Your Business Needs
          </h3>
          <p className="text-slate-700 mt-4">
            Choose the plan that works best for your business. All prices are in Ethiopian Birr (ETB).
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingPlans.map((plan, index) => (
          <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
            <div className={`bg-white rounded-lg border ${plan.popular ? 'border-ethiopia-gold shadow-lg ring-1 ring-ethiopia-gold' : 'border-slate-200'} overflow-hidden h-full flex flex-col`}>
              {plan.popular && (
                <div className="bg-ethiopia-gold text-white text-center py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-6 flex flex-col h-full">
                <h4 className="text-xl font-bold text-ethiopia-brown">{plan.name}</h4>
                <p className="text-slate-600 mt-1">{plan.description}</p>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-ethiopia-brown">{plan.price}</span>
                  <span className="text-slate-600 ml-1">{plan.currency}</span>
                  <span className="text-slate-500 text-sm"> {plan.per}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-ethiopia-red shrink-0 mr-2" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={plan.popular ? "default" : "outline"} className="w-full mt-auto">
                  {plan.cta}
                </Button>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
