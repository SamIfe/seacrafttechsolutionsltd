"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
};

export function Marquee({ items, className }: MarqueeProps) {
  const reducedMotion = useReducedMotion();
  const loop = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-white/10 bg-[#172168] py-4",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max gap-4",
          reducedMotion ? "flex-wrap justify-center px-4" : "marquee-track",
        )}
      >
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="shrink-0 rounded-full border border-[#F5BF23]/50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
