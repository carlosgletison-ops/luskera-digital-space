import { HeroSection } from "@/components/HeroSection";
import { EditorialLinks } from "@/components/EditorialLinks";
import { SetupSection } from "@/components/SetupSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-dvh bg-[#0C0C0E] text-[#F2F0EB]">
      {/* 01. Hero Cinematográfico */}
      <HeroSection />

      {/* 02. Lista Editorial de Conexões */}
      <EditorialLinks />

      {/* 03. Equipamentos do Criador (The Setup) */}
      <SetupSection />

      {/* 04. Contato / Next Chapter */}
      <ContactSection />

      {/* 05. Rodapé Minimalista */}
      <Footer />
    </main>
  );
}
