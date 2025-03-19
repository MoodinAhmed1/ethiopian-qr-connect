
import { cn } from '@/lib/utils';
import { ArrowRight, Globe, QrCode } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center pt-10 pattern-bg overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="space-y-6" animation="fade-in-left">
            <div className="space-y-2">
              <p className="text-ethiopia-gold font-medium inline-flex items-center">
                <span className="bg-ethiopia-gold/10 px-2 py-1 rounded-full text-sm">
                  Elevate Your Networking
                </span>
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ethiopia-brown leading-tight">
                Business Cards 
                <span className="block text-ethiopia-red">Meet the Digital Age</span>
              </h1>
            </div>
            
            <p className="text-lg text-ethiopia-brown/80 max-w-xl">
              We revolutionize how Ethiopian professionals connect, blending 
              beautiful physical business cards with powerful digital presence 
              through custom QR codes and personalized websites.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="bg-ethiopia-red hover:bg-ethiopia-red/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#services" 
                className="bg-transparent hover:bg-ethiopia-light border-2 border-ethiopia-gold text-ethiopia-brown px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
              >
                Explore Services
              </a>
            </div>
            
            <div className="pt-8 flex items-center space-x-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={cn(
                    "w-10 h-10 rounded-full border-2 border-white",
                    i === 1 && "bg-ethiopia-red",
                    i === 2 && "bg-ethiopia-brown",
                    i === 3 && "bg-ethiopia-gold",
                    i === 4 && "bg-ethiopia-cream",
                  )} />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-medium">Trusted by 150+ businesses</p>
                <div className="flex mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-ethiopia-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="relative" animation="fade-in-right">
            <div className="relative">
              {/* Main card animation */}
              <div className="absolute top-10 right-0 w-56 h-32 bg-ethiopia-brown rounded-lg shadow-xl animate-float rotate-6">
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <QrCode className="w-12 h-12 text-ethiopia-red" />
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -bottom-5 -left-10 w-40 h-40 bg-ethiopia-pattern opacity-10 rounded-full"></div>
              <div className="absolute top-20 -left-8 w-20 h-20 bg-ethiopia-gold/20 rounded-full animate-pulse-slow"></div>
              
              {/* Main mockup */}
              <div className="glass-card max-w-md mx-auto p-5">
                <div className="rounded-xl overflow-hidden bg-white shadow-lg">
                  <div className="h-8 bg-ethiopia-red flex items-center px-4 gap-2">
                    <div className="h-3 w-3 rounded-full bg-white opacity-70"></div>
                    <div className="h-3 w-3 rounded-full bg-white opacity-70"></div>
                    <div className="h-3 w-3 rounded-full bg-white opacity-70"></div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-ethiopia-gold flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2.5 bg-gray-200 rounded w-24 mb-2"></div>
                        <div className="h-2 bg-gray-100 rounded w-32"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-2 gap-2">
                      <div className="h-12 bg-ethiopia-light rounded flex items-center justify-center">
                        <QrCode className="w-6 h-6 text-ethiopia-red" />
                      </div>
                      <div className="h-12 bg-ethiopia-light rounded">
                        <div className="h-full flex items-center justify-center">
                          <div className="space-y-1.5">
                            <div className="h-1.5 w-12 bg-gray-300 rounded"></div>
                            <div className="h-1.5 w-16 bg-gray-300 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 mb-4 space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div className="space-y-2 flex-1">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 -right-10 w-20 h-20 bg-ethiopia-red/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-20 w-32 h-32 bg-ethiopia-gold/10 rounded-full blur-xl"></div>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
