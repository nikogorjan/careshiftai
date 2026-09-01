import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex cursor-pointer items-center gap-2.5 rounded-full border-[1.5px] border-transparent whitespace-nowrap " +
  "text-base leading-none font-semibold no-underline transition-[transform,background,box-shadow,color,border-color] " +
  "duration-[180ms] ease-out focus-visible:outline-none " +
  "focus-visible:shadow-[0_0_0_3px_rgba(0,32,88,.55),0_0_0_6px_rgba(27,164,175,.9)] " +
  "motion-reduce:hover:transform-none";

const variants = {
  primary:
    "bg-navy px-6.5 py-3.5 text-white shadow-[0_6px_20px_rgba(0,32,88,.22)] hover:-translate-y-0.5 hover:bg-navy-700",
  ghost:
    "border-navy/20 bg-transparent px-6.5 py-3.5 text-navy hover:border-navy hover:bg-navy/5",
  heroPrimary:
    "min-h-[52px] border-white bg-white px-7 py-3.75 text-[1.02rem] text-navy " +
    "shadow-[0_4px_14px_rgba(0,10,35,.18)] transition-[transform,box-shadow,background,border-color] duration-150 " +
    "hover:-translate-y-0.5 hover:shadow-[0_9px_24px_rgba(0,10,35,.26)]",
  heroFrost:
    "relative min-h-[52px] overflow-hidden border border-white/20 bg-navy/40 px-7 py-3.75 text-[1.02rem] " +
    "text-white shadow-[0_4px_14px_rgba(0,10,35,.18)] backdrop-blur-lg " +
    "transition-[transform,box-shadow,background,border-color] duration-150 " +
    "hover:-translate-y-0.5 hover:border-white/35 hover:bg-navy/55",
  tealSolid:
    "bg-teal px-6.5 py-3.5 font-bold text-[#00232c] hover:-translate-y-0.5 hover:bg-[#2bb6c1] " +
    "hover:shadow-[0_10px_28px_rgba(27,164,175,.32)]",
} as const;

type Variant = keyof typeof variants;

type LinkProps = { href: string; variant?: Variant; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonProps = { href?: undefined; variant?: Variant; children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>;

export function Btn(props: LinkProps): React.JSX.Element;
export function Btn(props: ButtonProps): React.JSX.Element;
export function Btn({ variant = "primary", className, children, ...rest }: LinkProps | ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
