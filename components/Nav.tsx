"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Btn } from "@/components/Btn";
import { cn } from "@/lib/cn";
import logo from "@/public/careshift-logo.png";

const LINKS = [
  { href: "#reality", label: "The problem" },
  { href: "#mission", label: "Our mission" },
  { href: "#voices", label: "Voices" },
];

export function Nav() {
  const [stuck, setStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-white/85 backdrop-blur-md backdrop-saturate-150",
        "transition-[border-color,box-shadow] duration-[250ms]",
        stuck && "border-b-line shadow-[0_1px_0_rgba(0,32,88,.03)]",
      )}
    >
      <div className="wrap flex h-18.5 items-center justify-between">
        <a href="#top" aria-label="CareShift home" className="flex items-center gap-3 no-underline">
          <Image src={logo} alt="CareShift logo" className="h-8.5 w-auto" priority />
          <b className="text-[1.4rem] font-semibold tracking-[-0.01em] text-navy">CareShift</b>
        </a>

        <nav
          aria-label="Primary"
          className={cn(
            "items-center gap-8.5",
            "tab:flex",
            menuOpen
              ? "absolute inset-x-0 top-18.5 flex flex-col gap-4.5 border-b border-line bg-white pt-4.5 pb-6.5 shadow-mid gutter-x tab:static tab:flex-row tab:gap-8.5 tab:border-0 tab:bg-transparent tab:p-0 tab:shadow-none"
              : "hidden",
          )}
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="relative py-1.5 text-[0.98rem] font-medium text-ink no-underline after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-sm after:bg-teal after:transition-transform after:duration-[220ms] hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
          {/* Below `mini` the CTA does not fit in the bar, so it lives here instead. */}
          <Btn
            href="#stay"
            variant="primary"
            onClick={() => setMenuOpen(false)}
            className="mt-1 justify-center px-4.5 py-2.75 text-[0.92rem] mini:hidden"
          >
            Stay updated
          </Btn>
        </nav>

        <div className="flex items-center gap-4">
          <Btn
            href="#stay"
            variant="primary"
            className="hidden px-4.5 py-2.75 text-[0.92rem] mini:inline-flex mini:px-6.5 mini:py-3.5 mini:text-base"
          >
            Stay updated
          </Btn>
          <Btn
            variant="ghost"
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="px-4.5 py-2.75 text-[0.92rem] mini:px-6.5 mini:py-3.5 mini:text-base tab:hidden"
          >
            Menu
          </Btn>
        </div>
      </div>
    </header>
  );
}
