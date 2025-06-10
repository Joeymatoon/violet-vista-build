const Statistics = () => {
  const stats = [
    {
      number: "200+",
      label: "Universities",
      description: "Top institutions worldwide"
    },
    {
      number: "5,000+",
      label: "Active Students",
      description: "Talented freelancers ready to work"
    },
    {
      number: "750+",
      label: "Companies",
      description: "Trust our platform for their projects"
    },
    {
      number: "10,000+",
      label: "Projects Completed",
      description: "Successfully delivered with excellence"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg md:text-xl font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;