import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
      </div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm border border-white/20">
              <Award className="h-4 w-4 mr-2" />
              <span className="font-medium">EXPERTISE - PRECISION ALWAYS! DEDICATED TO TRUST. COMMITTED TO QUALITY</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Think About{" "}
              <span className="text-accent animate-glow">Tax</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
              At Think About Tax, we are dedicated to providing exceptional tax and financial services 
              tailored to meet your unique needs. Your trusted partner for comprehensive tax solutions 
              and financial planning since our establishment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              variant="accent" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg hover-scale"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
  size="lg" 
  variant="outline" 
  className="border-white/30 text-white bg-transparent hover:bg-white hover:text-primary px-8 py-4 text-lg"
>
  Post Your Article Here
</Button>

          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-white/80 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">99%</div>
              <div className="text-white/80 text-sm">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative animate-scale-in">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="aspect-[4/3] bg-gradient-card rounded-2xl overflow-hidden shadow-elegant">
              <div className="w-full h-full bg-gradient-to-br from-white/80 to-white/60 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full h-full p-6">
                  <div className="bg-primary/10 rounded-xl p-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <div className="bg-accent/10 rounded-xl p-4 flex items-center justify-center">
                    <TrendingUp className="h-12 w-12 text-accent" />
                  </div>
                  <div className="bg-accent/10 rounded-xl p-4 flex items-center justify-center">
                    <Award className="h-12 w-12 text-accent" />
                  </div>
                  <div className="bg-primary/10 rounded-xl p-4 flex items-center justify-center">
                    <div className="text-2xl font-bold text-primary">TAX</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent w-16 h-16 rounded-full flex items-center justify-center shadow-glow animate-float">
              <Award className="h-8 w-8 text-accent-foreground" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary w-12 h-12 rounded-full flex items-center justify-center shadow-glow animate-float" style={{ animationDelay: '1s' }}>
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;