"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

interface CounterProps {
  to: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

/**
 * Compteur qui s'incrémente de 0 à `to` lorsqu'il entre dans le viewport.
 */
export default function Counter({ to, suffix = "", className, duration = 1.6 }: CounterProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  const value = useMotionValue(0);
  const spring = useSpring(value, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (inView) value.set(to);
  }, [inView, to, value]);

  useEffect(() => {
    if (reduce) {
      if (ref.current) ref.current.textContent = `${to}${suffix}`;
      return;
    }
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
    });
  }, [spring, suffix, reduce, to]);

  return <span ref={ref} className={className}>{reduce ? `${to}${suffix}` : `0${suffix}`}</span>;
}
