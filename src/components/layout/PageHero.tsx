"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motionEase, motionTokens } from "@/lib/motion";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  className?: string;
  /** Official navy #172168 + gold #F5BF23 treatment (rolled out per page). */
  brandAligned?: boolean;
};

export function PageHero({
  title,
  description,
  breadcrumbs,
  className,
  brandAligned = false,
}: PageHeroProps) {
  const reducedMotion = useReducedMotion();

  const content = (
    <>
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/70">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.label}>
              {index > 0 ? " / " : ""}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className={
                    brandAligned
                      ? "rounded-sm hover:text-[#F5BF23] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BF23] focus-visible:ring-offset-2 focus-visible:ring-offset-[#172168]"
                      : "rounded-sm hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                  }
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      ) : null}
      <h1 className="heading-display font-heading text-4xl font-extrabold leading-[1.12] tracking-normal md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
          {description}
        </p>
      ) : null}
    </>
  );

  return (
    <section
      className={cn(
        "border-b border-border text-white",
        brandAligned
          ? "bg-[#172168]"
          : "bg-gradient-to-br from-navy via-ocean-blue to-navy",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        {reducedMotion ? (
          content
        ) : (
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: motionTokens.duration.section,
              ease: motionEase,
            }}
          >
            {content}
          </motion.div>
        )}
      </div>
      <div
        className={
          brandAligned
            ? "h-1 bg-[#F5BF23]"
            : "h-1 bg-gradient-to-r from-teal via-coral to-gold"
        }
      />
    </section>
  );
}
