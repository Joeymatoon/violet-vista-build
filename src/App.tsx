import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import VerifyEmail from "./pages/VerifyEmail";
import WhoAreYou from "./pages/WhoAreYou";
import SelectExpertise from "./pages/SelectExpertise";
import SignupSuccess from "./pages/SignupSuccess";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/who-are-you" element={<WhoAreYou />} />
          <Route path="/select-expertise" element={<SelectExpertise />} />
          <Route path="/signup-success" element={<SignupSuccess />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-applications" element={<Dashboard />} />
          <Route path="/wallet-earnings" element={<Dashboard />} />
          <Route path="/messages" element={<Dashboard />} />
          <Route path="/gigs" element={<Dashboard />} />
          <Route path="/saved-gigs" element={<Dashboard />} />
          <Route path="/profile-portfolio" element={<Dashboard />} />
          <Route path="/feedback-reviews" element={<Dashboard />} />
          <Route path="/help-support" element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
