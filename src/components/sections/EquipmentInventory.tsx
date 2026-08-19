"use client";

import { pageIntros } from "@/content/careers";
import { equipment } from "@/content/equipment";
import { PageHero } from "@/components/layout/PageHero";
import {
  RevealOnScroll,
  RevealStagger,
  RevealStaggerItem,
} from "@/components/motion/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";
import { CardDescription, CardTitle } from "@/components/ui/Card";
import { MotionCard } from "@/components/ui/MotionCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function EquipmentInventory() {
  return (
    <>
      <PageHero
        title={pageIntros.equipment.title}
        description={pageIntros.equipment.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Equipment" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Full Inventory"
            title={`${equipment.length} Specialized Subsea Tools`}
            description="Complete equipment inventory with tool codes and general function descriptions."
          />
        </RevealOnScroll>

        <RevealStagger
          as="ul"
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {equipment.map((item) => (
            <RevealStaggerItem key={`${item.code}-${item.name}`} as="li">
              <MotionCard className="h-full rounded-lg border border-border bg-white p-6 shadow-sm">
                <Badge variant="outline" className="mb-3 font-mono">
                  {item.code}
                </Badge>
                <CardTitle as="h3" className="text-base">
                  {item.name}
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </MotionCard>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </div>
    </>
  );
}
