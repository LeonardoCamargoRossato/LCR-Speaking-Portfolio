import { Mail } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingContactButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#contato"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg transition-all hover:shadow-[0_0_24px_hsl(var(--gold-glow)/0.4)] active:scale-[0.97] animate-fade-in"
    >
      <Mail className="w-4 h-4" />
      <span className="hidden sm:inline">Entre em Contato</span>
      <span className="sm:hidden">Contato</span>
    </a>
  );
};

export default FloatingContactButton;
