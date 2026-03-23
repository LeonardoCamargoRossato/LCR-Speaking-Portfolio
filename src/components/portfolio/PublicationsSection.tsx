import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

const PublicationsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="publicacoes" className="py-24 md:py-32" ref={ref}>
      <div className="container max-w-5xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Publicações</p>
          <h2 className="font-display text-3xl md:text-4xl">Pesquisa e Publicações</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="https://link.springer.com/article/10.1140/epjb/s10051-024-00766-5"
            target="_blank"
            rel="noopener noreferrer"
            className={`block p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 ${isVisible ? "animate-reveal-up delay-100" : "opacity-0"}`}
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">2024</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">European Physical Journal B</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Artigo em modelagem de sistemas físicos complexos a partir de estudo em matéria condensada e física estatística. Publicação com destaque internacional.
            </p>
          </a>

          <a
            href="https://www.sciencedirect.com/science/article/abs/pii/S0378437123003333"
            target="_blank"
            rel="noopener noreferrer"
            className={`block p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 ${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">2023</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Physica A — Statistical Mechanics</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Artigo em modelagem de sistemas físicos complexos. Publicação na Physica A com foco em mecânica estatística e suas aplicações.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
