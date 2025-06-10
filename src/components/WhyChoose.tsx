import { Shield, Users, Zap, Award, Clock, DollarSign } from "lucide-react";

const WhyChoose = () => {
  const benefits = [
    {
      icon: Users,
      title: "Vetted Talent",
      description: "All students are verified from accredited universities with proven academic records and skill assessments."
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Protected transactions with milestone-based payments and dispute resolution to ensure project success."
    },
    {
      icon: Zap,
      title: "Quick Turnaround",
      description: "Fast project delivery with dedicated students eager to build their portfolios and gain experience."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "High standards maintained through peer reviews, ratings system, and continuous feedback loops."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you navigate projects and resolve any issues quickly."
    },
    {
      icon: DollarSign,
      title: "Budget Friendly",
      description: "Competitive rates from motivated students looking to gain real-world experience and build careers."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose GigScholars
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the advantages of working with the next generation of professionals 
            through our comprehensive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;