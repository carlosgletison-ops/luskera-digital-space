"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig, SetupEquipment } from "@/config/site";
import { SectionLabel } from "./SectionLabel";
import { ArrowUpRight, Mic, Sun, ShieldCheck, Check } from "lucide-react";

export function SetupSection() {
  return (
    <section
      id="setup"
      className="w-full py-16 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-white/[0.08]"
      aria-labelledby="setup-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <SectionLabel label={siteConfig.setup.label} />
          <h2
            id="setup-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#F2F0EB] mt-3"
          >
            {siteConfig.setup.title}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#999B9E] max-w-md font-light leading-relaxed">
          {siteConfig.setup.complement}
        </p>
      </div>

      {/* Equipment Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {siteConfig.setup.items.map((item: SetupEquipment, index: number) => {
          const isMic = item.id.includes("j12");

          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#141417] p-6 sm:p-8 transition-all duration-300 hover:border-white/20 hover:bg-[#18171B]"
            >
              {/* Top Tag & Category */}
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#C66B40] uppercase font-semibold">
                      {item.tag}
                    </span>
                    <span className="text-white/20">/</span>
                    <span className="text-[11px] font-mono tracking-wider text-[#999B9E] uppercase">
                      {item.category}
                    </span>
                  </div>

                  {item.isAffiliate && (
                    <span className="flex items-center gap-1 text-[9px] font-mono text-[#999B9E]/80 border border-white/5 bg-white/[0.02] px-2 py-0.5 rounded-full">
                      <ShieldCheck className="w-3 h-3 text-[#C66B40]" />
                      <span>RECOMENDADO</span>
                    </span>
                  )}
                </div>

                {/* Technical Product Visual Graphic */}
                <div className="relative w-full h-44 sm:h-48 rounded-xl bg-gradient-to-b from-[#1C1B1F] to-[#0E0E10] border border-white/[0.04] flex items-center justify-center overflow-hidden mb-6 group-hover:border-[#C66B40]/30 transition-colors duration-300">
                  {/* Subtle Grid Pattern */}
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage:
                        "radial-gradient(#999B9E 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                    aria-hidden="true"
                  />

                  {/* Minimalist Tech Silhouette / Iconography */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#0C0C0E] border border-white/10 flex items-center justify-center text-[#F2F0EB] shadow-xl group-hover:scale-105 group-hover:border-[#C66B40]/40 transition-all duration-300">
                      {isMic ? (
                        <Mic className="w-7 h-7 text-[#C66B40]" />
                      ) : (
                        <Sun className="w-7 h-7 text-[#C66B40]" />
                      )}
                    </div>
                    <span className="mt-3 text-[11px] font-mono tracking-widest text-[#999B9E] uppercase">
                      {isMic ? "WIRELESS AUDIO TRANSMITTER" : "COMPACT RGB SOFTLIGHT"}
                    </span>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 text-[9px] font-mono text-white/30">
                    + 0{index + 1}
                  </div>
                  <div className="absolute bottom-3 right-3 text-[9px] font-mono text-white/30">
                    GEAR.SPEC
                  </div>
                </div>

                {/* Product Name & Description */}
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#F2F0EB] group-hover:text-[#F2F0EB] transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#999B9E] font-light leading-relaxed mt-2 mb-6">
                  {item.description}
                </p>

                {/* Specs List */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {item.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-[#999B9E] bg-white/[0.03] border border-white/5 rounded-md px-2.5 py-1"
                    >
                      <Check className="w-2.5 h-2.5 text-[#C66B40]" />
                      <span>{spec}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-[#999B9E]">
                  Disponibilidade: Oficial
                </span>

                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] hover:bg-[#C66B40] text-[#F2F0EB] text-xs font-medium tracking-wider uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C66B40] group-hover:shadow-[0_0_20px_rgba(198,107,64,0.3)]"
                  >
                    <span>Conhecer Produto</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 text-[#999B9E]/50 text-xs font-mono tracking-wider uppercase">
                    Em breve
                  </span>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Affiliate Notice */}
      <p className="mt-8 text-center text-xs font-mono text-[#999B9E]/60 max-w-xl mx-auto leading-relaxed">
        * {siteConfig.setup.affiliateNotice}
      </p>
    </section>
  );
}

