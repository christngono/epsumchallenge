import Link from "next/link";
import { notFound } from "next/navigation";
import { BOOKS, NEW_BOOK_EXCERPT, NEW_BOOK_AUTHOR_BIO } from "@/lib/data";
import BookCover from "@/components/ui/BookCover";
import Reveal from "@/components/motion/Reveal";
import type { Metadata } from "next";

export function generateStaticParams() {
  return BOOKS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = BOOKS.find((b) => b.slug === slug);
  if (!book) return { title: "Livre introuvable — Nguedi JM Éditions" };
  return {
    title: `${book.title} — Nguedi JM Éditions`,
    description: book.description ?? `${book.title}, de ${book.author}.`,
  };
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = BOOKS.find((b) => b.slug === slug);
  if (!book) notFound();

  const isEssai = book.slug === "controle-gestion-matieres";
  const related = BOOKS.filter((b) => b.slug !== book.slug && b.genre === book.genre).slice(0, 4);

  return (
    <>
      {/* ── Fil d'Ariane ── */}
      <div className="bg-[#faf6f1] border-b border-[#ebe0d5] px-6 md:px-12 py-4">
        <div className="max-w-5xl mx-auto text-xs text-gray-500">
          <Link href="/" className="hover:text-[#1A3DAA]">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href="/nos-livres" className="hover:text-[#1A3DAA]">Nos Livres</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1C1C2E] font-semibold">{book.title}</span>
        </div>
      </div>

      {/* ── Détail ── */}
      <section className="bg-white py-16 px-6 md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 md:gap-16 items-start">
          <Reveal direction="right" className="mx-auto md:mx-0 w-full max-w-[300px]">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <BookCover book={book} sizes="300px" />
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <span className="inline-block text-[10px] font-bold tracking-[3px] text-[#1A3DAA] uppercase mb-3">
              {book.genre}
            </span>
            <h1
              className="text-3xl md:text-4xl text-[#1C1C2E] font-bold leading-tight mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {book.title}
            </h1>

            <div className="flex flex-col gap-1 text-sm text-gray-600 mb-6">
              <p>Auteur : <strong className="text-[#1C1C2E]">{book.author}</strong></p>
              {book.year && <p>Année : <strong className="text-[#1C1C2E]">{book.year}</strong></p>}
              {book.publisher && <p>Éditeur : <strong className="text-[#1C1C2E]">{book.publisher}</strong></p>}
              {book.preface && <p>Préface : <strong className="text-[#1C1C2E]">{book.preface}</strong></p>}
              {book.postPreface && <p>Postface : <strong className="text-[#1C1C2E]">{book.postPreface}</strong></p>}
            </div>

            {book.description && (
              <p className="text-[15px] leading-[1.8] text-[#444] mb-6 max-w-xl">{book.description}</p>
            )}

            {isEssai && (
              <blockquote className="border-l-4 border-[#F5C518] pl-4 text-[15px] leading-relaxed text-[#555] italic mb-6 max-w-xl">
                {NEW_BOOK_EXCERPT}
              </blockquote>
            )}

            <div className="flex items-center gap-6 flex-wrap">
              {book.price && (
                <span className="text-2xl font-black text-[#7D1E1E]">
                  {book.price.toLocaleString()} F CFA
                </span>
              )}
              <Link
                href="/contact"
                className="inline-block bg-[#1A3DAA] hover:bg-[#0E2A88] text-white text-xs font-bold tracking-widest px-8 py-3.5 rounded-full transition-all hover:scale-[1.04]"
              >
                COMMANDER
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Bio auteur (essai) ── */}
      {isEssai && (
        <section className="bg-[#faf6f1] py-16 px-6 md:px-12 border-y border-[#ebe0d5]">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <p className="text-[10px] font-bold tracking-[4px] text-[#1A3DAA] uppercase mb-3">
                L&apos;Auteur
              </p>
              <h2 className="text-2xl font-bold text-[#1C1C2E] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                {book.author}
              </h2>
              <p className="text-[15px] leading-[1.8] text-[#444]">{NEW_BOOK_AUTHOR_BIO}</p>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── Dans la même catégorie ── */}
      {related.length > 0 && (
        <section className="bg-white py-16 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <h2 className="text-xl font-black tracking-[2px] text-[#1C1C2E] mb-8">
                À DÉCOUVRIR AUSSI
              </h2>
            </Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {related.map((b) => (
                <Link key={b.slug} href={`/nos-livres/${b.slug}`} className="block group">
                  <div className="relative h-[220px] rounded overflow-hidden mb-3 bg-[#f0f0f0] shadow-md">
                    <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                      <BookCover book={b} sizes="(max-width: 640px) 50vw, 25vw" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-[#1C1C2E] leading-snug">{b.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
