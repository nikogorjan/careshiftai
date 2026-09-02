"use client";

import { useEffect, useRef } from "react";
import { Btn } from "@/components/Btn";
import { useReducedMotion } from "@/lib/useReducedMotion";

const VIDEO_SRC = "https://bloom42-media.s3.eu-central-1.amazonaws.com/nurse.mp4";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) videoRef.current?.pause();
  }, [reduced]);

  return (
    <section aria-label="Introduction" className="relative flex min-h-[88vh] items-end bg-dark">
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay={!reduced}
        loop={!reduced}
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Single neutral scrim from the bottom-left corner for text legibility. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top_right,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.48)_55%,rgba(0,0,0,0)_88%)]"
      />

      <div className="wrap relative w-full pt-40 pb-16 lg:pb-24">
        <div className="max-w-[820px]">
          <h1 className="font-display text-[40px] leading-[1.05] font-normal tracking-[-0.02em] text-balance text-white lg:text-[64px]">
            You became a nurse to care for people.{" "}
            <span className="text-white/70">Not to chase down a handoff.</span>
          </h1>
          <p className="mt-6 max-w-[52ch] text-white/85">
            CareShift is a mission to fix the most fragile moment in healthcare: shift change.
            We&rsquo;re nurses, doctors, and engineers building a safer handoff, with nurses, not at
            them.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href="#stay" variant="onDark">
              Stay updated
            </Btn>
            <Btn href="#reality" variant="onDarkSecondary">
              See what we&rsquo;re fixing
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
}
