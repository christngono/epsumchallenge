"use client";

import { useState } from "react";

const SUBJECTS = [
  "Commander un livre",
  "Commander Epsum Challenge",
  "Demande de service éditorial",
  "Partenariat",
  "Autre",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <>
      {/* ── En-tête ── */}
      <section className="bg-[#faf6f1] border-b border-[#ebe0d5] py-16 px-6 md:px-12 text-center">
        <p className="text-[10px] font-bold tracking-[4px] text-[#1A3DAA] uppercase mb-3">
          On est à votre écoute
        </p>
        <h1
          className="text-4xl md:text-5xl text-[#1C1C2E] font-bold mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Contactez-nous
        </h1>
        <p className="text-[15px] text-[#444] max-w-lg mx-auto">
          Pour commander, poser une question ou discuter d&apos;un projet éditorial,
          remplissez le formulaire ci-dessous.
        </p>
      </section>

      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* ── Formulaire ── */}
          <div>
            <h2 className="text-xl font-bold text-[#1C1C2E] mb-6">Envoyer un message</h2>
            {sent ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-[#27ae60] flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="4,12 9,17 20,6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1C1C2E] mb-2">Message envoyé !</h3>
                <p className="text-sm text-gray-500">Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold tracking-wide text-gray-700 mb-1.5">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded focus:outline-none focus:border-[#1A3DAA] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-wide text-gray-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jean@exemple.com"
                      className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded focus:outline-none focus:border-[#1A3DAA] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-wide text-gray-700 mb-1.5">
                    Sujet *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded focus:outline-none focus:border-[#1A3DAA] transition-colors bg-white"
                  >
                    <option value="">Choisissez un sujet</option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-wide text-gray-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Décrivez votre demande..."
                    className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded focus:outline-none focus:border-[#1A3DAA] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-block bg-[#1A3DAA] hover:bg-[#0E2A88] disabled:opacity-60 text-white font-bold text-xs tracking-widest px-10 py-4 rounded-full transition-colors self-start"
                >
                  {loading ? "ENVOI EN COURS…" : "ENVOYER LE MESSAGE"}
                </button>
              </form>
            )}
          </div>

          {/* ── Coordonnées ── */}
          <div>
            <h2 className="text-xl font-bold text-[#1C1C2E] mb-6">Nos coordonnées</h2>
            <div className="flex flex-col gap-8">

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#F5E2CC] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1A3DAA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-wide text-[#1A3DAA] uppercase mb-1">Adresse</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Nouvelle Route Bastos<br />
                    Yaoundé, Cameroun
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#F5E2CC] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1A3DAA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-wide text-[#1A3DAA] uppercase mb-1">Téléphone</p>
                  <p className="text-sm text-gray-700">+237 677 634 821</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#F5E2CC] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1A3DAA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <polyline points="2,4 12,13 22,4"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-wide text-[#1A3DAA] uppercase mb-1">Réseaux sociaux</p>
                  <div className="flex gap-3 mt-1">
                    {["Facebook", "LinkedIn", "Twitter"].map((r) => (
                      <a
                        key={r}
                        href="#"
                        className="text-xs text-[#1A3DAA] hover:underline font-medium"
                      >
                        {r}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Bloc adresse visuel */}
            <div className="mt-10 bg-[#1C1C2E] rounded-lg p-6 text-white">
              <p className="text-xs font-bold tracking-[3px] text-[#F5C518] uppercase mb-3">
                Horaires
              </p>
              <div className="flex flex-col gap-2 text-sm text-white/70">
                <div className="flex justify-between">
                  <span>Lun — Ven</span>
                  <span className="text-white font-medium">8h00 — 17h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="text-white font-medium">9h00 — 13h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
