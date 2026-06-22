"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

// ⚠️ Placeholder : remplace par le visuel du jeu mobile Epsum quand il sera fourni.
const APP_IMAGE = "/images/epsumchallege_Image.png";

// Liens des stores (à compléter avec les vraies URL).
const PLAY_STORE_URL = "#";
const APP_STORE_URL = "#";

export default function AppBanner() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="flex items-center gap-2 md:gap-3 relative overflow-hidden rounded-2xl bg-[#2A1812] pl-2 pr-2.5 md:pr-3 py-1.5 md:py-2 border border-[#F4A906]/30"
      animate={reduce ? undefined : { y: [0, -4, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      style={{
        boxShadow: "0 0 0 0 rgba(245,197,24,0.4)",
      }}
    >
      {/* Halo pulsé */}
      {!reduce && (
        <motion.span
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{ boxShadow: ["0 0 0 0 rgba(245,197,24,0.45)", "0 0 0 8px rgba(245,197,24,0)"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      )}

      {/* Reflet qui balaie en continu */}
      {!reduce && (
        <motion.span
          className="absolute top-0 bottom-0 w-1/3 pointer-events-none"
          style={{ background: "linear-gradient(100deg, transparent, rgba(255,255,255,0.18), transparent)" }}
          animate={{ x: ["-150%", "350%"] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
        />
      )}

      {/* Visuel du jeu */}
      <div className="relative w-11 h-11 flex-shrink-0 rounded-xl overflow-hidden bg-[#F4A906]/10">
        <Image src={APP_IMAGE} alt="Jeu mobile Epsum" fill className="object-contain p-1" sizes="44px" />
      </div>

      {/* Texte + boutons stores */}
      <div className="relative z-10">
        <p className="text-[8px] font-bold tracking-[2px] text-[#F4A906] uppercase leading-none mb-0.5">
          Nouveau · Jeu mobile
        </p>
        <p className="text-[13px] font-extrabold text-white leading-tight mb-1.5">
          Téléchargez Epsum
        </p>
        <div className="flex items-center gap-1.5">
          <a
            href={PLAY_STORE_URL}
            aria-label="Disponible sur Google Play"
            className="flex items-center gap-1 bg-white/10 hover:bg-white/20 transition-colors rounded-md px-2 py-1"
          >
            <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden>
              <path d="M3.6 2.3 13.4 12 3.6 21.7c-.3-.2-.5-.6-.5-1V3.3c0-.4.2-.8.5-1z" fill="#34A853" />
              <path d="M16.4 9 13.4 12l3 3 3.4-1.9c.7-.4.7-1.4 0-1.8z" fill="#FBBC04" />
              <path d="M3.6 2.3c.3-.2.7-.2 1.1 0L16.4 9l-3 3z" fill="#4285F4" />
              <path d="M3.6 21.7 13.4 12l3 3-11.7 6.7c-.4.2-.8.2-1.1 0z" fill="#EA4335" />
            </svg>
            <span className="text-[9px] font-bold text-white leading-none">Play</span>
          </a>
          <a
            href={APP_STORE_URL}
            aria-label="Télécharger sur l'App Store"
            className="flex items-center gap-1 bg-white/10 hover:bg-white/20 transition-colors rounded-md px-2 py-1"
          >
            <svg viewBox="0 0 24 24" width="12" height="12" fill="white" aria-hidden>
              <path d="M16.37 1.43c0 1.14-.42 2.2-1.13 3.01-.78.92-2.06 1.62-3.12 1.54-.13-1.1.42-2.27 1.07-3 .73-.83 2.03-1.46 3.18-1.55zM20.5 17.2c-.56 1.3-.83 1.88-1.55 3.02-1.01 1.6-2.43 3.6-4.2 3.61-1.57.01-1.97-.99-4.1-.98-2.13.01-2.57 1-4.14.98-1.77-.02-3.12-1.82-4.13-3.42-2.83-4.42-3.13-9.6-.38-12.36.95-.99 2.2-1.55 3.45-1.55 1.37 0 2.23.99 3.36.99 1.1 0 1.77-.99 3.36-.99 1.2 0 2.47.65 3.38 1.78-2.97 1.63-2.49 5.87.48 7.82z" />
            </svg>
            <span className="text-[9px] font-bold text-white leading-none">App Store</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
