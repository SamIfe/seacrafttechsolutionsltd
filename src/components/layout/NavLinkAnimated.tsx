"use client";

import type { ComponentProps } from "react";
import Link from "next/link";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

type NavLinkAnimatedProps = ComponentProps<typeof Link> & {
  isActive?: boolean;
};

export function NavLinkAnimated({
  href,
  children,
  className,
  isActive,
  ...props
}: NavLinkAnimatedProps) {
  const reducedMotion = useReducedMotion();

  return (
    <Link
      href={href}
      className={cn("group relative inline-block", className)}
      {...props}
    >
      {children}
      {!reducedMotion ? (
        <span
          aria-hidden
          className={cn(
            "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-[#F5BF23] transition-transform duration-200",
            isActive
              ? "scale-x-100"
              : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100",
          )}
        />
      ) : null}
    </Link>
  );
}
