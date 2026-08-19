"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motionTokens } from "@/lib/motion";
import { cn } from "@/lib/utils";

type MotionCardProps = {
  children: ReactNode;
  className?: string;
};

export function MotionCard({ children, className }: MotionCardProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{
        type: "spring",
        stiffness: motionTokens.spring.card.stiffness,
        damping: motionTokens.spring.card.damping,
      }}
      className={cn(className, "transition-shadow duration-300 hover:shadow-lg")}
    >
      {children}
    </motion.div>
  );
}
