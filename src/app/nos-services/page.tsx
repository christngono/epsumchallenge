import Link from "next/link";
import { SERVICES, EDITIONS } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import TribalCard from "@/components/ui/TribalCard";
import type { Metadata } from "next";

const CARD_VARIANTS = ["terracotta", "amber", "green", "red", "brown", "terracotta"] as const;

export const metadata: Metadata = {
  title: "Nos Services — Nguedi JM Éditions",
  description: "Critique, relecture, formation, correction, traduction, édition — découvrez tous nos services éditoriaux.",
};

const SERVICE_DETAILS: Record<string, { longDesc: string; deliverables: string[] }> = {
  critique: {
    longDesc:
      "Notre service de critique littéraire vous offre un regard professionnel et bienveillant sur votre manuscrit. Nos lecteurs experts analysent la structure narrative, la cohérence des personnages, le rythme et l'originalité de votre œuvre.",
    deliverables: ["Rapport d'analyse détaillé", "Identification des points forts", "Axes d'amélioration prioritaires", "Recommandations pour la suite"],
  },
  relecture: {
    longDesc:
      "La relecture approfondie assure la cohérence narrative, stylistique et temporelle de votre texte. Nous vérifions la fluidité du récit, la consistance des personnages et l'harmonie du style sur l'ensemble de l'œuvre.",
    deliverables: ["Lecture complète du manuscrit", "Annotations et suggestions", "Rapport de cohérence", "Entretien de restitution"],
  },
  formation: {
    longDesc:
      "Nos ateliers d'écriture créative sont conçus pour les écrivains en herbe comme pour les auteurs confirmés. Techniques narratives, construction de personnages, dialogue, point de vue — chaque session approfondit un aspect du métier.",
    deliverables: ["Ateliers collectifs ou individuels", "Exercices pratiques", "Suivi personnalisé", "Certificat de participation"],
  },
  correction: {
    longDesc:
      "La correction orthographique, grammaticale et syntaxique est la dernière étape avant publication. Notre équipe garantit un texte impeccable, fidèle à votre style, prêt pour l'impression ou la diffusion numérique.",
    deliverables: ["Correction orthographique complète", "Révision grammaticale", "Harmonisation des styles", "Fichier corrigé livré"],
  },
  traduction: {
    longDesc:
      "Notre service de traduction littéraire respecte l'âme et le style de l'œuvre originale. Nous intervenons principalement entre le français, l'anglais et les langues africaines, avec une attention particulière aux nuances culturelles.",
    deliverables: ["Traduction par un traducteur natif", "Révision par un second traducteur", "Adaptation culturelle", "Fichier final livré"],
  },
  edition: {
    longDesc:
      "Nous accompagnons les auteurs de la mise en page à l'impression. Conception graphique de couverture, maquette intérieure, choix du format, ISBN, bon à tirer — nous gérons l'intégralité du processus éditorial.",
    deliverables: ["Conception de couverture", "Maquette intérieure", "Relecture finale", "Coordination impression"],
  },
};

export default function NosServicesPage() {
  return (
    <>
      {/* ── En-tête ── */}
      <section className="bg-[#F7EEDD] border-b border-[#ebe0d5] py-16 px-6 md:px-12 text-center">
        <Reveal>
          <p className="text-[10px] font-bold tracking-[4px] text-[#D9591A] uppercase mb-3">
            Expertise éditoriale
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A1812] font-bold mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nos Services
          </h1>
          <p className="text-[15px] leading-relaxed text-[#444] max-w-2xl mx-auto">
            {EDITIONS.support}
          </p>
        </Reveal>
      </section>

      {/* ── Grille services ── */}
      <section className="bg-transparent py-16 px-6 md:px-12">
        <Stagger className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8" stagger={0.1}>
          {SERVICES.map((svc, i) => {
            const detail = SERVICE_DETAILS[svc.id];
            return (
              <StaggerItem key={svc.id}>
                <TribalCard variant={CARD_VARIANTS[i % CARD_VARIANTS.length]} compact className="h-full">
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: svc.color }}
                  >
                    <IconSvc icon={svc.icon} />
                  </div>
                  <h2 className="text-xl font-bold text-[#2A1812]">{svc.name}</h2>
                </div>
                <p className="text-sm leading-relaxed text-[#444] mb-5">
                  {detail?.longDesc ?? svc.description}
                </p>
                {detail?.deliverables && (
                  <ul className="flex flex-col gap-1.5">
                    {detail.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-4 h-4 rounded-full bg-[#F4A906] flex items-center justify-center flex-shrink-0">
                          <svg viewBox="0 0 10 10" width="8" height="8" fill="none" stroke="#2A1812" strokeWidth="2" strokeLinecap="round">
                            <polyline points="1.5,5 4,7.5 8.5,2.5" />
                          </svg>
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
                </TribalCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F5E2CC] py-14 px-6 md:px-12 text-center">
        <Reveal>
          <h2 className="text-2xl font-black text-[#2A1812] mb-4">
            Un projet en tête ?
          </h2>
          <p className="text-sm text-gray-600 mb-8 max-w-md mx-auto">
            Contactez-nous pour discuter de votre manuscrit et obtenir un devis personnalisé.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#D9591A] hover:bg-[#A8400F] text-white font-bold text-xs tracking-widest px-10 py-4 btn-3d"
          >
            NOUS CONTACTER
          </Link>
        </Reveal>
      </section>
    </>
  );
}

function IconSvc({ icon }: { icon: string }) {
  if (icon === "?") return <span className="text-3xl font-black text-white">?</span>;
  if (icon === "lines") return (
    <svg viewBox="0 0 44 44" width="28" height="28" fill="none">
      <rect x="6" y="7"  width="32" height="5" rx="1.5" fill="white" />
      <rect x="6" y="16" width="22" height="5" rx="1.5" fill="white" />
      <rect x="6" y="25" width="28" height="5" rx="1.5" fill="white" />
      <rect x="6" y="34" width="18" height="5" rx="1.5" fill="white" />
    </svg>
  );
  if (icon === "pen") return (
    <svg viewBox="0 0 44 44" width="28" height="28">
      <path d="M32 6 Q38 16 28 26 L14 40 L8 34 L22 20 Q32 10 32 6Z" fill="#7B5E3A" />
      <path d="M8 34 L3 41 L11 38 Z" fill="#7B5E3A" />
    </svg>
  );
  if (icon === "x") return (
    <svg viewBox="0 0 44 44" width="28" height="28" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round">
      <line x1="11" y1="11" x2="33" y2="33" />
      <line x1="33" y1="11" x2="11" y2="33" />
    </svg>
  );
  if (icon === "Aa") return (
    <svg viewBox="0 0 44 44" width="28" height="28">
      <text x="4" y="28" fontSize="20" fill="white" fontWeight="800" fontFamily="Montserrat, sans-serif">Aa</text>
    </svg>
  );
  if (icon === "book") return (
    <svg viewBox="0 0 44 44" width="28" height="28">
      <rect x="8"  y="6" width="20" height="32" rx="2" fill="white" opacity="0.9" />
      <rect x="16" y="6" width="20" height="32" rx="2" fill="white" opacity="0.6" />
    </svg>
  );
  return null;
}
