"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  /** Décalage initial en pixels. */
  distance?: number;
  /** Durée en secondes. */
  duration?: number;
  className?: string;
  /** Anime une seule fois (par défaut) ou à chaque entrée dans le viewport. */
  once?: boolean;
  as?: "div" | "section" | "article" | "li" | "span";
}

const offset = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
};

/**
 * Révèle son contenu lorsqu'il entre dans le viewport (fade + slide).
 * Désactive l'animation si l'utilisateur préfère un mouvement réduit.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  distance = 32,
  duration = 0.7,
  className,
  once = true,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const variants: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, ...offset(direction, distance) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25 }}
    >
      {children}
    </MotionTag>
  );
}
