import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import stageImage from "@/assets/hero-stage.jpg";
import { GraduationCap, Rocket, Globe, Building2 } from "lucide-react";

const categories = [
  {
    id: "tech",
    label: "Tecnologia & Mercado",
    icon: Rocket,
    events: [
      { name: "SecOps Summit Porto Alegre 2026", role: "Palestrante" },
      { name: "South Summit Porto Alegre 2026", role: "Palestrante" },
      { name: "MVP Conference 2025", role: "Microsoft — Palestrante + curador" },
      { name: "Esquenta MVP POA 2025", role: "Palestrante + painelista" },
      { name: "DSS Curitiba 2025", role: "Data Science Summit — Curadoria + trilha quântica" },
      { name: "TechNow 2025", role: "SUCESU-RS — Palestrante" },
      { name: "Latinoware 2025", role: "Itaipu — Curadoria e trilha quântica" },
      { name: "Expointer 2025", role: "Palestrante — Tecnologias quânticas" },
      { name: "DSS Curitiba 2024", role: "Data Science Summit — Palestrante" },
    ],
  },
  {
    id: "academic",
    label: "Acadêmicos",
    icon: GraduationCap,
    events: [
      { name: "EOSBF 2025", role: "Encontro de Outono da SBF — Apresentação oral" },
      { name: "EOSBF 2024", role: "Encontro de Outono da SBF — Apresentação de trabalho" },
      { name: "ENFE 2024", role: "Encontro Nacional de Física Estatística — Apresentação de trabalho" },
      { name: "CCS 2023", role: "Conference on Complex Systems — Apresentação oral internacional (bolsa YSI)" },
      { name: "IIP Natal 2023", role: "Workshop on New Frontiers in Emergent Materials — Apresentação de trabalho" },
      { name: "EOSBF 2023", role: "Encontro de Outono da SBF — Apresentação de trabalho" },
      { name: "EIEMAT 2023", role: "Encontro Interinstitucional de Educação Matemática — Minicurso / palestra" },
    ],
  },
  {
    id: "outreach",
    label: "Palestras & Divulgação",
    icon: Globe,
    events: [
      { name: "MOBI Festival 2025", role: "Sorocaba — Palestrante" },
      { name: "ENAEPE 2025", role: "Manaus — Palestrante" },
      { name: "Evento Quântico Manaus 2025", role: "Tecnologias Quânticas — Palestrante" },
      { name: "Workshop Computação Quântica Floripa", role: "7ª Edição — Palestrante" },
    ],
  },
  {
    id: "institutional",
    label: "Institucional & Universidades",
    icon: Building2,
    events: [
      { name: "Inauguração LACQ USP 2025", role: "Palestrante" },
      { name: "Inauguração LACQ PUCRS 2025", role: "Palestrante" },
      { name: "Jornada Foton–LACQ Tecnopuc 2025", role: "Tecnologias Quânticas — Palestrante recorrente" },
      { name: "Semana LACQ UFRGS 2025", role: "Computação Quântica — Organização + palestras" },
      { name: "Aula Magna UNISINOS 2025", role: "PPG Administração — Palestrante" },
      { name: "Inauguração LACQ UFRGS 2024", role: "Palestrante" },
    ],
  },
];

const EventsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState("tech");

  const activeCategory = categories.find((c) => c.id === activeTab)!;

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
          <p className="text-muted-foreground text-sm mb-8">
            Construindo pontes entre pesquisa acadêmica e o setor produtivo em mais de 10 estados brasileiros.
          </p>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === cat.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Events list */}
          <div className="space-y-0">
            {activeCategory.events.map((event, i) => (
              <div
                key={event.name}
                className="py-4 border-b border-border last:border-0 group animate-fade-in"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <h3 className="font-semibold group-hover:text-primary transition-colors">{event.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{event.role}</p>
              </div>
            ))}
          </div>

          {/* Total count */}
          <p className="text-xs text-muted-foreground mt-6 pt-4 border-t border-border">
            {categories.reduce((acc, c) => acc + c.events.length, 0)}+ eventos entre conferências acadêmicas, tecnologia, divulgação e institucionais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
