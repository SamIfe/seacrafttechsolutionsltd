"use client";

import { ScrollProgressBar } from "@/components/motion/SmoothScrollProvider";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <ScrollProgressBar />
      {children}
    </SmoothScrollProvider>
  );
}
