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
      className={cn("group relative inline-block", className, isActive && "text-[#F5BF23]")}
      {...props}
    >
      {children}
      {!reducedMotion ? (
        <span
          aria-hidden
          className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[#F5BF23] transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100"
        />
      ) : null}
    </Link>
  );
}
