import { Code, Palette, BarChart, PenTool, Megaphone, Camera, Globe, Database } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      icon: Code,
      title: "Development",
      description: "Web, mobile, and software development projects",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX, graphic design, and creative projects",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      description: "Data science, analysis, and visualization",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: PenTool,
      title: "Content Writing",
      description: "Copywriting, blog posts, and content creation",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Megaphone,
      title: "Marketing",
      description: "Digital marketing, SEO, and social media",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: Camera,
      title: "Video Production",
      description: "Video editing, animation, and multimedia",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Globe,
      title: "Consulting",
      description: "Business strategy and professional consulting",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: Database,
      title: "Administration",
      description: "Virtual assistance and admin support",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Gig Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect project type for your skills and interests, or discover 
            talented students in the category you need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group"
            >
              <div className={`rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${category.color}`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="text-primary hover:text-primary/80 font-medium">
            View All Categories →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;