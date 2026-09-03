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
          className="relative m-0 flex aspect-4/5 w-full flex-col overflow-hidden rounded-lg bg-dark lg:aspect-21/9"
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
          <figcaption className="relative mt-auto w-full p-6 lg:p-14">
            <Eyebrow tone="onDark">A day on the floor</Eyebrow>
            <h2
              id="day-h"
              className="m-0 max-w-[20ch] font-display text-[32px] leading-[1.05] font-normal tracking-[-0.02em] text-balance text-white lg:text-[48px]"
            >
              0645. The shift is <span className="text-white/70">changing.</span>
            </h2>
            <p className="mt-6 max-w-[60ch] text-white/85">
              At 0645 a nurse doesn&rsquo;t need software telling her what to think. She needs to
              know what changed overnight, who&rsquo;s watching what, and what happens if the
              patient in room 4 does the thing he did at 0200. She needs it fast, structured so
              nothing falls through, and confirmed, so the next shift isn&rsquo;t running on memory
              and hope.
            </p>
          </figcaption>
        </Reveal>
      </div>
    </section>
  );
}
