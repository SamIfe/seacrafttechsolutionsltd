import type { Metadata } from "next";

import { LegalDocument } from "@/components/layout/LegalDocument";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { privacyPolicy } from "@/content/legal";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: privacyPolicy.title,
  description: privacyPolicy.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Privacy", href: "/privacy" },
        ])}
      />
      <PageHero
        title={privacyPolicy.title}
        description={privacyPolicy.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy" },
        ]}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <LegalDocument
          title={privacyPolicy.title}
          description={privacyPolicy.description}
          lastUpdated={privacyPolicy.lastUpdated}
          intro={privacyPolicy.intro}
          sections={privacyPolicy.sections}
        />
      </div>
    </>
  );
}
