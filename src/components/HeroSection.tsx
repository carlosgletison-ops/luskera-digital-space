"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ArrowDown, Aperture, Disc3 } from "lucide-react";

export function HeroSection() {
  return (
    <header className="relative w-full min-h-[92dvh] lg:min-h-screen flex flex-col justify-between pt-6 pb-10 px-5 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto overflow-hidden">
      {/* Top Editorial Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex items-center justify-between border-b border-white/[0.08] pb-4 mb-8 sm:mb-12"
        aria-label="Informações do cabeçalho"
      >
        <div className="flex items-center gap-3">
          <span className="font-semibold text-xs md:text-sm tracking-[0.25em] text-[#F2F0EB]">
            {siteConfig.creator.stageName}
          </span>
          <span className="hidden sm:inline text-xs text-[#999B9E]/30">/</span>
          <span className="hidden sm:inline text-[11px] font-medium tracking-[0.2em] text-[#999B9E]">
            {siteConfig.creator.signature}
          </span>
        </div>

        <div className="flex items-center gap-4 text-[10px] md:text-xs font-mono text-[#999B9E] tracking-wider">
          <div className="flex items-center gap-2">
            <span className="hidden md:inline uppercase text-[#999B9E]/80">
              {siteConfig.hero.edition}
            </span>
            <span className="md:hidden uppercase text-[#999B9E]">
              FRAME 001
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-2 border-l border-white/10 pl-4 text-[10px] text-[#999B9E]/70">
            <Disc3 className="w-3.5 h-3.5 text-[#C66B40] animate-[spin_8s_linear_infinite]" />
            <span>{siteConfig.creator.concept}</span>
          </div>
        </div>
      </motion.nav>

      {/* Main Grid: Editorial Headline (Left) & Portrait (Right) */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* Left Column: Typography & Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10 order-2 lg:order-1">
          {/* Kicker Tag */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5 mb-4 sm:mb-6"
          >
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#C66B40] uppercase font-semibold">
              {"// "}
              {siteConfig.hero.kicker}
            </span>
            <span className="w-8 h-px bg-[#C66B40]/40" />
          </motion.div>

          {/* Main Cinematic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-medium tracking-tight text-[#F2F0EB] leading-[1.12] mb-6"
          >
            {siteConfig.hero.headlinePart1}
            <span className="font-serif italic font-normal text-[#F2F0EB] relative inline-block px-1">
              {siteConfig.hero.headlineEmphasized}
              <span className="absolute bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C66B40]/60 to-transparent" />
            </span>
            {siteConfig.hero.headlinePart2}
          </motion.h1>

          {/* Editorial Complementary Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#999B9E] text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed mb-8"
          >
            {siteConfig.hero.complement}
          </motion.p>

          {/* Quick Action Navigation Buttons for Mobile and Fast Readers */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
          >
            <a
              href="#links"
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#F2F0EB] text-[#0C0C0E] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#C66B40] hover:text-[#F2F0EB] hover:shadow-[0_0_24px_rgba(198,107,64,0.35)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C66B40]"
            >
              <span>Acessar Links</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>

            <a
              href="#setup"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/10 text-xs sm:text-sm font-medium tracking-wider uppercase text-[#999B9E] transition-all duration-300 hover:border-[#C66B40]/40 hover:text-[#F2F0EB] hover:bg-white/[0.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C66B40]"
            >
              <Aperture className="w-3.5 h-3.5 text-[#C66B40]" />
              <span>Ver Equipamentos</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: High-End Hero Portrait */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none aspect-[4/5] rounded-none overflow-hidden border border-white/[0.08] bg-[#141417] shadow-2xl group"
          >
            {/* Ambient Backlight matching Lucas's warm hair light */}
            <div
              className="absolute -top-12 -right-12 w-64 h-64 bg-[#C66B40]/20 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Photo with responsive next/image */}
            <Image
              src="/images/lucas-hero.jpg"
              alt="Lucas Mendes (Luskera) em estúdio com iluminação cinematográfica"
              fill
              priority
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 480px"
              className="object-cover object-center filter contrast-[1.04] brightness-[0.98] transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
            />

            {/* Gradient Overlays for seamless blending */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-transparent to-transparent opacity-80 lg:opacity-60"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#0C0C0E]/40 via-transparent to-transparent hidden lg:block"
              aria-hidden="true"
            />

            {/* Viewfinder Framing Marks (Cinema Camera Feel) */}
            <div className="absolute top-4 left-4 text-[9px] font-mono text-white/50 tracking-widest pointer-events-none flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 border-t border-l border-[#C66B40]" />
              <span>ISO 800</span>
            </div>
            <div className="absolute top-4 right-4 text-[9px] font-mono text-white/50 tracking-widest pointer-events-none flex items-center gap-1.5">
              <span>24.00 FPS</span>
              <span className="w-1.5 h-1.5 border-t border-r border-[#C66B40]" />
            </div>
            <div className="absolute bottom-4 left-4 text-[9px] font-mono text-white/50 tracking-widest pointer-events-none flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 border-b border-l border-[#C66B40]" />
              <span>4K LOG</span>
            </div>
            <div className="absolute bottom-4 right-4 text-[9px] font-mono text-[#C66B40] tracking-widest pointer-events-none flex items-center gap-1.5">
              <span>REC</span>
              <span className="w-1.5 h-1.5 border-b border-r border-[#C66B40]" />
            </div>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-[#0C0C0E]/75 border border-white/10 rounded-none p-3 flex items-center justify-between pointer-events-none">
              <div>
                <p className="text-xs font-semibold text-[#F2F0EB]">
                  {siteConfig.creator.name}
                </p>
                <p className="text-[10px] text-[#999B9E] font-mono">
                  {siteConfig.creator.handle} {" // "} {siteConfig.creator.role}
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#C66B40] uppercase tracking-wider px-2 py-0.5 rounded-none border border-[#C66B40]/30 bg-[#C66B40]/10">
                PRO
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Auxiliary Metadata & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        className="w-full flex items-center justify-between pt-8 border-t border-white/[0.06] text-[11px] font-mono text-[#999B9E]"
      >
        <span className="hidden sm:inline-block tracking-wider">
          {siteConfig.hero.technicalMetadata}
        </span>

        <a
          href="#links"
          className="flex items-center gap-2 text-xs text-[#999B9E] hover:text-[#C66B40] transition-colors group mx-auto sm:mx-0 py-2"
          aria-label="Rolar para os links principais"
        >
          <span className="tracking-[0.2em] uppercase font-sans text-[11px]">
            {siteConfig.hero.scrollIndicator}
          </span>
          <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1 text-[#C66B40]" />
        </a>

        <span className="hidden sm:inline-block text-right tracking-wider">
          LUSKERA // {siteConfig.creator.year}
        </span>
      </motion.div>
    </header>
  );
}
