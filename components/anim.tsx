"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import React, { useMemo, type ElementType, type ReactNode } from "react";

/*
 * Framer Motion entrance system. `Reveal` animates a block the first time it
 * scrolls into view; `Settle` and `DrawRule` are child details that inherit
 * the parent Reveal's timeline through variant propagation.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

const HIDDEN = {
  up: { opacity: 0, y: 24 },
  right: { opacity: 0, x: 32 },
  fade: { opacity: 0 },
} as const;

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  /** Entrance direction: rise from below, slide from the right, or fade only. */
  variant?: "up" | "right" | "fade";
  /** Transition delay in ms, for staggers. */
  delay?: number;
  className?: string;
} & Record<string, unknown>;

type AnyComponent = React.ComponentType<Record<string, unknown>>;
const motionCache = new Map<ElementType, AnyComponent>();
function motionOf(tag: ElementType): AnyComponent {
  let m = motionCache.get(tag);
  if (!m) {
    m = motion.create(tag as keyof React.JSX.IntrinsicElements) as unknown as AnyComponent;
    motionCache.set(tag, m);
  }
  return m;
}

export function Reveal({
  children,
  as = "div",
  variant = "up",
  delay = 0,
  className,
  ...rest
}: RevealProps) {
  /*
   * The markup must be identical on the server and the client, so reduced
   * motion never swaps the element; it drives the same motion component to
   * its end state instantly instead.
   */
  const reduce = useReducedMotion();
  const M = motionOf(as);
  const variants: Variants = useMemo(
    () => ({
      hidden: HIDDEN[variant],
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: reduce
          ? { duration: 0 }
          : { duration: 0.7, ease: EASE, delay: delay / 1000 },
      },
    }),
    [variant, delay, reduce],
  );

  return (
    <M
      initial="hidden"
      whileInView="show"
      animate={reduce ? "show" : undefined}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
      variants={variants}
      className={className}
      {...rest}
    >
      {children}
    </M>
  );
}

/** A photo that settles from a slight zoom as its parent Reveal enters. */
export function Settle({
  className,
  style,
  ...rest
}: { className?: string; style?: React.CSSProperties } & Record<string, unknown>) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={{
        hidden: { scale: reduce ? 1 : 1.05 },
        show: { scale: 1, transition: { duration: reduce ? 0 : 1.6, ease: "easeOut" } },
      }}
      className={className}
      style={style}
      {...rest}
    />
  );
}

/** An accent rule that draws itself left to right as its parent Reveal enters. */
export function DrawRule({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      variants={{
        hidden: { scaleX: reduce ? 1 : 0 },
        show: {
          scaleX: 1,
          transition: reduce ? { duration: 0 } : { duration: 0.5, delay: 0.3, ease: "easeOut" },
        },
      }}
      className={className}
      style={{ transformOrigin: "left" }}
    />
  );
}
