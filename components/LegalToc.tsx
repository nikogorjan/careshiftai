"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export type TocItem = { id: string; label: string };

/**
 * Sticky table of contents for the legal pages. On desktop an
 * IntersectionObserver on the H2s drives a single active item; below lg it
 * collapses into a disclosure styled like the underline fields.
 */
export function LegalToc({ toc }: { toc: TocItem[] }) {
  const [active, setActive] = useState(toc[0]?.id ?? "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    const headings = toc
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => el !== null);
    // Active = the heading inside the band spanning the top 30% of the viewport.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px" },
    );
    headings.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, [toc]);

  const list = (activeState: boolean) => (
    <ul className="m-0 list-none p-0">
      {toc.map((item) => {
        const isActive = activeState && active === item.id;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "block border-l-2 py-1.5 pl-4 text-sm leading-[1.4] no-underline transition-colors duration-150 hover:text-ink",
                isActive ? "border-accent font-medium text-ink" : "border-transparent text-ink-2",
              )}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Desktop: sticky sidebar with active tracking. */}
      <div className="hidden lg:block">
        <p className="m-0 mb-4 text-xs tracking-[0.08em] text-ink-3 uppercase">On this page</p>
        {list(true)}
      </div>

      {/* Below lg: a collapsed block above the content. */}
      <div className="lg:hidden">
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-11 w-full cursor-pointer items-center justify-between border-b border-line bg-transparent px-0 text-[15px] text-ink"
        >
          On this page
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={cn("h-4.5 w-4.5 text-ink-3 transition-transform duration-150", open && "rotate-180")}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        {open && <div className="pt-3">{list(false)}</div>}
      </div>
    </>
  );
}
