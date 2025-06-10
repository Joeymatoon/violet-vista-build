import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const SignupSuccess = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Purple background with decorative elements */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary flex-col justify-center px-12 text-primary-foreground relative overflow-hidden">
        <div className="max-w-md relative z-10">
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

        {/* Background decorative shapes */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent rounded-full opacity-20 -translate-x-16 translate-y-16"></div>
        <div className="absolute top-1/4 left-0 w-24 h-24 bg-accent rounded-full opacity-10 -translate-x-12"></div>
      </div>

      {/* Right side - Success content */}
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
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div className="w-2 h-2 rounded-full bg-muted"></div>
          </div>

          <div className="text-center space-y-8">
            {/* Greeting */}
            <div>
              <p className="text-muted-foreground text-lg mb-4">Hi, Ibrahim</p>
              <h2 className="text-4xl font-bold text-foreground mb-2">Welcome to GigScholars,</h2>
              <p className="text-muted-foreground text-lg">Where talents meets global opportunities</p>
            </div>

            {/* Success icon with decorative elements */}
            <div className="relative flex justify-center my-12">
              {/* Decorative elements around the circle */}
              <div className="absolute -top-4 -left-4 w-6 h-1 bg-pink-400 rounded-full transform rotate-45"></div>
              <div className="absolute -top-6 left-8 w-4 h-4 border-2 border-blue-400 rounded-full"></div>
              <div className="absolute -top-2 right-4 w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="absolute top-8 -right-6 w-4 h-1 bg-orange-400 rounded-full transform rotate-12"></div>
              <div className="absolute bottom-4 -left-8 w-3 h-3 bg-green-400 rounded-full"></div>
              <div className="absolute bottom-8 right-2 w-2 h-6 bg-purple-400 rounded-full transform rotate-45"></div>
              <div className="absolute -bottom-4 left-2 w-4 h-4 bg-gray-400 transform rotate-45"></div>

              {/* Main success circle */}
              <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center relative z-10">
                <Check className="w-12 h-12 text-primary-foreground" strokeWidth={3} />
              </div>
            </div>

            {/* Success message */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Congratulations, You are all set.</h3>
              <p className="text-muted-foreground text-lg">
                Your account is now active, you now have a chance to explore and take on new opportunities
              </p>
              <p className="text-muted-foreground">
                Click <Link to="/login" className="text-primary font-medium hover:underline">here</Link> to proceed to login.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupSuccess;