"use client";

import { pageIntros } from "@/content/careers";
import { equipment } from "@/content/equipment";
import { PageHero } from "@/components/layout/PageHero";
import { EquipmentPhotoStack } from "@/components/sections/EquipmentPhotoStack";
import {
  RevealOnScroll,
  RevealStagger,
  RevealStaggerItem,
} from "@/components/motion/RevealOnScroll";
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

      <div className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-5">
            <RevealOnScroll>
              <SectionHeader
                eyebrow="Full Inventory"
                title={`${equipment.length} Specialized Subsea Tools`}
                description="Complete equipment inventory with tool codes and general function descriptions."
                eyebrowClassName="text-[#F5BF23]"
                titleClassName="text-[#172168]"
                descriptionClassName="text-[#1B1F23]"
              />
            </RevealOnScroll>
            <RevealOnScroll delay={0.08} className="flex justify-center lg:justify-start">
              <EquipmentPhotoStack />
            </RevealOnScroll>
          </div>

        <RevealStagger
          as="ul"
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {equipment.map((item, index) => (
            <RevealStaggerItem key={`${item.code}-${item.name}`} as="li">
              <MotionCard className="h-full rounded-lg border border-[#172168]/15 border-t-[3px] border-t-[#F5BF23] bg-white p-6 shadow-[0_8px_24px_rgba(23,33,104,0.08)]">
                <p className="mb-3 font-mono text-sm font-bold text-[#1B1F23]">
                  Box {index + 1} - {item.code}
                </p>
                <CardTitle as="h3" className="text-base font-bold text-[#1B1F23]">
                  {item.name}
                </CardTitle>
                <CardDescription className="text-[#1B1F23]">
                  {item.description}
                </CardDescription>
              </MotionCard>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
        </div>
      </div>
    </>
  );
}
