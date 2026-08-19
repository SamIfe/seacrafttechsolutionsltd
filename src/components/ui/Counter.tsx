"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

import { useReducedMotion } from "@/hooks/useReducedMotion";

type CounterProps = {
  value: string;
  className?: string;
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

export function Counter({ value, className }: CounterProps) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const { end, suffix, decimals } = parseStatValue(value);

  if (reducedMotion) {
    return (
      <span className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {isInView ? (
        <CountUp
          end={end}
          duration={1.2}
          decimals={decimals}
          suffix={suffix}
          useEasing
        />
      ) : (
        `0${suffix}`
      )}
    </span>
  );
}
