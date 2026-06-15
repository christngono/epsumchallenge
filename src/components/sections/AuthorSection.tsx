import Image from "next/image";
import Link from "next/link";
import { FOUNDER } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import Counter from "@/components/motion/Counter";

const STATS = [
  { to: 6, suffix: "+", label: "Romans publiés" },
  { to: 1, suffix: "", label: "Bande dessinée" },
  { to: 1, suffix: "", label: "Jeu culturel" },
];

export default function AuthorSection() {
  return (
    <section className="bg-[#faf6f1] py-20 px-6 md:px-12 border-t border-[#ebe0d5] overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">

        <Reveal direction="right" className="flex-shrink-0 w-[220px] md:w-[260px]">
          <Parallax offset={50}>
            <Image
              src="/images/tous_les livres.png"
              alt="Collection Grégoire Nguédi"
              width={260}
              height={320}
              className="w-full rounded-md shadow-2xl object-cover"
            />
          </Parallax>
        </Reveal>

        <Reveal direction="left" delay={0.1} className="flex-1">
          <p className="text-[11px] font-bold tracking-[4px] text-[#1A3DAA] uppercase mb-3">
            L&apos;Éditeur · L&apos;Auteur
          </p>
          <h2
            className="text-4xl md:text-[42px] text-[#7D1E1E] mb-2 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {FOUNDER.name}
          </h2>
          <p className="text-xs text-gray-400 mb-5">{FOUNDER.birth}</p>
          <p className="text-[15px] leading-[1.85] text-[#444] mb-4 max-w-xl">
            {FOUNDER.intro}
          </p>
          <p className="text-[15px] leading-[1.85] text-[#444] mb-8 max-w-xl">
            {FOUNDER.mission}
          </p>

          <div className="flex flex-wrap gap-8 mb-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <Counter to={s.to} suffix={s.suffix} className="text-3xl font-black text-[#1A3DAA]" />
                <p className="text-xs text-gray-500 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>

          <Link
            href="/nguedi-jm-editions"
            className="inline-block px-8 py-3.5 bg-[#1A3DAA] hover:bg-[#0E2A88] text-white text-xs font-bold tracking-[2px] rounded-full transition-all hover:scale-[1.04]"
          >
            DÉCOUVRIR L&apos;AUTEUR
          </Link>
        </Reveal>

      </div>
    </section>
  );
}
