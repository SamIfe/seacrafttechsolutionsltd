import type { Metadata } from "next";

import { pageIntros } from "@/content/careers";
import { EquipmentInventory } from "@/components/sections/EquipmentInventory";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: pageIntros.equipment.title,
  description: pageIntros.equipment.description,
  path: "/equipment",
});

export default function EquipmentPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Equipment", href: "/equipment" },
        ])}
      />
      <EquipmentInventory />
    </>
  );
}
