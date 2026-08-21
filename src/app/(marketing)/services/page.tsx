import type { Metadata } from "next";

import { pageIntros } from "@/content/careers";
import { PageHero } from "@/components/layout/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: pageIntros.services.title,
  description: pageIntros.services.description,
  path: "/services",
});

export default function ServicesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
  ] as const;

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([...breadcrumbs])} />
      <PageHero
        title={pageIntros.services.title}
        description={pageIntros.services.description}
        breadcrumbs={[...breadcrumbs]}
        brandAligned
      />
      <ServicesGrid />
    </>
  );
}
