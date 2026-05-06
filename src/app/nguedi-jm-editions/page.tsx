import Image from "next/image";
import Link from "next/link";
import { BOOKS } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nguedi JM Éditions — La maison d'édition",
  description: "Découvrez Nguedi JM Éditions, maison d'édition camerounaise fondée par Grégoire Nguédi.",
};

export default function NguediJmEditionsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#faf6f1] border-b border-[#ebe0d5] py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <p className="text-[10px] font-bold tracking-[4px] text-[#1A3DAA] uppercase mb-3">
              Depuis Yaoundé, Cameroun
            </p>
            <h1
              className="text-4xl md:text-5xl text-[#7D1E1E] font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Nguedi JM<br />Éditions
            </h1>
            <p className="text-[15px] leading-relaxed text-[#444] mb-6 max-w-lg">
              Maison d&apos;édition camerounaise spécialisée dans la littérature africaine,
              les essais et les outils éducatifs. Nous accompagnons les auteurs de la
              conception à la diffusion, avec un engagement fort pour la culture africaine.
            </p>
            <p className="text-[15px] leading-relaxed text-[#444] max-w-lg">
              Fondée sur les valeurs de l&apos;excellence littéraire et du rayonnement culturel,
              Nguedi JM Éditions publie des œuvres qui explorent les réalités humaines
              et sociales africaines avec sensibilité et profondeur.
            </p>
          </div>
          <div className="flex-shrink-0 w-[260px]">
            <Image
              src="/images/logo_nguedi.png"
              alt="Nguedi JM Éditions"
              width={260}
              height={200}
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* ── Fondateur ── */}
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-14">
          <div className="flex-shrink-0 w-[220px] md:w-[260px]">
            <Image
              src="/images/tous_les livres.png"
              alt="Grégoire Nguédi — Collection"
              width={260}
              height={320}
              className="w-full rounded-lg shadow-xl object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-bold tracking-[4px] text-[#1A3DAA] uppercase mb-3">
              Le Fondateur
            </p>
            <h2
              className="text-3xl md:text-4xl text-[#7D1E1E] mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Grégoire Nguédi
            </h2>
            <p className="text-[15px] leading-relaxed text-[#444] mb-4">
              Écrivain camerounais publié aux Éditions L&apos;Harmattan, Grégoire Nguédi est
              l&apos;auteur d&apos;une œuvre littéraire riche et engagée. Romans, récits et nouvelles —
              ses livres explorent les réalités humaines et sociales africaines avec
              sensibilité et profondeur.
            </p>
            <p className="text-[15px] leading-relaxed text-[#444] mb-8">
              À travers Nguedi JM Éditions, il crée un espace de publication et de
              promotion de la littérature africaine, en valorisant les voix et les
              histoires du continent auprès d&apos;un public plus large.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <p className="text-3xl font-black text-[#1A3DAA]">4+</p>
                <p className="text-xs text-gray-500 tracking-wide">Romans publiés</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-[#1A3DAA]">1</p>
                <p className="text-xs text-gray-500 tracking-wide">Essai</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-[#1A3DAA]">1</p>
                <p className="text-xs text-gray-500 tracking-wide">Jeu culturel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Catalogue ── */}
      <section className="bg-[#F5E2CC] py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#1C1C2E] tracking-wide mb-10 text-center">
            NOS PUBLICATIONS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {BOOKS.map((book) => (
              <div key={book.slug} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
                <div className="relative h-[240px]">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[10px] font-bold tracking-[3px] text-[#1A3DAA] uppercase mb-1">
                    {book.genre}
                  </span>
                  <h3 className="text-sm font-bold text-[#1C1C2E] leading-snug mb-2 flex-1">
                    {book.title}
                  </h3>
                  <p className="text-xs text-gray-500">{book.author}</p>
                  {"price" in book && book.price && (
                    <p className="text-sm font-black text-[#7D1E1E] mt-2">
                      {book.price.toLocaleString()} F CFA
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Epsum Challenge ── */}
      <section className="section-dark-tribal bg-[#1C1C2E] py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0 w-[200px]">
            <Image
              src="/images/epsumchallege_Image.png"
              alt="Epsum Challenge"
              width={200}
              height={250}
              className="w-full object-contain"
            />
          </div>
          <div className="flex-1">
            <p className="text-[#F5C518] text-xs font-bold tracking-[4px] uppercase mb-3">
              Notre création originale
            </p>
            <h2
              className="text-white text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Epsum Challenge
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed mb-8">
              Au-delà des livres, Nguedi JM Éditions a conçu Epsum Challenge,
              le premier jeu de culture générale africaine. Un outil ludique et
              éducatif qui valorise le patrimoine du continent.
            </p>
            <Link
              href="/epsum-challenge"
              className="inline-block bg-[#F5C518] hover:bg-[#DBA900] text-gray-900 font-black text-xs tracking-widest px-8 py-3.5 rounded-full transition-colors"
            >
              DÉCOUVRIR LE JEU
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
