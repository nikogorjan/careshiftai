"use client";

import { useEffect, useRef } from "react";
import { Btn } from "@/components/Btn";
import { Reveal } from "@/components/Reveal";
import { useReducedMotion } from "@/lib/useReducedMotion";

const VIDEO_SRC = "https://bloom42-media.s3.eu-central-1.amazonaws.com/nurse.mp4";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) videoRef.current?.pause();
  }, [reduced]);

  return (
    <section
      aria-label="Introduction"
      className="relative z-[1] overflow-hidden rounded-b-panel bg-navy"
    >
      {/* Tonal navy fallback sits behind the video so the hero never flashes empty. */}
      <div
        className="absolute inset-0 z-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.03)_0_14px,rgba(255,255,255,0)_14px_28px),linear-gradient(155deg,#062a63_0%,#002058_55%,#001a48_100%)]"
        aria-hidden="true"
      />
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay={!reduced}
        loop={!reduced}
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,20,60,.78),rgba(0,26,72,.62))] tab:bg-[linear-gradient(90deg,rgba(0,20,60,.86)_0%,rgba(0,26,72,.66)_48%,rgba(0,26,72,.28)_100%)]"
      />

      <svg
        className="absolute inset-x-0 top-[64%] z-[1] h-22.5 w-full opacity-[0.28]"
        viewBox="0 0 1600 90"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="hero-pulse-path animate-ekg fill-none stroke-teal stroke-[3] [stroke-dasharray:1600] [stroke-dashoffset:1600]"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M0 45 H540 l22 -30 18 60 22 -78 20 96 18 -48 24 0 H720 l16 -20 14 40 16 -50 14 30 H1600"
        />
      </svg>

      <div className="relative z-[2] mx-auto max-w-[1640px] py-[clamp(96px,16vh,168px)] gutter-x">
        <Reveal className="max-w-[820px]">
          <h1 className="text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.12] font-semibold tracking-[-0.01em] text-balance text-white">
            You became a nurse to care for people —{" "}
            <em className="font-semibold text-teal-glow italic">not to chase down a handoff.</em>
          </h1>
          <p className="mt-7 max-w-[56ch] text-[clamp(1.05rem,1.8vw,1.32rem)] leading-relaxed font-normal text-sky-100">
            CareShift is a mission to fix the most fragile moment in healthcare: shift change.
            We&rsquo;re nurses, doctors, and engineers building a safer handoff — with nurses, not
            at them.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <Btn href="#stay" variant="heroPrimary" className="group">
              Stay updated{" "}
              <span
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:translate-x-[3px] motion-reduce:group-hover:transform-none"
              >
                →
              </span>
            </Btn>
            <Btn href="#reality" variant="heroFrost">
              See what we&rsquo;re fixing
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
