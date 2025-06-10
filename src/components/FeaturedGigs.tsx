import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock } from "lucide-react";

const FeaturedGigs = () => {
  const gigs = [
    {
      title: "E-commerce Website Development",
      description: "Looking for a skilled developer to build a modern e-commerce platform with React and Node.js",
      price: "$2,500",
      duration: "4-6 weeks",
      skills: ["React", "Node.js", "MongoDB"],
      student: {
        name: "Alex Chen",
        university: "MIT",
        rating: 4.9,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      },
      color: "from-blue-500/10 to-purple-500/10"
    },
    {
      title: "Brand Identity Design Package",
      description: "Complete brand identity design including logo, color palette, and style guide for tech startup",
      price: "$1,800",
      duration: "2-3 weeks",
      skills: ["Figma", "Illustrator", "Branding"],
      student: {
        name: "Maria Rodriguez",
        university: "Stanford",
        rating: 5.0,
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      },
      color: "from-pink-500/10 to-orange-500/10"
    },
    {
      title: "Data Analysis & Visualization",
      description: "Statistical analysis of customer data with interactive dashboards and insights report",
      price: "$1,200",
      duration: "2-4 weeks",
      skills: ["Python", "Tableau", "SQL"],
      student: {
        name: "David Kim",
        university: "UC Berkeley",
        rating: 4.8,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      },
      color: "from-green-500/10 to-teal-500/10"
    },
    {
      title: "Mobile App UI/UX Design",
      description: "Design intuitive and engaging user interface for fitness tracking mobile application",
      price: "$2,000",
      duration: "3-5 weeks",
      skills: ["Figma", "Prototyping", "UI/UX"],
      student: {
        name: "Sophie Turner",
        university: "Harvard",
        rating: 4.9,
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      },
      color: "from-purple-500/10 to-blue-500/10"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Gigs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover high-quality projects posted by talented students from top universities 
            around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gigs.map((gig, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 group"
            >
              <div className={`h-32 bg-gradient-to-br ${gig.color} p-4 flex items-end`}>
                <div className="flex items-center space-x-3">
                  <img
                    src={gig.student.avatar}
                    alt={gig.student.name}
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">{gig.student.name}</p>
                    <p className="text-xs text-muted-foreground">{gig.student.university}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {gig.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {gig.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>{gig.student.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{gig.duration}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {gig.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{gig.price}</span>
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="px-8">
            View All Gigs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGigs;