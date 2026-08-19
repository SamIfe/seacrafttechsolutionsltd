"use client";

import Image from "next/image";
import Link from "next/link";

import { company, homeSections } from "@/content/company";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
          <div className="order-1">
            <RevealOnScroll>
              <SectionHeader
                eyebrow="About SeaCraft"
                title="Technology-Driven Offshore Solutions"
                description={company.overview}
                eyebrowClassName="text-[#F5BF23]"
                titleClassName="text-[#172168]"
              />
            </RevealOnScroll>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
              <li>
                <GlassCard
                  title="Vision"
                  className="h-full bg-[#172168]"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderTop: "3px solid #F5BF23",
                  }}
                >
                  {company.vision}
                </GlassCard>
              </li>
              <li>
                <GlassCard
                  title="Mission"
                  className="h-full bg-[#172168]"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderTop: "3px solid #F5BF23",
                  }}
                >
                  {company.mission}
                </GlassCard>
              </li>
            </ul>
          </div>

          <RevealOnScroll
            delay={0.1}
            className="order-3 h-full min-h-0 w-full px-1 sm:px-2 lg:order-2 lg:px-0"
          >
            <div className="relative h-full min-h-0 w-full overflow-hidden rounded-2xl border-[3px] border-[#F5BF23] shadow-[0_12px_40px_rgba(23,33,104,0.12)] max-lg:aspect-[3/2]">
              <Image
                src={homeSections.aboutImage}
                alt={homeSections.aboutImageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[center_40%]"
              />
            </div>
          </RevealOnScroll>

          <Link
            href="/about"
            className="order-2 mt-0 inline-block text-sm font-semibold text-[#172168] hover:text-[#172168]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BF23] focus-visible:ring-offset-2 lg:order-3 lg:col-start-1"
          >
            Our vision, mission &amp; story →
          </Link>
        </div>
      </div>
    </section>
  );
}
