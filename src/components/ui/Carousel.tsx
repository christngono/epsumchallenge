"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface CarouselProps {
  children: React.ReactNode[];
  visibleDesktop?: number;
  visibleTablet?: number;
  visibleMobile?: number;
  gap?: number;
  arrowVariant?: "filled" | "outline";
}

export default function Carousel({
  children,
  visibleDesktop = 4,
  visibleTablet = 2,
  visibleMobile = 1,
  gap = 8,
  arrowVariant = "filled",
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(visibleDesktop);
  const trackRef = useRef<HTMLDivElement>(null);

  const getVisible = useCallback(() => {
    const w = window.innerWidth;
    if (w <= 560) return visibleMobile;
    if (w <= 900) return visibleTablet;
    return visibleDesktop;
  }, [visibleDesktop, visibleTablet, visibleMobile]);

  useEffect(() => {
    const update = () => setVisible(getVisible());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [getVisible]);

  const max = Math.max(0, children.length - visible);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(max, i + 1));

  useEffect(() => {
    setIndex((i) => Math.min(i, max));
  }, [visible, max]);

  const cardPct = 100 / visible;

  const arrowBase =
    "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150 disabled:opacity-35 disabled:cursor-default";
  const arrowFilled =
    "bg-[#F5C518] hover:bg-[#DBA900] hover:scale-105 border-none";
  const arrowOutline =
    "bg-transparent border-2 border-[#F5C518] hover:bg-[#F5C518] hover:scale-105";

  const arrowClass = `${arrowBase} ${arrowVariant === "outline" ? arrowOutline : arrowFilled}`;

  return (
    <div className="flex items-center gap-2.5 w-full">
      <button
        onClick={prev}
        disabled={index === 0}
        aria-label="Précédent"
        className={arrowClass}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className="overflow-hidden flex-1">
        <div
          ref={trackRef}
          className="flex transition-transform duration-[450ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          style={{ transform: `translateX(-${index * cardPct}%)` }}
        >
          {children.map((child, i) => (
            <div
              key={i}
              style={{
                minWidth: `calc(${cardPct}% - ${gap}px)`,
                margin: `0 ${gap / 2}px`,
                flexShrink: 0,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={next}
        disabled={index >= max}
        aria-label="Suivant"
        className={arrowClass}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
