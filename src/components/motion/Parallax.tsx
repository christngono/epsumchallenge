"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Force / direction du déplacement. Positif = l'élément monte plus vite
   * que le scroll, négatif = il traîne. En pixels sur toute la traversée.
   */
  offset?: number;
  axis?: "x" | "y";
}

/**
 * Déplace son contenu à une vitesse différente du scroll (effet parallax).
 */
export default function Parallax({
  children,
  className,
  offset = 80,
  axis = "y",
}: ParallaxProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translate = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : axis === "y" ? { y: translate } : { x: translate }}>
        {children}
      </motion.div>
    </div>
  );
}
