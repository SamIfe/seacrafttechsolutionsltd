"use client";

import { motion } from "framer-motion";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motionEase, motionTokens } from "@/lib/motion";

type PageTransitionProps = {
  children: React.ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: motionTokens.duration.pageIn,
        ease: motionEase,
      }}
    >
      {children}
    </motion.div>
  );
}
