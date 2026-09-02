import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";

const PHOTO = "https://bloom42-media.s3.eu-central-1.amazonaws.com/nurse-report.webp";

const QUOTES = [
  {
    label: "critical detail, lost in the noise",
    text: "The one thing that mattered was buried three paragraphs into a wall of text nobody had time to read.",
  },
  {
    label: "the action item with no name on it",
    text: "“Follow up on the labs.” By who? By when? No owner, no deadline, so it falls to whoever remembers.",
  },
  {
    label: "receiving report you can’t fully hear",
    text: "I was nodding along to report while mentally triaging the other seven patients waiting for me.",
  },
  {
    label: "the instinct that never gets handed off",
    text: "“Something’s off with bed 12.” I knew it in my gut, but there’s no field on the form for a feeling.",
  },
  {
    label: "the mental load at shift change",
    text: "By 7 a.m. my brain is holding forty patients’ worth of detail, and praying I pass on the right ten percent.",
  },
];

/**
 * Staircase offsets: card 1 pushed down the most, card 5 flush, so the top
 * edge rises left to right. 96/72/48/24/0 at xl, 64/48/32/16/0 at lg.
 */
const STEP = [
  "lg:mt-16 xl:mt-24",
  "lg:mt-12 xl:mt-18",
  "lg:mt-8 xl:mt-12",
  "lg:mt-4 xl:mt-6",
  "lg:mt-0 xl:mt-0",
];

export function Reality() {
  return (
    <section id="reality" aria-labelledby="reality-h" className="bg-white py-20 lg:py-32">
      <div className="wrap">
        {/* Part 1: sticky header text left, tinted panel right. */}
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:sticky lg:top-24 lg:col-span-5 lg:self-start">
            <Eyebrow>The reality</Eyebrow>
            <SectionHeading id="reality-h">
              You know this shift. You&rsquo;ve lived it a thousand times.
            </SectionHeading>
            <p className="mt-5 max-w-[44ch] text-ink-2">
              The handoff is where care is supposed to pass safely from one set of hands to the
              next. Too often, it&rsquo;s ninety rushed seconds, a scribbled note, and the quiet
              fear that something got left behind.
            </p>
          </div>

          <div className="rounded-lg bg-tint p-8 lg:col-span-7">
            <div
              className="aspect-16/10 w-full rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url("${PHOTO}")` }}
              role="img"
              aria-label="A nurse giving report at shift change"
            />
            <p className="mt-10 flex items-center gap-2 text-[12px] font-medium tracking-[0.08em] text-ink-3 uppercase">
              <span aria-hidden="true" className="h-1.5 w-1.5 flex-none rounded-full bg-accent" />
              The pattern
            </p>
            <h3 className="mt-3 max-w-[26ch] font-display text-[28px] leading-[1.2] font-normal tracking-[-0.02em] text-balance text-ink">
              What gets lost isn&rsquo;t always in the chart.{" "}
              <span className="text-accent">It&rsquo;s the pattern.</span>
            </h3>
            <p className="mt-3 max-w-[52ch] text-base text-ink-2">
              The signals a seasoned nurse catches before the monitor does: a change in affect, a
              tense family, the early edge of deterioration.
            </p>
          </div>
        </div>

        {/* Part 2: the five quotes as a staircase rising to the right. */}
        <ul className="m-0 mt-24 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {QUOTES.map((q, i) => (
            <li
              key={q.label}
              className={`flex min-h-75 flex-col justify-between gap-6 border border-line bg-white px-7 py-8 transition-colors duration-150 hover:border-ink ${
                i > 0 ? "lg:border-l-0" : ""
              } ${STEP[i]}`}
            >
              <blockquote className="m-0 text-lg leading-[1.4] font-normal text-ink">
                {q.text}
              </blockquote>
              <p className="m-0 flex items-start gap-2 text-[12px] font-medium tracking-[0.06em] text-ink-3 uppercase">
                <span
                  aria-hidden="true"
                  className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent"
                />
                {q.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
