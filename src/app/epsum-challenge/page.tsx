import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Epsum Challenge — Nguedi JM Éditions",
  description: "Le premier jeu de culture générale africaine. Testez vos connaissances et défiez vos proches.",
};

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Choisissez votre thème",
    desc: "Histoire, géographie, culture, sport, personnalités africaines… plus de 500 questions réparties en 6 catégories.",
  },
  {
    step: "02",
    title: "Défiez vos proches",
    desc: "2 à 6 joueurs. Chaque joueur tire une carte et répond à la question. Le premier à atteindre 20 points gagne.",
  },
  {
    step: "03",
    title: "Apprenez en jouant",
    desc: "Chaque réponse est accompagnée d'une explication pour enrichir vos connaissances sur l'Afrique.",
  },
];

const GALLERY = [
  { src: "/images/epsumchallege_Image.png", alt: "Boîte Epsum Challenge" },
  { src: "/images/epsum1.jpeg", alt: "Cartes Epsum Challenge" },
  { src: "/images/epsum_image4.jpeg", alt: "Plateau de jeu" },
  { src: "/images/epsumimage3.jpeg", alt: "Jeu en action" },
  { src: "/images/images_jeuepsum2.jpeg", alt: "Epsum Challenge famille" },
  { src: "/images/jeuscolaire.jpeg", alt: "Version scolaire" },
  { src: "/images/jeuscolaire2.jpeg", alt: "Version scolaire 2" },
];

export default function EpsumChallengePage() {
  return (
    <>
      {/* ── Hero banner ── */}
      <section className="section-dark-tribal relative bg-[#1C1C2E] min-h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_for_epsumchallenge.png"
            alt="Epsum Challenge hero"
            fill
            className="object-cover object-center opacity-35"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C2E]/80 to-[#1C1C2E]/95" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 text-center w-full">
          <p className="text-[#F5C518] text-xs font-bold tracking-[4px] uppercase mb-4">Jeu de culture africaine</p>
          <h1
            className="text-white text-5xl md:text-7xl font-black mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Epsum Challenge
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            Le jeu qui vous fait voyager à travers la richesse culturelle du continent africain.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#F5C518] hover:bg-[#DBA900] text-gray-900 font-black text-sm tracking-widest px-10 py-4 rounded-full transition-colors"
          >
            COMMANDER — 12 500 F CFA
          </Link>
        </div>
      </section>

      {/* ── Produit + description ── */}
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-14">

          <div className="flex-shrink-0 w-[240px] md:w-[300px] relative">
            <Image
              src="/images/epsumchallege_Image.png"
              alt="Boîte Epsum Challenge"
              width={300}
              height={380}
              className="w-full rounded-lg shadow-2xl object-cover"
            />
          </div>

          <div className="flex-1">
            <p className="text-[10px] font-bold tracking-[4px] text-[#1A3DAA] uppercase mb-2">
              Jeu de société · Patrimoine camerounais
            </p>
            <h2
              className="text-3xl md:text-4xl text-[#1C1C2E] font-bold leading-snug mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              EPSUM Challenge : Bien plus qu&apos;un jeu, un voyage au cœur de notre identité !
            </h2>
            <p className="text-[15px] leading-relaxed text-[#444] mb-4">
              Plongez dans l&apos;univers captivant d&apos;EPSUM Challenge, le premier jeu de société qui transforme
              l&apos;histoire de Yaoundé en une aventure épique. Pourquoi EPSUM ? Parce que nous croyons que pour
              bâtir l&apos;avenir, il faut d&apos;abord connaître ses racines.
            </p>
            <p className="text-[15px] leading-relaxed text-[#444] mb-4">
              Ce jeu a été conçu pour reconnecter les générations à leur patrimoine, en mettant en lumière les
              héros oubliés et les lieux emblématiques de notre capitale à travers une mécanique stratégique de
              <strong> cartes et de Koris</strong>. Accompagné d&apos;une bande dessinée dynamique où un jeune homme et
              une historienne parcourent la ville, EPSUM Challenge répond à un besoin essentiel : apprendre en
              s&apos;amusant, valoriser notre culture locale et renforcer les liens familiaux autour d&apos;un récit
              qui nous ressemble.
            </p>
            <p className="text-[15px] leading-relaxed text-[#444] mb-8 font-medium text-[#1C1C2E]">
              Relevez le défi et devenez, vous aussi, un gardien de l&apos;histoire de la cité aux sept collines !
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <span className="text-3xl font-black text-[#7D1E1E]">12 500 F CFA</span>
              <Link
                href="/contact"
                className="inline-block bg-[#F5C518] hover:bg-[#DBA900] text-gray-900 font-black text-xs tracking-widest px-8 py-3.5 rounded-full transition-colors"
              >
                COMMANDER
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── Galerie ── */}
      <section className="bg-[#F5E2CC] py-14 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#1C1C2E] tracking-wide mb-8 text-center">GALERIE</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {GALLERY.map((img) => (
              <div key={img.src} className="relative aspect-square rounded overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 900px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comment ça marche ── */}
      <section className="section-dark-tribal bg-[#1C1C2E] py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-white text-3xl font-bold text-center mb-12"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Comment ça marche ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#F5C518] flex items-center justify-center text-gray-900 font-black text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block bg-[#F5C518] hover:bg-[#DBA900] text-gray-900 font-black text-sm tracking-widest px-10 py-4 rounded-full transition-colors"
            >
              COMMANDER MAINTENANT
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
