import { technicalPortfolioUrl } from "@/data/projects";
const links=[
{label:"Technical Portfolio",href:technicalPortfolioUrl},
{label:"LinkedIn",href:"https://www.linkedin.com/in/leonardocamargorossato/"},
{label:"GitHub",href:"https://github.com/LeonardoCamargoRossato"},
{label:"Instagram",href:"https://www.instagram.com/leonardo.camargo.rossato"},
{label:"Contact",href:"#contato"}
];
export default function FooterSection(){return <footer className="border-t border-border bg-card/70 py-10">
<div className="container mx-auto flex max-w-6xl flex-col justify-between gap-8 px-5 sm:px-6 md:flex-row">
<div><p className="font-display text-xl">Leonardo Camargo Rossato</p><p className="mt-2 text-xs uppercase tracking-[0.14em] text-primary">Science · Technology · Innovation</p><p className="mt-4 max-w-sm text-xs leading-relaxed text-muted-foreground">Explore my software, AI, data science and scientific computing projects.</p></div>
<div className="flex max-w-xl flex-wrap content-start gap-x-5 gap-y-3">{links.map(link=><a key={link.label} href={link.href} target={link.href.startsWith("https:")?"_blank":undefined} rel={link.href.startsWith("https:")?"noopener noreferrer":undefined} className="text-sm text-foreground/75 hover:text-primary">{link.label}</a>)}</div></div>
<div className="container mx-auto mt-8 max-w-6xl px-5 text-xs text-muted-foreground sm:px-6">© {new Date().getFullYear()} Leonardo Camargo Rossato. Todos os direitos reservados.</div>
</footer>;}