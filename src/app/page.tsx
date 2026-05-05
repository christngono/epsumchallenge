import Hero from "@/components/sections/Hero";
import NewBookSection from "@/components/sections/NewBookSection";
import AuthorSection from "@/components/sections/AuthorSection";
import TwoCol from "@/components/sections/TwoCol";
import Newsletter from "@/components/sections/Newsletter";
import Carousel from "@/components/ui/Carousel";
import { BookCard, BookCardRoman, BookCardCollection } from "@/components/ui/BookCard";
import ServiceCard from "@/components/ui/ServiceCard";
import { BOOKS, SERVICES } from "@/lib/data";

export default function Home() {
  const romans = BOOKS.filter((b) => b.genre === "Roman");

  return (
    <>
      <Hero />

      {/* ── Carrousel Livres ── */}
      <section className="bg-[#F5E2CC] px-3.5 py-6 flex items-center">
        <Carousel visibleDesktop={4} visibleTablet={2} visibleMobile={1}>
          {[
            <BookCardRoman key="roman" />,
            ...romans.map((book) => (
              <BookCard key={book.slug} {...book} />
            )),
            <BookCardCollection key="collection" />,
          ]}
        </Carousel>
      </section>

      {/* ── Nouveau livre ── */}
      <NewBookSection />

      {/* ── Carrousel Services ── */}
      <section className="mx-6 my-5 border-3 border-[#F5C518] rounded bg-white px-3.5 py-6">
        <Carousel visibleDesktop={4} visibleTablet={2} visibleMobile={1} arrowVariant="outline">
          {SERVICES.map((svc) => (
            <ServiceCard key={svc.id} {...svc} />
          ))}
        </Carousel>
      </section>

      {/* ── Auteur ── */}
      <AuthorSection />

      {/* ── Deux colonnes ── */}
      <TwoCol />

      {/* ── Newsletter ── */}
      <Newsletter />
    </>
  );
}
