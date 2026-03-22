import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Atom, BarChart3, Cpu, Radar, GraduationCap } from "lucide-react";

const topics = [
  {
    icon: Atom,
    title: "Tecnologias Quânticas",
    description: "Panorama, oportunidades, riscos e aplicações emergentes em setores estratégicos",
  },
  {
    icon: Cpu,
    title: "Computação Quântica",
    description: "Como aproximar ciência de fronteira do setor produtivo e industrial",
  },
  {
    icon: BarChart3,
    title: "Ciência de Dados",
    description: "Modelagem, correlações, redes e tomada de decisão baseada em dados",
  },
  {
    icon: Radar,
    title: "Fusão Sensorial",
    description: "Arquiteturas de sensores, integração de dados e validação de soluções",
  },
  {
    icon: GraduationCap,
    title: "Formação de Talentos",
    description: "Desenvolvimento de competências em áreas de alta complexidade tecnológica",
  },
];

const TopicsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="temas" className="py-24 md:py-32" ref={ref}>
      <div className="container max-w-5xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Temas</p>
          <h2 className="font-display text-3xl md:text-4xl mb-3">Quantum nos Negócios</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Entendendo conceitos complexos de forma simples — do laboratório à sala de reunião.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, i) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.title}
                className={`group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 active:scale-[0.98] ${
                  isVisible ? `animate-reveal-up` : "opacity-0"
                }`}
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{topic.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{topic.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
