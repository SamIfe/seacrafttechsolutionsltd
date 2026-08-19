import type { Metadata } from "next";
import Link from "next/link";

import { company } from "@/content/company";
import { careers } from "@/content/careers";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: careers.title,
  description: careers.intro,
  path: "/careers",
});

export default function CareersPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Careers", href: "/careers" },
  ] as const;

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([...breadcrumbs])} />
      <PageHero
        title={careers.title}
        description={careers.intro}
        breadcrumbs={[...breadcrumbs]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <SectionHeader
          eyebrow="Opportunities"
          title="Build Your Offshore Career"
          description={careers.note}
        />

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {careers.focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-lg border border-border bg-white px-5 py-4 text-sm font-medium text-navy"
            >
              {area}
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-lg bg-surface px-6 py-8 text-center md:px-10">
          <h2 className="font-heading text-xl font-bold text-navy">
            {careers.applyLabel}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-text/70">
            {careers.applyDescription}
          </p>
          <Button asChild className="mt-6 bg-cyan-strong text-white hover:bg-cyan-strong/90">
            <Link href={`mailto:${company.email}`}>{company.email}</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
