"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motionTokens } from "@/lib/motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function MagneticButton({
  children,
  className,
  strength = 12,
}: MagneticButtonProps) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, motionTokens.spring.magnetic);
  const springY = useSpring(y, motionTokens.spring.magnetic);

  if (reducedMotion) {
    return <div className={cn("inline-block", className)}>{children}</div>;
  }

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    const clamp = (value: number, max: number) =>
      Math.max(Math.min(value, max), -max);

    x.set(clamp(offsetX * 0.25, strength));
    y.set(clamp(offsetY * 0.25, strength));
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
