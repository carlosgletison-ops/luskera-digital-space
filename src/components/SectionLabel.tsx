"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionLabelProps {
  label: string;
  tag?: string;
  className?: string;
}

export function SectionLabel({ label, tag, className = "" }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-center gap-3 text-[11px] md:text-xs font-medium tracking-[0.25em] text-[#999B9E] uppercase font-sans ${className}`}
    >
      <span>{label}</span>
      {tag && (
        <>
          <span className="text-[#999B9E]/30 select-none">/</span>
          <span className="text-[#999B9E]/70 tracking-widest">{tag}</span>
        </>
      )}
      <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent max-w-[80px]" />
    </motion.div>
  );
}

