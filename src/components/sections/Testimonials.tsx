"use client";

import dynamic from "next/dynamic";

import { homeSections, testimonialsPlaceholder } from "@/content/company";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Card, CardDescription } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

const TestimonialsSwiper = dynamic(
  () =>
    import("@/components/sections/TestimonialsSwiper").then(
      (mod) => mod.TestimonialsSwiper,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="mt-12 h-44 animate-pulse rounded-lg bg-white/50" aria-hidden />
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
          />
        </RevealOnScroll>

        <RevealOnScroll className="mt-12">
          {reducedMotion ? (
            <Card className="flex min-h-[180px] items-center justify-center border-dashed bg-white/50 text-center">
              <CardDescription className="text-base font-medium text-text/60">
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
