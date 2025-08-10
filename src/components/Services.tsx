import { Card } from "@/components/ui/card";
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Building, 
  Shield, 
  Users,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Tax Consultation & Compliance",
      description: "Comprehensive tax planning and compliance services to navigate complex tax environments with confidence and accuracy.",
      color: "bg-blue-500",
      features: ["Personal Tax Planning", "Corporate Tax Strategy", "Compliance Management"]
    },
    {
      icon: FileText,
      title: "Direct & Indirect Taxes",
      description: "Expert guidance on income tax, GST, and other tax matters to ensure full compliance and optimal tax efficiency.",
      color: "bg-green-500",
      features: ["Income Tax Returns", "GST Filing", "TDS Management"]
    },
    {
      icon: TrendingUp,
      title: "Financial Advisory Services",
      description: "Strategic financial planning and investment advisory tailored to help you achieve your financial goals.",
      color: "bg-purple-500",
      features: ["Investment Planning", "Portfolio Management", "Retirement Planning"]
    },
    {
      icon: Building,
      title: "Business Tax Planning",
      description: "Specialized tax strategies for businesses to minimize tax liability while maintaining full regulatory compliance.",
      color: "bg-orange-500",
      features: ["Business Structure", "Tax Optimization", "Regulatory Compliance"]
    },
    {
      icon: Shield,
      title: "Audit & Assurance",
      description: "Professional audit services and statutory compliance to ensure transparency and trust in financial reporting.",
      color: "bg-red-500",
      features: ["Internal Audits", "Statutory Audits", "Risk Assessment"]
    },
    {
      icon: Users,
      title: "Corporate Advisory",
      description: "Strategic corporate advisory services including mergers, acquisitions, and business restructuring guidance.",
      color: "bg-indigo-500",
      features: ["M&A Advisory", "Due Diligence", "Business Valuation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Practice Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer a wide range of services designed to address the diverse tax and financial needs 
            of our clients, including comprehensive solutions for individuals and businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="group p-8 bg-gradient-card border-0 shadow-card hover-lift transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-glow group-hover:shadow-elegant transition-smooth`}>
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More */}
                  <div className="pt-4">
                    <Button variant="ghost" className="group-hover:text-primary transition-smooth p-0 h-auto">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-3xl p-12 text-primary-foreground animate-fade-in">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Tax Strategy?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let our experts help you navigate complex tax landscapes and achieve optimal financial outcomes.
          </p>
          <Button 
            variant="accent" 
            size="lg" 
            className="hover-scale font-semibold px-8 py-4"
          >
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;