import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Users, MessageSquare, Shield } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Welcome to AuthentiCity
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Discover authentic local experiences with verified guides across 7 global cities
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate("/login")}
            className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose AuthentiCity?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-elevated transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">70+ Local Guides</h3>
              <p className="text-muted-foreground">
                Connect with passionate locals across London, Paris, Tokyo, Mumbai, São Paulo, Cairo, and New York
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-elevated transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Matching</h3>
              <p className="text-muted-foreground">
                Tell us what you're looking for and our AI will match you with the perfect guide
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-elevated transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Direct Communication</h3>
              <p className="text-muted-foreground">
                Chat directly with guides to plan your perfect authentic experience
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-elevated transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Reviews</h3>
              <p className="text-muted-foreground">
                Read authentic reviews from real travelers and share your own experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Explore?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join AuthentiCity today and discover the world through the eyes of locals
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate("/login")}
          >
            Start Your Journey
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
