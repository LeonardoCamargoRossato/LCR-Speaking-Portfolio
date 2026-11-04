import { GraduationCap, Rocket, Globe, Star, MapPin } from "lucide-react";
export const eventCategories = [
  {
    id: "highlights",
    label: "Eventos Destaque",
    icon: Star,
    events: [
      { name: "South Summit 2026", role: "Porto Alegre, RS" },
      { name: "SecOps Summit 2026", role: "Porto Alegre, RS" },
      { name: "Expointer 2025", role: "Porto Alegre, RS" },
      { name: "MVP Conference 2025", role: "São Paulo, SP" },
      { name: "Latinoware / Itaipu 2025", role: "Foz do Iguaçu, PR" },
      { name: "Data Science Summit (DSS) 2024 e 2025", role: "Curitiba, PR" },
      { name: "CCS 2023", role: "Salvador, BA" },
      { name: "EOSBF 2023, 2024, 2025", role: "Ouro Preto (MG), Florianópolis (SC), Belém (PA) — Principal congresso nacional de física" },
      { name: "IIP Natal 2023", role: "Natal, RN" },
    ],
  },
  {
    id: "tech",
    label: "Tecnologia & Mercado",
    icon: Rocket,
    events: [
      { name: "SecOps Summit Porto Alegre 2026", role: "Palestrante" },
      { name: "South Summit Porto Alegre 2026", role: "Palestrante" },
      { name: "Expointer 2025", role: "Palestrante — Tecnologias quânticas" },
      { name: "MVP Conference 2025", role: "Microsoft — Palestrante + curador" },
      { name: "Esquenta MVP POA 2025", role: "Palestrante + painelista" },
      { name: "DSS Curitiba 2025", role: "Data Science Summit — Curadoria + trilha quântica" },
      { name: "TechNow 2025", role: "SUCESU-RS — Palestrante" },
      { name: "Latinoware 2025", role: "Itaipu — Curadoria e trilha quântica" },
      { name: "DSS Curitiba 2024", role: "Data Science Summit — Palestrante" },
    ],
  },
  {
    id: "academic-institutional",
    label: "Acadêmico & Institucional",
    icon: GraduationCap,
    sections: [
      {
        title: "Acadêmicos",
        events: [
          { name: "EOSBF 2025", role: "Encontro de Outono da SBF — Apresentação oral" },
          { name: "EOSBF 2024", role: "Encontro de Outono da SBF — Apresentação de trabalho" },
          { name: "ENFE 2024", role: "Encontro Nacional de Física Estatística — Apresentação de trabalho" },
          { name: "CCS 2023", role: "Conference on Complex Systems — Apresentação oral internacional (bolsa YSI)" },
          { name: "IIP Natal 2023", role: "Workshop on New Frontiers in Emergent Materials — Apresentação de trabalho" },
          { name: "EOSBF 2023", role: "Encontro de Outono da SBF — Apresentação de trabalho" },
          { name: "EIEMAT 2023", role: "Encontro Interinstitucional de Educação Matemática — Minicurso / palestra" },
        ],
      },
      {
        title: "Institucional & Universidades",
        events: [
          { name: "Inauguração LACQ USP 2025", role: "Palestrante" },
          { name: "Inauguração LACQ PUCRS 2025", role: "Palestrante" },
          { name: "Jornada Foton–LACQ Tecnopuc 2025", role: "Tecnologias Quânticas — Palestrante recorrente" },
          { name: "Semana LACQ UFRGS 2025", role: "Computação Quântica — Organização + palestras" },
          { name: "Aula Magna UNISINOS 2025", role: "PPG Administração — Palestrante" },
          { name: "Inauguração LACQ UFRGS 2024", role: "Palestrante" },
        ],
      },
    ],
    events: [],
  },
  {
    id: "outreach",
    label: "Palestras & Divulgação",
    icon: Globe,
    events: [
      { name: "MOBI Festival 2025", role: "Sorocaba — Palestrante" },
      { name: "ENAEPE 2025", role: "Manaus — Palestrante" },
      { name: "Evento Quântico Manaus 2025", role: "Tecnologias Quânticas — Palestrante" },
      { name: "Workshop Computação Quântica Floripa", role: "7ª Edição — Palestrante" },
    ],
  },
  {
    id: "visits",
    label: "Visitas Técnicas",
    icon: MapPin,
    events: [
      { name: "Samsung", role: "Fábrica de Manaus" },
      { name: "INDT", role: "Instituto Nokia de Tecnologia" },
      { name: "Porto Digital", role: "Recife" },
      { name: "Motorola / Centro de Computação", role: "Recife" },
      { name: "Instituto Von Braun", role: "Campinas" },
      { name: "Sirius (CNPEM)", role: "Acelerador de Partículas" },
      { name: "SENAI CIMATEC", role: "Salvador" },
      { name: "CBA", role: "Centro de Bionegócios da Amazônia" },
    ],
  },
];
export const featuredEvents = [
{ name:"South Summit Brazil", year:"2026", location:"Porto Alegre, RS", role:"Palestrante", image:"southsummit" },
{ name:"AutoCom Summit", year:"2026", location:"", role:"Registro de apresentação", image:"autocom" },
{ name:"MVP Conference", year:"2025", location:"São Paulo, SP", role:"Palestrante e curadoria", image:"mvp" },
{ name:"Latinoware / Itaipu", year:"2025", location:"Foz do Iguaçu, PR", role:"Curadoria e trilha quântica", image:"latinoware" },
{ name:"Data Science Summit", year:"2024 e 2025", location:"Curitiba, PR", role:"Palestra e curadoria, conforme edição", image:"dss" }
];