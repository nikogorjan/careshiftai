import Link from "next/link";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { LegalToc, type TocItem } from "@/components/LegalToc";

/*
 * Shared shell and primitives for the legal pages: full-width header, then a
 * sticky TOC sidebar beside a 760px content column. No cards or boxes.
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
  toc: TocItem[];
  children: ReactNode;
}) {
  return (
    <main className="section-y bg-white">
      <div className="wrap">
        <DraftNotice />
        <Eyebrow>Legal</Eyebrow>
        <h1 className="font-display text-[32px] leading-[1.05] font-normal tracking-[-0.02em] text-balance text-ink lg:text-[48px]">
          {title}
        </h1>
        <p className="mt-4 text-sm text-ink-3">Last updated: September 3, 2026</p>

        <div className="mt-12 grid grid-cols-1 gap-y-8 lg:grid-cols-[280px_minmax(0,760px)] lg:gap-x-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <LegalToc toc={toc} />
          </aside>
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
}

export function LegalH2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-12 mb-4 scroll-mt-28 border-t border-line pt-8 font-display text-2xl leading-snug font-medium tracking-[-0.01em] text-ink first:mt-0 first:border-t-0 first:pt-0"
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
    "text-accent underline decoration-1 [text-underline-offset:3px] transition-colors duration-150 hover:text-accent-strong";
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
