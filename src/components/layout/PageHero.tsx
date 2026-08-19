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
};

export function PageHero({
  title,
  description,
  breadcrumbs,
  className,
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
                  className="rounded-sm hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
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
      <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
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
        "border-b border-border bg-gradient-to-br from-navy via-ocean-blue to-navy text-white",
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
      <div className="h-1 bg-gradient-to-r from-teal via-coral to-gold" />
    </section>
  );
}
