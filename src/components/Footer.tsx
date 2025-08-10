import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp,
  Heart
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Tax Planning", href: "#services" },
    { name: "GST Registration", href: "#services" },
    { name: "Income Tax Returns", href: "#services" },
    { name: "Business Advisory", href: "#services" },
    { name: "Financial Planning", href: "#services" },
    { name: "Audit Services", href: "#services" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
      </div>
      
      <div className="relative z-10">
        {/* Main Footer */}
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center shadow-glow">
                  <span className="font-bold text-xl">T</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Think About Tax</h3>
                  <p className="text-sm opacity-80">Tax Consultants India</p>
                </div>
              </div>
              
              <p className="text-white/90 leading-relaxed">
                Your trusted partner for comprehensive tax solutions and financial planning. 
                We provide exceptional services tailored to meet your unique needs with over 15 years of experience.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-sm">+91 62894 57089</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-sm">govindagarwalji07@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-sm">Kolkata, West Bengal, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6 animate-slide-in" style={{ animationDelay: '0.1s' }}>
              <h4 className="text-lg font-bold">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-white/80 hover:text-accent transition-smooth link-underline text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4">
                <h5 className="font-semibold mb-3">Business Hours</h5>
                <div className="space-y-1 text-sm text-white/80">
                  <p>Monday - Saturday</p>
                  <p className="text-accent font-medium">10:30 AM - 7:30 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-lg font-bold">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a 
                      href={service.href}
                      className="text-white/80 hover:text-accent transition-smooth link-underline text-sm"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h4 className="text-lg font-bold">Stay Connected</h4>
              
              <div className="space-y-4">
                <p className="text-white/80 text-sm">
                  Get the latest tax updates and financial tips directly in your inbox.
                </p>
                
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:border-accent transition-smooth text-sm"
                  />
                  <Button variant="accent" size="sm" className="px-4">
                    Subscribe
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold">Follow Us</h5>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth hover-scale"
                        aria-label={social.name}
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <span>© 2025 Think About Tax. Made with</span>
                <Heart className="h-4 w-4 text-accent animate-pulse" />
                <span>for your financial success.</span>
              </div>
              
              <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-white/80 hover:text-accent transition-smooth">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-white/80 hover:text-accent transition-smooth">
                  Terms of Service
                </a>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={scrollToTop}
                  className="text-white/80 hover:text-accent hover:bg-white/10"
                >
                  <ArrowUp className="h-4 w-4 mr-2" />
                  Back to Top
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;