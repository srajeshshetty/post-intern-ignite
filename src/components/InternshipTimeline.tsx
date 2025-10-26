import { Calendar, MapPin, Briefcase } from "lucide-react";

interface Internship {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
}

const internships: Internship[] = [
  {
    id: 1,
    company: "Tech Innovators Inc.",
    role: "Full Stack Developer Intern",
    duration: "Jun 2024 - Sep 2024",
    location: "San Francisco, CA",
    description: "Developed scalable web applications using React and Node.js, collaborated with senior developers on microservices architecture.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    id: 2,
    company: "Digital Solutions Corp",
    role: "Frontend Developer Intern",
    duration: "Jan 2024 - May 2024",
    location: "Remote",
    description: "Built responsive user interfaces, optimized performance, and implemented modern design systems using Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    id: 3,
    company: "StartUp Dynamics",
    role: "Software Engineering Intern",
    duration: "Sep 2023 - Dec 2023",
    location: "New York, NY",
    description: "Contributed to product development, wrote clean code, performed code reviews, and learned agile methodologies.",
    technologies: ["Python", "Django", "PostgreSQL", "Docker"],
  },
];

const InternshipTimeline = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            My Internship Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional experiences that shaped my career
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary-glow to-accent"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {internships.map((internship, index) => (
              <div
                key={internship.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-accent glow-accent z-10"></div>

                {/* Content Card */}
                <div className={`md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card p-6 rounded-2xl hover:glow-primary transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {internship.role}
                        </h3>
                        <p className="text-lg text-accent font-semibold">{internship.company}</p>
                      </div>
                      <Briefcase className="w-8 h-8 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{internship.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{internship.location}</span>
                      </div>
                    </div>

                    <p className="text-foreground/80 mb-4">{internship.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipTimeline;
