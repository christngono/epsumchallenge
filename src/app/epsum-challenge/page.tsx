import Image from "next/image";
import Link from "next/link";
import { EPSUM, ECU } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Epsum Challenge — Nguedi JM Éditions",
  description:
    "Le jeu de société éducatif qui fait redécouvrir Yaoundé, la ville aux 7 collines. Histoire, traditions et belles soirées en famille.",
};

const STEPS = [
  {
    step: "01",
    title: "La promenade éducative",
    desc: "Parcourez les quartiers de Epsum (Yaoundé). Au hasard de vos déplacements, imprégnez-vous de la culture de la ville et acquérez terrains et propriétés historiques.",
  },
  {
    step: "02",
    title: "La rivalité des promeneurs",
    desc: "Vous croiserez d'autres promeneurs qui convoitent les mêmes terrains, ou qui en sont déjà propriétaires. Votre culture générale et vos connaissances seront vos principaux atouts.",
  },
  {
    step: "03",
    title: "Suivez le Nkunkuma",
    desc: "Suivez les indications du Nkunkuma afin d'éviter les pièges semés sur votre parcours, et progressez vers la victoire.",
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
      <section className="section-dark-tribal relative bg-[#2A1812] min-h-[460px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_for_epsumchallenge.png"
            alt="Epsum Challenge hero"
            fill
            className="object-cover object-center opacity-35"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2A1812]/80 to-[#2A1812]/95" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 text-center w-full">
          <Reveal>
            <p className="text-[#F4A906] text-xs font-bold tracking-[4px] uppercase mb-4">
              Jeu de société éducatif
            </p>
            <h1
              className="text-white text-5xl md:text-7xl font-black mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Epsum Challenge
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8">
              Des origines à nos jours, redécouvrez la ville aux 7 collines.
              Un jeu éducatif et drôle qui réunit toute la famille.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#F4A906] hover:bg-[#C5870A] text-gray-900 font-black text-sm tracking-widest px-10 py-4 btn-3d"
            >
              COMMANDER — {EPSUM.price.toLocaleString()} F CFA
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Présentation ── */}
      <section className="bg-transparent py-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-14">
          <Reveal direction="right" className="flex-shrink-0 w-[240px] md:w-[300px]">
            <Parallax offset={40}>
              <Image
                src="/images/epsumchallege_Image.png"
                alt="Boîte Epsum Challenge"
                width={300}
                height={380}
                className="w-full rounded-lg shadow-2xl object-cover"
              />
            </Parallax>
          </Reveal>
          <Reveal direction="left" delay={0.1} className="flex-1">
            <p className="text-[10px] font-bold tracking-[4px] text-[#D9591A] uppercase mb-2">
              Jeu de société · Patrimoine de Yaoundé
            </p>
            <h2
              className="text-3xl md:text-4xl text-[#2A1812] font-bold leading-snug mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Un voyage au cœur de notre identité
            </h2>
            <p className="text-[15px] leading-relaxed text-[#444] mb-4">{EPSUM.intro}</p>
            <p className="text-[15px] leading-relaxed text-[#2A1812] font-medium mb-8">{EPSUM.goal}</p>
            <div className="flex items-center gap-6 flex-wrap">
              <span className="text-3xl font-black text-[#7D1E1E]">
                {EPSUM.price.toLocaleString()} F CFA
              </span>
              <Link
                href="/contact"
                className="inline-block bg-[#F4A906] hover:bg-[#C5870A] text-gray-900 font-black text-xs tracking-widest px-8 py-3.5 btn-3d"
              >
                COMMANDER
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Comment ça marche ── */}
      <section className="section-dark-tribal bg-[#2A1812] py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2
              className="text-white text-3xl md:text-4xl font-bold text-center mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Comment ça marche ?
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">{EPSUM.how}</p>
          </Reveal>
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.15}>
            {STEPS.map((item) => (
              <StaggerItem key={item.step}>
                <div className="text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-[#F4A906] flex items-center justify-center text-gray-900 font-black text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Galerie ── */}
      <section className="bg-[#F5E2CC] py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-2xl font-black text-[#2A1812] tracking-wide mb-8 text-center">
              GALERIE
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3" stagger={0.06}>
            {GALLERY.map((img) => (
              <StaggerItem key={img.src}>
                <div className="relative aspect-square rounded overflow-hidden group shadow-sm">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 900px) 33vw, 25vw"
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Epsum Challenge Univers ── */}
      <section className="bg-transparent py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-[10px] font-bold tracking-[4px] text-[#D9591A] uppercase mb-3 text-center">
              Depuis {ECU.since}
            </p>
            <h2
              className="text-3xl md:text-4xl text-[#2A1812] font-bold text-center mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Epsum Challenge Univers
            </h2>
            <p className="text-[15px] leading-relaxed text-[#444] max-w-2xl mx-auto text-center mb-3">
              {ECU.intro}
            </p>
            <p className="text-sm leading-relaxed text-[#555] max-w-2xl mx-auto text-center mb-12">
              {ECU.mission}
            </p>
          </Reveal>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.1}>
            {ECU.catalog.map((item) => (
              <StaggerItem key={item}>
                <div className="h-full bg-[#F7EEDD] border border-[#ebe0d5] rounded-lg p-5 hover:border-[#F4A906] transition-colors">
                  <span className="block w-8 h-1 bg-[#F4A906] mb-3" />
                  <p className="text-[#2A1812] text-sm font-semibold leading-snug">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-dark-tribal bg-[#2A1812] py-14 px-6 md:px-12 text-center">
        <Reveal>
          <Link
            href="/contact"
            className="inline-block bg-[#F4A906] hover:bg-[#C5870A] text-gray-900 font-black text-sm tracking-widest px-10 py-4 btn-3d"
          >
            COMMANDER MAINTENANT
          </Link>
        </Reveal>
      </section>
    </>
  );
}
