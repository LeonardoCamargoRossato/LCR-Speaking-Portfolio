import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
const links=[{href:"#palestras",label:"Palestras"},{href:"#em-palco",label:"Em palco"},{href:"#sobre",label:"Sobre"},{href:"#eventos",label:"Eventos"},{href:"#contato",label:"Contato"}];
export default function Navbar(){
 const [scrolled,setScrolled]=useState(false);
 const [open,setOpen]=useState(false);
 useEffect(()=>{const handle=()=>setScrolled(window.scrollY>40);handle();window.addEventListener("scroll",handle,{passive:true});return ()=>window.removeEventListener("scroll",handle);},[]);
 return <nav aria-label="Navegação principal" className={"fixed inset-x-0 top-0 z-50 transition-all duration-300 "+(scrolled||open?"border-b border-border bg-background/95 backdrop-blur-xl":"bg-background/60 backdrop-blur-sm")}>
   <div className="container mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-6">
    <a href="#inicio" className="whitespace-nowrap font-display text-xl" onClick={()=>setOpen(false)} aria-label="LCR Speaking Portfolio — início">L<span className="text-primary">.</span>Rossato</a>
    <div className="hidden items-center gap-6 lg:flex">{links.map(link=><a key={link.href} href={link.href} className="text-sm text-foreground/75 transition-colors hover:text-primary">{link.label}</a>)}<a href="#contato" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">Solicitar palestra</a></div>
    <button type="button" aria-label={open?"Fechar menu":"Abrir menu"} aria-expanded={open} aria-controls="mobile-navigation" className="rounded-lg p-2 lg:hidden" onClick={()=>setOpen(!open)}>{open?<X className="h-6 w-6"/>:<Menu className="h-6 w-6"/>}</button>
   </div>
   {open&&<div id="mobile-navigation" className="border-t border-border bg-background/95 px-5 py-4 lg:hidden"><div className="container mx-auto flex max-w-6xl flex-col gap-1">{links.map(link=><a key={link.href} href={link.href} onClick={()=>setOpen(false)} className="rounded-lg px-4 py-3 text-sm hover:bg-muted">{link.label}</a>)}<a href="#contato" onClick={()=>setOpen(false)} className="mt-2 rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground">Solicitar palestra</a></div></div>}
 </nav>;
}