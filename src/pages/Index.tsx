import Hero from "@/components/Hero";
import InternshipTimeline from "@/components/InternshipTimeline";
import CertificateShowcase from "@/components/CertificateShowcase";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <InternshipTimeline />
      <CertificateShowcase />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default Index;
