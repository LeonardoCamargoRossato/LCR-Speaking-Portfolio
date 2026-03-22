import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contato" className="py-24 md:py-32 bg-noise" ref={ref}>
      <div className="container max-w-3xl mx-auto px-6 text-center">
        <div className={`${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Contato</p>
          <h2 className="font-display text-3xl md:text-5xl mb-4 leading-tight">
            Vamos conversar sobre o futuro?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
            Disponível para palestras, workshops, consultorias e colaborações em pesquisa.
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 ${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
          <a
            href="mailto:leo.c.rossato@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-shadow hover:shadow-[0_0_24px_hsl(var(--gold-glow)/0.4)] active:scale-[0.97]"
          >
            <Mail className="w-4 h-4" />
            Enviar E-mail
          </a>
          <a
            href="https://linkedin.com/in/leonardocamargorossato"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 text-foreground rounded-lg hover:border-foreground/40 transition-colors active:scale-[0.97]"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>

        <div className={`flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground ${isVisible ? "animate-reveal-up delay-400" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2">
            <MapPin className="w-4 h-4" /> São José dos Campos — SP
          </span>
          <a
            href="https://github.com/LeonardoCamargoRossato"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
