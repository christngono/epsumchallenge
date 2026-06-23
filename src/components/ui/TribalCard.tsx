import { ReactNode } from "react";

/**
 * Carte « jeu de société » inspirée des cartes Epsum :
 *  ┌────────────────────────────┐
 *  │  bande de motifs tribaux   │  ← bandeau coloré (variante)
 *  ├────────────────────────────┤
 *  │  ╭──────────────────────╮  │  ← cadre intérieur
 *  │  │   titre + contenu    │  │
 *  │  ╰──────────────────────╯  │
 *  └────────────────────────────┘
 *
 * Corps opaque (sable) pour que le texte reste lisible
 * au-dessus des motifs de fond du site.
 */

type Variant = "terracotta" | "amber" | "green" | "brown" | "red";

const VARIANTS: Record<
  Variant,
  { band: string; border: string; shadow: string; frame: string }
> = {
  terracotta: { band: "#D9591A", border: "#7D1E1E", shadow: "rgba(125,30,30,0.22)",  frame: "rgba(125,30,30,0.55)" },
  amber:      { band: "#F4A906", border: "#C5870A", shadow: "rgba(197,135,10,0.25)",  frame: "rgba(197,135,10,0.6)" },
  green:      { band: "#2D5A3D", border: "#1F3F2B", shadow: "rgba(31,63,43,0.25)",    frame: "rgba(31,63,43,0.55)" },
  brown:      { band: "#2A1812", border: "#2A1812", shadow: "rgba(42,24,18,0.3)",     frame: "rgba(42,24,18,0.5)" },
  red:        { band: "#C0392B", border: "#7D1E1E", shadow: "rgba(125,30,30,0.25)",   frame: "rgba(192,57,43,0.55)" },
};

export default function TribalCard({
  children,
  className = "",
  variant = "terracotta",
  compact = false,
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  /** padding réduit + bandeau plus fin (pour cartes en grille) */
  compact?: boolean;
}) {
  const c = VARIANTS[variant];
  return (
    <div
      className={`relative bg-[#FBF1DC] rounded-2xl overflow-hidden ${className}`}
      style={{
        border: `3px solid ${c.border}`,
        boxShadow: `${compact ? "7px 7px 0" : "10px 10px 0"} ${c.shadow}`,
      }}
    >
      {/* ── Bandeau de motifs tribaux africains ── */}
      <div
        className={`relative overflow-hidden ${compact ? "h-12" : "h-16 md:h-20"}`}
        style={{ backgroundColor: c.band }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/motifafricain.jpg')",
            backgroundSize: compact ? "120px auto" : "170px auto",
            backgroundRepeat: "repeat",
            mixBlendMode: "multiply",
            opacity: 0.9,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2A1812]/10 to-[#2A1812]/35" />
      </div>

      {/* Bande kente colorée séparatrice */}
      <div className="kente-bar" />

      {/* ── Corps avec cadre intérieur ── */}
      <div className={compact ? "p-2 md:p-2.5" : "p-2.5 md:p-3.5"}>
        <div
          className={`rounded-xl ${compact ? "p-5 md:p-6" : "p-6 md:p-9"}`}
          style={{ border: `2px solid ${c.frame}` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
