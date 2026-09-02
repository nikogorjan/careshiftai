"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export type FaqItem = { q: string; a: string };

/** Single-open accordion rendered as a ruled list. Height animates in 200ms. */
export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="m-0 list-none border-t border-line p-0">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className="block border-b border-line p-0">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-6 border-none bg-none py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span className="text-lg font-medium text-ink">{item.q}</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className={cn(
                  "h-5 w-5 flex-none text-ink-3 transition-transform duration-200 motion-reduce:transition-none",
                  isOpen && "rotate-180",
                )}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-200 ease-in-out motion-reduce:transition-none",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-[64ch] pb-5 text-ink-2">{item.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
