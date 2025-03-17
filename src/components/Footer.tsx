
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ethiopia-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-ethiopia-red to-ethiopia-gold flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xs">QR</span>
              </div>
              EthioQRConnect
            </h3>
            <p className="mb-4">
              Connecting traditional business cards with the digital world through innovative QR technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-ethiopia-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-ethiopia-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-ethiopia-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-ethiopia-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-ethiopia-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-ethiopia-gold transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-ethiopia-gold transition-colors">Pricing</a></li>
              <li><a href="#portfolio" className="hover:text-ethiopia-gold transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-ethiopia-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>+251 91-234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>info@ethioqrconnect.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Bole, Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} EthioQRConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
