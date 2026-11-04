import heroImage from "@/assets/hero-stage.jpg";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
export default function HeroSection(){
return <section id="inicio" className="speaker-hero relative flex min-h-[720px] min-h-[100svh] items-end overflow-hidden pb-16 pt-28 md:pb-24" aria-labelledby="hero-title">
<img src={heroImage} alt="Leonardo Camargo Rossato no palco do Data Science Summit em Curitiba" fetchPriority="high" decoding="async" className="speaker-hero__image absolute inset-0 h-full w-full object-cover"/>
<div className="speaker-hero__overlay pointer-events-none absolute inset-0"/>
<div className="speaker-hero__copy container relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
<p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">Palestrante <span className="text-foreground/60">|</span> Pesquisador <span className="text-foreground/60">|</span> Tecnologia &amp; Inovação</p>
<h1 id="hero-title" className="max-w-4xl font-display text-4xl leading-[1.08] sm:text-6xl md:text-7xl lg:text-[5.5rem]">Leonardo Camargo Rossato</h1>
<p className="mt-5 max-w-3xl text-xl font-medium leading-snug sm:text-2xl">Ciência, tecnologia e inovação — do conhecimento à aplicação.</p>
<p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/80 sm:text-base md:text-lg">Físico, pesquisador e desenvolvedor de soluções tecnológicas. Conecto pesquisa científica, inteligência artificial e tecnologias quânticas em palestras e experiências de aprendizagem para empresas, profissionais e instituições.</p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
<a href="#contato" className="tech-cta-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold">Solicitar palestra <ArrowUpRight className="h-4 w-4"/></a>
<a href="#palestras" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-foreground/40 bg-background/35 px-6 py-3 font-medium backdrop-blur-sm hover:border-primary">Explorar palestras <ArrowDownRight className="h-4 w-4"/></a>
<a href="#eventos" className="inline-flex min-h-12 items-center justify-center px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:underline">Ver apresentações anteriores</a>
</div></div></section>;
}