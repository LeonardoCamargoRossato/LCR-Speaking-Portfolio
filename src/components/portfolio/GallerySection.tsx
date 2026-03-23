import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { X } from "lucide-react";

import galleryFotonLacq from "@/assets/gallery-foton-lacq.jpg";
import galleryCcs from "@/assets/gallery-ccs.jpg";
import gallerySelfie from "@/assets/gallery-selfie.jpg";
import galleryLatinoware from "@/assets/gallery-latinoware.jpg";
import galleryFotonEstados from "@/assets/gallery-foton-estados.jpg";
import galleryIta from "@/assets/gallery-ita.jpg";
import galleryQuantum from "@/assets/gallery-quantum.jpg";
import gallerySolvay from "@/assets/gallery-solvay.jpg";
import heroSpeaking from "@/assets/hero-speaking.jpg";
import heroStage from "@/assets/hero-stage.jpg";
import galleryAlesp from "@/assets/gallery-alesp.jpg";
import galleryIip from "@/assets/gallery-iip.jpg";
import galleryGca from "@/assets/gallery-gca.jpg";
import galleryLatinoware2 from "@/assets/gallery-latinoware2.jpg";

import gallery5 from "@/assets/gallery-photo-5.jpg";
import gallery6 from "@/assets/gallery-photo-6.jpg";

const talkPhotos = [
  { src: heroSpeaking, alt: "TechNow — Computação Quântica: Que Futuro Esperamos?", label: "TechNow 2025" },
  { src: galleryQuantum, alt: "Palestra sobre Quantum Computing", label: "MVP Conference" },
  { src: galleryAlesp, alt: "Audiência pública na Assembleia Legislativa de São Paulo", label: "ALESP — São Paulo" },
  { src: galleryFotonLacq, alt: "Evento Foton + LACQ na PUCRS", label: "Foton + LACQ — PUCRS" },
  { src: heroStage, alt: "Palestra em grande evento de tecnologia", label: "DSS Curitiba" },
  { src: galleryIip, alt: "Apresentação acadêmica em auditório", label: "IIP — Natal" },
  { src: gallerySelfie, alt: "Selfie com participantes após palestra", label: "Workshop LACQ" },
  { src: galleryLatinoware, alt: "Latinoware 2025 — Congresso Latino-americano", label: "Latinoware 2025" },
  { src: galleryGca, alt: "Apresentação sobre Gravitational Cluster Algorithm", label: "Pesquisa — GCA" },
  { src: galleryFotonEstados, alt: "Apresentação ICTQ Foton — 11 estados", label: "ICTQ Foton" },
  { src: galleryLatinoware2, alt: "Latinoware 2025 — sala cheia", label: "Latinoware 2025" },
  { src: galleryIta, alt: "Palestra sobre Computação Quântica no ITA", label: "ITA" },
  { src: gallerySolvay, alt: "Apresentação na PUCRS — Conferência Solvay", label: "PUCRS" },
  { src: galleryCcs, alt: "CCS 2023 — Apresentação de pesquisa", label: "CCS 2023" },
];

const visitPhotos = [
  { src: gallery5, alt: "Visita técnica a centro de tecnologia", label: "Visita Técnica" },
  { src: gallery6, alt: "Visita a ecossistema de inovação", label: "Ecossistema de Inovação" },
];

type GalleryTab = "talks" | "visits";

const GallerySection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [lightbox, setLightbox] = useState<{ tab: GalleryTab; index: number } | null>(null);
  const [activeTab, setActiveTab] = useState<GalleryTab>("talks");

  const currentPhotos = activeTab === "talks" ? talkPhotos : visitPhotos;
  const lightboxPhotos = lightbox?.tab === "talks" ? talkPhotos : visitPhotos;

  return (
    <>
      <section id="galeria" className="py-24 md:py-32" ref={ref}>
        <div className="container max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Galeria</p>
            <h2 className="font-display text-3xl md:text-4xl">Momentos em Palco</h2>
          </div>

          {/* Tabs */}
          <div className={`flex justify-center gap-3 mb-10 ${isVisible ? "animate-reveal-up delay-100" : "opacity-0"}`}>
            <button
              onClick={() => setActiveTab("talks")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "talks"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              Palestras e Eventos
            </button>
            <button
              onClick={() => setActiveTab("visits")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "visits"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              Visitas Técnicas & Ecossistemas
            </button>
          </div>

          {/* Masonry-style grid */}
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {currentPhotos.map((photo, i) => (
              <div
                key={`${activeTab}-${i}`}
                className={`break-inside-avoid group cursor-pointer ${
                  isVisible ? "animate-reveal-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${(i % 6) * 80 + 100}ms` }}
                onClick={() => setLightbox({ tab: activeTab, index: i })}
              >
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-colors duration-300 flex items-end p-4">
                    <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                      {photo.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && lightboxPhotos[lightbox.index] && (
        <div
          className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxPhotos[lightbox.index].src}
            alt={lightboxPhotos[lightbox.index].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
            {lightboxPhotos[lightbox.index].label}
          </p>
        </div>
      )}
    </>
  );
};

export default GallerySection;
