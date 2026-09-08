"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/anim";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { voices } from "@/lib/voices";

const GAP = 24;
const LAST = voices.length - 1;

/*
 * The scroller starts at the container's content edge (1320px box, 24px
 * padding), so cards align with the eyebrow and clip at that edge on the
 * left while bleeding to the viewport edge on the right.
 */
const GUTTER = "max(24px, calc((100vw - 1272px) / 2))";

const arrowBtn =
  "grid h-11 w-11 cursor-pointer place-items-center rounded-sm border border-line bg-white text-ink " +
  "transition-colors duration-150 disabled:cursor-default disabled:opacity-40";

export function Voices() {
  const scroller = useRef<HTMLDivElement>(null);
  const settleTimer = useRef<number | undefined>(undefined);
  const animating = useRef(false);
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  /** One card plus gap, measured live so it tracks the responsive card width. */
  const step = useCallback(() => {
    const card = scroller.current?.querySelector("blockquote");
    return (card?.offsetWidth ?? 480) + GAP;
  }, []);

  /** Arrow press: one position per press, six positions total. */
  const move = (dir: 1 | -1) => {
    const next = Math.min(LAST, Math.max(0, index + dir));
    if (next === index) return;
    setIndex(next);
    animating.current = true;
    window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(() => (animating.current = false), 650);
    scroller.current?.scrollTo({ left: next * step(), behavior: reduced ? "auto" : "smooth" });
  };

  /** Touch and trackpad scrolling keep the index (and dark card) in sync. */
  const onScroll = () => {
    if (animating.current) return;
    const el = scroller.current;
    if (!el) return;
    setIndex(Math.min(LAST, Math.max(0, Math.round(el.scrollLeft / step()))));
  };

  useEffect(() => () => window.clearTimeout(settleTimer.current), []);

  return (
    <section id="voices" aria-labelledby="voices-h" className="section-y overflow-x-clip bg-white">
      {/* Header row: text left, the only carousel controls right. */}
      <Reveal className="wrap flex items-end justify-between gap-8">
        <div>
          <Eyebrow>Voices</Eyebrow>
          <SectionHeading id="voices-h">
            Nurses and clinicians who believe in this mission.
          </SectionHeading>
        </div>
        <div className="mb-1 flex flex-none items-center gap-2">
          <button
            type="button"
            aria-label="Previous voice"
            onClick={() => move(-1)}
            disabled={index === 0}
            className={arrowBtn}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-4.5 w-4.5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next voice"
            onClick={() => move(1)}
            disabled={index === LAST}
            className={arrowBtn}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-4.5 w-4.5"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </Reveal>

      {/* Bleeding track: clips at the container edge left, viewport edge right. */}
      <Reveal variant="right" delay={120}>
      <div
        ref={scroller}
        onScroll={onScroll}
        className="section-gap flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ marginLeft: GUTTER }}
      >
        {voices.map((v, i) => {
          const dark = i === index;
          return (
            <blockquote
              key={v.name}
              className={cn(
                "m-0 flex min-h-105 w-[85vw] flex-none snap-start flex-col rounded-lg p-7 transition-colors duration-300 sm:w-95 sm:p-10 lg:w-120",
                dark ? "bg-ink" : "bg-[#e4f4f5]",
              )}
            >
              <p
                className={cn(
                  "m-0 text-[19px] leading-[1.4] font-normal transition-colors duration-300 sm:text-[22px]",
                  dark ? "text-white" : "text-ink",
                )}
              >
                &ldquo;{v.quote}&rdquo;
              </p>
              <footer className="mt-auto flex items-center gap-4 pt-6">
                <span
                  className={cn(
                    "grid h-10 w-10 flex-none place-items-center rounded-full text-[13px] font-medium transition-colors duration-300",
                    dark ? "bg-white/15 text-white" : "bg-white text-ink",
                  )}
                >
                  {v.initials}
                </span>
                <span className="flex flex-col">
                  <span
                    className={cn(
                      "text-[15px] font-medium transition-colors duration-300",
                      dark ? "text-white" : "text-ink",
                    )}
                  >
                    {v.name}
                  </span>
                  <span
                    className={cn(
                      "max-w-[36ch] text-sm transition-colors duration-300",
                      dark ? "text-white/60" : "text-ink-3",
                    )}
                  >
                    {v.role}
                  </span>
                </span>
              </footer>
            </blockquote>
          );
        })}

        {/*
          Trailing space: visible track width minus one card, so the last card
          can rest at the container's left edge instead of stopping early.
        */}
        <div
          aria-hidden="true"
          className="w-[max(0px,calc(15vw-48px))] flex-none sm:w-[calc(100vw-428px)] lg:w-[calc(100vw-504px-max(24px,calc((100vw-1272px)/2)))]"
        />
      </div>
      </Reveal>
    </section>
  );
}
