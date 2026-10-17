"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "motion/react";

type RevealOptions = { children: ReactNode; delay?: number; y?: number };

// Déclenche dès que le haut du bloc franchit 88 % de l'écran : une fraction `amount`
// ne se déclencherait jamais sur un bloc plus haut que le viewport (mobile).
const viewport = { once: true, margin: "0px 0px -12% 0px" };

// ease-out-quart : départ franc, arrivée douce.
export const easeOutQuart = [0.165, 0.84, 0.44, 1] as const;

export function Reveal({ children, delay = 0, y = 28, ...props }: HTMLMotionProps<"div"> & RevealOptions) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: reduceMotion ? 0 : 0.6, ease: easeOutQuart, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

const staggerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export function Stagger({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={staggerVariants} {...props}>
      {children}
    </motion.div>
  );
}

export function StaggerList({ children, ...props }: HTMLMotionProps<"ul">) {
  return (
    <motion.ul initial="hidden" whileInView="visible" viewport={viewport} variants={staggerVariants} {...props}>
      {children}
    </motion.ul>
  );
}

function useItemVariants(): Variants {
  const reduceMotion = useReducedMotion();
  // Toujours fournir des variants : `undefined` couperait la propagation hidden/visible du parent.
  return {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.5, ease: easeOutQuart } },
  };
}

export function StaggerItem({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div variants={useItemVariants()} {...props}>
      {children}
    </motion.div>
  );
}

export function StaggerLi({ children, ...props }: HTMLMotionProps<"li">) {
  return (
    <motion.li variants={useItemVariants()} {...props}>
      {children}
    </motion.li>
  );
}
