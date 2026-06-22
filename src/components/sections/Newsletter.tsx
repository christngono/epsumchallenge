"use client";

import { useState } from "react";
import { motion } from "motion/react";

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
    <section className="bg-[#EBC79E] py-14 px-6 md:px-12 relative overflow-hidden">

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

        <motion.div
          className="bg-[#D9591A] text-white px-6 py-5 text-[12.5px] font-bold leading-[1.75] tracking-[0.5px] min-w-[250px]"
          initial={{ opacity: 0, rotate: -8, x: -20 }}
          whileInView={{ opacity: 1, rotate: -2, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          INSCRIVEZ-VOUS À LA<br />
          NEWSLETTER POUR<br />
          RECEVOIR TOUTES NOS<br />
          ACTUALITÉS
        </motion.div>

        <form onSubmit={handleSubmit} className="flex flex-1 max-w-[520px]">
          <input
            type="email"
            placeholder="email"
            required
            aria-label="Votre email"
            className="flex-1 px-5 py-3.5 text-sm border-2 border-black/15 border-r-0 rounded-l focus:outline-none focus:border-[#D9591A] bg-white/90"
          />
          <button
            type="submit"
            className={`px-7 py-3.5 text-sm font-semibold rounded-r border-none cursor-pointer transition-colors ${
              sent ? "bg-[#27ae60] text-white" : "bg-[#D9591A] hover:bg-[#A8400F] text-white"
            }`}
          >
            {sent ? "✓ Inscrit !" : "inscription"}
          </button>
        </form>

      </div>
    </section>
  );
}
