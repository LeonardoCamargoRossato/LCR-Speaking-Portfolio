import { describe,expect,it } from "vitest";
import { talks,complementaryOffers } from "@/data/talks";
import { publications } from "@/data/publications";
import { projects } from "@/data/projects";
import { galleryPhotos } from "@/data/gallery";
import { eventCategories } from "@/data/events";
import { buildInquiryMailto } from "@/lib/contact";
describe("LCR Speaking Portfolio V1",()=>{
it("possui catálogo comercial",()=>{expect(talks).toHaveLength(4);expect(talks.every(t=>t.title&&t.audience&&t.topics.length&&t.formats.length)).toBe(true);expect(complementaryOffers.length).toBeGreaterThanOrEqual(4);});
it("preserva histórico e fotografias",()=>{expect(galleryPhotos.length).toBeGreaterThanOrEqual(18);expect(eventCategories.some(x=>x.id==="visits")).toBe(true);});
it("contém projetos e publicações verificáveis",()=>{expect(projects).toHaveLength(3);expect(publications.every(p=>p.doi.includes("/"))).toBe(true);});
it("prepara mensagem mailto sem backend",()=>{const link=buildInquiryMailto({name:"Teste",theme:"Computação Quântica",organization:"Empresa"});expect(link).toContain("mailto:leo.c.rossato@gmail.com?");expect(decodeURIComponent(link)).toContain("Empresa");});
});