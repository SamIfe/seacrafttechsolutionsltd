"use client";

import dynamic from "next/dynamic";

import { Quote } from "lucide-react";

import { homeSections, testimonialsPlaceholder } from "@/content/company";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Card, CardDescription } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

const placeholderCardClassName =
  "flex min-h-[180px] flex-col items-center justify-center gap-4 border-[#172168]/15 bg-white text-center shadow-[0_8px_24px_rgba(23,33,104,0.08)]";

const TestimonialsSwiper = dynamic(
  () =>
    import("@/components/sections/TestimonialsSwiper").then(
      (mod) => mod.TestimonialsSwiper,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="mt-12 h-44 animate-pulse rounded-lg bg-white" aria-hidden />
    ),
  },
);

export function Testimonials() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our Clients Say"
            description={homeSections.testimonialsIntro}
            align="center"
            className="mx-auto"
            eyebrowClassName="text-[#172168]"
            titleClassName="text-[#172168]"
            descriptionClassName="text-[#1B1F23]"
          />
        </RevealOnScroll>

        <RevealOnScroll className="mt-12">
          {reducedMotion ? (
            <Card
              className={placeholderCardClassName}
              style={{ borderTop: "3px solid #F5BF23" }}
            >
              <Quote
                className="h-6 w-6 text-[#F5BF23] [filter:drop-shadow(0_0_0.75px_#172168)]"
                strokeWidth={2.5}
                aria-hidden
              />
              <CardDescription className="text-base font-medium text-[#1B1F23]">
                &ldquo;{testimonialsPlaceholder.message}&rdquo;
              </CardDescription>
            </Card>
          ) : (
            <TestimonialsSwiper />
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
}
