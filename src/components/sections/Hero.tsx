import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#1C1C2E] overflow-hidden min-h-[480px] flex items-center">

      {/* Image de fond hero */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero_for_epsumchallenge.png"
          alt="Epsum Challenge"
          fill
          className="object-cover object-center opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C2E]/85 via-[#1C1C2E]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20">
        <p className="text-[#F5C518] text-xs font-bold tracking-[4px] uppercase mb-4">
          Nouveauté — Jeu culturel
        </p>
        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight mb-6 max-w-2xl">
          Epsum<br />
          <span className="text-[#F5C518]">Challenge</span>
        </h1>
        <p className="text-white/75 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
          Le premier jeu de culture générale africaine. Testez vos connaissances,
          défiez vos proches et explorez la richesse du continent.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/epsum-challenge"
            className="inline-flex items-center gap-2 bg-[#F5C518] hover:bg-[#DBA900] text-gray-900 font-bold text-sm tracking-widest px-8 py-4 rounded-full transition-colors"
          >
            DÉCOUVRIR EPSUM
          </Link>
          <Link
            href="/nos-livres"
            className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold text-sm tracking-widest px-8 py-4 rounded-full transition-colors"
          >
            NOS LIVRES
          </Link>
        </div>
      </div>

      {/* Image produit flottante */}
      <div className="absolute right-8 bottom-0 hidden lg:block w-64 h-72">
        <Image
          src="/images/epsumchallege_Image.png"
          alt="Boîte Epsum Challenge"
          fill
          className="object-contain object-bottom"
          sizes="256px"
        />
      </div>

    </section>
  );
}
