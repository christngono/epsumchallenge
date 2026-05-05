import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C2E] text-white relative overflow-hidden">

      {/* Vague supérieure */}
      <div className="leading-none">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" width="100%" height="70">
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,10 1440,35 L1440,0 L0,0 Z" fill="#C4B5D5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex justify-between items-start px-6 md:px-12 pt-10 pb-8 gap-10 flex-col sm:flex-row">

        {/* Logo + nom */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo_nguedi.png"
            alt="Nguedi JM Éditions"
            width={120}
            height={56}
            className="h-14 w-auto object-contain opacity-90"
          />
          <p className="text-base font-extrabold tracking-widest leading-relaxed">
            NGUEDI JM<br />EDITIONS
          </p>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="text-sm font-bold tracking-[3px] mb-4">CONTACTS</h4>
          <p className="text-sm text-white/70 mb-2">
            localisation : <strong className="text-white">NOUVELLE ROUTE BASTOS</strong>
          </p>
          <p className="text-sm text-white/70">
            Téléphone : <strong className="text-white">677634821</strong>
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h4 className="text-sm font-bold tracking-[3px] mb-4">NAVIGATION</h4>
          <ul className="flex flex-col gap-2">
            {[
              { label: "Accueil", href: "/" },
              { label: "Nos Livres", href: "/nos-livres" },
              { label: "Nos Services", href: "/nos-services" },
              { label: "Epsum Challenge", href: "/epsum-challenge" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/65 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Liens légaux */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 border-t border-white/10 flex flex-wrap gap-4 items-center">
        {[
          { label: "Mentions légales", href: "#" },
          { label: "Politique de confidentialité", href: "#" },
          { label: "Questions", href: "/contact" },
        ].map((l, i) => (
          <span key={l.href} className="flex items-center gap-4">
            {i > 0 && <span className="text-white/25">·</span>}
            <Link href={l.href} className="text-xs text-white/65 hover:text-white transition-colors">
              {l.label}
            </Link>
          </span>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center py-4 pb-8">
        <p className="text-xs text-white/35 tracking-widest">2026 NGUEDI JM EDITIONS</p>
      </div>

      {/* Vagues décoratives */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" width="100%" height="100">
          <path d="M0,50 C360,80 720,20 1080,50 C1260,65 1380,35 1440,50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          <path d="M0,60 C360,90 720,30 1080,60 C1260,75 1380,45 1440,60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
          <path d="M0,70 C360,100 720,40 1080,70 C1260,85 1380,55 1440,70" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="2" />
        </svg>
      </div>

    </footer>
  );
}
