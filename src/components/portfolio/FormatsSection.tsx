import { Presentation, GraduationCap, Wrench, MessagesSquare } from "lucide-react";
const formats=[
{icon:Presentation,title:"Palestras corporativas",description:"Apresentações estratégicas sobre inovação, inteligência artificial, ciência de dados e tecnologias emergentes."},
{icon:GraduationCap,title:"Masterclasses",description:"Aprofundamento técnico com explicações, estudos de caso e possíveis demonstrações."},
{icon:Wrench,title:"Workshops",description:"Atividades práticas e interativas adaptadas ao público e objetivos da turma."},
{icon:MessagesSquare,title:"Painéis e debates",description:"Discussões, mesas-redondas, conferências e eventos institucionais."}
];
export default function FormatsSection(){return <section id="formatos" className="scroll-mt-20 py-16 md:py-20"><div className="container mx-auto max-w-6xl px-5 sm:px-6"><div className="mb-9"><p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Para organizadores</p><h2 className="font-display text-3xl md:text-4xl">Formatos de participação</h2><p className="mt-3 max-w-2xl text-sm text-muted-foreground">Temas e formatos podem ser adaptados ao perfil do público. Duração e condições são combinadas caso a caso.</p></div>
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{formats.map(f=>{const Icon=f.icon;return <article key={f.title} className="rounded-xl border border-border bg-card p-5"><Icon className="mb-4 h-6 w-6 text-primary"/><h3 className="font-semibold">{f.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p></article>})}</div>
</div></section>;}