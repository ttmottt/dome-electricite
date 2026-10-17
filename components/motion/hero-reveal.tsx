"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import { easeOutQuart } from "./reveal";

// Entrée du hero au chargement (pas au scroll) : le texte monte, le visuel se dévoile.
export function HeroText({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.8, ease: easeOutQuart, delay }}
    >
      {children}
    </motion.div>
  );
}

export function HeroVisual({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  // Léger parallaxe : le visuel descend moins vite que la page.
  const y = useTransform(scrollY, [0, 600], [0, reduceMotion ? 0 : 60]);
  return (
    <motion.div
      className={className}
      style={{ y }}
      initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.92, clipPath: reduceMotion ? "circle(75% at 50% 50%)" : "circle(0% at 50% 50%)" }}
      animate={{ opacity: 1, scale: 1, clipPath: "circle(75% at 50% 50%)" }}
      transition={{ duration: reduceMotion ? 0 : 1.1, ease: easeOutQuart, delay: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function SpinRing({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      animate={reduceMotion ? undefined : { rotate: 360 }}
      transition={{ duration: 60, ease: "linear", repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}
