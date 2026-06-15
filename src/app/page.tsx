import Hero from "@/components/sections/Hero";
import NewBookSection from "@/components/sections/NewBookSection";
import AuthorSection from "@/components/sections/AuthorSection";
import TwoCol from "@/components/sections/TwoCol";
import Newsletter from "@/components/sections/Newsletter";
import EcuSection from "@/components/sections/EcuSection";
import Carousel from "@/components/ui/Carousel";
import { BookCard, BookCardRoman, BookCardCollection } from "@/components/ui/BookCard";
import ServiceCard from "@/components/ui/ServiceCard";
import Reveal from "@/components/motion/Reveal";
import { BOOKS, SERVICES } from "@/lib/data";

export default function Home() {
  const romans = BOOKS.filter((b) => b.genre === "Roman");

  return (
    <>
      <Hero />

      {/* ── Carrousel Livres ── */}
      <section className="bg-[#F5E2CC] px-3.5 py-8 flex items-center">
        <Reveal className="w-full">
          <Carousel visibleDesktop={4} visibleTablet={2} visibleMobile={1}>
            {[
              <BookCardRoman key="roman" />,
              ...romans.map((book) => <BookCard key={book.slug} book={book} />),
              <BookCardCollection key="collection" />,
            ]}
          </Carousel>
        </Reveal>
      </section>

      {/* ── Nouveau livre ── */}
      <NewBookSection />

      {/* ── Carrousel Services ── */}
      <Reveal as="section" className="mx-6 my-5 border-3 border-[#F5C518] rounded bg-white px-3.5 py-8">
        <Carousel visibleDesktop={4} visibleTablet={2} visibleMobile={1} arrowVariant="outline">
          {SERVICES.map((svc) => (
            <ServiceCard key={svc.id} {...svc} />
          ))}
        </Carousel>
      </Reveal>

      {/* ── Auteur ── */}
      <AuthorSection />

      {/* ── Deux colonnes ── */}
      <TwoCol />

      {/* ── Epsum Challenge Univers ── */}
      <EcuSection />

      {/* ── Newsletter ── */}
      <Newsletter />
    </>
  );
}
