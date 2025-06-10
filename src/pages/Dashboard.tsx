import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ResponsiveContainer,
  CartesianGrid
} from "recharts";
import { 
  Bell, 
  Search, 
  ChevronDown,
  FileText,
  Clock,
  CheckCircle,
  DollarSign,
  MapPin
} from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";

const chartData = [
  { month: "Jan", earnings: 1400 },
  { month: "Feb", earnings: 700 },
  { month: "Mar", earnings: 1600 },
  { month: "Apr", earnings: 1200 },
  { month: "May", earnings: 1450 },
  { month: "Jun", earnings: 1250 },
  { month: "Jul", earnings: 1200 },
  { month: "Aug", earnings: 2100 },
  { month: "Sep", earnings: 1500 },
  { month: "Oct", earnings: 1000 },
  { month: "Nov", earnings: 1400 },
  { month: "Dec", earnings: 1000 },
];

const recommendedGigs = [
  {
    title: "Senior React Developer",
    company: "Digital Innovations Ltd",
    rate: "$50-$70/hr",
    location: "Remote",
    type: "remote"
  },
  {
    title: "Senior React Developer", 
    company: "Digital Innovations Ltd",
    rate: "$50-$70/hr", 
    location: "Remote",
    type: "remote"
  }
];

const Dashboard = () => {
  const [timeFilter, setTimeFilter] = useState("Month");

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-background border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-primary">GigScholars</h1>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" className="text-foreground">
                  Jobs <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
            
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search for Jobs, Talents etc"
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="w-6 h-6 text-foreground" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
                <div className="text-sm">
                  <div className="font-medium text-foreground">Ibrahim Lakman</div>
                  <div className="text-muted-foreground text-xs">Admin</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Welcome Banner */}
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Welcome, Olanrewaju Ibrahim 👋</h2>
                  <p className="text-primary-foreground/90">
                    You have 5 active applications and 3 new messages. Keep up the great work.
                  </p>
                </div>
                <div className="w-20 h-20 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary-foreground/30 rounded transform rotate-45"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">Applied Gigs</span>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-foreground">15</div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <div className="text-xs text-muted-foreground">+5 this week</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <span className="text-sm text-muted-foreground">Ongoing Projects</span>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-foreground">5</div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: "50%" }}></div>
                  </div>
                  <div className="text-xs text-muted-foreground">+2 this week</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-sm text-muted-foreground">Completed</span>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-foreground">8</div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                  <div className="text-xs text-muted-foreground">+1 this week</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <DollarSign className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-sm text-muted-foreground">Total Earnings</span>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-foreground">$35,000</div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                  <div className="text-xs text-muted-foreground">+$5,000 this month</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gig Earnings Chart */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold text-foreground">Gig Earnings</CardTitle>
                <div className="flex space-x-2">
                  {["Week", "Month", "Year"].map((filter) => (
                    <Button
                      key={filter}
                      variant={timeFilter === filter ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTimeFilter(filter)}
                      className={timeFilter === filter ? "bg-primary text-primary-foreground" : ""}
                    >
                      {filter}
                    </Button>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="month" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Bar dataKey="earnings" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Recommended Gigs */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold text-foreground">Recommended Gigs</CardTitle>
                <Button variant="ghost" className="text-primary hover:text-primary/80">
                  Browse all
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {recommendedGigs.map((gig, index) => (
                  <Card key={index} className="border border-border">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{gig.title}</h3>
                          <p className="text-sm text-muted-foreground mb-1">{gig.company}</p>
                          <p className="text-sm text-muted-foreground mb-2">{gig.rate}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            {gig.location}
                          </div>
                        </div>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                          Apply
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;