import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

const PHOTO = "https://bloom42-media.s3.eu-central-1.amazonaws.com/nurses-rush.webp";

export function DayOnTheFloor() {
  return (
    <section
      aria-labelledby="day-h"
      className="relative z-[1] py-[clamp(44px,5vw,80px)] gutter-x"
    >
      <Reveal
        as="figure"
        className="relative m-0 flex min-h-[440px] w-full flex-col overflow-hidden rounded-cs-xl bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.035)_0_16px,transparent_16px_32px),linear-gradient(155deg,#0a2f6e_0%,#00153a_60%,#000d24_100%)] shadow-cine [isolation:isolate] tab:min-h-[clamp(460px,62vh,700px)]"
      >
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url("${PHOTO}")` }}
          role="img"
          aria-label="Nurses moving through a busy unit at shift change"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_top,rgba(0,13,36,.94)_0%,rgba(0,13,36,.6)_36%,rgba(0,20,60,.18)_68%,rgba(0,20,60,.05)_100%),linear-gradient(to_right,rgba(0,13,36,.5)_0%,rgba(0,13,36,0)_55%)]"
        />
        <figcaption className="relative z-[2] mx-auto mt-auto w-full max-w-[1640px] pt-8 pb-7 gutter-x tab:py-[clamp(30px,4vw,60px)]">
          <Eyebrow tone="bright" className="mb-4">A day on the floor</Eyebrow>
          <h2
            id="day-h"
            className="m-0 text-[clamp(2.2rem,5.2vw,4.1rem)] leading-[1.12] tracking-[-0.01em] text-balance text-white"
          >
            <span className="font-semibold">0645. The shift is</span>{" "}
            <span className="font-normal text-white/75">changing.</span>
          </h2>
          <p className="mt-[clamp(16px,1.8vw,24px)] max-w-[62ch] text-[clamp(1.02rem,1.4vw,1.2rem)] leading-relaxed text-sky-100">
            At 0645 a nurse doesn&rsquo;t need software telling her what to think. She needs to know
            what changed overnight, who&rsquo;s watching what, and what happens if the patient in
            room 4 does the thing he did at 0200. She needs it fast, structured so nothing falls
            through, and confirmed — so the next shift isn&rsquo;t running on memory and hope.
          </p>
        </figcaption>
      </Reveal>
    </section>
  );
}
