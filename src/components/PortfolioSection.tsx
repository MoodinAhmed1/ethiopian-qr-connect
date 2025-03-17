
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

const portfolioItems = {
  "Business Cards": [
    {
      title: "Modern Professional",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
      description: "Clean and professional business card with QR code link to portfolio website."
    },
    {
      title: "Creative Designer",
      image: "https://images.unsplash.com/photo-1598031642727-9211d3f53f38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
      description: "Artistic business card for creative professionals with front and back design."
    },
    {
      title: "Corporate Executive",
      image: "https://images.unsplash.com/photo-1606164420079-48f4mo865ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
      description: "Premium business card design with Ethiopian-inspired elements for executives."
    },
    {
      title: "Consultant",
      image: "https://images.unsplash.com/photo-1516992349965-944e6aad3e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
      description: "Simple yet elegant business card design for consultants and advisors."
    }
  ],
  "Websites": [
    {
      title: "Restaurant Portfolio",
      image: "https://images.unsplash.com/photo-1561625387-4b78c62b8014?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
      description: "Digital menu and restaurant website connected to business card QR code."
    },
    {
      title: "Photographer Portfolio",
      image: "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
      description: "Visual portfolio website for photographers to showcase their work."
    },
    {
      title: "Law Firm Website",
      image: "https://images.unsplash.com/photo-1518300608256-6f85880465e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
      description: "Professional website for legal services with contact and appointment features."
    },
    {
      title: "Coffee Shop",
      image: "https://images.unsplash.com/photo-1503248947681-3198a7abfcc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
      description: "Interactive website for a local coffee shop with online ordering capability."
    }
  ],
  "Packages": [
    {
      title: "Real Estate Agent",
      image: "https://images.unsplash.com/photo-1582407547580-74a431180d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
      description: "Complete package with business cards and website for property listings."
    },
    {
      title: "Fashion Boutique",
      image: "https://images.unsplash.com/photo-1590380397215-a594012886e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
      description: "Gold package with business cards, website, and TikTok promotional content."
    },
    {
      title: "Dental Clinic",
      image: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
      description: "Healthcare package with appointment system integrated into business card QR code."
    },
    {
      title: "Fitness Trainer",
      image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
      description: "Basic package for fitness professionals with scheduling capabilities."
    }
  ]
};

const PortfolioSection = () => {
  const [category, setCategory] = useState("Business Cards");
  const categories = Object.keys(portfolioItems);

  return (
    <div className="section-container bg-slate-50">
      <AnimatedSection animation="fade-in">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block">
            <h2 className="text-sm uppercase tracking-wider text-ethiopia-red font-semibold">Our Portfolio</h2>
            <div className="h-1 w-1/2 bg-ethiopia-gold mx-auto"></div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-ethiopia-brown mt-4">
            Our Recent Projects
          </h3>
          <p className="text-slate-700 mt-4">
            Browse through our collection of business cards and websites that we've created for our clients.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-in" delay={100}>
        <Tabs defaultValue="Business Cards" className="w-full">
          <TabsList className="w-full flex justify-center mb-8">
            {categories.map((cat) => (
              <TabsTrigger 
                key={cat} 
                value={cat}
                onClick={() => setCategory(cat)}
                className="px-6"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((cat) => (
            <TabsContent key={cat} value={cat} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {portfolioItems[cat as keyof typeof portfolioItems].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-slate-100 hover-lift"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-lg text-ethiopia-brown">{item.title}</h4>
                      <p className="text-slate-600 text-sm mt-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </AnimatedSection>
    </div>
  );
};

export default PortfolioSection;
