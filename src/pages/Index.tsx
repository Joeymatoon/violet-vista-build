import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import FeaturedGigs from "@/components/FeaturedGigs";
import Statistics from "@/components/Statistics";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import CtaSections from "@/components/CtaSections";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <Categories />
      <FeaturedGigs />
      <Statistics />
      <WhyChoose />
      <Testimonials />
      <CtaSections />
      <Footer />
    </div>
  );
};

export default Index;
