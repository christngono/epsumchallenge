import Link from "next/link";

export default function TwoCol() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[370px]">

      {/* Salon de littérature */}
      <div
        className="relative overflow-hidden h-[300px] md:h-full flex items-end"
        style={{
          background: "linear-gradient(rgba(20,20,40,0.52), rgba(20,20,40,0.52)), #607B8B",
        }}
      >
        <div className="relative z-10 p-8 md:p-10 flex flex-col gap-6 items-start">
          <h2 className="text-white text-[28px] md:text-[40px] font-black leading-tight">
            Le salon<br />de<br />littérature
          </h2>
          <Link
            href="/nguedi-jm-editions"
            className="inline-block bg-white hover:bg-[#F5C518] text-gray-900 text-xs font-bold tracking-[2.5px] px-8 py-3.5 rounded-full transition-colors"
          >
            DÉCOUVRIR
          </Link>
        </div>
      </div>

      {/* Sélection de livres */}
      <div
        className="relative overflow-hidden h-[300px] md:h-full flex items-end"
        style={{
          background:
            "linear-gradient(rgba(50,40,100,0.65), rgba(80,50,120,0.65)), url('/images/tous_les livres.png') center/cover no-repeat #3D3B8E",
        }}
      >
        <div className="relative z-10 p-8 md:p-10 flex flex-col gap-6 items-start">
          <h2 className="text-white text-[28px] md:text-[40px] font-black leading-tight">
            Notre<br />sélection<br />de livres
          </h2>
          <Link
            href="/nos-livres"
            className="inline-block bg-white hover:bg-[#F5C518] text-gray-900 text-xs font-bold tracking-[2.5px] px-8 py-3.5 rounded-full transition-colors"
          >
            DÉCOUVRIR
          </Link>
        </div>
      </div>

    </section>
  );
}
