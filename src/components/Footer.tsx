"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#0C0C0E] py-12 px-5 sm:px-8 md:px-12 lg:px-16 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-white/[0.06]">
          {/* Brand Stack */}
          <div>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-semibold tracking-tighter text-[#F2F0EB]">
                {siteConfig.footer.brand}
              </span>
              <span className="text-xs font-mono tracking-[0.25em] text-[#C66B40] uppercase font-medium">
                {siteConfig.footer.signature}
              </span>
            </div>
            <p className="text-xs font-mono text-[#999B9E] tracking-wider mt-2">
              {siteConfig.footer.copyright} — TODOS OS DIREITOS RESERVADOS
            </p>
          </div>

          {/* Social Navigation & Back to Top */}
          <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
            {siteConfig.footer.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-medium tracking-wider text-[#999B9E] hover:text-[#C66B40] transition-colors uppercase font-mono"
              >
                {social.name}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-mono text-[#999B9E] hover:text-[#F2F0EB] transition-colors pl-4 border-l border-white/10"
              aria-label="Voltar ao topo da página"
            >
              <span className="uppercase tracking-wider">Topo</span>
              <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center hover:border-white/40">
                <ArrowUp className="w-3 h-3 text-[#C66B40]" />
              </div>
            </button>
          </div>
        </div>

        {/* Micro Colophon Tagline */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] font-mono text-[#999B9E]/60">
          <span>{siteConfig.footer.tagline}</span>
          <span>ESTÚDIO DIGITAL // AUTORAL // {siteConfig.creator.year}</span>
        </div>
      </div>
    </footer>
  );
}

