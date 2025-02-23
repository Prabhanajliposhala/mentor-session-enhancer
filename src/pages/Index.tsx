
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Code2, GitBranch, GitPullRequest, Star } from "lucide-react";

const Index = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      name: "Frontend Development Tool",
      description: "Streamline your frontend development workflow with powerful tools and insights.",
      stats: { stars: 128, prs: 45, branches: 12 }
    },
    {
      id: 2,
      name: "Code Analysis",
      description: "Deep dive into your codebase with advanced analysis and metrics.",
      stats: { stars: 89, prs: 32, branches: 8 }
    },
    {
      id: 3,
      name: "Performance Metrics",
      description: "Track and optimize your application's performance in real-time.",
      stats: { stars: 156, prs: 67, branches: 15 }
    }
  ];

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">
            Development Tools Dashboard
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enhance your development workflow with powerful tools and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`glass p-6 transition-fade relative overflow-hidden ${
                hoveredCard === project.id ? 'shadow-lg scale-[1.02]' : ''
              }`}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full transform translate-x-16 -translate-y-16" />
              
              <div className="relative">
                <div className="flex items-center mb-4">
                  <Code2 className="w-5 h-5 mr-2 text-muted-foreground" />
                  <h3 className="text-lg font-medium">{project.name}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center">
                      <GitPullRequest className="w-4 h-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">{project.stats.prs}</span>
                    </div>
                    <div className="flex items-center">
                      <GitBranch className="w-4 h-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">{project.stats.branches}</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="secondary"
                  className="w-full group hover:bg-secondary/80"
                >
                  View Details
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
