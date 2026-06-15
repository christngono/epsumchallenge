"use client";

import { ReactLenis } from "lenis/react";

/**
 * Enveloppe globale qui active le smooth-scroll Lenis.
 * Base indispensable pour des effets de parallax fluides.
 * Respecte automatiquement `prefers-reduced-motion`.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
