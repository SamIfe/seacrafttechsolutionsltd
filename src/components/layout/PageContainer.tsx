"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <RevealOnScroll>
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8",
          className,
        )}
      >
        {children}
      </div>
    </RevealOnScroll>
  );
}
