import { ClosingCta } from "@/components/ClosingCta";
import { DayOnTheFloor } from "@/components/DayOnTheFloor";
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

        {/*
          Reality → Mission share one rounded white surface that curls up over
          the hero, so they sit inside a single panel rather than four.
        */}
        <div className="relative z-[3] mx-[clamp(8px,1.5vw,20px)] mt-[clamp(-46px,-3.2vw,-28px)] overflow-hidden rounded-panel bg-white shadow-panel">
          <Reality />
          <DayOnTheFloor />
          <WhyItMatters />
          <Mission />
        </div>

        <Values />
        <Voices />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
