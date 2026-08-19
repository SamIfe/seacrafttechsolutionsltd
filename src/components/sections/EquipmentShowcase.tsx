"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

import { homeSections } from "@/content/company";
import { equipment } from "@/content/equipment";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  RevealOnScroll,
  RevealStagger,
  RevealStaggerItem,
} from "@/components/motion/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

const EquipmentSwiper = dynamic(
  () =>
    import("@/components/sections/EquipmentSwiper").then(
      (mod) => mod.EquipmentSwiper,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="mt-12 h-64 animate-pulse rounded-lg bg-surface" aria-hidden />
    ),
  },
);

const PREVIEW_COUNT = 8;

export function EquipmentShowcase() {
  const reducedMotion = useReducedMotion();
  const previewItems = equipment.slice(0, PREVIEW_COUNT);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Equipment Inventory"
            title="26 Specialized Subsea Tools"
            description={homeSections.equipmentIntro}
          />
        </RevealOnScroll>

        {reducedMotion ? (
          <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {previewItems.map((item) => (
              <RevealStaggerItem key={`${item.code}-${item.name}`}>
                <Card className="h-full">
                  <Badge variant="outline" className="mb-3 font-mono">
                    {item.code}
                  </Badge>
                  <CardTitle as="h3" className="text-base">
                    {item.name}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              </RevealStaggerItem>
            ))}
          </RevealStagger>
        ) : (
          <EquipmentSwiper items={previewItems} />
        )}

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
