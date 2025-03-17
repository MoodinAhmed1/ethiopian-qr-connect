
import { QrCode, Globe, Settings, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const serviceItems = [
  {
    icon: <QrCode className="h-10 w-10 text-ethiopia-red" />,
    title: "QR-Coded Business Cards",
    description: "Custom designed business cards with QR codes that link to your personalized website. Available for front-only or front-and-back designs.",
    features: ["Professional design", "High-quality printing", "Custom QR codes", "Quick turnaround"]
  },
  {
    icon: <Globe className="h-10 w-10 text-ethiopia-red" />,
    title: "Personalized Websites",
    description: "Tailored websites for businesses and professionals that showcase your services, portfolio, and contact information.",
    features: ["Mobile responsive", "SEO-friendly", "Customizable templates", "Social media integration"]
  },
  {
    icon: <Settings className="h-10 w-10 text-ethiopia-red" />,
    title: "Bundled Packages",
    description: "Get the best of both worlds with our bundled packages that include business cards, websites, and promotional content.",
    features: ["Basic Package: Card + Website", "Gold Package: Card + Website + TikTok Promotion", "Discounted rates", "Streamlined process"]
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-ethiopia-red" />,
    title: "Maintenance & Support",
    description: "Keep your online presence up-to-date with our maintenance and support services.",
    features: ["Weekly updates", "Technical support", "Content updates", "Performance monitoring"]
  }
];

const ServicesSection = () => {
  return (
    <div className="section-container bg-slate-50">
      <AnimatedSection animation="fade-in">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <h2 className="text-sm uppercase tracking-wider text-ethiopia-red font-semibold">Our Services</h2>
            <div className="h-1 w-1/2 bg-ethiopia-gold mx-auto"></div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-ethiopia-brown mt-4">
            Comprehensive QR Solutions for Your Business
          </h3>
          <p className="text-slate-700 mt-4">
            We offer a range of services designed to enhance your professional presence and connect your physical business cards with the digital world.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {serviceItems.map((service, index) => (
          <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-100 h-full">
              <div className="flex flex-col h-full">
                <div className="mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-ethiopia-brown mb-3">{service.title}</h4>
                <p className="text-slate-700 mb-4">{service.description}</p>
                <div className="mt-auto">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-ethiopia-gold mr-2"></span>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
