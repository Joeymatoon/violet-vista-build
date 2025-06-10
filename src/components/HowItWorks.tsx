import { Search, Users, Shield, Star } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Explore Gig Projects",
      description: "Browse through hundreds of projects posted by students and find the perfect match for your skills and interests."
    },
    {
      icon: Users,
      title: "Connect & Collaborate",
      description: "Work with like-minded students, build relationships, and expand your professional network while gaining experience."
    },
    {
      icon: Shield,
      title: "Complete Projects Safely",
      description: "Our platform ensures secure payments, milestone tracking, and dispute resolution for a smooth experience."
    },
    {
      icon: Star,
      title: "Build Credibility",
      description: "Earn reviews, build your portfolio, and establish your reputation as a trusted freelancer in your field."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How GigScholars Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform makes it easy to connect students with meaningful work opportunities 
            and help businesses find talented individuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;