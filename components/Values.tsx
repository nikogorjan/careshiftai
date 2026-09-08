import { Reveal } from "@/components/anim";
import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";

/* Empty waiting area with daylight: wide, calm, no people. */
const PHOTO = "/empty-waiting-area.webp";

const PRINCIPLES = [
  {
    title: "Built with nurses, not at them",
    text: "Shaped by the people who live shift change every day.",
  },
  {
    title: "The bedside comes first",
    text: "Less time on paperwork, more time with patients.",
  },
  {
    title: "Nothing critical slips through",
    text: "The details that matter survive every handoff.",
  },
  {
    title: "Calm, not chaos",
    text: "Clarity at the most fragile moment in care.",
  },
];

export function Values() {
  return (
    <section id="values" aria-labelledby="values-h" className="bg-white section-y">
      {/* Header on white, above the photo. */}
      <Reveal className="wrap">
        <Eyebrow>What we stand for</Eyebrow>
        <SectionHeading id="values-h">
          A few things we won&rsquo;t
          <br />
          compromise on.
        </SectionHeading>
      </Reveal>

      {/* Full-bleed photo backdrop with the shared scrim over its lower part. */}
      <div className="relative mt-16 h-80 w-full sm:h-120 lg:h-170">
        <div
          role="img"
          aria-label="An empty hospital waiting area with daylight"
          className="absolute inset-0 bg-cover [background-position:center_30%]"
          style={{ backgroundImage: `url("${PHOTO}")` }}
        />
        {/*
          Full-height coverage: the shared diagonal scrim only reaches zero
          alpha at its own top-right corner, so any shorter band would draw a
          hard seam across the photo's left side.
        */}
        <div aria-hidden="true" className="photo-scrim absolute inset-0" />
      </div>

      {/* Four cards overlapping the bottom of the photo; card 01 anchors the row. */}
      <div className="wrap">
        <ol className="relative -mt-20 grid list-none grid-cols-1 gap-4 p-0 sm:-mt-30 sm:grid-cols-2 sm:*:min-h-60 lg:-mt-75 lg:grid-cols-4 lg:*:min-h-80">
          {PRINCIPLES.map((p, i) => {
            const dark = i === 0;
            return (
              <Reveal
                as="li"
                key={p.title}
                delay={i * 80}
                className={cn("m-0 flex flex-col rounded-lg p-10", dark ? "bg-ink" : "bg-[#e4f4f5]")}
              >
                <p
                  className={cn(
                    "m-0 text-[13px] tabular-nums",
                    dark ? "text-white" : "text-accent",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div aria-hidden="true" className={cn("mt-3 h-px w-6", dark ? "bg-white/40" : "bg-accent")} />
                <div className="mt-auto pt-6">
                  <h3
                    className={cn(
                      "m-0 font-display text-[26px] leading-[1.15] font-normal tracking-[-0.015em]",
                      dark ? "text-white" : "text-ink",
                    )}
                  >
                    {p.title}
                  </h3>
                  <p className={cn("m-0 mt-3 text-[15px]", dark ? "text-white/80" : "text-ink-2")}>
                    {p.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
