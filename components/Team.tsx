import Image from "next/image";
import { DrawRule, Reveal } from "@/components/anim";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/cn";
import bdm from "@/public/team-bdm.webp";
import cco from "@/public/team-cco.webp";
import ceo from "@/public/team-ceo.webp";
import aiEngineer from "@/public/team-ai-engineer.webp";

const MEMBERS = [
  { role: "CEO", src: ceo, position: "object-[50%_20%]" },
  { role: "Chief Communication Officer", src: cco, position: "object-[50%_20%]" },
  { role: "Business Development Manager", src: bdm, position: "object-[50%_20%]" },
  /* Full-body seated source; the higher focal point keeps the crop on head and shoulders. */
  { role: "Sr. AI Engineer", src: aiEngineer, position: "object-[50%_8%]" },
];

export function Team() {
  return (
    <section id="team" aria-labelledby="team-h" className="section-y bg-white">
      <div className="wrap">
        <Reveal>
          <Eyebrow>The team</Eyebrow>
          <SectionHeading id="team-h">The people behind CareShift.</SectionHeading>
        </Reveal>

        <ul className="section-gap m-0 grid list-none grid-cols-2 gap-4 p-0 sm:gap-6 lg:grid-cols-4">
          {MEMBERS.map((m, i) => (
            <Reveal as="li" key={m.role} delay={i * 80} className="m-0">
              <div className="aspect-4/5 overflow-hidden rounded-lg">
                <Image
                  src={m.src}
                  alt={m.role}
                  sizes="(min-width: 1024px) 300px, 50vw"
                  className={cn("h-full w-full object-cover", m.position)}
                />
              </div>
              <div className="mt-4">
                <DrawRule className="mb-3 h-px w-6 bg-accent" />
                <p className="m-0 text-sm font-medium text-ink sm:text-[15px]">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
