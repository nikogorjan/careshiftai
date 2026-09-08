import { Reveal } from "@/components/anim";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/cn";

/* Titles are the client's. The supporting lines are drafted, pending approval. */
const STEPS = [
  {
    title: "Capture During the Shift",
    note: "Changes, concerns and open items are noted as they happen, instead of being reconstructed at the end.",
  },
  {
    title: "Bring the Story Together",
    note: "Context from across the shift is pulled into one place, ready for handoff.",
  },
  {
    title: "Review & Hand Off With Clarity",
    note: "The next nurse sees what changed, what needs attention, and what is still open.",
  },
  {
    title: "Carry Responsibility Forward",
    note: "Open items move to the next shift with an owner, so follow-up does not rest on memory.",
  },
  {
    title: "Give Leadership Visibility",
    note: "Nurse managers and clinical leadership can see how continuity is holding across shifts.",
  },
];

/*
 * Geometry. Each row reserves 28px on the left, so the card's left edge, the
 * 1px line and the centre of the 56px marker all sit at x = 28. The marker is
 * vertically centred on its card and overlaps it by half, pinning the card to
 * the line; the opaque white outer circle hides the line where it passes
 * behind. Rows draw their own segment of the line at full height, so the
 * segments meet across the gaps, with the first and last rows stopping at
 * their marker's centre.
 */
export function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-h"
      className="bg-tint pt-[calc(var(--section-y)/2)] pb-(--section-y)"
    >
      <div className="wrap">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow>How CareShift works</Eyebrow>
            <SectionHeading id="how-h">From shift activity to a clear handoff.</SectionHeading>
          </Reveal>

          <ol className="m-0 mt-12 list-none p-0 sm:mt-14">
            {STEPS.map((step, i) => {
              const first = i === 0;
              const last = i === STEPS.length - 1;
              return (
                <Reveal as="li" key={step.title} delay={i * 90} className="relative py-2.5 pl-7">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute left-7 w-px -translate-x-1/2 bg-accent",
                      first ? "top-1/2 bottom-0" : last ? "top-0 bottom-1/2" : "top-0 bottom-0",
                    )}
                  />

                  <div className="absolute top-1/2 left-0 z-10 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-accent bg-white">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-[15px] font-semibold text-white tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Extra left padding clears the half of the marker that sits inside the card. */}
                  <div className="rounded-lg border border-line bg-white py-6 pr-6 pl-12 sm:pr-7 sm:pl-14">
                    <h3 className="m-0 text-[17px] leading-snug font-semibold text-ink sm:text-[18px]">
                      {step.title}
                    </h3>
                    <p className="m-0 mt-2 text-[15px] leading-relaxed text-ink-3">{step.note}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
