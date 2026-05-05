import Image from "next/image";
import Link from "next/link";
import { BOOKS } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Livres — Nguedi JM Éditions",
  description: "Découvrez toute la collection Nguedi JM Éditions : romans de Grégoire Nguédi et essais.",
};

export default function NosLivresPage() {
  const romans = BOOKS.filter((b) => b.genre === "Roman");
  const essais = BOOKS.filter((b) => b.genre === "Essai");

  return (
    <>
      {/* ── En-tête ── */}
      <section className="bg-[#faf6f1] border-b border-[#ebe0d5] py-16 px-6 md:px-12 text-center">
        <p className="text-[10px] font-bold tracking-[4px] text-[#1A3DAA] uppercase mb-3">
          Catalogue complet
        </p>
        <h1
          className="text-4xl md:text-5xl text-[#1C1C2E] font-bold mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Nos Livres
        </h1>
        <p className="text-[15px] text-[#444] max-w-xl mx-auto">
          Romans, nouvelles et essais — une collection qui explore la réalité
          humaine et sociale africaine avec profondeur.
        </p>
      </section>

      {/* ── Romans ── */}
      <section className="bg-white py-14 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-1 bg-[#F5C518]" />
            <h2 className="text-xl font-black tracking-[3px] text-[#1C1C2E]">ROMANS</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {romans.map((book) => (
              <div key={book.slug} className="flex flex-col group cursor-pointer">
                <div className="relative h-[240px] rounded overflow-hidden mb-3 bg-[#f0f0f0]">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, (max-width: 900px) 33vw, 25vw"
                  />
                </div>
                <p className="text-xs text-gray-400 mb-0.5">{book.author}</p>
                <h3 className="text-sm font-bold text-[#1C1C2E] leading-snug">{book.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Essais ── */}
      <section className="bg-[#F5E2CC] py-14 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-1 bg-[#1A3DAA]" />
            <h2 className="text-xl font-black tracking-[3px] text-[#1C1C2E]">ESSAIS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {essais.map((book) => (
              <div key={book.slug} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-[160px] h-[200px] flex-shrink-0">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 160px"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-[3px] text-[#1A3DAA] uppercase">
                      {book.genre}
                    </span>
                    <h3 className="text-sm font-bold text-[#1C1C2E] leading-snug mt-1 mb-2">
                      {book.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-1">Auteur : <strong>{book.author}</strong></p>
                    {"preface" in book && book.preface && (
                      <p className="text-xs text-gray-500 mb-1">Préface : <strong>{book.preface}</strong></p>
                    )}
                    {"postPreface" in book && book.postPreface && (
                      <p className="text-xs text-gray-500">Postface : <strong>{book.postPreface}</strong></p>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mt-4 flex-wrap">
                    {"price" in book && book.price && (
                      <span className="text-lg font-black text-[#7D1E1E]">
                        {book.price.toLocaleString()} F CFA
                      </span>
                    )}
                    <Link
                      href="/contact"
                      className="inline-block bg-[#1A3DAA] hover:bg-[#0E2A88] text-white text-xs font-bold tracking-widest px-5 py-2.5 rounded-full transition-colors"
                    >
                      COMMANDER
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1C1C2E] py-12 px-6 md:px-12 text-center">
        <p className="text-white/70 text-sm mb-4">
          Envie d&apos;en savoir plus sur un titre ou de passer commande ?
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#F5C518] hover:bg-[#DBA900] text-gray-900 font-black text-xs tracking-widest px-10 py-4 rounded-full transition-colors"
        >
          NOUS CONTACTER
        </Link>
      </section>
    </>
  );
}
