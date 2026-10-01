"use client";

import dynamic from "next/dynamic";

import { useIdleMotionReady } from "@/hooks/useReducedMotion";

const SmoothScrollProvider = dynamic(
  () =>
    import("@/components/motion/SmoothScrollProvider").then(
      (mod) => mod.SmoothScrollProvider,
    ),
  { ssr: false },
);

const ScrollProgressBar = dynamic(
  () =>
    import("@/components/motion/SmoothScrollProvider").then(
      (mod) => mod.ScrollProgressBar,
    ),
  { ssr: false },
);

export function HomeMotionExtras() {
  const enabled = useIdleMotionReady();

  if (!enabled) return null;

  return (
    <SmoothScrollProvider>
      <ScrollProgressBar />
    </SmoothScrollProvider>
  );
}
