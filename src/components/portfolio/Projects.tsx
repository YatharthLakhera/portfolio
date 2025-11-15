import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Brain,
  TrendingDown,
  Zap,
  ArrowRight,
  FileCheck,
  DollarSign,
  Clock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

const projects = [
  {
    title: "Insurance SaaS Platform",
    company: "Ayu Health",
    description:
      "Built AI-powered insurance processing system leveraging LLM/RAG for document classification, compliance detection, and data extraction.",
    icon: FileCheck,
    gradient: "from-primary to-cyan-500",
    metrics: [
      {
        icon: Clock,
        label: "Processing Time",
        value: "5hr → 1hr",
        improvement: "-80%",
      },
      {
        icon: DollarSign,
        label: "Monthly Cost",
        value: "$5K → $2K",
        improvement: "-60%",
      },
      {
        icon: Zap,
        label: "Accuracy",
        value: "95%",
        improvement: "document classification",
      },
    ],
    technologies: [
      "ChatGPT",
      "DocumentAI",
      "Gemini",
      "OCR",
      "Python",
      "FastAPI",
    ],
    highlights: [
      "Custom search solution for lightning-fast cross-referencing",
      "95% accuracy in document classification",
      "Automated compliance issue detection on upload",
      "Fastest processing time in the industry",
    ],
  },
  {
    title: "Financial AI Agent Chatbot",
    company: "Stealth Startup",
    description:
      "Built data pipelines and AI Agent providing real-time financial insights and analysis.",
    icon: Brain,
    gradient: "from-secondary to-purple-500",
    metrics: [
      {
        icon: Brain,
        label: "AI Model",
        value: "RAG-based",
        improvement: "multi-source",
      },
      {
        icon: Zap,
        label: "Response Time",
        value: "<2s",
        improvement: "real-time insights",
      },
    ],
    technologies: [
      "RAG",
      "LangChain",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
    ],
    highlights: [
      "Technical Advisor role in stealth startup",
      "Built complete data pipeline architecture",
      "Real-time financial data aggregation",
      "Intelligent query understanding and response",
    ],
  },
  {
    title: "OCQ (Outbound Calling Queue)",
    company: "Ayu Health",
    description:
      "Automated & prioritized calling system that revolutionized customer engagement by real-time lead prioritization and automated call triggering.",
    icon: TrendingDown,
    gradient: "from-accent to-pink-500",
    metrics: [
      {
        icon: TrendingDown,
        label: "Pickup Rate",
        value: "+25%",
        improvement: "customer engagement",
      },
      {
        icon: Zap,
        label: "Productivity",
        value: "+30%",
        improvement: "agent efficiency",
      },
      {
        icon: DollarSign,
        label: "Conversion",
        value: "+1%",
        improvement: "revenue impact",
      },
    ],
    technologies: [
      "Event-Driven",
      "Java",
      "SpringBoot",
      "MySQL",
      "Redis",
      "AWS",
    ],
    highlights: [
      "Single-handedly designed and built complete backend",
      "Event-based architecture handling 200k+ events/day",
      "Real-time prioritization based on 30+ business parameters",
      "Shadow deployment strategy for zero-downtime release",
    ],
  },
  {
    title: "Dashly - Real-time Analytics Dashboard",
    company: "Yubi",
    description:
      "Enterprise-grade data analytics platform empowering stakeholders with real-time insights through LLM-powered query optimization and lightning-fast visualizations.",
    icon: Brain,
    gradient: "from-secondary to-purple-500",
    metrics: [
      {
        icon: Zap,
        label: "Performance",
        value: "P95 <200ms",
        improvement: "visualization speed",
      },
      {
        icon: Brain,
        label: "Query Builder",
        value: "LLM-powered",
        improvement: "optimized data fetch",
      },
    ],
    technologies: [
      "LLM",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "React",
    ],
    highlights: [
      "Multi-database connectivity with unified interface",
      "LLM-powered query builder for optimized data fetching",
      "Lazy async caching for lightning-fast performance",
      "Periodic on-demand sync to keep data fresh",
    ],
  },
];

export const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Impactful solutions leveraging AI/ML and scalable architecture
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all group h-full overflow-hidden relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                    />
                    
                    <div className="relative space-y-4">
                      {/* Header */}
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}
                        >
                          <project.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold text-foreground truncate">
                            {project.title}
                          </h3>
                          <Badge variant="outline" className="border-primary/50 text-xs">
                            {project.company}
                          </Badge>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {/* Metrics - Always visible */}
                      <div className="grid grid-cols-2 gap-2">
                        {project.metrics.slice(0, 2).map((metric, i) => (
                          <div
                            key={i}
                            className="p-3 bg-muted/50 rounded-lg border border-border"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <metric.icon className="h-3 w-3 text-primary" />
                              <span className="text-xs text-muted-foreground">
                                {metric.label}
                              </span>
                            </div>
                            <div className="font-bold text-foreground text-sm">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Expandable section */}
                      <div
                        className={`space-y-4 transition-all duration-300 overflow-hidden ${
                          expandedIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Highlights */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">
                            Key Highlights
                          </h4>
                          <div className="space-y-2">
                            {project.highlights.map((highlight, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <ArrowRight className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-muted-foreground">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Expand/Collapse button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpand(index)}
                        className="w-full text-primary hover:text-primary hover:bg-primary/10"
                      >
                        {expandedIndex === index ? (
                          <>
                            <ChevronUp className="mr-2 h-4 w-4" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="mr-2 h-4 w-4" />
                            Show More
                          </>
                        )}
                      </Button>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
