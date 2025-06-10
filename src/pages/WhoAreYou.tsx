import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, User } from "lucide-react";

const WhoAreYou = () => {
  const [selectedType, setSelectedType] = useState<string>("");
  const navigate = useNavigate();

  const handleProceed = () => {
    if (selectedType) {
      navigate("/select-expertise");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Purple background with content */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary flex-col justify-center px-12 text-primary-foreground">
        <div className="max-w-md">
          <Link to="/" className="text-2xl font-bold mb-8 block">
            GigScholars
          </Link>
          
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Show your talent and get hired anywhere.
          </h1>
          
          <div className="space-y-2 text-primary-foreground/90">
            <p>Join over 10,000+ talent across the globe.</p>
            <p>An average of 5 talents is hired every 60 seconds.</p>
          </div>

          {/* Decorative elements */}
          <div className="mt-12 space-y-4">
            <div className="bg-primary-foreground/10 rounded-lg p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-2 bg-primary-foreground/20 rounded mb-2"></div>
                  <div className="h-2 bg-primary-foreground/20 rounded w-3/4"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-foreground/10 rounded-lg p-4 max-w-xs ml-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-2 bg-primary-foreground/20 rounded mb-2"></div>
                  <div className="h-2 bg-primary-foreground/20 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-2xl w-full space-y-8">
          {/* Mobile header */}
          <div className="lg:hidden text-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              GigScholars
            </Link>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div className="w-2 h-2 rounded-full bg-muted"></div>
            <div className="w-2 h-2 rounded-full bg-muted"></div>
            <div className="w-2 h-2 rounded-full bg-muted"></div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-muted-foreground mb-2">Hi, Ibrahim</p>
              <h2 className="text-3xl font-bold text-foreground">What best describes you?</h2>
              <p className="text-muted-foreground mt-2">This will help us know how to set you up</p>
            </div>
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => setSelectedType("company")}
              className={`w-full p-6 rounded-lg border-2 transition-all text-left ${
                selectedType === "company"
                  ? "border-primary bg-primary/5"
                  : "border-border bg-background hover:border-primary/50"
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">A Company, I want to hire talents</h3>
                </div>
              </div>
            </button>

            <button
              onClick={() => setSelectedType("talent")}
              className={`w-full p-6 rounded-lg border-2 transition-all text-left ${
                selectedType === "talent"
                  ? "border-primary bg-primary/5"
                  : "border-border bg-background hover:border-primary/50"
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">A Talent, I want to get hired for gigs</h3>
                </div>
              </div>
            </button>
          </div>

          <div className="flex items-center justify-between pt-8">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-muted-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>back</span>
            </Button>

            <Button
              onClick={handleProceed}
              disabled={!selectedType}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreYou;