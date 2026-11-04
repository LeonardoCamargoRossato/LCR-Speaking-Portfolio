import { ArrowUpRight, BookOpenText } from "lucide-react";
import { publications } from "@/data/publications";
export default function ScienceSection(){return <section id="pesquisa" className="scroll-mt-20 border-y border-border bg-card/50 py-16 md:py-20"><div className="container mx-auto max-w-6xl px-5 sm:px-6">
<div className="mb-8 flex items-center gap-3"><BookOpenText className="h-5 w-5 text-primary"/><h2 className="font-display text-2xl md:text-3xl">Pesquisa Científica &amp; Publicações</h2></div><p className="mb-8 max-w-3xl text-sm text-muted-foreground">Trabalhos selecionados que fundamentam a atuação em métodos quantitativos, sistemas complexos e análise de dados.</p>
<div className="grid gap-4 md:grid-cols-2">{publications.map(p=><article key={p.doi} className="rounded-xl border border-border bg-background/70 p-5">
<p className="text-xs font-semibold uppercase tracking-wider text-primary">{p.journal} · {p.year}</p><h3 className="mt-3 font-semibold leading-snug">{p.title}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.authors}</p>
<a href={"https://doi.org/"+p.doi} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 break-all text-sm text-primary hover:underline">DOI: {p.doi} <ArrowUpRight className="h-4 w-4 shrink-0"/></a></article>)}</div>
</div></section>;}