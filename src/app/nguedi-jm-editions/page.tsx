import Image from "next/image";
import Link from "next/link";
import { BOOKS, FOUNDER, EDITIONS, TEN_UNITS, ECU } from "@/lib/data";
import BookCover from "@/components/ui/BookCover";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import Counter from "@/components/motion/Counter";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nguedi JM Éditions — La maison d'édition",
  description:
    "Maison d'édition camerounaise créée en 2011 par Grégoire Nguédi. Édition, formation, accompagnement et méthode T.E.N.",
};

export default function NguediJmEditionsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#F7EEDD] border-b border-[#ebe0d5] py-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <Reveal direction="right" className="flex-1">
            <p className="text-[10px] font-bold tracking-[4px] text-[#D9591A] uppercase mb-3">
              Depuis 2011 · Yaoundé, Cameroun
            </p>
            <h1
              className="text-4xl md:text-5xl text-[#7D1E1E] font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Nguedi JM<br />Éditions
            </h1>
            <p className="text-[15px] leading-relaxed text-[#444] mb-4 max-w-lg">
              {EDITIONS.intro}
            </p>
            <p className="text-[16px] leading-relaxed text-[#2A1812] font-semibold max-w-lg italic">
              « Faire du texte de qualité une réalité. »
            </p>
          </Reveal>
          <Reveal direction="left" delay={0.15} className="flex-shrink-0 w-[260px]">
            <Parallax offset={30}>
              <Image
                src="/images/logo_nguedi.png"
                alt="Nguedi JM Éditions"
                width={260}
                height={200}
                className="w-full object-contain"
              />
            </Parallax>
          </Reveal>
        </div>
      </section>

      {/* ── Le fondateur ── */}
      <section className="bg-transparent py-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-14">
          <Reveal direction="right" className="flex-shrink-0 w-[220px] md:w-[260px]">
            <Parallax offset={50}>
              <Image
                src="/images/tous_les livres.png"
                alt="Grégoire Nguédi — Collection"
                width={260}
                height={320}
                className="w-full rounded-lg shadow-2xl object-cover"
              />
            </Parallax>
          </Reveal>
          <Reveal direction="left" delay={0.1} className="flex-1">
            <p className="text-[10px] font-bold tracking-[4px] text-[#D9591A] uppercase mb-3">
              Le Fondateur
            </p>
            <h2
              className="text-3xl md:text-4xl text-[#7D1E1E] mb-2 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {FOUNDER.name}
            </h2>
            <p className="text-xs text-gray-400 mb-5">
              {FOUNDER.birth} · {FOUNDER.role}
            </p>
            <p className="text-[15px] leading-relaxed text-[#444] mb-4">{FOUNDER.intro}</p>
            <p className="text-[15px] leading-relaxed text-[#444] mb-8">{FOUNDER.mission}</p>
            <div className="flex flex-wrap gap-8">
              <div>
                <Counter to={6} suffix="+" className="text-3xl font-black text-[#D9591A]" />
                <p className="text-xs text-gray-500 tracking-wide">Romans publiés</p>
              </div>
              <div>
                <Counter to={1} className="text-3xl font-black text-[#D9591A]" />
                <p className="text-xs text-gray-500 tracking-wide">Bande dessinée</p>
              </div>
              <div>
                <Counter to={1} className="text-3xl font-black text-[#D9591A]" />
                <p className="text-xs text-gray-500 tracking-wide">Jeu culturel</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Nos compétences / services ── */}
      <section className="bg-[#F7EEDD] py-20 px-6 md:px-12 border-y border-[#ebe0d5]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2A1812] mb-3 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
              Notre accompagnement
            </h2>
            <p className="text-[15px] leading-relaxed text-[#444] max-w-2xl mx-auto text-center mb-12">
              {EDITIONS.support}
            </p>
          </Reveal>
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "Méthode T.E.N", d: EDITIONS.ten },
              { t: "Applications de correction", d: EDITIONS.apps },
              { t: "Formations littéraires", d: EDITIONS.training },
            ].map((c) => (
              <StaggerItem key={c.t}>
                <div className="h-full bg-white rounded-lg p-7 shadow-sm border border-[#ebe0d5]">
                  <span className="block w-8 h-1 bg-[#F4A906] mb-4" />
                  <h3 className="text-lg font-bold text-[#2A1812] mb-2">{c.t}</h3>
                  <p className="text-sm leading-relaxed text-[#555]">{c.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Unités autonomes T.E.N ── */}
      <section className="bg-transparent py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-[10px] font-bold tracking-[4px] text-[#D9591A] uppercase mb-3 text-center">
              Test d&apos;Évaluation Nguédi
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2A1812] mb-3 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
              Les unités autonomes
            </h2>
            <p className="text-sm text-[#555] max-w-2xl mx-auto text-center mb-10">
              Des unités de formation, de compréhension et d&apos;analyse de l&apos;écriture et de la
              lecture, pour une évaluation claire et détaillée de chaque œuvre.
            </p>
          </Reveal>
          <Stagger className="flex flex-wrap justify-center gap-3" stagger={0.04}>
            {TEN_UNITS.map((u) => (
              <StaggerItem key={u}>
                <span className="inline-block bg-[#F5E2CC] text-[#2A1812] text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#F4A906] transition-colors">
                  {u}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Catalogue ── */}
      <section className="bg-[#F5E2CC] py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-2xl font-black text-[#2A1812] tracking-wide mb-10 text-center">
              NOS PUBLICATIONS
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" stagger={0.08}>
            {BOOKS.map((book) => (
              <StaggerItem key={book.slug}>
                <Link
                  href={`/nos-livres/${book.slug}`}
                  className="block h-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-[240px] overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                      <BookCover book={book} sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw" />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col">
                    <span className="text-[10px] font-bold tracking-[3px] text-[#D9591A] uppercase mb-1">
                      {book.genre}
                    </span>
                    <h3 className="text-sm font-bold text-[#2A1812] leading-snug mb-2">{book.title}</h3>
                    <p className="text-xs text-gray-500">{book.author}</p>
                    {book.price && (
                      <p className="text-sm font-black text-[#7D1E1E] mt-2">
                        {book.price.toLocaleString()} F CFA
                      </p>
                    )}
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Epsum Challenge Univers ── */}
      <section className="section-dark-tribal bg-[#2A1812] py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <Reveal direction="right" className="flex-shrink-0 w-[200px]">
            <Image
              src="/images/epsumchallege_Image.png"
              alt="Epsum Challenge"
              width={200}
              height={250}
              className="w-full object-contain drop-shadow-2xl"
            />
          </Reveal>
          <Reveal direction="left" delay={0.1} className="flex-1">
            <p className="text-[#F4A906] text-xs font-bold tracking-[4px] uppercase mb-3">
              Notre création originale · Depuis {ECU.since}
            </p>
            <h2
              className="text-white text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Epsum Challenge Univers
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed mb-8">
              Au-delà des livres, Nguedi JM Éditions porte l&apos;ECU, un mouvement
              culturel autour de nos origines et de nos villes africaines — avec le jeu
              Epsum Challenge, des bandes dessinées et des cartes culturelles.
            </p>
            <Link
              href="/epsum-challenge"
              className="inline-block bg-[#F4A906] hover:bg-[#C5870A] text-gray-900 font-black text-xs tracking-widest px-8 py-3.5 btn-3d"
            >
              DÉCOUVRIR LE JEU
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
