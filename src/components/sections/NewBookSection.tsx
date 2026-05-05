import Image from "next/image";
import Link from "next/link";

export default function NewBookSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 border-t border-[#ebe0d5]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

        <div className="flex-shrink-0 w-[200px] md:w-[240px] relative">
          <div className="absolute -top-3 -left-3 bg-[#F5C518] text-gray-900 text-[10px] font-black tracking-widest px-3 py-1.5 rounded-sm rotate-[-3deg] z-10">
            NOUVEAU
          </div>
          <Image
            src="/images/image_controle_delagestion.png"
            alt="Le Contrôle de la gestion des matières"
            width={240}
            height={320}
            className="w-full rounded shadow-xl object-cover"
          />
        </div>

        <div className="flex-1">
          <p className="text-[10px] font-bold tracking-[4px] text-[#1A3DAA] uppercase mb-2">
            Essai · Nouveau titre
          </p>
          <h2
            className="text-2xl md:text-3xl text-[#1C1C2E] font-bold leading-snug mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Le Contrôle de la gestion des matières dans l&apos;exécution des budgets publics
          </h2>
          <p className="text-sm text-gray-500 mb-1">
            Auteur : <strong className="text-gray-800">Vincent Eric Banock Bambock</strong>
          </p>
          <p className="text-sm text-gray-500 mb-1">
            Préface : <strong className="text-gray-800">Edou Alo&apos;o Cyrill</strong>
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Postface : <strong className="text-gray-800">Kongo Elanga Désiré</strong>
          </p>
          <p className="text-[15px] leading-relaxed text-[#444] mb-8 max-w-lg">
            Un ouvrage de référence sur le contrôle de gestion dans les budgets
            publics camerounais. Indispensable pour les gestionnaires, comptables
            et étudiants en finances publiques.
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <span className="text-2xl font-black text-[#7D1E1E]">10 000 F CFA</span>
            <Link
              href="/contact"
              className="inline-block bg-[#1A3DAA] hover:bg-[#0E2A88] text-white text-xs font-bold tracking-widest px-8 py-3.5 rounded-full transition-colors"
            >
              COMMANDER
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
