import profileImage from "@/assets/profile-quantum.jpg";
import { ArrowUpRight } from "lucide-react";
import { technicalPortfolioUrl } from "@/data/projects";
export default function AboutSection(){return <section id="sobre" className="scroll-mt-20 bg-noise py-20 md:py-28"><div className="container mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 md:grid-cols-5 md:gap-16">
<div className="md:col-span-2"><div className="overflow-hidden rounded-2xl border border-border shadow-2xl"><img src={profileImage} alt="Leonardo Camargo Rossato em apresentação sobre computação quântica" loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover"/></div></div>
<div className="md:col-span-3"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Sobre Leonardo</p><h2 className="font-display text-3xl leading-tight md:text-4xl">Pesquisar. Desenvolver. Comunicar.</h2>
<p className="mt-5 leading-relaxed text-foreground/85">Minha trajetória conecta pesquisa científica, desenvolvimento de tecnologias e comunicação de conhecimentos complexos para diferentes públicos.</p>
<div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
<p>Sou físico, mestre em Física pela <strong className="font-medium text-foreground">UFRGS</strong>, bacharel em Física pela <strong className="font-medium text-foreground">UFSM</strong> e doutorando em <strong className="font-medium text-foreground">Engenharia Eletrônica e Computação pelo ITA</strong>. Atuo com ciência de dados, inteligência artificial, desenvolvimento de software e tecnologias emergentes.</p>
<p>Como presidente do <strong className="font-medium text-foreground">Instituto Foton</strong>, participo de iniciativas que aproximam pesquisa, formação de talentos e tecnologia. A experiência em eventos empresariais, tecnológicos e científicos orienta palestras com rigor conceitual e linguagem acessível.</p>
<p>Em cada apresentação, busco aproximar o conhecimento da aplicação: explicar possibilidades, reconhecer limitações e contribuir para discussões relevantes.</p>
</div><p className="mt-6 border-l-2 border-primary/60 pl-4 text-sm italic text-foreground/70">“Um nerd que aprendeu a falar.”</p>
<a href={technicalPortfolioUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Conhecer projetos e soluções tecnológicas <ArrowUpRight className="h-4 w-4"/></a>
</div></div></section>;}