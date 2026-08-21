import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Gold #F5BF23 on navy #172168 — official filled CTA (AA contrast ~8:1). */
export const brandCtaClassName =
  "bg-[#F5BF23] text-[#172168] hover:bg-[#F5BF23] hover:text-[#172168] focus-visible:ring-[#F5BF23]";
