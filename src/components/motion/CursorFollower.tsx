"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { useIsTouchDevice, useReducedMotion } from "@/hooks/useReducedMotion";

export function CursorFollower() {
  const reducedMotion = useReducedMotion();
  const isTouch = useIsTouchDevice();
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const scale = useSpring(hovering ? 1.6 : 1, {
    stiffness: 300,
    damping: 20,
  });
  const x = useSpring(cursorX, { stiffness: 250, damping: 25 });
  const y = useSpring(cursorY, { stiffness: 250, damping: 25 });

  useEffect(() => {
    if (reducedMotion || isTouch) return;

    const move = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setHovering(
        Boolean(
          target?.closest("a, button, [role='button'], input, textarea, select"),
        ),
      );
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [cursorX, cursorY, isTouch, reducedMotion]);

  if (reducedMotion || isTouch) {
    return null;
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[200] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan bg-cyan/20 md:block"
      style={{ x, y, scale }}
    />
  );
}
