import { Code2, Database, Palette, Zap } from "lucide-react";

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"],
    color: "primary",
  },
  {
    icon: Database,
    title: "Backend & Database",
    skills: ["Node.js", "Python", "Django", "PostgreSQL", "MongoDB"],
    color: "accent",
  },
  {
    icon: Zap,
    title: "Tools & Technologies",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Agile/Scrum"],
    color: "primary",
  },
  {
    icon: Palette,
    title: "Design & UX",
    skills: ["Figma", "UI/UX Design", "Responsive Design", "Accessibility", "Design Systems"],
    color: "accent",
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            Technical expertise gained through internship experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="glass-card p-8 rounded-2xl hover:glow-primary transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-${category.color}/20 group-hover:bg-${category.color}/30 transition-colors`}>
                    <Icon className={`w-8 h-8 text-${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-secondary/50 text-foreground/90 text-sm font-medium 
                               hover:bg-primary/20 hover:text-primary border border-border hover:border-primary/50 
                               transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
