"use client";

import Image from "next/image";
import Link from "next/link";
import AppBanner from "./AppBanner";

export default function Header() {
  return (
    <header className="bg-white border-b border-[#ebe0d5] px-6 md:px-12 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

        <div className="flex items-center gap-2 md:gap-4 min-w-0">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo_nguedi.png"
              alt="Nguedi JM Éditions"
              width={160}
              height={70}
              className="h-12 md:h-16 w-auto object-contain"
              priority
            />
          </Link>
          {/* Bannière pub appli mobile, à côté du logo */}
          <AppBanner />
        </div>

        <div className="hidden md:flex flex-col items-center gap-2">
          <p className="text-xs text-gray-500 tracking-wide">suivez-nous sur</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="text-gray-800 hover:text-[#D9591A] transition-colors">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-800 hover:text-[#D9591A] transition-colors">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter / X" className="text-gray-800 hover:text-[#D9591A] transition-colors">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}
