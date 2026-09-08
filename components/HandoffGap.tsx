import { Reveal } from "@/components/anim";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";

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

/* Premium ramp: each card one shade deeper in the light-teal family. */
const SHADE = [
  "bg-[#f1fafa]",
  "bg-[#ebf7f8]",
  "bg-[#e4f4f5]",
  "bg-[#dbf0f2]",
  "bg-[#d2edef]",
];

const QUESTIONS = ["What changed?", "What needs attention?", "What still needs to be done?"];

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

export function HandoffGap() {
  return (
    <section id="handoff" aria-labelledby="handoff-gap-h" className="section-y bg-white">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-24">
              <Eyebrow>The handoff gap</Eyebrow>
              <SectionHeading id="handoff-gap-h">
                <span className="text-ink-3">The chart tells you what was documented.</span>{" "}
                The handoff tells you what matters now.
              </SectionHeading>
            </Reveal>
          </div>
          <Reveal delay={100} className="lg:col-span-7">
            <p className="m-0 max-w-[60ch] text-ink-2">
              The next nurse needs more than a list of information. They need to quickly
              understand:
            </p>
            <ul className="m-0 mt-8 flex list-none flex-col gap-5 p-0">
              {QUESTIONS.map((q) => (
                <li key={q} className="flex items-baseline gap-4">
                  <span aria-hidden="true" className="h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span className="font-display text-[22px] leading-snug font-normal tracking-[-0.015em] text-ink">
                    {q}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-[60ch] text-ink-2">
              When that context does not carry forward, nurses spend the beginning of the next
              shift searching, asking, rechecking, and reconstructing the patient story.
            </p>
          </Reveal>
        </div>

        {/* The five quotes as a staircase rising to the right, shaded deeper card by card. */}
        <ul className="section-gap m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5 lg:gap-0">
          {QUOTES.map((q, i) => (
            <Reveal
              as="li"
              key={q.label}
              delay={i * 70}
              className={`flex min-h-75 flex-col justify-between gap-6 px-7 py-8 ${SHADE[i]} ${STEP[i]}`}
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
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
