"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

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
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let idleId: number | ReturnType<typeof setTimeout> | undefined;
    const enable = () => setEnabled(true);

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(enable, { timeout: 3000 });
    } else {
      idleId = setTimeout(enable, 2000);
    }

    return () => {
      if (typeof idleId === "number" && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      } else if (idleId !== undefined) {
        clearTimeout(idleId);
      }
    };
  }, []);

  if (!enabled) return null;

  return (
    <SmoothScrollProvider>
      <ScrollProgressBar />
    </SmoothScrollProvider>
  );
}
