"use client";

import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return reducedMotion;
}

/**
 * Becomes true once the browser is idle after first paint, unless the user
 * prefers reduced motion. Gates optional motion so it never competes with LCP.
 */
export function useIdleMotionReady(timeout = 3000): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const enable = () => setReady(true);

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(enable, { timeout });
      return () => window.cancelIdleCallback(id);
    }

    const id = setTimeout(enable, timeout - 1000);
    return () => clearTimeout(id);
  }, [timeout]);

  return ready;
}
