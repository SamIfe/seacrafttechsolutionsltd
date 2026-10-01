"use client";

import dynamic from "next/dynamic";

import { useIdleMotionReady } from "@/hooks/useReducedMotion";

const HeroMotionInner = dynamic(
  () =>
    import("@/components/sections/HeroMotionInner").then(
      (mod) => mod.HeroMotionInner,
    ),
  { ssr: false },
);

export function HeroMotion() {
  const enabled = useIdleMotionReady();

  if (!enabled) return null;

  return <HeroMotionInner />;
}
