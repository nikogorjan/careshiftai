import { twMerge } from "tailwind-merge";

/**
 * Join class names, letting later Tailwind utilities win over earlier ones that
 * set the same property. Without the merge, `cn("px-6", "px-4")` would leave
 * both in the string and let CSS source order decide.
 */
export function cn(...parts: Array<string | false | null | undefined>) {
  return twMerge(parts.filter(Boolean).join(" "));
}
