"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { SectionLabel } from "./SectionLabel";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { InstagramIcon } from "./Icons";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="w-full py-16 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-white/[0.08]"
      aria-labelledby="contact-heading"
    >
      <div className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#141417] to-[#0C0C0E] p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden">
        {/* Ambient Warm Accent Glow */}
        <div
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#C66B40]/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl">
          <SectionLabel label={siteConfig.contact.label} />

          {/* Big Editorial Headline */}
          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-medium tracking-tight text-[#F2F0EB] leading-[1.1] mt-4 mb-6"
          >
            {siteConfig.contact.headlinePart1}
            <span className="font-serif italic font-normal text-[#F2F0EB] relative inline-block px-1">
              {siteConfig.contact.headlineEmphasized}
              <span className="absolute bottom-1.5 left-0 w-full h-[1px] bg-[#C66B40]" />
            </span>
            {siteConfig.contact.headlinePart2}
          </motion.h2>

          {/* Complement */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#999B9E] text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10"
          >
            {siteConfig.contact.complement}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href={siteConfig.contact.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#F2F0EB] text-[#0C0C0E] text-sm sm:text-base font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#C66B40] hover:text-[#F2F0EB] hover:shadow-[0_0_30px_rgba(198,107,64,0.4)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C66B40]"
            >
              <MessageCircle className="w-4 h-4 text-[#0C0C0E] group-hover:text-[#F2F0EB] transition-colors" />
              <span>{siteConfig.contact.ctaText}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href={siteConfig.contact.secondaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full border border-white/10 hover:border-white/30 bg-white/[0.02] text-[#F2F0EB] text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-white/[0.05] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C66B40]"
            >
              <InstagramIcon className="w-4 h-4 text-[#C66B40]" />
              <span>{siteConfig.contact.secondaryCta}</span>
            </a>
          </motion.div>
        </div>

        {/* Technical Footer Accent (Fedor Gostev Inspiration: Barcode & Coordinates) */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] font-mono text-[#999B9E]/60">
          <div className="flex items-center gap-4">
            <span className="tracking-widest uppercase">
              STATUS: {siteConfig.creator.statusBadge}
            </span>
          </div>

          <div className="flex items-center gap-6">
            {/* Minimal SVG Barcode */}
            <div
              className="flex items-center gap-[2px] h-6 opacity-40 select-none"
              aria-hidden="true"
            >
              <div className="w-[1px] h-full bg-white" />
              <div className="w-[2px] h-full bg-white" />
              <div className="w-[1px] h-full bg-white" />
              <div className="w-[3px] h-full bg-white" />
              <div className="w-[1px] h-full bg-white" />
              <div className="w-[1px] h-full bg-white" />
              <div className="w-[2px] h-full bg-white" />
              <div className="w-[1px] h-full bg-white" />
              <div className="w-[3px] h-full bg-white" />
              <div className="w-[2px] h-full bg-white" />
              <div className="w-[1px] h-full bg-white" />
              <div className="w-[4px] h-full bg-white" />
              <div className="w-[1px] h-full bg-white" />
              <div className="w-[2px] h-full bg-white" />
            </div>

            <span className="tracking-widest">
              PROJECT // {siteConfig.creator.year}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
