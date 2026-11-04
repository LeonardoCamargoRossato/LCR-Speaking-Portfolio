import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import CredibilitySection from "@/components/portfolio/CredibilitySection";
import TopicsSection from "@/components/portfolio/TopicsSection";
import SpeakerReelSection from "@/components/portfolio/SpeakerReelSection";
import GallerySection from "@/components/portfolio/GallerySection";
import AboutSection from "@/components/portfolio/AboutSection";
import PublicationsSection from "@/components/portfolio/PublicationsSection";
import ScienceSection from "@/components/portfolio/ScienceSection";
import EventsSection from "@/components/portfolio/EventsSection";
import FormatsSection from "@/components/portfolio/FormatsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import FooterSection from "@/components/portfolio/FooterSection";
import FloatingContactButton from "@/components/portfolio/FloatingContactButton";
export default function Index(){return <div className="min-h-screen overflow-x-clip bg-background text-foreground">
<a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-20 focus:z-[110] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">Pular para o conteúdo</a>
<Navbar/><FloatingContactButton/><main id="conteudo"><HeroSection/><CredibilitySection/><TopicsSection/><SpeakerReelSection/><GallerySection/><AboutSection/><PublicationsSection/><ScienceSection/><EventsSection/><FormatsSection/><ContactSection/></main><FooterSection/>
</div>;}