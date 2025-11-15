import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const highlights = [
  {
    icon: Code2,
    title: "Backend Architecture",
    description: "Built scalable systems supporting 200k+ events/day",
  },
  {
    icon: Zap,
    title: "AI/ML Integration",
    description: "Leveraged LLM/RAG for insurance automation",
  },
  {
    icon: Rocket,
    title: "Startup Scaling",
    description: "Scaled from Seed to Series C ($100M)",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Led technical teams through critical growth phases",
  },
];

export const About = () => {
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
    <section id="about" className="py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a passionate tech enthusiast who thrives in environments
                that value high ownership and collaborative discussions about
                feature development. I have consistently helped teams identify
                and eliminate features driven by personal biases, ensuring every
                addition is backed by data and has a realistic impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This approach has streamlined feature development, enabling
                faster deployment with maximum impact. While I have a deep
                interest in AI/ML for future opportunities, my experience in
                scaling startups from the ground up is rooted in my extensive
                backend knowledge.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">8+</span>
                  <span className="text-sm text-muted-foreground">
                    Years Experience
                  </span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-secondary">4</span>
                  <span className="text-sm text-muted-foreground">
                    Companies
                  </span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-accent">90%</span>
                  <span className="text-sm text-muted-foreground">
                    Cost Reduction
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className={`p-6 bg-card border-border hover:border-primary/50 transition-all group duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                  }}
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
