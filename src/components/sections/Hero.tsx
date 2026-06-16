"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import Typewriter from "@/components/motion/Typewriter";

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Couches à vitesses différentes
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const productY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section
      ref={ref}
      className="relative bg-[#1C1C2E] overflow-hidden min-h-[560px] flex items-center"
    >
      {/* Image de fond hero — parallax */}
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y: bgY, scale: bgScale }}>
        <Image
          src="/images/hero_for_epsumchallenge.png"
          alt="Epsum Challenge"
          fill
          className="object-cover object-center opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C2E]/90 via-[#1C1C2E]/55 to-transparent" />
      </motion.div>

      {/* Blobs colorés animés (charte Epsum) */}
      {!reduce && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-16 -left-10 w-72 h-72 rounded-full bg-[#F5C518]/25 blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 40, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-60px] left-1/3 w-80 h-80 rounded-full bg-[#1A3DAA]/30 blur-3xl"
            animate={{ x: [0, -60, 0], y: [0, -30, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-[#7D1E1E]/30 blur-3xl"
            animate={{ x: [0, 40, 0], y: [0, 50, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      )}

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 w-full"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          className="text-[#F5C518] text-xs md:text-sm font-bold tracking-[3px] uppercase mb-4 min-h-[1.4em]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typewriter
            phrases={[
              "Jeu de société éducatif",
              "Redécouvrez la ville aux 7 collines",
              "Pour toute la famille",
              "Histoire & traditions de Yaoundé",
            ]}
          />
        </motion.p>

        <motion.h1
          className="text-white text-4xl md:text-6xl font-black leading-tight mb-6 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block hero-float">Epsum</span>
          <span className="block hero-float-delayed hero-shine">Challenge</span>
        </motion.h1>

        <motion.p
          className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          Des origines à nos jours, redécouvrez la ville aux 7 collines. Un jeu
          éducatif et drôle qui réunit toute la famille pour de belles soirées de partage.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <Link
            href="/epsum-challenge"
            className="inline-flex items-center gap-2 bg-[#F5C518] hover:bg-[#DBA900] text-gray-900 font-bold text-sm tracking-widest px-8 py-4 rounded-full transition-all hover:scale-[1.04]"
          >
            DÉCOUVRIR EPSUM
          </Link>
          <Link
            href="/nos-livres"
            className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold text-sm tracking-widest px-8 py-4 rounded-full transition-all hover:scale-[1.04]"
          >
            NOS LIVRES
          </Link>
        </motion.div>
      </motion.div>

      {/* Image produit flottante — parallax + flottement */}
      <motion.div
        className="absolute right-8 bottom-0 hidden lg:block w-64 h-80"
        style={reduce ? undefined : { y: productY }}
      >
        <motion.div
          className="w-full h-full"
          animate={reduce ? undefined : { y: [0, -16, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/epsumchallege_Image.png"
            alt="Boîte Epsum Challenge"
            fill
            className="object-contain object-bottom drop-shadow-2xl"
            sizes="256px"
          />
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll */}
      {!reduce && (
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="w-1 h-2 rounded-full bg-[#F5C518]" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
