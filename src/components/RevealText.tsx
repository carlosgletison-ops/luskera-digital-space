"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div" | "span";
}

export function RevealText({
  children,
  delay = 0,
  className = "",
  as: Component = "div",
}: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.85,
          delay,
          ease: [0.16, 1, 0.3, 1], // Smooth bespoke cubic-bezier
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface RevealInViewProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div" | "span";
}

export function RevealInView({
  children,
  delay = 0,
  className = "",
  as: Component = "div",
}: RevealInViewProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 0.75,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

