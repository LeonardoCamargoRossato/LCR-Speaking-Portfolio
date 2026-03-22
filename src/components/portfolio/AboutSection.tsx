import { useScrollReveal } from "@/hooks/useScrollReveal";
import profileImage from "@/assets/profile.jpg";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="sobre" className="py-24 md:py-32 bg-noise" ref={ref}>
      <div className="container max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Photo */}
          <div className={`md:col-span-2 ${isVisible ? "animate-reveal-left" : "opacity-0"}`}>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-background/50">
                <img
                  src={profileImage}
                  alt="Leonardo Camargo Rossato"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
            </div>
          </div>

          {/* Bio */}
          <div className={`md:col-span-3 ${isVisible ? "animate-reveal-right delay-200" : "opacity-0"}`}>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Sobre</p>
            <h2 className="font-display text-3xl md:text-4xl mb-2 leading-tight">
              Um nerd que aprendeu a falar
            </h2>
            <p className="text-primary/80 text-sm italic mb-6">Entendendo conceitos complexos de forma simples</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Físico, pesquisador e líder de iniciativas em computação quântica, econofísica e inovação aplicada. Cofundador do <strong className="text-foreground">ICTQ Fóton</strong> e da <strong className="text-foreground">LACQ Feynman</strong>, atuando na interseção entre pesquisa científica, desenvolvimento tecnológico e aplicações estratégicas.
              </p>
              <p>
                Doutorando em Engenharia pelo <strong className="text-foreground">ITA</strong>, Mestre em Física pela <strong className="text-foreground">UFRGS</strong> e Bacharel em Física pela <strong className="text-foreground">UFSM</strong>. Selecionado como único brasileiro entre sete pesquisadores apoiados mundialmente para o CCS 2023.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
              {[
                { value: "10+", label: "Estados" },
                { value: "5+", label: "Anos de pesquisa" },
                { value: "15+", label: "Eventos" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-display text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
