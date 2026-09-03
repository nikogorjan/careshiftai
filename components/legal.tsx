import Link from "next/link";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/Eyebrow";

/*
 * Shared shell and primitives for the legal pages. 760px measure, quiet
 * typography, no cards or boxes.
 */

/** Swap in the full legal name here once the entity is formed. */
export const LEGAL_ENTITY = "CareShift";

/** Emits a real HTML comment marking the page as a draft for counsel. */
export function DraftNotice() {
  return (
    <span
      hidden
      dangerouslySetInnerHTML={{
        __html:
          "<!-- Draft for legal review. Not to be published as final without review by counsel. -->",
      }}
    />
  );
}

export function LegalShell({
  title,
  toc,
  children,
}: {
  title: string;
  toc: Array<{ id: string; label: string }>;
  children: ReactNode;
}) {
  return (
    <main className="section-y bg-white">
      <div className="mx-auto max-w-[760px] px-6">
        <DraftNotice />
        <Eyebrow>Legal</Eyebrow>
        <h1 className="font-display text-[32px] leading-[1.05] font-normal tracking-[-0.02em] text-balance text-ink lg:text-[48px]">
          {title}
        </h1>
        <p className="mt-4 text-sm text-ink-3">Last updated: September 3, 2026</p>

        <nav aria-label="Contents" className="mt-10">
          <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-[15px] text-ink-2 no-underline transition-colors duration-150 hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-4">{children}</div>
      </div>
    </main>
  );
}

export function LegalH2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-12 mb-4 scroll-mt-24 font-display text-2xl leading-snug font-medium tracking-[-0.01em] text-ink"
    >
      {children}
    </h2>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-[17px] leading-[1.65] text-ink-2">{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="mb-4 list-disc pl-6 text-[17px] leading-[1.65] text-ink-2 [&>li]:mb-1.5">
      {children}
    </ul>
  );
}

export function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  const className =
    "text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent";
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
