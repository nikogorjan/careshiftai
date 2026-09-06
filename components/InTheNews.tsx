import Image from "next/image";
import { Reveal, Settle } from "@/components/anim";
import { Btn } from "@/components/Btn";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import photo from "@/public/dfw-startup-week.webp";

const STORY_URL =
  "https://www.dallasnews.com/business/entrepreneurs/article/local-entrepreneurs-compete-10k-prize-dfw-22373417.php";

export function InTheNews() {
  return (
    <section
      id="news"
      aria-labelledby="news-h"
      className="bg-white pt-(--section-y) pb-[calc(var(--section-y)*2)]"
    >
      <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-12">
        <Reveal className="lg:col-span-5">
          <Eyebrow>In the news</Eyebrow>
          <SectionHeading id="news-h">
            CareShift Wins DFW Startup Week Pitch Competition
          </SectionHeading>
          <p className="mt-6 max-w-[36ch] font-display text-[22px] leading-[1.35] font-normal tracking-[-0.015em] text-ink">
            Selected from 100 founders after three rounds of competition.
          </p>
          <p className="mt-5 max-w-[52ch] text-ink-2">
            Dallas-based CareShift was recognized at DFW Startup Week for its work to improve nurse
            communication and strengthen continuity of care across shifts and care transitions.
          </p>
          <div className="mt-8">
            <Btn href={STORY_URL} target="_blank" rel="noopener noreferrer">
              Read full story
            </Btn>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <figure className="m-0">
            <div className="aspect-4/3 overflow-hidden rounded-lg bg-dark">
              <Settle className="h-full w-full">
                <Image
                  src={photo}
                  alt="The CareShift founder on stage receiving the DFW Startup Week pitch competition award at the Texas Theatre"
                  sizes="(min-width: 1024px) 740px, 100vw"
                  className="h-full w-full object-cover"
                />
              </Settle>
            </div>
            <figcaption className="mt-3 text-sm text-ink-3">
              Photo: The Dallas Morning News
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
