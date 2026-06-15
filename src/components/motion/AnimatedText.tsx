"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  /** Anime au montage (héros) plutôt qu'à l'entrée dans le viewport. */
  immediate?: boolean;
}

/**
 * Révèle un texte mot par mot, en cascade ascendante.
 */
export default function AnimatedText({
  text,
  className,
  delay = 0,
  immediate = false,
}: AnimatedTextProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: delay } },
  };

  const word: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: "0.6em", rotateX: -40 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.span
      className={className}
      style={{ display: "inline-block", perspective: 600 }}
      variants={container}
      initial="hidden"
      {...(immediate
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once: true, amount: 0.5 } })}
      aria-label={text}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          variants={word}
          style={{ display: "inline-block", transformOrigin: "bottom" }}
          aria-hidden
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
