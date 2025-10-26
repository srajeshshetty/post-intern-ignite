import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Award, ExternalLink } from "lucide-react";
import certificateBadge from "@/assets/certificate-badge.png";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Full Stack Development Certificate",
    issuer: "Tech Innovators Inc.",
    date: "September 2024",
    description: "Successfully completed 12-week intensive full stack development program",
  },
  {
    id: 2,
    title: "Frontend Excellence Award",
    issuer: "Digital Solutions Corp",
    date: "May 2024",
    description: "Recognized for outstanding UI/UX implementation and performance optimization",
  },
  {
    id: 3,
    title: "Software Engineering Certificate",
    issuer: "StartUp Dynamics",
    date: "December 2023",
    description: "Completed comprehensive software engineering internship with distinction",
  },
];

const CertificateShowcase = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Certificates & Awards
          </h2>
          <p className="text-lg text-muted-foreground">
            Official recognition of skills and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card
              key={cert.id}
              className="glass-card border-border hover:border-accent/50 transition-all duration-300 group hover:glow-accent"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                {/* Badge Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="relative w-24 h-24 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    <img 
                      src={certificateBadge} 
                      alt="Certificate Badge" 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-semibold mb-1">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </div>

                <p className="text-foreground/70 text-sm text-center mb-6">
                  {cert.description}
                </p>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 glass-card border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 glass-card border-accent/50 text-accent hover:bg-accent/10 hover:border-accent transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-accent to-accent-glow hover:opacity-90 text-accent-foreground border-0 glow-accent"
          >
            <Award className="w-5 h-5 mr-2" />
            Download All Certificates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CertificateShowcase;
