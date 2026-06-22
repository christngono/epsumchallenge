import Image from "next/image";
import type { Book } from "@/lib/data";

interface BookCoverProps {
  book: Book;
  sizes?: string;
  className?: string;
  objectClassName?: string;
}

/**
 * Affiche la couverture d'un livre : photo si disponible,
 * sinon une couverture générée (dégradé charte + titre Playfair).
 * À placer dans un conteneur `relative` (utilise `fill`).
 */
export default function BookCover({
  book,
  sizes = "25vw",
  objectClassName = "object-cover object-top",
}: BookCoverProps) {
  if (book.image) {
    return (
      <Image
        src={book.image}
        alt={book.title}
        fill
        className={`${objectClassName} transition-transform duration-[450ms]`}
        sizes={sizes}
      />
    );
  }

  const color = book.coverColor ?? "#D9591A";

  return (
    <div
      className="absolute inset-0 flex flex-col justify-between p-4 text-white"
      style={{
        background: `linear-gradient(150deg, ${color} 0%, rgba(0,0,0,0.55) 130%)`,
      }}
    >
      {/* filet décoratif haut */}
      <span className="block w-10 h-[3px] bg-[#F4A906]" />

      <div className="flex-1 flex items-center">
        <h3
          className="text-[clamp(15px,2.4vw,22px)] font-bold leading-snug"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {book.title}
        </h3>
      </div>

      <div>
        <p className="text-[10px] tracking-[2px] uppercase text-white/70">{book.author}</p>
        {book.year && <p className="text-[10px] text-[#F4A906] font-bold mt-0.5">{book.year}</p>}
      </div>
    </div>
  );
}
