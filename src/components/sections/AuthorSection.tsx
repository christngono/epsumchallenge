import Image from "next/image";
import Link from "next/link";

export default function AuthorSection() {
  return (
    <section className="bg-[#faf6f1] py-16 px-6 md:px-12 border-t border-[#ebe0d5]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">

        <div className="flex-shrink-0 w-[220px] md:w-[260px]">
          <Image
            src="/images/tous_les livres.png"
            alt="Collection Grégoire Nguédi"
            width={260}
            height={320}
            className="w-full rounded-md shadow-2xl object-cover"
          />
        </div>

        <div className="flex-1">
          <p className="text-[11px] font-bold tracking-[4px] text-[#1A3DAA] uppercase mb-3">
            L&apos;Auteur
          </p>
          <h2
            className="text-4xl md:text-[42px] text-[#7D1E1E] mb-5 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Grégoire Nguédi
          </h2>
          <p className="text-[15px] leading-[1.85] text-[#444] mb-8 max-w-xl">
            Écrivain camerounais publié aux Éditions L&apos;Harmattan, Grégoire Nguédi est
            l&apos;auteur d&apos;une œuvre littéraire riche et engagée. Romans, récits et
            nouvelles — ses livres explorent les réalités humaines et sociales avec
            sensibilité et profondeur.
          </p>
          <Link
            href="/nguedi-jm-editions"
            className="inline-block px-8 py-3.5 bg-[#1A3DAA] hover:bg-[#0E2A88] text-white text-xs font-bold tracking-[2px] rounded-full transition-colors"
          >
            DÉCOUVRIR L&apos;AUTEUR
          </Link>
        </div>

      </div>
    </section>
  );
}
