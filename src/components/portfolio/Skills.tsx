import { Card } from "@/components/ui/card";
import {
  Code,
  Database,
  Cloud,
  Cpu,
  GitBranch,
  Layout,
  Server,
  Brain,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    category: "Languages",
    icon: Code,
    skills: ["Java", "Python", "JavaScript", "TypeScript"],
    color: "from-primary to-cyan-400",
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["SpringBoot", "FastAPI", "Node.js", "Dropwizard"],
    color: "from-secondary to-purple-400",
  },
  {
    category: "Frontend",
    icon: Layout,
    skills: ["React", "Tailwind CSS", "Next.js"],
    color: "from-accent to-pink-400",
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["MySQL", "Firebase", "Elasticsearch", "Redis"],
    color: "from-primary to-blue-400",
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "GCP", "OCI", "Docker", "Kubernetes", "CI/CD"],
    color: "from-secondary to-indigo-400",
  },
  {
    category: "AI/ML",
    icon: Brain,
    skills: ["LLM/RAG", "OpenAI", "Gemini", "Document AI"],
    color: "from-accent to-violet-400",
  },
  {
    category: "Architecture",
    icon: Cpu,
    skills: [
      "Microservices",
      "Distributed Systems",
      "HLD & LLD",
      "Event-Driven",
    ],
    color: "from-primary to-teal-400",
  },
  {
    category: "Tools & Others",
    icon: GitBranch,
    skills: ["New Relic", "Git", "Team Management", "Problem Solving"],
    color: "from-secondary to-rose-400",
  },
];

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building scalable, high-performance
              systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className={`p-6 bg-card border-border hover:border-primary/50 transition-all group duration-700 ${
                  isVisible 
                    ? 'opacity-100 scale-100 rotate-0' 
                    : 'opacity-0 scale-50 rotate-45'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                  transformOrigin: 'center'
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
