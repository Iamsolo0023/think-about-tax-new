import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Target, 
  Heart, 
  TrendingUp, 
  Users, 
  Clock,
  CheckCircle,
  ArrowRight 
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every service we provide, ensuring the highest quality standards."
    },
    {
      icon: Target,
      title: "Precision",
      description: "Our attention to detail and precision helps clients navigate complex tax regulations successfully."
    },
    {
      icon: Heart,
      title: "Trust",
      description: "Building lasting relationships through transparency, integrity, and consistent delivery."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We're committed to your financial growth and success through strategic planning and expert guidance."
    }
  ];

  const achievements = [
    { number: "500+", label: "Satisfied Clients", icon: Users },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "99%", label: "Success Rate", icon: CheckCircle },
    { number: "24/7", label: "Support Available", icon: Award }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8 animate-slide-in">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 text-primary text-sm font-medium">
                <Award className="h-4 w-4 mr-2" />
                About Think About Tax
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Your Trusted Tax & Financial 
                <span className="text-primary"> Partners</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Think About Tax, we are dedicated to providing exceptional tax and financial services 
                tailored to meet your unique needs. With over 15 years of experience in the industry, 
                we have established ourselves as a trusted partner for comprehensive tax solutions and 
                financial planning.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of certified professionals brings deep expertise in tax law, financial planning, 
                and business advisory services. We pride ourselves on delivering personalized solutions 
                that help our clients achieve their financial goals while ensuring full compliance with 
                regulatory requirements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="lg" className="hover-scale">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="hover-scale">
                View Our Services
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-in">
            <div className="relative bg-gradient-card rounded-3xl p-8 shadow-elegant">
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div 
                      key={value.title}
                      className="text-center space-y-3 animate-scale-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                        <IconComponent className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h3 className="font-bold text-foreground">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold shadow-glow animate-float">
              Certified Professionals
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={achievement.label}
                className="text-center p-8 bg-gradient-card border-0 shadow-card hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{achievement.label}</div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8 bg-gradient-primary text-primary-foreground border-0 shadow-elegant hover-lift animate-fade-in">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="leading-relaxed opacity-90">
                To provide exceptional tax and financial services that empower our clients to achieve 
                their financial goals while ensuring complete compliance and peace of mind.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-card border-0 shadow-elegant hover-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and preferred tax consultancy firm, known for our expertise, 
                integrity, and commitment to client success in the evolving financial landscape.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;