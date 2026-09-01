"use client";

import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useInView } from "@/lib/useInView";

/** Stagger steps matching the original `data-d` reveal delays. */
const DELAY = ["", "delay-[80ms]", "delay-[160ms]", "delay-[240ms]", "delay-[320ms]"] as const;

type RevealProps = {
  children: ReactNode;
  /** Stagger index 0–4. */
  d?: 0 | 1 | 2 | 3 | 4;
  as?: ElementType;
  className?: string;
} & Record<string, unknown>;

/** Fades and lifts its content into place the first time it enters the viewport. */
export function Reveal({ children, d = 0, as: Tag = "div", className, ...rest }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none",
        DELAY[d],
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
