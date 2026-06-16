"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export default function TwoCol() {
  const reduce = useReducedMotion();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[370px]">

      {/* ── Le salon de littérature ── */}
      <motion.div
        className="animated-gradient relative overflow-hidden h-[300px] md:h-full flex items-end group"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #1A3DAA 0%, #3D3B8E 40%, #6B5B9A 70%, #7D1E1E 100%)",
        }}
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Formes flottantes décoratives */}
        {!reduce && (
          <>
            <motion.span
              className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-[#F5C518]/25 blur-2xl"
              animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="absolute bottom-6 right-10 w-28 h-28 rounded-full bg-white/15 blur-xl"
              animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Livre flottant */}
            <motion.svg
              className="absolute top-8 right-12 opacity-30"
              viewBox="0 0 48 48" width="64" height="64" fill="none"
              animate={{ y: [0, -14, 0], rotate: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <rect x="8" y="8" width="14" height="32" rx="2" fill="#F5C518" />
              <rect x="24" y="8" width="14" height="32" rx="2" fill="#fff" opacity="0.85" />
              <line x1="23" y1="8" x2="23" y2="40" stroke="#1A3DAA" strokeWidth="2" />
            </motion.svg>
          </>
        )}

        <div className="relative z-10 p-8 md:p-10 flex flex-col gap-6 items-start">
          <motion.h2
            className="text-white text-[28px] md:text-[40px] font-black leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
          >
            {["Le salon", "de", "littérature"].map((line) => (
              <motion.span
                key={line}
                className="block"
                variants={{
                  hidden: reduce ? { opacity: 0 } : { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                {line}
              </motion.span>
            ))}
          </motion.h2>
          <Link
            href="/nguedi-jm-editions"
            className="inline-block bg-[#F5C518] hover:bg-white text-gray-900 text-xs font-bold tracking-[2.5px] px-8 py-3.5 rounded-full transition-all hover:scale-[1.05]"
          >
            DÉCOUVRIR
          </Link>
        </div>
      </motion.div>

      {/* ── Notre sélection de livres ── */}
      <motion.div
        className="relative overflow-hidden h-[300px] md:h-full flex items-end group"
        style={{
          background:
            "linear-gradient(rgba(50,40,100,0.65), rgba(80,50,120,0.65)), url('/images/tous_les livres.png') center/cover no-repeat #3D3B8E",
        }}
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="absolute inset-0 bg-[#F5C518]/0 group-hover:bg-[#F5C518]/10 transition-colors duration-500" />
        <div className="relative z-10 p-8 md:p-10 flex flex-col gap-6 items-start">
          <h2 className="text-white text-[28px] md:text-[40px] font-black leading-tight">
            <span className="block">Notre</span>
            <span className="block">sélection</span>
            <span className="block">de livres</span>
          </h2>
          <Link
            href="/nos-livres"
            className="inline-block bg-white hover:bg-[#F5C518] text-gray-900 text-xs font-bold tracking-[2.5px] px-8 py-3.5 rounded-full transition-all hover:scale-[1.05]"
          >
            DÉCOUVRIR
          </Link>
        </div>
      </motion.div>

    </section>
  );
}
