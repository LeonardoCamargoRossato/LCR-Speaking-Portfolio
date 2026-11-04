import { useState } from "react";
import { eventCategories, featuredEvents } from "@/data/events";
import { ArrowUpRight, MapPin } from "lucide-react";
import southSummit from "@/assets/gallery-southsummit1.jpg";
import autocom from "@/assets/gallery-autocom1.jpg";
import mvp from "@/assets/gallery-quantum.jpg";
import latinoware from "@/assets/gallery-latinoware.jpg";
import dss from "@/assets/hero-stage.jpg";
const photos:Record<string,string>={southsummit:southSummit,autocom,mvp,latinoware,dss};
export default function EventsSection(){
 const [activeTab,setActiveTab]=useState("tech");
 const category=eventCategories.find(x=>x.id===activeTab)||eventCategories[0];
 return <section id="eventos" className="scroll-mt-20 bg-noise py-20 md:py-28"><div className="container mx-auto max-w-6xl px-5 sm:px-6">
 <div className="mb-10 max-w-3xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Experiência documentada</p><h2 className="font-display text-3xl md:text-5xl">Apresentações em Destaque</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Registros de eventos tecnológicos, conferências e atividades institucionais. As funções são apresentadas como palestra, curadoria, painel ou apresentação científica, conforme os dados existentes.</p></div>
 <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{featuredEvents.map(event=><article key={event.name} className="overflow-hidden rounded-2xl border border-border bg-card">
 <img src={photos[event.image]} alt={"Registro fotográfico relacionado a "+event.name} loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover"/>
 <div className="p-5"><p className="text-xs font-semibold text-primary">{event.year} · {event.role}</p><h3 className="mt-2 font-display text-xl">{event.name}</h3>{event.location&&<p className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5"/>{event.location}</p>}</div></article>)}</div>
 <div className="mt-16 border-t border-border pt-12"><div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Histórico</p><h3 className="font-display text-2xl md:text-3xl">Eventos e participações</h3></div><a href="#galeria" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">Ver galeria <ArrowUpRight className="h-4 w-4"/></a></div>
 <div role="tablist" aria-label="Categorias de eventos" className="mb-6 flex flex-wrap gap-2">{eventCategories.map(item=><button type="button" role="tab" aria-selected={activeTab===item.id} key={item.id} onClick={()=>setActiveTab(item.id)} className={"rounded-full border px-4 py-2 text-xs font-semibold transition-colors sm:text-sm "+(activeTab===item.id?"border-primary bg-primary text-primary-foreground":"border-border bg-card text-foreground/75 hover:border-primary/40")}>{item.label}</button>)}</div>
 <div role="tabpanel" className="rounded-2xl border border-border bg-card/55 px-5 py-2 sm:px-7">{category.id==="visits"&&<p className="py-4 text-sm text-muted-foreground">Visitas técnicas — não são classificadas como palestras.</p>}
 {"sections" in category&&category.sections?category.sections.map(section=><div key={section.title} className="py-4"><h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">{section.title}</h4>{section.events.map(event=><div key={event.name} className="border-b border-border py-3 last:border-0"><h5 className="font-medium">{event.name}</h5><p className="mt-1 text-sm text-muted-foreground">{event.role}</p></div>)}</div>):category.events.map(event=><div key={event.name} className="border-b border-border py-4 last:border-0"><h4 className="font-medium">{event.name}</h4><p className="mt-1 text-sm text-muted-foreground">{event.role}</p></div>)}</div>
 <p className="mt-4 text-xs text-muted-foreground">Histórico preservado da versão anterior. Títulos e dados não confirmados não foram acrescentados.</p>
 </div></div></section>;
}