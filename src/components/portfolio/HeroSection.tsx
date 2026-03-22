import heroImage from "@/assets/hero-speaking.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Leonardo Camargo Rossato palestrando sobre computação quântica"
          className="w-full h-full object-cover object-top"
        />
        {/* Bottom gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>

      <div className="relative z-10 container max-w-5xl mx-auto px-6">
        <div className="animate-reveal-up">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Palestrante · Pesquisador · Físico
          </p>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 animate-reveal-up delay-200">
          Leonardo Camargo Rossato
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-reveal-up delay-400">
          Conectando computação quântica, ciência de dados e inovação — do palco acadêmico ao mundo corporativo.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 animate-reveal-up delay-600">
          <a
            href="#contato"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-shadow hover:shadow-[0_0_24px_hsl(var(--gold-glow)/0.4)] active:scale-[0.97]"
          >
            Agendar Palestra
          </a>
          <a
            href="#temas"
            className="inline-flex items-center px-6 py-3 border border-foreground/20 text-foreground rounded-lg hover:border-foreground/40 transition-colors active:scale-[0.97]"
          >
            Ver Temas
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
