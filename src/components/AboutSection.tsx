
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

const AboutSection = () => {
  return (
    <div className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AnimatedSection animation="fade-in-right">
          <div className="space-y-4">
            <div className="inline-block">
              <h2 className="text-sm uppercase tracking-wider text-ethiopia-red font-semibold">About Us</h2>
              <div className="h-1 w-1/2 bg-ethiopia-gold"></div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-ethiopia-brown">
              Bridging Traditional Business Cards with Digital Innovation
            </h3>
            <p className="text-slate-700">
              Founded in Addis Ababa, EthioQRConnect was born from a vision to help Ethiopian businesses 
              and professionals enhance their digital presence while maintaining the professionalism of 
              physical business cards.
            </p>
            <p className="text-slate-700">
              Our unique approach combines traditional Ethiopian craftsmanship with cutting-edge QR technology, 
              creating a seamless bridge between physical and digital worlds. We're proud of our Ethiopian 
              heritage and committed to supporting local businesses in their journey toward digital transformation.
            </p>
            <Button className="mt-4 group">
              Learn More 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-left" delay={200}>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-ethiopia-pattern opacity-10 rounded-lg"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Team at EthioQRConnect" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-ethiopia-pattern opacity-10 rounded-lg"></div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutSection;
