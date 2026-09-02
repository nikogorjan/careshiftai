import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex cursor-pointer items-center justify-center rounded-sm border border-transparent " +
  "px-5 py-3 text-[15px] leading-none font-medium whitespace-nowrap no-underline " +
  "transition-colors duration-150 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants = {
  /** Ink background, white text. The default call to action on light surfaces. */
  primary: "bg-ink text-white hover:bg-accent-strong",
  /** Transparent with a 1px ink border, for light surfaces. */
  secondary: "border-ink bg-transparent text-ink hover:border-accent-strong hover:text-accent-strong",
  /** Solid white, for use over photography and dark surfaces. */
  onDark: "bg-white text-ink hover:bg-white/85",
  /** Transparent with a white border, for use over photography and dark surfaces. */
  onDarkSecondary: "border-white bg-transparent text-white hover:bg-white/10",
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
