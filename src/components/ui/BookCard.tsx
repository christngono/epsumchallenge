import Image from "next/image";
import Link from "next/link";

interface BookCardProps {
  title: string;
  author: string;
  image: string;
  slug: string;
  decorative?: "roman" | "collection";
}

export function BookCard({ title, author, image, slug }: BookCardProps) {
  return (
    <Link
      href={`/nos-livres/${slug}`}
      className="relative block h-[320px] rounded-sm overflow-hidden cursor-pointer group bg-[#f0f0f0]"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-top transition-transform duration-[350ms] group-hover:scale-[1.04]"
        sizes="(max-width: 560px) 85vw, (max-width: 900px) 50vw, 25vw"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3.5 pb-3.5 pt-7 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        <p className="text-[10px] text-white/80 font-semibold tracking-widest uppercase mb-1">{author}</p>
        <p className="text-sm text-white font-extrabold leading-snug">{title}</p>
      </div>
    </Link>
  );
}

export function BookCardRoman() {
  return (
    <div className="relative h-[320px] rounded-sm overflow-hidden bg-[#111] flex flex-col items-start p-5">
      <h2 className="text-white text-[28px] font-black tracking-[5px]">ROMAN</h2>
      <svg className="absolute bottom-4 right-4 opacity-85" viewBox="0 0 80 130" width="70" height="115">
        <ellipse cx="40" cy="18" rx="11" ry="13" fill="white" />
        <path d="M29 34 Q18 60 16 95 L30 95 L34 68 L40 90 L46 68 L50 95 L64 95 Q62 60 51 34 Z" fill="white" />
        <path d="M29 34 Q16 42 12 62 L24 65 Q30 50 34 42 Z" fill="white" />
        <path d="M51 34 Q64 42 68 62 L56 65 Q50 50 46 42 Z" fill="white" />
        <path d="M30 95 Q26 118 24 128 L38 128 L40 108 L42 128 L56 128 Q54 118 50 95 Z" fill="white" />
      </svg>
      <div className="absolute bottom-0 left-0 w-[55%] h-2 bg-[#C07530]" />
    </div>
  );
}

export function BookCardCollection() {
  return (
    <Link href="/nos-livres" className="relative block h-[320px] rounded-sm overflow-hidden bg-[#7D1E1E] group cursor-pointer">
      <Image
        src="/images/tous_les livres.png"
        alt="Collection Grégoire Nguédi"
        fill
        className="object-cover object-center"
        sizes="25vw"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#640a0a]/90 to-transparent px-3.5 pb-3.5 pt-7">
        <p className="text-[11px] text-white/75 font-bold tracking-[3px] uppercase mb-1">La Collection</p>
        <p className="text-[15px] text-white font-black tracking-wide">Grégoire Nguédi</p>
      </div>
    </Link>
  );
}
