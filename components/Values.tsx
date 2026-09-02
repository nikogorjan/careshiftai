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
    <section aria-labelledby="values-h" className="bg-white pb-32">
      {/* Header on white, above the photo. */}
      <div className="wrap">
        <Eyebrow>What we stand for</Eyebrow>
        <SectionHeading id="values-h">
          A few things we won&rsquo;t
          <br />
          compromise on.
        </SectionHeading>
      </div>

      {/* Full-bleed photo backdrop: natural color, sharp, nothing on top of it. */}
      <div
        role="img"
        aria-label="An empty hospital waiting area with daylight"
        className="mt-16 h-70 w-full bg-cover [background-position:center_40%] sm:h-100 lg:h-150"
        style={{ backgroundImage: `url("${PHOTO}")` }}
      />

      {/* Four cards overlapping the bottom of the photo; card 01 anchors the row. */}
      <div className="wrap">
        <ol className="relative -mt-20 grid list-none grid-cols-1 gap-4 p-0 sm:-mt-30 sm:grid-cols-2 sm:*:min-h-60 lg:-mt-60 lg:grid-cols-4 lg:*:min-h-80">
          {PRINCIPLES.map((p, i) => {
            const dark = i === 0;
            return (
              <li
                key={p.title}
                className={cn(
                  "m-0 flex flex-col rounded-lg p-10",
                  dark ? "bg-ink" : "bg-[#e4f2f3]",
                )}
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
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
