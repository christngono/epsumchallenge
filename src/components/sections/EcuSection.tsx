import Link from "next/link";
import { ECU } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export default function EcuSection() {
  return (
    <section className="section-dark-tribal bg-[#1C1C2E] py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-[#F5C518] text-xs font-bold tracking-[4px] uppercase mb-3 text-center">
            Nouveauté
          </p>
          <h2
            className="text-white text-3xl md:text-5xl font-bold text-center mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Epsum Challenge Univers
          </h2>
          <p className="text-white/70 text-[15px] leading-relaxed max-w-2xl mx-auto text-center mb-3">
            {ECU.intro}
          </p>
          <p className="text-white/55 text-sm leading-relaxed max-w-2xl mx-auto text-center mb-12">
            {ECU.mission}
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.1}>
          {ECU.catalog.map((item) => (
            <StaggerItem key={item}>
              <div className="h-full bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 hover:border-[#F5C518]/40 transition-colors">
                <span className="block w-8 h-1 bg-[#F5C518] mb-3" />
                <p className="text-white text-sm font-semibold leading-snug">{item}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="text-center mt-12">
          <Link
            href="/epsum-challenge"
            className="inline-block bg-[#F5C518] hover:bg-[#DBA900] text-gray-900 font-black text-xs tracking-widest px-10 py-4 rounded-full transition-all hover:scale-[1.04]"
          >
            DÉCOUVRIR L&apos;UNIVERS
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
