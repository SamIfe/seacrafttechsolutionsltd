"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import {
  heroCta,
  heroImageLayers,
  heroSlides,
} from "@/content/hero";
import { HeroMotion } from "@/components/sections/HeroMotion";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { brandCtaClassName, cn } from "@/lib/utils";

/** Two image cuts per text block: 3s × 2 = 6s text dwell. */
const IMAGE_MS = 3000;

/** Temporary — leave on until the stall is confirmed in console, then remove. */
const HERO_DEBUG = true;

function heroLog(event: string, extra?: Record<string, unknown>) {
  if (!HERO_DEBUG) return;
  console.log("[hero]", event, extra ?? "");
}

export function Hero() {
  const [imageIndex, setImageIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const pausedRef = useRef(false);

  const textIndex = heroImageLayers[imageIndex]?.slideIndex ?? 0;
  const slide = heroSlides[textIndex];
  const nextImageIndex = (imageIndex + 1) % heroImageLayers.length;

  const applyPaused = (next: boolean, reason: string) => {
    if (pausedRef.current === next) {
      heroLog("pause-noop", { reason, paused: next });
      return;
    }
    pausedRef.current = next;
    heroLog(next ? "pause" : "resume", { reason });
    setPaused(next);
  };

  // Image autoplay drives the clock. Text advances every second image
  // (derived from imageIndex). Functional updater avoids a stale index.
  useEffect(() => {
    if (paused || reducedMotion || tabHidden) {
      heroLog("timer skip-start", { paused, reducedMotion, tabHidden });
      return;
    }

    heroLog("timer start");
    const intervalId = setInterval(() => {
      setImageIndex((current) => {
        const next = (current + 1) % heroImageLayers.length;
        heroLog("timer tick", { current, next });
        return next;
      });
    }, IMAGE_MS);

    return () => {
      heroLog("timer clear");
      clearInterval(intervalId);
    };
  }, [paused, reducedMotion, tabHidden]);

  useEffect(() => {
    const onVisibility = () => {
      const hidden = document.visibilityState === "hidden";
      heroLog("visibilitychange", { state: document.visibilityState });
      setTabHidden(hidden);
    };

    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (section?.matches(":hover")) {
      applyPaused(true, "mount-already-hovered");
    }

    const syncPointer = () => {
      if (!section) return;
      const hovering = section.matches(":hover");
      const focusInside = section.contains(document.activeElement);
      if (!hovering && !focusInside && pausedRef.current) {
        applyPaused(false, "pointer-no-longer-over");
      }
    };

    window.addEventListener("scroll", syncPointer, { passive: true });
    return () => window.removeEventListener("scroll", syncPointer);
    // Intentional: mount-only hover/scroll sync. applyPaused is stable enough via refs.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      role="region"
      aria-roledescription="carousel"
      aria-label="SeaCraft highlights"
      className="relative min-h-[85vh] overflow-x-hidden bg-[#171B3B] text-white"
      onPointerEnter={() => applyPaused(true, "pointerenter")}
      onPointerLeave={() => applyPaused(false, "pointerleave")}
      onFocus={() => applyPaused(true, "focus")}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          applyPaused(false, "blur");
        } else {
          heroLog("blur-still-inside", {
            related: (event.relatedTarget as HTMLElement | null)?.tagName,
          });
        }
      }}
    >
      <div data-hero-bg className="absolute inset-0">
        {heroImageLayers.map((layer, index) => {
          const isActive = index === imageIndex;

          return (
            <div
              key={`${layer.src}-${index}`}
              aria-hidden={!isActive}
              className={cn(
                "absolute inset-0 overflow-hidden transition-opacity duration-[350ms] motion-reduce:transition-none",
                isActive ? "opacity-100" : "opacity-0",
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 origin-center",
                  isActive && !reducedMotion && "animate-hero-ken-burns will-change-transform",
                )}
              >
                <Image
                  src={layer.src}
                  alt=""
                  fill
                  sizes="100vw"
                  priority={index === 0}
                  loading={
                    index === 0
                      ? undefined
                      : isActive || index === nextImageIndex
                        ? "eager"
                        : "lazy"
                  }
                  className="object-cover"
                />
              </div>
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,33,104,0.86)_0%,rgba(23,33,104,0.80)_48%,rgba(23,33,104,0.82)_100%)] lg:bg-[linear-gradient(90deg,rgba(23,33,104,0.86)_0%,rgba(23,33,104,0.80)_28%,rgba(23,33,104,0.66)_48%,rgba(23,33,104,0.68)_62%,rgba(23,33,104,0.80)_80%,rgba(23,33,104,0.86)_100%)]"
              />
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal via-coral to-gold" />

      <div
        data-hero-content
        className="relative mx-auto flex min-h-[85vh] w-full max-w-7xl flex-col justify-center px-4 py-16 md:px-6 md:py-24 lg:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
            {/*
              Mobile: display:contents so heading / body / CTA can reorder
              as a single stack (headline → subtext → button).
              Desktop: flex column in cols 1–6, body in cols 8–12.
            */}
            <div className="contents lg:col-span-6 lg:flex lg:flex-col">
              <div className="order-1" data-hero-heading>
                <p className="font-heading text-xs font-bold uppercase tracking-[0.08em] text-[#F5BF23] [text-shadow:0_1px_0_rgba(0,0,0,0.72),0_1px_2px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.38)] md:text-[13px]">
                  {slide.eyebrow}
                </p>
                {textIndex === 0 ? (
                  <h1 className="mt-6 max-w-xl font-display text-4xl font-bold leading-[1.15] [text-shadow:0_1px_2px_rgba(0,0,0,0.5),0_2px_10px_rgba(0,0,0,0.38)] md:text-5xl lg:text-6xl">
                    {slide.heading}
                  </h1>
                ) : (
                  <h2 className="mt-6 max-w-xl font-display text-4xl font-bold leading-[1.15] [text-shadow:0_1px_2px_rgba(0,0,0,0.5),0_2px_10px_rgba(0,0,0,0.38)] md:text-5xl lg:text-6xl">
                    {slide.heading}
                  </h2>
                )}
              </div>
              <div className="order-3 justify-self-start lg:mt-8" data-hero-cta>
                <MagneticButton>
                  <Button asChild className={brandCtaClassName}>
                    <Link href={heroCta.href}>
                      {heroCta.label}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </Button>
                </MagneticButton>
              </div>
            </div>

            <div className="order-2 lg:col-span-5 lg:col-start-8" data-hero-body>
              <p
                className={cn(
                  "max-w-lg text-pretty text-justify text-sm font-medium text-white [text-justify:inter-word] [text-shadow:0_1px_2px_rgba(0,0,0,0.45),0_2px_8px_rgba(0,0,0,0.35)] md:text-base lg:ml-auto",
                  textIndex === 0 ? "leading-[1.7]" : "leading-[1.8]",
                )}
              >
                {slide.body}
              </p>
            </div>
          </div>
      </div>

      <HeroMotion />
    </section>
  );
}
