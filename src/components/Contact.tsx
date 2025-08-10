import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Loader2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const openCalendly = () => {
    // @ts-ignore - Calendly is loaded externally
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/your-calendly-username'
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          service: formData.service || null,
          message: formData.message
        });

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (error: any) {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      content: "+91 98320 07515",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "thinkabout.tax@gmail.com",
      description: "Send us your queries anytime"
    },
    {
      icon: MapPin,
      title: "Office Location",
      content: "Mumbai, Maharashtra, India",
      description: "Visit our office for consultations"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "10:30 AM - 7:30 PM",
      description: "Monday to Saturday"
    }
  ];

  const services = [
    "Tax Planning & Consultation",
    "GST Registration & Filing",
    "Income Tax Returns",
    "Business Registration",
    "Financial Advisory",
    "Audit & Compliance"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to take control of your taxes and finances? Let's discuss how we can help you 
            achieve your financial goals with our expert consultation services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6 animate-slide-in">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={info.title}
                    className="p-6 bg-gradient-card border-0 shadow-card hover-lift animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-primary font-medium">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Services List */}
            <Card className="p-6 bg-gradient-primary text-primary-foreground border-0 shadow-elegant animate-fade-in">
              <h4 className="text-xl font-bold mb-4">Our Key Services</h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div 
                    key={service} 
                    className="flex items-center gap-3 animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm opacity-90">{service}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-card border-0 shadow-elegant animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name *</label>
                    <Input 
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address *</label>
                    <Input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      className="border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                      className="border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Service Needed</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => handleInputChange('service', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-border/50 bg-background focus:border-primary transition-smooth"
                    >
                      <option value="">Select a service</option>
                      <option value="tax-planning">Tax Planning</option>
                      <option value="gst-filing">GST Filing</option>
                      <option value="income-tax">Income Tax Returns</option>
                      <option value="business-registration">Business Registration</option>
                      <option value="financial-advisory">Financial Advisory</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message *</label>
                  <Textarea 
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your requirements or questions..."
                    rows={5}
                    className="border-border/50 focus:border-primary transition-smooth resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="premium" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full hover-scale"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Quick Contact CTA */}
            <div className="mt-8 bg-gradient-primary rounded-2xl p-6 text-primary-foreground animate-fade-in">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold mb-2">Ready to Get Started?</h4>
                  <p className="opacity-90">Schedule a free consultation to discuss your tax and financial needs.</p>
                </div>
                <Button 
                  variant="accent" 
                  size="lg" 
                  className="hover-scale flex-shrink-0"
                  onClick={openCalendly}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;