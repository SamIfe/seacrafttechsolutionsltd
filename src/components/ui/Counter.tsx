"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { useReducedMotion } from "@/hooks/useReducedMotion";

type CounterProps = {
  value: string;
  className?: string;
  /** Seconds to wait after entering view before counting, for staggering. */
  delay?: number;
};

function parseStatValue(value: string): {
  end: number;
  suffix: string;
  decimals: number;
} {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { end: 0, suffix: value, decimals: 0 };
  }

  const numeric = match[1];
  const suffix = match[2] ?? "";
  const decimals = numeric.includes(".") ? numeric.split(".")[1]?.length ?? 0 : 0;

  return {
    end: Number(numeric),
    suffix,
    decimals,
  };
}

const DURATION_MS = 1200;

// Ease-out cubic: fast start, gentle settle on the final value.
function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export function Counter({ value, className, delay = 0 }: CounterProps) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [current, setCurrent] = useState(0);
  const [done, setDone] = useState(false);
  const { end, suffix, decimals } = parseStatValue(value);

  useEffect(() => {
    if (!isInView || reducedMotion) return;

    let frame = 0;
    let start: number | undefined;

    const tick = (now: number) => {
      start ??= now + delay * 1000;
      const progress = Math.min(Math.max((now - start) / DURATION_MS, 0), 1);
      setCurrent(end * easeOutCubic(progress));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, reducedMotion, end, delay]);

  if (reducedMotion) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{value}</span>
      <span aria-hidden>
        {current.toFixed(decimals)}
        {/* Suffix keeps its space while hidden so centered numbers don't shift when it appears. */}
        <span className={done ? undefined : "invisible"}>{suffix}</span>
      </span>
    </span>
  );
}
