"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig, SocialLink } from "@/config/site";
import { SectionLabel } from "./SectionLabel";
import {
  ArrowUpRight,
  Aperture,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { InstagramIcon, YouTubeIcon } from "./Icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
  setup: Aperture,
  whatsapp: MessageCircle,
  generic: ExternalLink,
};

export function EditorialLinks() {
  return (
    <section
      id="links"
      className="w-full py-16 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-white/[0.08]"
      aria-labelledby="connections-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <SectionLabel label={siteConfig.connections.label} />
          <h2
            id="connections-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#F2F0EB] mt-3"
          >
            {siteConfig.connections.title}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#999B9E] max-w-md font-light leading-relaxed">
          {siteConfig.connections.description}
        </p>
      </div>

      {/* Editorial Interactive List */}
      <div className="flex flex-col divide-y divide-white/[0.08] border-y border-white/[0.08]">
        {siteConfig.connections.links.map((link: SocialLink, index: number) => {
          const Icon = iconMap[link.type] || ExternalLink;

          return (
            <motion.a
              key={link.id}
              href={link.url}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-6 sm:py-8 px-2 sm:px-4 transition-all duration-300 hover:bg-[#161519]/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C66B40] rounded-lg -mx-2 sm:-mx-4"
              aria-label={`${link.title} — ${link.subtitle}`}
            >
              {/* Subtle hover accent line on left */}
              <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C66B40] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-full" />

              {/* Left group: Number + Icon + Title + Description */}
              <div className="flex items-start md:items-center gap-4 sm:gap-6">
                {/* Number */}
                <span className="font-mono text-xs sm:text-sm text-[#999B9E]/60 group-hover:text-[#C66B40] transition-colors duration-300 pt-0.5 md:pt-0 w-6">
                  {link.number}
                </span>

                {/* Icon Container */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-[#141417] flex items-center justify-center shrink-0 text-[#999B9E] group-hover:text-[#F2F0EB] group-hover:border-[#C66B40]/50 group-hover:bg-[#C66B40]/10 transition-all duration-300">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Text Hierarchy */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#F2F0EB] group-hover:text-[#F2F0EB] transition-colors duration-300">
                      {link.title}
                    </span>
                    {link.isExternal && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#999B9E]/50 border border-white/5 px-1.5 py-0.5 rounded group-hover:border-[#C66B40]/30 group-hover:text-[#C66B40] transition-colors duration-300">
                        Ext
                      </span>
                    )}
                  </div>
                  <span className="text-xs sm:text-sm text-[#999B9E] font-light mt-1 max-w-lg leading-relaxed group-hover:text-[#F2F0EB]/80 transition-colors duration-300">
                    {link.subtitle}
                  </span>
                </div>
              </div>

              {/* Right group: Interactive Arrow */}
              <div className="flex items-center justify-end gap-3 mt-4 md:mt-0 pl-16 md:pl-0">
                <span className="text-xs font-mono tracking-wider text-[#999B9E]/60 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:inline">
                  {link.isExternal ? "Visitar" : "Navegar"}
                </span>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center text-[#999B9E] group-hover:text-[#0C0C0E] group-hover:bg-[#F2F0EB] group-hover:border-[#F2F0EB] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
