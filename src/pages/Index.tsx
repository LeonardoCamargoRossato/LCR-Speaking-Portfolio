import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import TopicsSection from "@/components/portfolio/TopicsSection";
import EventsSection from "@/components/portfolio/EventsSection";
import PublicationsSection from "@/components/portfolio/PublicationsSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TopicsSection />
      <EventsSection />
      <PublicationsSection />
      <ContactSection />
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <div className="container max-w-5xl mx-auto px-6">
          © {new Date().getFullYear()} Leonardo Camargo Rossato. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Index;
