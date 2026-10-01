"use client";

import Image from "next/image";

import { partners, partnersSection } from "@/content/partners";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { cn } from "@/lib/utils";

// The track animates to -50%, so each half must be wider than the viewport.
// Four copies of a short list keeps the loop seamless on wide screens.
const COPIES = 4;

export function PartnerMarquee() {
  const reducedMotion = useReducedMotion();
  const loop = reducedMotion
    ? partners
    : Array.from({ length: COPIES }, () => partners).flat();

  return (
    <section className="overflow-hidden bg-[#172168] py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <RevealOnScroll className="text-center">
          <h2 className="section-kicker font-heading text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#F5BF23] md:text-sm">
            {partnersSection.eyebrow}
          </h2>
          <span
            aria-hidden
            className="mx-auto mt-4 block h-[3px] w-11 bg-[#F5BF23]"
          />
        </RevealOnScroll>
      </div>

      <div className="relative mt-8">
        <ul
          className={cn(
            "flex w-max gap-6",
            reducedMotion
              ? "mx-auto w-full max-w-7xl flex-wrap justify-center px-4"
              : "marquee-track",
          )}
        >
          {loop.map((partner, index) => {
            const duplicate = index >= partners.length;
            return (
              <li
                key={`${partner.name}-${index}`}
                aria-hidden={duplicate || undefined}
                className="flex h-24 w-44 shrink-0 items-center justify-center"
              >
                {partner.logo ? (
                  <div
                    className="relative"
                    style={{ width: partner.width, height: partner.height }}
                  >
                    <Image
                      src={partner.logo}
                      alt={duplicate ? "" : partner.name}
                      fill
                      sizes={`${partner.width}px`}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <span className="font-heading text-2xl font-extrabold tracking-[0.08em] text-white">
                    {partner.name}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
