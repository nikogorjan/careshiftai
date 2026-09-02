import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Section H2: large and light. 48px desktop, 32px mobile, weight 400. */
export function SectionHeading({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={cn(
        "font-display text-[32px] leading-[1.05] font-normal tracking-[-0.02em] text-balance text-ink lg:text-[48px]",
        className,
      )}
    >
      {children}
    </h2>
  );
}
