import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Linkedin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  return (
    <div className="section-container py-12">
      <AnimatedSection animation="fade-in">
        <div className="text-center mb-8">
          <h2 className="text-sm uppercase tracking-wider text-ethiopia-red font-semibold">
            Contact Us
          </h2>
          <div className="h-1 w-24 bg-ethiopia-gold mx-auto mt-1 mb-3"></div>
          <h3 className="text-3xl md:text-4xl font-bold text-ethiopia-brown">
            Get In Touch
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4">
            Have questions about our services or ready to enhance your business presence?
            Reach out to us through any of the channels below.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <AnimatedSection animation="fade-in-right">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="border-gray-300 focus:border-ethiopia-gold focus:ring-ethiopia-gold"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="border-gray-300 focus:border-ethiopia-gold focus:ring-ethiopia-gold"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="How can we help you?"
                className="border-gray-300 focus:border-ethiopia-gold focus:ring-ethiopia-gold"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us more about your needs..."
                className="border-gray-300 focus:border-ethiopia-gold focus:ring-ethiopia-gold h-32"
              />
            </div>
            
            <Button className="w-full bg-ethiopia-brown hover:bg-ethiopia-red text-white">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-left" delay={200}>
          <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-md h-full">
            <h4 className="font-bold text-xl mb-6 text-ethiopia-brown">Contact Information</h4>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-ethiopia-gold mr-4 mt-1" />
                <div>
                  <h5 className="font-semibold text-ethiopia-brown">Our Location</h5>
                  <p className="text-gray-600">Bole Road, Addis Ababa, Ethiopia</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-ethiopia-gold mr-4 mt-1" />
                <div>
                  <h5 className="font-semibold text-ethiopia-brown">Phone Number</h5>
                  <p className="text-gray-600">+251 91 234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-ethiopia-gold mr-4 mt-1" />
                <div>
                  <h5 className="font-semibold text-ethiopia-brown">Email Address</h5>
                  <p className="text-gray-600">info@ethioqrconnect.com</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h5 className="font-semibold text-ethiopia-brown mb-3">Follow Us</h5>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-ethiopia-gold hover:text-white transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-ethiopia-gold hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-ethiopia-gold hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ContactSection;
