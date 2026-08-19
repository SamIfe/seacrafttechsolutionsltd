"use client";

import { motion } from "framer-motion";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motionEase, motionTokens } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SplitHeadingProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  splitBy?: "word" | "char";
};

export function SplitHeading({
  text,
  className,
  as: Tag = "h1",
  splitBy = "word",
}: SplitHeadingProps) {
  const reducedMotion = useReducedMotion();

  const parts =
    splitBy === "char"
      ? text.split("")
      : text.split(" ").map((word, index, array) =>
          index < array.length - 1 ? `${word} ` : word,
        );

  if (reducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={cn(className, "overflow-hidden")}>
      {parts.map((part, index) => (
        <motion.span
          key={`${part}-${index}`}
          className="inline-block"
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{
            duration: motionTokens.duration.section,
            ease: motionEase,
            delay: 0.35 + index * motionTokens.stagger.list,
          }}
        >
          {part}
        </motion.span>
      ))}
    </Tag>
  );
}
