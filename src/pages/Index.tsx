
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-16">
        <Hero />
        <div className="flex justify-center mt-8">
          <a 
            href="#about" 
            className="flex items-center gap-2 text-ethiopia-brown hover:text-ethiopia-red transition-colors"
          >
            <span>Discover Our Services</span>
            <ChevronDown className="animate-bounce" size={20} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-16">
        <AboutSection />
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-16">
        <ServicesSection />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="scroll-mt-16">
        <PricingSection />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="scroll-mt-16">
        <PortfolioSection />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="scroll-mt-16">
        <TestimonialsSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-16">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
