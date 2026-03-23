import { useScrollReveal } from "@/hooks/useScrollReveal";
import stageImage from "@/assets/hero-stage.jpg";

const events = [
  { name: "MVP Conference 2025", role: "Curadoria da trilha de Computação Quântica e palestrante" },
  { name: "DSS Curitiba 2025", role: "Curadoria de palestrantes e painéis em computação quântica" },
  { name: "TechNow 2025", role: "Divulgação e aplicação estratégica das tecnologias quânticas" },
  { name: "Semana LACQ UFRGS", role: "Organização acadêmica e científica de evento de computação quântica" },
  { name: "MOBI Festival 2025", role: "Palestrante convidado" },
  { name: "ENAEPE 2025", role: "Palestrante e debatedor" },
  { name: "Aula Magna Unisinos", role: "Palestrante convidado" },
];

const EventsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="eventos" className="py-24 md:py-32 bg-noise" ref={ref}>
      {/* Full-width image */}
      <div className={`w-full mb-12 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <div className="aspect-[21/9] overflow-hidden">
          <img
            src={stageImage}
            alt="Leonardo palestrando em evento de tecnologia"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="container max-w-5xl mx-auto px-6">
        <div className={`${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Eventos</p>
          <h2 className="font-display text-3xl md:text-4xl mb-3 leading-tight">
            Tecnologia através da Ciência
          </h2>
          <p className="text-muted-foreground text-sm mb-8">Construindo pontes entre pesquisa acadêmica e o setor produtivo em todo o Brasil.</p>

          <div className="space-y-0">
            {events.map((event, i) => (
              <div
                key={event.name}
                className="py-4 border-b border-border last:border-0 group"
                style={{ animationDelay: `${(i + 2) * 80}ms` }}
              >
                <h3 className="font-semibold group-hover:text-primary transition-colors">{event.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{event.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
