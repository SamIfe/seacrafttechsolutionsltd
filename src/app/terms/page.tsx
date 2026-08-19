import type { Metadata } from "next";

import { LegalDocument } from "@/components/layout/LegalDocument";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { termsOfUse } from "@/content/legal";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: termsOfUse.title,
  description: termsOfUse.description,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Terms", href: "/terms" },
        ])}
      />
      <PageHero
        title={termsOfUse.title}
        description={termsOfUse.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms" },
        ]}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <LegalDocument
          title={termsOfUse.title}
          description={termsOfUse.description}
          lastUpdated={termsOfUse.lastUpdated}
          intro={termsOfUse.intro}
          sections={termsOfUse.sections}
        />
      </div>
    </>
  );
}
