import { DrawRule, Reveal } from "@/components/anim";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";

/* The pivot from problem to product, told in three beats. */
const MANTRAS = ["Capture what matters.", "Carry it forward.", "Close the loop."];

export function BuiltForContinuity() {
  return (
    <section
      id="continuity"
      aria-labelledby="continuity-h"
      className="bg-tint pt-(--section-y) pb-[calc(var(--section-y)/2)]"
    >
      {/* A tighter measure keeps the column composed instead of stranding a wide right margin. */}
      <div className="wrap">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow>Built for continuity</Eyebrow>
            <SectionHeading id="continuity-h">
              CareShift carries the patient story forward.
            </SectionHeading>
            <p className="mt-6 max-w-[62ch] text-ink-2">
              CareShift helps nurses capture critical context throughout the shift, bring it
              together for handoff, and give the next nurse a clear starting point.
            </p>
          </Reveal>

          {/* The three beats as a standalone statement, lifted onto a white card. */}
          <Reveal delay={140} className="mt-12 rounded-lg bg-white p-8 sm:p-10 lg:p-12">
            <DrawRule className="h-0.5 w-10 bg-accent" />
            <p className="m-0 mt-7 font-display text-[26px] leading-[1.3] tracking-[-0.02em] sm:text-[34px]">
              {MANTRAS.map((m, i) => (
                <span
                  key={m}
                  className={
                    i === MANTRAS.length - 1
                      ? "block font-medium text-accent"
                      : "block font-normal text-ink"
                  }
                >
                  {m}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
