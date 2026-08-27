"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";

import { homeSections } from "@/content/company";
import { hseqPrinciples } from "@/content/hseq";
import {
  RevealOnScroll,
  RevealStagger,
  RevealStaggerItem,
} from "@/components/motion/RevealOnScroll";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Hseq() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="HSEQ & Compliance"
            title="Safety, Quality & Local Content"
            description={homeSections.hseqIntro}
          />
        </RevealOnScroll>

        <RevealStagger as="ul" className="mt-12 grid gap-4 sm:grid-cols-2">
          {hseqPrinciples.map((principle) => (
            <RevealStaggerItem key={principle} as="li">
              <div className="flex items-start gap-3 rounded-lg border border-border bg-surface px-5 py-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden />
                <span className="font-heading text-sm font-bold text-[#172168] md:text-base">
                  {principle}
                </span>
              </div>
            </RevealStaggerItem>
          ))}
        </RevealStagger>

        <RevealOnScroll className="mt-10 text-center">
          <Link
            href="/hseq"
            className="text-sm font-semibold text-ocean-blue hover:text-ocean-blue/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2"
          >
            Certifications &amp; local content commitments →
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
