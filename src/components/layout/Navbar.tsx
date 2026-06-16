"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "motion/react";

// Origine du cercle : coin haut-droit, là où se trouve le bouton menu.
const ORIGIN = "calc(100% - 2.5rem) 2rem";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  // Bloque le scroll de la page tant que le menu plein écran est ouvert.
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const overlayVariants: Variants = reduce
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { clipPath: `circle(0% at ${ORIGIN})` },
        visible: { clipPath: `circle(150% at ${ORIGIN})` },
      };

  const listVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
  };

  const itemVariants: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <nav className="bg-[#F5E2CC] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Desktop */}
        <ul className="hidden md:flex items-center justify-center gap-10 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[11px] font-bold tracking-[2px] relative pb-1 transition-colors
                  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#1A3DAA]
                  after:transition-all after:duration-300
                  ${pathname === link.href
                    ? "text-[#1A3DAA] after:w-full"
                    : "text-gray-900 hover:text-[#1A3DAA] after:w-0 hover:after:w-full"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* Bouton Epsum Challenge */}
          <li>
            <Link
              href="/epsum-challenge"
              className="text-[11px] font-bold tracking-[2px] bg-[#F5C518] hover:bg-[#DBA900] text-gray-900
                px-4 py-2 rounded-full transition-colors"
            >
              EPSUM CHALLENGE
            </Link>
          </li>
        </ul>

        {/* Barre mobile */}
        <div className="md:hidden flex items-center justify-between py-3">
          <span className="text-xs font-bold tracking-widest text-[#1A3DAA]">MENU</span>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            className="p-2 relative z-[70]"
          >
            <span className="block w-7 h-0.5 bg-gray-800 mb-1.5" />
            <span className="block w-7 h-0.5 bg-gray-800 mb-1.5" />
            <span className="block w-7 h-0.5 bg-gray-800" />
          </button>
        </div>
      </div>

      {/* Bande kente colorée animée */}
      <div className="kente-bar" />

      {/* Overlay plein écran — révélation circulaire */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-[60] section-dark-tribal bg-[#1C1C2E] flex flex-col"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.6, ease: [0.86, 0, 0.07, 1] }}
          >
            {/* Bouton fermer */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Fermer le menu"
                className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:border-[#F5C518] hover:text-[#F5C518] transition-colors"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>
            </div>

            {/* Liens */}
            <motion.ul
              className="flex-1 flex flex-col justify-center items-center gap-7 px-6 pb-20"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              {NAV_LINKS.map((link) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-3xl font-bold tracking-wide transition-colors
                      ${pathname === link.href ? "text-[#F5C518]" : "text-white hover:text-[#F5C518]"}`}
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={itemVariants} className="mt-4">
                <Link
                  href="/epsum-challenge"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block text-sm font-bold tracking-[2px] bg-[#F5C518] hover:bg-[#DBA900] text-gray-900 px-8 py-4 rounded-full transition-colors"
                >
                  EPSUM CHALLENGE
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
