"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { homeSections } from "@/content/company";
import { equipment } from "@/content/equipment";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SectionHeader } from "@/components/ui/SectionHeader";

const PREVIEW_COUNT = 12;

export function EquipmentShowcase() {
  const previewItems = equipment.slice(0, PREVIEW_COUNT);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Equipment Inventory"
            title={`${equipment.length} Specialized Subsea Tools`}
            description={homeSections.equipmentIntro}
          />
        </RevealOnScroll>

        <RevealOnScroll className="mt-12">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {previewItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border-b border-navy/10 pb-3 font-sans text-[15px] leading-snug text-text"
              >
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-navy"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10 text-center">
          <Link
            href="/equipment"
            className="text-sm font-semibold text-ocean-blue hover:text-ocean-blue/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2"
          >
            View full equipment inventory →
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
