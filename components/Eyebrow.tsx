import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Small uppercase kicker, always directly above a heading with a 16px gap. */
export function Eyebrow({
  children,
  tone = "accent",
  className,
}: {
  children: ReactNode;
  /** `accent` on light surfaces, `onDark` over photos and dark surfaces. */
  tone?: "accent" | "onDark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-4 text-[13px] font-medium tracking-[0.08em] uppercase",
        tone === "onDark" ? "text-white/70" : "text-accent",
        className,
      )}
    >
      {children}
    </p>
  );
}
