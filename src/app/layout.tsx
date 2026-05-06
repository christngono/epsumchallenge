import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Nguedi JM Éditions",
  description:
    "Maison d'édition camerounaise — Romans, services éditoriaux et jeux culturels. Auteur Grégoire Nguédi.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <PageTransition>
          <Header />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
