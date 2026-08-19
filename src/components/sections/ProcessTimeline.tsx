"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { clientProcess, homeSections } from "@/content/company";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProcessTimeline() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Our Process"
            title="From Consultation to Delivery"
            description={homeSections.processIntro}
            align="center"
            className="mx-auto"
            eyebrowClassName="text-[#F5BF23]"
            titleClassName="text-[#172168]"
            descriptionClassName="text-[#1B1F23]"
          />
        </RevealOnScroll>

        <div className="relative mt-12">
          <svg
            aria-hidden
            className="pointer-events-none absolute left-[8%] right-[8%] top-5 hidden h-[2px] w-[84%] md:block"
            viewBox="0 0 100 2"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="1"
              x2="100"
              y2="1"
              stroke="rgba(23,33,104,0.2)"
              strokeWidth="2"
            />
            {!reducedMotion ? (
              <motion.line
                x1="0"
                y1="1"
                x2="100"
                y2="1"
                stroke="#172168"
                strokeWidth="2"
                style={{ pathLength }}
              />
            ) : (
              <line
                x1="0"
                y1="1"
                x2="100"
                y2="1"
                stroke="#172168"
                strokeWidth="2"
              />
            )}
          </svg>
          <ol className="relative grid gap-6 md:grid-cols-5">
            {clientProcess.map((step, index) => (
              <li key={step.step}>
                <RevealOnScroll delay={index * 0.08}>
                  <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#F5BF23] font-heading text-sm font-bold text-[#172168]">
                      {step.step}
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-[#172168]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#1B1F23]">
                      {step.description}
                    </p>
                  </div>
                </RevealOnScroll>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
