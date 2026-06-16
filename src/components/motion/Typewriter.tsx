"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

interface TypewriterProps {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}

/**
 * Effet machine à écrire en boucle infinie : tape une phrase, marque une
 * pause, l'efface, puis passe à la suivante.
 */
export default function Typewriter({
  phrases,
  className,
  typingSpeed = 65,
  deletingSpeed = 35,
  pause = 1500,
}: TypewriterProps) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    if (reduce) {
      setText(phrases[0] ?? "");
      return;
    }
    const current = phrases[index % phrases.length];
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
      } else {
        timer = setTimeout(() => setPhase("deleting"), pause);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
      } else {
        setIndex((i) => (i + 1) % phrases.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timer);
  }, [text, phase, index, phrases, reduce, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className}>
      {text}
      <span className="tw-cursor" aria-hidden>
        |
      </span>
    </span>
  );
}
