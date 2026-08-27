import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type GlassCardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function GlassCard({
  title,
  children,
  className,
  style,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-navy p-6 shadow-[0_8px_24px_rgba(8,27,51,0.18)]",
        className,
      )}
      style={{ border: "1px solid rgba(255, 255, 255, 0.12)", ...style }}
    >
      <h3 className="font-heading text-lg font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white md:text-base">
        {children}
      </p>
    </div>
  );
}
