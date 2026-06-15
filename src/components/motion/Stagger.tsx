"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  /** Délai entre chaque enfant (s). */
  stagger?: number;
  delay?: number;
  once?: boolean;
}

/**
 * Conteneur qui révèle ses <StaggerItem> en cascade.
 */
export function Stagger({
  children,
  className,
  stagger = 0.12,
  delay = 0,
  once = true,
}: StaggerProps) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  distance = 28,
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
