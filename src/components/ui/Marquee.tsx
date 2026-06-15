"use client";

import { Children } from "react";

interface MarqueeProps {
  children: React.ReactNode;
  /** Durée d'un cycle complet en secondes (plus grand = plus lent). */
  duration?: number;
  className?: string;
}

/**
 * Défilement horizontal infini, de la droite vers la gauche.
 * Le contenu est dupliqué pour une boucle sans couture ; pause au survol.
 */
export default function Marquee({ children, duration = 40, className }: MarqueeProps) {
  const items = Children.toArray(children);

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div className="marquee-track" style={{ animationDuration: `${duration}s` }}>
        {/* Deux copies identiques pour une boucle continue */}
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {items.map((item, i) => (
              <div key={i} className="shrink-0 px-2">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
