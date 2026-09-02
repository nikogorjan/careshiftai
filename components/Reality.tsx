import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";

const PHOTO = "https://bloom42-media.s3.eu-central-1.amazonaws.com/nurse-report.webp";

const QUOTES = [
  {
    text: "The one thing that mattered was buried three paragraphs into a wall of text nobody had time to read.",
    cite: "critical detail, lost in the noise",
  },
  {
    text: "“Follow up on the labs.” By who? By when? No owner, no deadline, so it falls to whoever remembers.",
    cite: "the action item with no name on it",
  },
  {
    text: "I was nodding along to report while mentally triaging the other seven patients waiting for me.",
    cite: "receiving report you can’t fully hear",
  },
  {
    text: "“Something’s off with bed 12.” I knew it in my gut, but there’s no field on the form for a feeling.",
    cite: "the instinct that never gets handed off",
  },
  {
    text: "By 7 a.m. my brain is holding forty patients’ worth of detail, and praying I pass on the right ten percent.",
    cite: "the mental load at shift change",
  },
];

export function Reality() {
  return (
    <section id="reality" aria-labelledby="reality-h" className="bg-white py-20 lg:py-32">
      <div className="wrap">
        {/* Two-column header: heading left, paragraph right on the baseline. */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>The reality</Eyebrow>
            <SectionHeading id="reality-h">
              You know this shift. You&rsquo;ve lived it a thousand times.
            </SectionHeading>
          </div>
          <p className="max-w-[60ch] text-ink-2 lg:col-span-4 lg:col-start-9">
            The handoff is where care is supposed to pass safely from one set of hands to the next.
            Too often, it&rsquo;s ninety rushed seconds, a scribbled note, and the quiet fear that
            something got left behind.
          </p>
        </div>

        {/* Row 1: photo left, plain-text emphasis right. */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
          <figure className="m-0 lg:col-span-5">
            <div
              className="aspect-[4/3] w-full rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url("${PHOTO}")` }}
              role="img"
              aria-label="A nurse giving report at shift change"
            />
          </figure>
          <div className="lg:col-span-7 lg:pl-10">
            <h3 className="font-display text-[26px] leading-[1.15] font-normal tracking-[-0.02em] text-balance text-ink lg:text-[32px]">
              What gets lost isn&rsquo;t always in the chart.{" "}
              <span className="text-accent">It&rsquo;s the pattern.</span>
            </h3>
            <p className="mt-4 max-w-[60ch] text-ink-2">
              The signals a seasoned nurse catches before the monitor does: a change in affect, a
              tense family, the early edge of deterioration.
            </p>
          </div>
        </div>

        {/* Row 2: identical default cards. */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {QUOTES.map((q) => (
            <blockquote
              key={q.cite}
              className="m-0 flex flex-col justify-between gap-4 rounded-lg border border-line bg-white p-8"
            >
              <p className="m-0 text-lg leading-normal font-normal text-ink">{q.text}</p>
              <cite className="text-[13px] text-ink-3 italic">{q.cite}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
