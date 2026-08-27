"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motionEase, motionTokens, revealViewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Drop GPU translate once the reveal settles so text rasterizes on the pixel grid. */
function dropRestingTransform(
  transform: { y?: string | number },
  generated: string,
) {
  const y = transform.y;
  const numeric =
    typeof y === "number" ? y : Number.parseFloat(String(y ?? 0));
  if (!Number.isFinite(numeric) || Math.abs(numeric) < 0.01) {
    return "none";
  }
  return generated;
}

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function RevealOnScroll({
  children,
  className,
  delay = 0,
}: RevealOnScrollProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{
        duration: motionTokens.duration.section,
        ease: motionEase,
        delay,
      }}
      transformTemplate={dropRestingTransform}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionTokens.stagger.grid,
    },
  },
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.section,
      ease: motionEase,
    },
  },
};

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  as?: "ul" | "ol" | "div";
  stagger?: number;
};

export function RevealStagger({
  children,
  className,
  as = "div",
  stagger = motionTokens.stagger.grid,
}: RevealStaggerProps) {
  const reducedMotion = useReducedMotion();
  const Component = motion[as];

  if (reducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
      className={className}
    >
      {children}
    </Component>
  );
}

export function RevealStaggerItem({
  children,
  className,
  as = "li",
}: {
  children: ReactNode;
  className?: string;
  as?: "li" | "div";
}) {
  const reducedMotion = useReducedMotion();
  const Component = motion[as];

  if (reducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      variants={staggerItemVariants}
      transformTemplate={dropRestingTransform}
      className={className}
    >
      {children}
    </Component>
  );
}
