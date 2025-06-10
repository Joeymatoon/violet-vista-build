import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase } from "lucide-react";

const CtaSections = () => {
  return (
    <div className="space-y-0">
      {/* Business CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Need on-demand talent for your business project?
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Access our pool of verified students from top universities. Post your project 
                and get proposals from qualified candidates within hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary-foreground/90">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  <span>Verified university students</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/90">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  <span>Quick project turnaround</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/90">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  <span>Secure milestone payments</span>
                </div>
              </div>
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2">
                <Briefcase className="h-5 w-5" />
                Post a Project
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-primary-foreground/10 rounded-2xl p-6 lg:p-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary-foreground">Business Benefits</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-foreground/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary-foreground">85%</div>
                    <div className="text-sm text-primary-foreground/80">Cost savings</div>
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary-foreground">3x</div>
                    <div className="text-sm text-primary-foreground/80">Faster delivery</div>
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary-foreground">98%</div>
                    <div className="text-sm text-primary-foreground/80">Client satisfaction</div>
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary-foreground">24/7</div>
                    <div className="text-sm text-primary-foreground/80">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student CTA */}
      <section className="py-16 md:py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground">
                Are you a student looking to gain real-world experience?
              </h2>
              <p className="text-lg text-accent-foreground/90 leading-relaxed">
                Join thousands of students who are building their careers through meaningful 
                freelance projects. Earn while you learn and build an impressive portfolio.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-accent-foreground/90">
                  <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                  <span>Build your professional portfolio</span>
                </div>
                <div className="flex items-center gap-3 text-accent-foreground/90">
                  <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                  <span>Earn competitive rates</span>
                </div>
                <div className="flex items-center gap-3 text-accent-foreground/90">
                  <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                  <span>Gain industry experience</span>
                </div>
              </div>
              <Button size="lg" variant="secondary" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 gap-2">
                <Users className="h-5 w-5" />
                Join as Student
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="lg:order-1 bg-accent-foreground/10 rounded-2xl p-6 lg:p-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-accent-foreground">Student Benefits</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent-foreground/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-accent-foreground">$2.5k</div>
                    <div className="text-sm text-accent-foreground/80">Avg monthly earnings</div>
                  </div>
                  <div className="bg-accent-foreground/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-accent-foreground">15+</div>
                    <div className="text-sm text-accent-foreground/80">Skills categories</div>
                  </div>
                  <div className="bg-accent-foreground/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-accent-foreground">4.8★</div>
                    <div className="text-sm text-accent-foreground/80">Average rating</div>
                  </div>
                  <div className="bg-accent-foreground/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-accent-foreground">Free</div>
                    <div className="text-sm text-accent-foreground/80">To join</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CtaSections;