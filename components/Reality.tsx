import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const PHOTO = "https://bloom42-media.s3.eu-central-1.amazonaws.com/nurse-report.webp";

/** Grid placement per breakpoint, mirroring the original named grid areas. */
const AREA = {
  photo: "col-start-1 row-start-1 tab:row-span-2 desk:row-span-2",
  emph: "tab:col-start-2 tab:row-start-1 desk:col-start-2 desk:col-span-2 desk:row-start-1",
  q1: "tab:col-start-2 tab:row-start-2 desk:col-start-2 desk:row-start-2",
  q2: "tab:col-start-1 tab:row-start-3 desk:col-start-3 desk:row-start-2",
  q3: "tab:col-start-2 tab:row-start-3 desk:col-start-1 desk:row-start-3",
  q4: "tab:col-start-1 tab:row-start-4 desk:col-start-2 desk:row-start-3",
  q5: "tab:col-start-2 tab:row-start-4 desk:col-start-3 desk:row-start-3",
} as const;

const tile =
  "m-0 flex min-w-0 flex-col justify-between gap-4 rounded-cs-lg p-[clamp(22px,1.8vw,30px)] shadow-soft";
const quoteText =
  "m-0 text-[clamp(1rem,1.05vw,1.12rem)] leading-[1.36] font-semibold tracking-[-0.01em] text-pretty";

type Quote = { text: string; cite: string; tone: "light" | "dark"; area: string; d: 1 | 2 | 3 };

const QUOTES: Quote[] = [
  {
    text: "The one thing that mattered was buried three paragraphs into a wall of text nobody had time to read.",
    cite: "— critical detail, lost in the noise",
    tone: "light",
    area: AREA.q1,
    d: 2,
  },
  {
    text: "\u201CFollow up on the labs.\u201D By who? By when? No owner, no deadline — so it falls to whoever remembers.",
    cite: "— the action item with no name on it",
    tone: "dark",
    area: AREA.q2,
    d: 3,
  },
  {
    text: "I was nodding along to report while mentally triaging the other seven patients waiting for me.",
    cite: "— receiving report you can\u2019t fully hear",
    tone: "light",
    area: AREA.q3,
    d: 1,
  },
  {
    text: "\u201CSomething\u2019s off with bed 12.\u201D I knew it in my gut — but there\u2019s no field on the form for a feeling.",
    cite: "— the instinct that never gets handed off",
    tone: "dark",
    area: AREA.q4,
    d: 2,
  },
  {
    text: "By 7 a.m. my brain is holding forty patients\u2019 worth of detail — and praying I pass on the right ten percent.",
    cite: "— the mental load at shift change",
    tone: "light",
    area: AREA.q5,
    d: 3,
  },
];

export function Reality() {
  return (
    <section
      id="reality"
      aria-labelledby="reality-h"
      className="relative z-[1] pt-[clamp(56px,6vw,96px)] pb-[clamp(44px,5vw,80px)]"
    >
      <div className="wrap">
        <Reveal className="mb-12 max-w-[720px]">
          <Eyebrow>The reality</Eyebrow>
          <SectionHeading id="reality-h">
            You know this shift. You&rsquo;ve lived it a thousand times.
          </SectionHeading>
          <p className="mt-4.5 max-w-[62ch] text-[clamp(1.05rem,1.6vw,1.28rem)] font-normal text-body">
            The handoff is where care is supposed to pass safely from one set of hands to the next.
            Too often, it&rsquo;s ninety rushed seconds, a scribbled note, and the quiet fear that
            something got left behind.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-3 tab:grid-cols-2 desk:grid-cols-3">
          <Reveal
            as="figure"
            className={`${AREA.photo} m-0 flex min-h-[280px] flex-col overflow-hidden rounded-cs-lg shadow-soft tab:min-h-[300px] desk:min-h-[360px]`}
          >
            <div
              className="w-full flex-1 bg-cover bg-center"
              style={{ backgroundImage: `url("${PHOTO}")` }}
              role="img"
              aria-label="A nurse giving report at shift change"
            />
          </Reveal>

          <Reveal d={1} className={`${tile} ${AREA.emph} justify-center gap-3.5 bg-navy`}>
            <p className={`${quoteText} text-white`}>
              What gets lost isn&rsquo;t always in the chart.
              <br />
              <span className="text-teal">It&rsquo;s the pattern.</span>
            </p>
            <p className={`${quoteText} text-white`}>
              The signals a seasoned nurse catches before the monitor does — a change in affect, a
              tense family, the early edge of deterioration.
            </p>
          </Reveal>

          {QUOTES.map((q) => (
            <Reveal
              key={q.cite}
              as="blockquote"
              d={q.d}
              className={`${tile} ${q.area} ${q.tone === "dark" ? "bg-navy" : "bg-white"}`}
            >
              <p className={`${quoteText} ${q.tone === "dark" ? "text-white" : "text-navy"}`}>
                {q.text}
              </p>
              <cite
                className={`text-[.84rem] italic ${q.tone === "dark" ? "text-sky-500" : "text-muted"}`}
              >
                {q.cite}
              </cite>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
