import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** The shared large heading scale used by every major section. */
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
        "text-[clamp(2.1rem,4.3vw,3.35rem)] leading-[1.12] font-semibold tracking-[-0.01em] text-balance desk:leading-[1.15]",
        className,
      )}
    >
      {children}
    </h2>
  );
}
