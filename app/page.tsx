import { ClosingCta } from "@/components/ClosingCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Nav } from "@/components/Nav";
import { Reality } from "@/components/Reality";
import { Values } from "@/components/Values";
import { Voices } from "@/components/Voices";
import { WhyItMatters } from "@/components/WhyItMatters";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Reality />
        <WhyItMatters />
        <Values />
        <Mission />
        <Voices />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
