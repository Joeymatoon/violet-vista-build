import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Wallet,
  MessageSquare,
  Briefcase,
  Bookmark,
  User,
  Star,
  HelpCircle,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard
  },
  {
    name: "My Applications",
    href: "/my-applications", 
    icon: FileText
  },
  {
    name: "Wallet & Earnings",
    href: "/wallet-earnings",
    icon: Wallet
  },
  {
    name: "Messages",
    href: "/messages",
    icon: MessageSquare
  },
  {
    name: "Gigs", 
    href: "/gigs",
    icon: Briefcase
  },
  {
    name: "Saved Gigs",
    href: "/saved-gigs", 
    icon: Bookmark
  },
  {
    name: "Profile & Portfolio",
    href: "/profile-portfolio",
    icon: User
  },
  {
    name: "Feedback & Reviews",
    href: "/feedback-reviews",
    icon: Star
  },
  {
    name: "Help/Support",
    href: "/help-support",
    icon: HelpCircle
  }
];

const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className={cn(
      "bg-sidebar-background border-r border-sidebar-border transition-all duration-300 flex flex-col",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Collapse Button */}
      <div className="p-4 border-b border-sidebar-border">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <>
              <ChevronLeft className="h-4 w-4 mr-2" />
              {!isCollapsed && <span>Collapse</span>}
            </>
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;
          
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
                isCollapsed && "justify-center px-2"
              )}
              title={isCollapsed ? item.name : undefined}
            >
              <Icon className={cn("h-5 w-5 flex-shrink-0", !isCollapsed && "mr-3")} />
              {!isCollapsed && (
                <span className="truncate">{item.name}</span>
              )}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default DashboardSidebar;