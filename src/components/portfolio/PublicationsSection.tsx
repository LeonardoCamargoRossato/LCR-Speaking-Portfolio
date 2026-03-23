import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Navigation, BarChart3, GraduationCap } from "lucide-react";

const projects = [
  {
    icon: Navigation,
    title: "Arquitetura de Navegação Híbrida",
    description: "Sistema de navegação independente de GPS baseado em sensores clássicos e quânticos.",
  },
  {
    icon: BarChart3,
    title: "Plataforma de Análise de Indicadores",
    description: "Ferramenta de análise socioeconômica utilizando grafos e ciência de dados.",
  },
  {
    icon: GraduationCap,
    title: "Aplicações Educacionais em Computação Quântica",
    description: "Ferramentas interativas para ensino e visualização de conceitos complexos.",
  },
];

const PublicationsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="publicacoes" className="py-24 md:py-32" ref={ref}>
      <div className="container max-w-5xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Projetos</p>
          <h2 className="font-display text-3xl md:text-4xl">Projetos em Destaque</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className={`p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </div>
            );
          })}
        </div>

        <p className={`text-center text-sm text-muted-foreground mt-10 italic ${isVisible ? "animate-reveal-up delay-400" : "opacity-0"}`}>
          Em breve: portfólio técnico completo.
        </p>
      </div>
    </section>
  );
};

export default PublicationsSection;
