import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-background py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Connect with the{" "}
              <span className="text-primary">next-gen</span>{" "}
              workforce
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Access talented student freelancers with the latest skills from the world's top universities. 
              Build your team with skilled, motivated individuals ready to make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 gap-2">
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-2">
                Trusted by thousands of companies worldwide
              </p>
              <div className="text-xs text-muted-foreground">
                ⭐⭐⭐⭐⭐ 4.9/5 • 10,000+ successful projects
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-6 lg:p-8">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Team collaboration"
                className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg">
                <div className="text-sm font-medium text-foreground">Sarah from Stanford</div>
                <div className="text-xs text-muted-foreground">Full-Stack Developer</div>
                <div className="flex items-center gap-1 mt-2">
                  <span className="text-xs">⭐⭐⭐⭐⭐</span>
                  <span className="text-xs text-muted-foreground">4.9 (127 reviews)</span>
                </div>
                <Button size="sm" className="w-full mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  View Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;