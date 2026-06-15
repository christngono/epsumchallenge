"use client";

import Link from "next/link";
import { motion } from "motion/react";

const PANELS = [
  {
    title: ["Le salon", "de", "littérature"],
    href: "/nguedi-jm-editions",
    style: { background: "linear-gradient(rgba(20,20,40,0.52), rgba(20,20,40,0.52)), #607B8B" },
  },
  {
    title: ["Notre", "sélection", "de livres"],
    href: "/nos-livres",
    style: {
      background:
        "linear-gradient(rgba(50,40,100,0.65), rgba(80,50,120,0.65)), url('/images/tous_les livres.png') center/cover no-repeat #3D3B8E",
    },
  },
];

export default function TwoCol() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[370px]">
      {PANELS.map((panel, i) => (
        <motion.div
          key={panel.href}
          className="relative overflow-hidden h-[300px] md:h-full flex items-end group"
          style={panel.style}
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* halo doré au survol */}
          <div className="absolute inset-0 bg-[#F5C518]/0 group-hover:bg-[#F5C518]/10 transition-colors duration-500" />
          <div className="relative z-10 p-8 md:p-10 flex flex-col gap-6 items-start">
            <h2 className="text-white text-[28px] md:text-[40px] font-black leading-tight">
              {panel.title.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </h2>
            <Link
              href={panel.href}
              className="inline-block bg-white hover:bg-[#F5C518] text-gray-900 text-xs font-bold tracking-[2.5px] px-8 py-3.5 rounded-full transition-all hover:scale-[1.05]"
            >
              DÉCOUVRIR
            </Link>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
