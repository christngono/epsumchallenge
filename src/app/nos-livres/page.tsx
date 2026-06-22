import Link from "next/link";
import { BOOKS } from "@/lib/data";
import BookCover from "@/components/ui/BookCover";
import TiltCard from "@/components/motion/TiltCard";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Livres — Nguedi JM Éditions",
  description:
    "Toute la collection Nguedi JM Éditions : romans de Grégoire Nguédi, bande dessinée et essais.",
};

export default function NosLivresPage() {
  const romans = BOOKS.filter((b) => b.genre === "Roman");
  const bd = BOOKS.filter((b) => b.genre === "BD");
  const essais = BOOKS.filter((b) => b.genre === "Essai");

  return (
    <>
      {/* ── En-tête ── */}
      <section className="bg-[#F7EEDD] border-b border-[#ebe0d5] py-16 px-6 md:px-12 text-center">
        <Reveal>
          <p className="text-[10px] font-bold tracking-[4px] text-[#D9591A] uppercase mb-3">
            Catalogue complet
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A1812] font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nos Livres
          </h1>
          <p className="text-[15px] text-[#444] max-w-xl mx-auto">
            Romans, bande dessinée et essais — une collection qui explore la réalité
            humaine et sociale africaine avec profondeur.
          </p>
        </Reveal>
      </section>

      {/* ── Romans ── */}
      <section className="bg-transparent py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Reveal className="flex items-center gap-4 mb-10">
            <div className="w-8 h-1 bg-[#F4A906]" />
            <h2 className="text-xl font-black tracking-[3px] text-[#2A1812]">ROMANS</h2>
          </Reveal>
          <Stagger className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6" stagger={0.08}>
            {romans.map((book) => (
              <StaggerItem key={book.slug}>
                <Link href={`/nos-livres/${book.slug}`} className="block group">
                  <TiltCard className="relative h-[240px] rounded overflow-hidden mb-3 bg-[#EFE3D2] shadow-md">
                    <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                      <BookCover book={book} sizes="(max-width: 640px) 50vw, (max-width: 900px) 33vw, 25vw" />
                    </div>
                  </TiltCard>
                  <p className="text-xs text-gray-400 mb-0.5">{book.author}{book.year ? ` · ${book.year}` : ""}</p>
                  <h3 className="text-sm font-bold text-[#2A1812] leading-snug">{book.title}</h3>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Bande dessinée ── */}
      {bd.length > 0 && (
        <section className="bg-[#2A1812] section-dark-tribal py-16 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <Reveal className="flex items-center gap-4 mb-10">
              <div className="w-8 h-1 bg-[#F4A906]" />
              <h2 className="text-xl font-black tracking-[3px] text-white">BANDE DESSINÉE</h2>
            </Reveal>
            <Stagger className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6" stagger={0.08}>
              {bd.map((book) => (
                <StaggerItem key={book.slug}>
                  <Link href={`/nos-livres/${book.slug}`} className="block group">
                    <TiltCard className="relative h-[240px] rounded overflow-hidden mb-3 shadow-lg">
                      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                        <BookCover book={book} sizes="(max-width: 640px) 50vw, 25vw" />
                      </div>
                    </TiltCard>
                    <p className="text-xs text-white/50 mb-0.5">{book.author}{book.year ? ` · ${book.year}` : ""}</p>
                    <h3 className="text-sm font-bold text-white leading-snug">{book.title}</h3>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* ── Essais ── */}
      <section className="bg-[#F5E2CC] py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Reveal className="flex items-center gap-4 mb-10">
            <div className="w-8 h-1 bg-[#D9591A]" />
            <h2 className="text-xl font-black tracking-[3px] text-[#2A1812]">ESSAIS</h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {essais.map((book) => (
              <StaggerItem key={book.slug}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col sm:flex-row h-full">
                  <div className="relative w-full sm:w-[160px] h-[200px] flex-shrink-0">
                    <BookCover book={book} sizes="(max-width: 640px) 100vw, 160px" />
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold tracking-[3px] text-[#D9591A] uppercase">
                        {book.genre}
                      </span>
                      <h3 className="text-sm font-bold text-[#2A1812] leading-snug mt-1 mb-2">
                        {book.title}
                      </h3>
                      <p className="text-xs text-gray-500 mb-1">Auteur : <strong>{book.author}</strong></p>
                      {book.preface && (
                        <p className="text-xs text-gray-500 mb-1">Préface : <strong>{book.preface}</strong></p>
                      )}
                      {book.postPreface && (
                        <p className="text-xs text-gray-500">Postface : <strong>{book.postPreface}</strong></p>
                      )}
                    </div>
                    <div className="flex items-center gap-4 mt-4 flex-wrap">
                      {book.price && (
                        <span className="text-lg font-black text-[#7D1E1E]">
                          {book.price.toLocaleString()} F CFA
                        </span>
                      )}
                      <Link
                        href={`/nos-livres/${book.slug}`}
                        className="inline-block bg-[#D9591A] hover:bg-[#A8400F] text-white text-xs font-bold tracking-widest px-5 py-2.5 btn-3d transition-colors"
                      >
                        EN SAVOIR PLUS
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#2A1812] py-12 px-6 md:px-12 text-center">
        <p className="text-white/70 text-sm mb-4">
          Envie d&apos;en savoir plus sur un titre ou de passer commande ?
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#F4A906] hover:bg-[#C5870A] text-gray-900 font-black text-xs tracking-widest px-10 py-4 btn-3d"
        >
          NOUS CONTACTER
        </Link>
      </section>
    </>
  );
}
