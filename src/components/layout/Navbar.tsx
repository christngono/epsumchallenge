"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between py-3">
          <span className="text-xs font-bold tracking-widest text-[#1A3DAA]">MENU</span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="p-2"
          >
            <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>

        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-3 pb-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-[11px] font-bold tracking-[2px] py-1
                    ${pathname === link.href ? "text-[#1A3DAA]" : "text-gray-900"}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/epsum-challenge"
                onClick={() => setMenuOpen(false)}
                className="inline-block text-[11px] font-bold tracking-[2px] bg-[#F5C518] px-4 py-2 rounded-full"
              >
                EPSUM CHALLENGE
              </Link>
            </li>
          </ul>
        )}

      </div>
    </nav>
  );
}
