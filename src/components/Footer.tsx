import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import achievementTrophy from "@/assets/achievement-trophy.png";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img src={achievementTrophy} alt="Achievement Trophy" className="w-12 h-12" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Achievements
              </h3>
            </div>
            <p className="text-muted-foreground">
              Showcasing professional growth through internships and continuous learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#timeline" className="hover:text-primary transition-colors">Journey</a></li>
              <li><a href="#certificates" className="hover:text-primary transition-colors">Certificates</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Connect With Me</h4>
            <div className="flex gap-4 justify-center md:justify-end">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 rounded-lg hover:glow-primary transition-all group"
              >
                <Github className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 rounded-lg hover:glow-primary transition-all group"
              >
                <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 rounded-lg hover:glow-primary transition-all group"
              >
                <Twitter className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="glass-card p-3 rounded-lg hover:glow-accent transition-all group"
              >
                <Mail className="w-5 h-5 text-foreground group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© 2024 Internship Achievements. Built with passion and dedication.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
