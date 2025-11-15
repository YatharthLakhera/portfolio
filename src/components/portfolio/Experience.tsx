import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    company: "Yubi",
    role: "Technical Lead",
    period: "May 2025 - Present",
    description: "Leading technical initiatives and system architecture.",
    highlights: [],
    color: "from-primary to-cyan-400",
  },
  {
    company: "P0",
    role: "Solution Architect (Founding Team)",
    period: "Dec 2024 - 2025",
    description:
      "Worked on Code Parser backend by RAG-based model for identifying vulnerabilities directly from code.",
    highlights: ["RAG-based architecture", "Code vulnerability detection"],
    color: "from-secondary to-purple-400",
  },
  {
    company: "Ayu Health",
    role: "Technical Lead (Founding Team)",
    period: "April 2020 - 2024",
    description:
      "Full ownership of backend. Scaled from Seed to Series C ($100 million).",
    highlights: [
      "Built event-based system supporting 200k+ events/day",
      "AWS infrastructure optimization (40% cost reduction)",
      "Insurance SaaS with LLM/RAG (5hr → 1hr processing)",
      "Reduced AI costs from $5K to $2K/month (>60% savings)",
    ],
    color: "from-accent to-pink-400",
  },
  {
    company: "Ubona Technology",
    role: "Software Developer",
    period: "Dec 2018 - 2020",
    description:
      "Backend developer for UltraCash. Built complete UPI backend and BBPS integration.",
    highlights: [
      "End-to-end BBPS integration",
      "UPI backend development",
      "Credit card bills & IVR support",
    ],
    color: "from-primary to-blue-400",
  },
  {
    company: "Reach Mobile Technology",
    role: "Software Development Engineer",
    period: "July 2017 - 2018",
    description:
      "Developed reporting framework aggregating data from multiple services.",
    highlights: ["Multi-service data aggregation", "Reporting framework"],
    color: "from-secondary to-indigo-400",
  },
];

export const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.3 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Work <span className="text-primary">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              8+ years building scalable systems and leading technical initiatives
            </p>
          </div>

          <div className="relative">
            {/* Enhanced Timeline line with glow */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-50" />
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent blur-sm" />

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  ref={el => itemRefs.current[index] = el}
                  className={`relative transition-all duration-1000 ${
                    index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
                  } ${
                    visibleItems.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-20'
                  }`}
                >
                  {/* Enhanced Timeline dot with pulse */}
                  <div
                    className={`hidden md:flex absolute top-8 ${
                      index % 2 === 0 ? "right-[calc(50%-0.5rem)]" : "left-[calc(50%-0.5rem)]"
                    } w-4 h-4 items-center justify-center z-20`}
                  >
                    <div
                      className={`w-4 h-4 bg-gradient-to-br ${exp.color} rounded-full border-2 border-background shadow-lg animate-glow-pulse`}
                    />
                    <div
                      className={`absolute w-8 h-8 bg-gradient-to-br ${exp.color} rounded-full opacity-20 animate-ping`}
                    />
                  </div>

                  <Card className="p-8 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group relative overflow-hidden">
                    {/* Card hover gradient effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />
                    
                    <div className="space-y-6 relative">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex-1">
                          <h3
                            className={`text-3xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-2`}
                          >
                            {exp.company}
                          </h3>
                          <div className="flex items-center gap-2 text-foreground/90">
                            <Briefcase className="h-5 w-5 text-primary" />
                            <span className="font-semibold text-lg">{exp.role}</span>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="border-primary/50 text-primary bg-primary/10 px-4 py-2 text-sm"
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.period}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {exp.description}
                      </p>

                      {exp.highlights.length > 0 && (
                        <div className="space-y-3 pt-2">
                          {exp.highlights.map((highlight, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 group/item"
                            >
                              <div
                                className={`w-2 h-2 rounded-full bg-gradient-to-br ${exp.color} mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform`}
                              />
                              <span className="text-foreground/80 leading-relaxed group-hover/item:text-foreground transition-colors">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
