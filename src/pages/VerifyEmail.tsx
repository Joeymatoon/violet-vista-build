import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useToast } from "@/hooks/use-toast";

const VerifyEmail = () => {
  const [value, setValue] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.length === 6) {
      toast({
        title: "Email verified!",
        description: "Your email has been successfully verified.",
      });
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
        <div className="max-w-md w-full space-y-8">
          {/* Mobile header */}
          <div className="lg:hidden text-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              GigScholars
            </Link>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Verify Email</h2>
            <p className="text-muted-foreground">
              We have sent an email to khal******@gmail.com
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex justify-center">
              <InputOTP
                maxLength={6}
                value={value}
                onChange={(value) => setValue(value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="text-sm text-muted-foreground text-center">
              By signing up, you agree to our <span className="font-medium text-foreground">terms</span> and <span className="font-medium text-foreground">conditions</span>
            </div>

            <Button 
              type="submit"
              className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={value.length !== 6}
            >
              Verify
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;