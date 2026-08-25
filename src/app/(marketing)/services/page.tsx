import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { pageIntros } from "@/content/careers";
import { PageHero } from "@/components/layout/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { isSectionLive } from "@/lib/navigation";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  if (!isSectionLive("/services")) {
    return {
      title: "Page Not Found",
      robots: { index: false, follow: true },
    };
  }

  return createPageMetadata({
    title: pageIntros.services.title,
    description: pageIntros.services.description,
    path: "/services",
  });
}

export default function ServicesPage() {
  if (!isSectionLive("/services")) {
    notFound();
  }

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
