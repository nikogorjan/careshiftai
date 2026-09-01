"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export type FaqItem = { q: string; a: string };

/** Single-open accordion. Panels animate via a 0fr→1fr grid row, so no height math. */
export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="m-0 mt-4 list-none border-t border-navy/15 p-0">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className="block border-b border-navy/15 p-0">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full cursor-pointer items-center justify-between gap-6 border-none bg-none px-1.5 py-6 text-left text-navy focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-teal"
            >
              <span className="text-[clamp(1.1rem,1.5vw,1.32rem)] font-bold tracking-[-0.015em] text-navy transition-colors duration-200 group-hover:text-teal-ink">
                {item.q}
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className={cn(
                  "h-7.5 w-7.5 flex-none text-teal-ink transition-transform duration-300 motion-reduce:transition-none",
                  isOpen && "rotate-180",
                )}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-[320ms] ease-[cubic-bezier(.4,0,.2,1)] motion-reduce:transition-none",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-[64ch] px-1.5 pb-6.5 text-[1.02rem] leading-relaxed text-muted">
                  {item.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
