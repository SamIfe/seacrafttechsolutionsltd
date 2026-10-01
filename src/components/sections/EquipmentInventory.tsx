import { CheckCircle2 } from "lucide-react";

import { pageIntros } from "@/content/careers";
import { equipment } from "@/content/equipment";
import { PageHero } from "@/components/layout/PageHero";
import { EquipmentPhotoStack } from "@/components/sections/EquipmentPhotoStack";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
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
                description="Complete inventory of subsea tooling available for ROV operations and offshore intervention."
                eyebrowClassName="text-[#172168]"
                titleClassName="text-[#172168]"
                descriptionClassName="text-[#1B1F23]"
              />
            </RevealOnScroll>
            <RevealOnScroll delay={0.08} className="flex justify-center lg:justify-start">
              <EquipmentPhotoStack />
            </RevealOnScroll>
          </div>

        <RevealOnScroll className="mt-12 rounded-lg border border-[#172168]/15 border-t-[3px] border-t-[#F5BF23] bg-white p-6 shadow-[0_8px_24px_rgba(23,33,104,0.08)] md:p-8">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border-b border-[#172168]/10 pb-3 font-sans text-[15px] leading-snug text-text"
              >
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#172168]"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
        </div>
      </div>
    </>
  );
}
