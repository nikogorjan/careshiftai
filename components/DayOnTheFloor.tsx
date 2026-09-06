import { Reveal, Settle } from "@/components/anim";
import { Eyebrow } from "@/components/Eyebrow";

const PHOTO = "https://bloom42-media.s3.eu-central-1.amazonaws.com/nurses-rush.webp";

export function DayOnTheFloor() {
  return (
    <section aria-labelledby="day-h" className="section-y bg-white">
      <div className="wrap">
        <Reveal
          as="figure"
          variant="fade"
          className="relative m-0 flex w-full flex-col overflow-hidden rounded-lg bg-dark sm:aspect-4/5 lg:aspect-21/9"
        >
          <Settle
            className="absolute inset-0 h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url("${PHOTO}")` }}
            role="img"
            aria-label="Nurses moving through a busy unit at shift change"
          />
          {/* Neutral scrim concentrated in the bottom-left quadrant. */}
          <div
            aria-hidden="true"
            className="photo-scrim pointer-events-none absolute inset-0"
          />
          {/* Below sm the figure is content-sized; pt-40 keeps photo visible above the text. */}
          <figcaption className="relative mt-auto w-full p-6 pt-40 sm:pt-6 lg:p-14">
            <Eyebrow tone="onDark">At shift change</Eyebrow>
            <h2
              id="day-h"
              className="m-0 max-w-[20ch] font-display text-[32px] leading-[1.05] font-normal tracking-[-0.02em] text-balance text-white lg:text-[48px]"
            >
              <span className="text-white/70">0645.</span> One shift ends. Another takes over.
            </h2>
            <p className="mt-6 max-w-[60ch] text-white/85">
              In minutes, responsibility changes hands.
            </p>
            <p className="mt-4 max-w-[60ch] text-white/85">
              The incoming nurse has to understand the last 12 hours quickly, without digging
              through the chart, piecing together notes, or relying on memory.
            </p>
            <p className="mt-4 max-w-[60ch] font-medium text-white">
              That&rsquo;s where continuity can break.
            </p>
          </figcaption>
        </Reveal>
      </div>
    </section>
  );
}
