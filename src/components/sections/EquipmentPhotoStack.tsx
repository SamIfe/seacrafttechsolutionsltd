"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { equipmentStackPhotos } from "@/content/equipment";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motionEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

const CYCLE_MS = 3000;

const LAYERS = [
  {
    x: 0,
    y: 0,
    rotate: 2,
    shadow: "0 18px 36px rgba(23,33,104,0.22)",
  },
  {
    x: 7,
    y: 10,
    rotate: 4,
    shadow: "0 12px 24px rgba(23,33,104,0.14)",
  },
  {
    x: -5,
    y: 14,
    rotate: 3,
    shadow: "0 10px 20px rgba(23,33,104,0.12)",
  },
  {
    x: 8,
    y: 8,
    rotate: 5,
    shadow: "0 8px 16px rgba(23,33,104,0.1)",
  },
  {
    x: -6,
    y: 16,
    rotate: 3,
    shadow: "0 6px 14px rgba(23,33,104,0.08)",
  },
] as const;

const flipVariants = {
  enter: (reduced: boolean) =>
    reduced ? { opacity: 1, rotateY: 0 } : { rotateY: 75, opacity: 0.45 },
  center: {
    rotateY: 0,
    opacity: 1,
    x: LAYERS[0].x,
    y: LAYERS[0].y,
    rotateZ: LAYERS[0].rotate,
  },
  exit: (reduced: boolean) =>
    reduced
      ? { opacity: 0 }
      : { rotateY: -105, opacity: 0, x: 36 },
};

export function EquipmentPhotoStack() {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  const stackRef = useRef<HTMLDivElement>(null);
  const count = equipmentStackPhotos.length;

  const showNext = useCallback(() => {
    setIndex((current) => (current + 1) % count);
  }, [count]);

  const applyPaused = useCallback((next: boolean) => {
    if (pausedRef.current === next) return;
    pausedRef.current = next;
    setPaused(next);
  }, []);

  useEffect(() => {
    if (paused) return;

    const intervalId = setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, CYCLE_MS);

    return () => clearInterval(intervalId);
  }, [paused, count]);

  useEffect(() => {
    const stack = stackRef.current;
    if (stack?.matches(":hover")) {
      applyPaused(true);
    }

    const syncPointer = () => {
      if (!stack) return;
      if (!stack.matches(":hover") && pausedRef.current) {
        applyPaused(false);
      }
    };

    window.addEventListener("scroll", syncPointer, { passive: true });
    return () => window.removeEventListener("scroll", syncPointer);
  }, [applyPaused]);

  return (
    <div
      ref={stackRef}
      className="relative mx-auto h-[240px] w-[180px] sm:h-[320px] sm:w-[240px] lg:mx-0 lg:h-[400px] lg:w-[300px]"
      style={{ perspective: 1400 }}
      onPointerEnter={() => applyPaused(true)}
      onPointerLeave={() => applyPaused(false)}
    >
      {LAYERS.map((layer, depth) => {
        if (depth === 0) return null;

        const photo = equipmentStackPhotos[(index + depth) % count];

        return (
          <div
            key={`back-${depth}`}
            className={cn(
              "absolute inset-0 overflow-hidden rounded-[10px] border-[2.5px] border-[#F5BF23]",
              depth >= 3 && "hidden sm:block",
            )}
            style={{
              transform: `translate(${layer.x}px, ${layer.y}px) rotate(${layer.rotate}deg)`,
              boxShadow: layer.shadow,
              zIndex: 10 - depth,
            }}
            aria-hidden
          >
            <Image
              src={photo.src}
              alt=""
              fill
              sizes="(max-width: 640px) 180px, (max-width: 1023px) 240px, 300px"
              className="object-cover"
              style={{ objectPosition: photo.objectPosition }}
            />
          </div>
        );
      })}

      <AnimatePresence mode="wait" initial={false} custom={reducedMotion}>
        <motion.button
          key={index}
          type="button"
          custom={reducedMotion}
          variants={flipVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={
            reducedMotion
              ? { duration: 0 }
              : { duration: 0.55, ease: motionEase }
          }
          aria-label="Show next equipment photo"
          onClick={showNext}
          className="absolute inset-0 z-20 cursor-pointer overflow-hidden rounded-[10px] border-[2.5px] border-[#F5BF23] will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BF23] focus-visible:ring-offset-2"
          style={{
            transformOrigin: "left center",
            boxShadow: LAYERS[0].shadow,
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            src={equipmentStackPhotos[index].src}
            alt={equipmentStackPhotos[index].alt}
            fill
            sizes="(max-width: 640px) 180px, (max-width: 1023px) 240px, 300px"
            className="object-cover"
            style={{ objectPosition: equipmentStackPhotos[index].objectPosition }}
            priority
          />
        </motion.button>
      </AnimatePresence>
    </div>
  );
}
