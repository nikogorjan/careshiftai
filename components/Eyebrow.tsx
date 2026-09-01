import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Small uppercase kicker that opens most sections. */
export function Eyebrow({
  children,
  tone = "ink",
  className,
}: {
  children: ReactNode;
  /** `ink` on light panels, `bright` on navy ones. */
  tone?: "ink" | "bright";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-5 text-[0.72rem] font-semibold tracking-[0.22em] uppercase",
        tone === "bright" ? "text-teal-bright" : "text-teal-ink",
        className,
      )}
    >
      {children}
    </p>
  );
}
