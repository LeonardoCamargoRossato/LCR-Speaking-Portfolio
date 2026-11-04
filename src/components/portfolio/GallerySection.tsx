import { useEffect, useState } from "react";
import { galleryPhotos, researchGalleryIndexes } from "@/data/gallery";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
type Filter = "all" | "research";
export default function GallerySection(){
 const [filter,setFilter]=useState<Filter>("all");const [count,setCount]=useState(8);const [active,setActive]=useState<number|null>(null);
 const photos=filter==="all"?galleryPhotos:galleryPhotos.filter((_,index)=>researchGalleryIndexes.includes(index));
 useEffect(()=>{if(active===null)return;const previous=document.body.style.overflow;document.body.style.overflow="hidden";
 const onKey=(event:KeyboardEvent)=>{if(event.key==="Escape")setActive(null);if(event.key==="ArrowRight")setActive(i=>i===null?null:(i+1)%photos.length);if(event.key==="ArrowLeft")setActive(i=>i===null?null:(i-1+photos.length)%photos.length);};
 document.addEventListener("keydown",onKey);return ()=>{document.body.style.overflow=previous;document.removeEventListener("keydown",onKey);};},[active,photos.length]);
 const choose=(next:Filter)=>{setFilter(next);setCount(8);setActive(null);};
 return <><section id="galeria" className="scroll-mt-20 py-20 md:py-24"><div className="container mx-auto max-w-6xl px-5 sm:px-6">
 <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Galeria profissional</p><h2 className="font-display text-3xl md:text-4xl">Momentos em Palco</h2><p className="mt-3 text-sm text-muted-foreground">Fotografias reais de palestras, eventos e participações institucionais.</p></div>
 <div role="group" aria-label="Filtrar galeria" className="flex flex-wrap gap-2"><button type="button" aria-pressed={filter==="all"} onClick={()=>choose("all")} className={"rounded-full px-4 py-2 text-sm "+(filter==="all"?"bg-primary text-primary-foreground":"bg-muted text-foreground")}>Todos os registros</button><button type="button" aria-pressed={filter==="research"} onClick={()=>choose("research")} className={"rounded-full px-4 py-2 text-sm "+(filter==="research"?"bg-primary text-primary-foreground":"bg-muted text-foreground")}>Pesquisa e instituições</button></div></div>
 <div className="columns-2 gap-3 space-y-3 sm:columns-3 sm:gap-4 sm:space-y-4 lg:columns-4">{photos.slice(0,count).map((photo,index)=><button key={photo.src+index} type="button" onClick={()=>setActive(index)} aria-label={"Ampliar fotografia: "+photo.label} className="group relative block w-full break-inside-avoid overflow-hidden rounded-xl border border-border text-left focus-visible:outline">
 <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" className="h-auto w-full object-cover transition-transform group-hover:scale-[1.04]"/>
 <span className="absolute inset-x-0 bottom-0 flex items-end gap-2 bg-gradient-to-t from-black/90 to-transparent px-3 pb-3 pt-10 text-xs leading-snug text-white"><span className="flex-1">{photo.label}</span><Expand className="h-4 w-4 shrink-0"/></span></button>)}</div>
 {count<photos.length&&<div className="mt-9 text-center"><button type="button" onClick={()=>setCount(n=>n+6)} className="rounded-lg border border-primary/50 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/10">Carregar mais fotografias ({photos.length-count} restantes)</button></div>}
 </div></section>
 {active!==null&&photos[active]&&<div role="dialog" aria-modal="true" aria-label="Fotografia ampliada" onClick={()=>setActive(null)} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 backdrop-blur-md sm:p-6">
 <button type="button" aria-label="Fechar" onClick={()=>setActive(null)} className="absolute right-4 top-4 z-10 rounded-full bg-background/75 p-2 text-white"><X className="h-6 w-6"/></button>
 <button type="button" aria-label="Anterior" onClick={e=>{e.stopPropagation();setActive((active-1+photos.length)%photos.length);}} className="absolute left-2 z-10 rounded-full bg-black/70 p-2 text-white sm:left-6"><ChevronLeft className="h-6 w-6"/></button>
 <img src={photos[active].src} alt={photos[active].alt} onClick={e=>e.stopPropagation()} className="max-h-[78vh] max-w-[calc(100%-5rem)] rounded-lg object-contain sm:max-w-[86vw]"/>
 <button type="button" aria-label="Próxima" onClick={e=>{e.stopPropagation();setActive((active+1)%photos.length);}} className="absolute right-2 z-10 rounded-full bg-black/70 p-2 text-white sm:right-6"><ChevronRight className="h-6 w-6"/></button>
 <p className="absolute bottom-4 left-12 right-12 text-center text-xs text-white/85 sm:text-sm">{photos[active].label} · {active+1}/{photos.length}</p>
 </div>}</>;
}