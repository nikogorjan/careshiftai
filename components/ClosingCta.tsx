import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { SignupCard } from "@/components/SignupCard";

export function ClosingCta() {
  return (
    <section
      id="stay"
      aria-labelledby="close-h"
      className="relative z-[1] mx-[clamp(8px,1.5vw,20px)] mt-[clamp(10px,1.4vw,18px)] overflow-hidden rounded-panel bg-navy py-[clamp(96px,13vw,184px)] shadow-panel"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[38%] left-1/2 aspect-[1.4/1] w-[min(1100px,130%)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(27,164,175,.30)_0%,rgba(27,164,175,.10)_38%,transparent_66%)]"
      />

      <div className="wrap relative z-[1]">
        <div className="grid grid-cols-1 items-center gap-[clamp(32px,5vw,48px)] text-left desk:grid-cols-2 desk:gap-[clamp(40px,5vw,80px)]">
          <div className="max-w-none desk:max-w-[36ch]">
            <Reveal>
              <Eyebrow tone="bright">Join the mission</Eyebrow>
            </Reveal>
            <Reveal
              as="h2"
              id="close-h"
              className="text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.08] font-semibold tracking-[-0.01em] text-balance text-white"
            >
              Be part of
              <br />
              fixing this.
            </Reveal>
            <Reveal
              as="p"
              d={1}
              className="mt-[clamp(22px,2.6vw,32px)] max-w-[54ch] text-[clamp(1.05rem,1.5vw,1.24rem)] leading-relaxed text-sky-200"
            >
              No demos, no pitch. Just updates from a team of clinicians working to make shift change
              safer — and an open invitation to tell us how the handoff really feels on your floor.
            </Reveal>
          </div>

          <Reveal d={1}>
            <SignupCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
