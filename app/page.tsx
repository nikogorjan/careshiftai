import { ClosingCta } from "@/components/ClosingCta";
import { DayOnTheFloor } from "@/components/DayOnTheFloor";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Reality } from "@/components/Reality";
import { Team } from "@/components/Team";
import { Values } from "@/components/Values";
import { Voices } from "@/components/Voices";
import { WhyItMatters } from "@/components/WhyItMatters";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reality />
      <DayOnTheFloor />
      <WhyItMatters />
      <Values />
      <Mission />
      <Team />
      <Voices />
      <ClosingCta />
    </main>
  );
}
