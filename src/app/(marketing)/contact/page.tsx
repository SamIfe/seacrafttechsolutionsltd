import type { Metadata } from "next";

import { pageIntros } from "@/content/careers";
import { PageHero } from "@/components/layout/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: pageIntros.contact.title,
  description: pageIntros.contact.description,
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
  ] as const;

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([...breadcrumbs])} />
      <PageHero
        title={pageIntros.contact.title}
        description={pageIntros.contact.description}
        breadcrumbs={[...breadcrumbs]}
      />
      <ContactSection showHeader={false} />
    </>
  );
}
