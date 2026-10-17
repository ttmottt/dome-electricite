"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

export function CountUp({ from = 0, to, duration = 1.4 }: { from?: number; to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || !ref.current || reduceMotion) return;
    const controls = animate(from, to, {
      duration,
      ease: [0.165, 0.84, 0.44, 1],
      onUpdate(value) {
        if (ref.current) ref.current.textContent = String(Math.round(value));
      },
    });
    return () => controls.stop();
  }, [isInView, reduceMotion, from, to, duration]);

  // Valeur finale rendue côté serveur : correcte sans JavaScript et pour les robots.
  return <span ref={ref}>{to}</span>;
}
