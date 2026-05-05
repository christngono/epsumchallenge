"use client";

import { useState } from "react";

export default function Newsletter() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector<HTMLInputElement>("input[type=email]");
    if (!input?.value.trim()) return;
    setSent(true);
    input.value = "";
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="bg-[#C4B5D5] py-14 px-6 md:px-12 relative overflow-hidden">

      {/* Livre décoratif en fond */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[45%] pointer-events-none"
        style={{
          backgroundImage: "url('/images/coup de foudre a bouraka.png')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
          opacity: 0.12,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-12 flex-wrap">

        <div
          className="bg-[#1A3DAA] text-white px-6 py-5 text-[12.5px] font-bold leading-[1.75] tracking-[0.5px] min-w-[250px]"
          style={{ transform: "rotate(-2deg)" }}
        >
          INSCRIVEZ-VOUS À LA<br />
          NEWSLETTER POUR<br />
          RECEVOIR TOUTES NOS<br />
          ACTUALITÉS
        </div>

        <form onSubmit={handleSubmit} className="flex flex-1 max-w-[520px]">
          <input
            type="email"
            placeholder="email"
            required
            aria-label="Votre email"
            className="flex-1 px-5 py-3.5 text-sm border-2 border-black/15 border-r-0 rounded-l focus:outline-none focus:border-[#1A3DAA] bg-white/90"
          />
          <button
            type="submit"
            className={`px-7 py-3.5 text-sm font-semibold rounded-r border-none cursor-pointer transition-colors ${
              sent ? "bg-[#27ae60] text-white" : "bg-[#1A3DAA] hover:bg-[#0E2A88] text-white"
            }`}
          >
            {sent ? "✓ Inscrit !" : "inscription"}
          </button>
        </form>

      </div>
    </section>
  );
}
