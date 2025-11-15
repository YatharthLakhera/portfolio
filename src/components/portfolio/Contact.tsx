import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Open to exciting opportunities in AI/ML, backend architecture, and
              technical leadership roles
            </p>
          </div>

          <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-border hover:border-primary/50 transition-all animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Get in Touch
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:yatharthlakhera75@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Email</div>
                      <div className="font-medium">
                        yatharthlakhera75@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+918266876226"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Phone</div>
                      <div className="font-medium">+91 8266876226</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Location
                      </div>
                      <div className="font-medium">Bangalore, India</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Connect Online
                </h3>

                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 border-border hover:border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/yatharth-lakhera-17935a87/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                      <span>Connect on LinkedIn</span>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 border-border hover:border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href="https://github.com/yatharthlakhera"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5 text-primary" />
                      <span>Follow on GitHub</span>
                    </a>
                  </Button>

                  <Button
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold"
                    asChild
                  >
                    <a href="mailto:yatharthlakhera75@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground pt-4">
                  I'm always interested in hearing about new opportunities,
                  especially in AI/ML and backend architecture.
                </p>
              </div>
            </div>
          </Card>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © 2025 Yatharth Lakhera. Built with React, Tailwind CSS, and
              passion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
