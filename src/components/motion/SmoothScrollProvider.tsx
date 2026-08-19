"use client";

import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ScrollProgressBar() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  if (reducedMotion) {
    return null;
  }

  return (
    <div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[60] h-0.5 bg-navy/80"
    >
      <motion.div
        className="h-full origin-left bg-cyan"
        style={{ scaleX }}
      />
    </div>
  );
}

type LenisInstance = {
  destroy: () => void;
  raf: (time: number) => void;
  on: (event: string, callback: () => void) => void;
};

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    let lenis: LenisInstance | null = null;
    let tickerCallback: ((time: number) => void) | null = null;
    let cancelled = false;
    let idleHandle: number | ReturnType<typeof setTimeout> | undefined;

    const init = () => {
      if (cancelled) return;

      void Promise.all([
        import("@studio-freight/lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]).then(([LenisModule, gsapModule, scrollTriggerModule]) => {
        if (cancelled) return;

        const Lenis = LenisModule.default;
        const gsap = gsapModule.default;
        const ScrollTrigger = scrollTriggerModule.default;
        gsap.registerPlugin(ScrollTrigger);

        lenis = new Lenis({
          duration: 1.1,
          smoothWheel: true,
        }) as LenisInstance;

        lenis.on("scroll", ScrollTrigger.update);

        tickerCallback = (time: number) => {
          lenis?.raf(time * 1000);
        };
        gsap.ticker.add(tickerCallback);
        gsap.ticker.lagSmoothing(0);
      });
    };

    if ("requestIdleCallback" in window) {
      idleHandle = window.requestIdleCallback(init, { timeout: 2500 });
    } else {
      idleHandle = setTimeout(init, 1500);
    }

    return () => {
      cancelled = true;
      if (typeof idleHandle === "number" && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleHandle);
      } else if (idleHandle !== undefined) {
        clearTimeout(idleHandle);
      }
      void import("gsap").then((gsapModule) => {
        if (tickerCallback) {
          gsapModule.default.ticker.remove(tickerCallback);
        }
      });
      lenis?.destroy();
    };
  }, [reducedMotion]);

  return <>{children}</>;
}
