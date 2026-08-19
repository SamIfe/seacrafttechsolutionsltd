import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

import { pageIntros } from "@/content/careers";
import {
  certifications,
  hseqPrinciples,
  localContentCommitments,
} from "@/content/hseq";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: pageIntros.hseq.title,
  description: pageIntros.hseq.description,
  path: "/hseq",
});

export default function HseqPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "HSEQ", href: "/hseq" },
  ] as const;

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([...breadcrumbs])} />
      <PageHero
        title={pageIntros.hseq.title}
        description={pageIntros.hseq.description}
        breadcrumbs={[...breadcrumbs]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <section>
          <SectionHeader eyebrow="Principles" title="HSEQ Principles" />
          <ul className="mt-8 space-y-4">
            {hseqPrinciples.map((principle) => (
              <li key={principle} className="flex gap-3 text-base text-text/80">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden />
                {principle}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-border pt-16">
          <SectionHeader
            eyebrow="Certifications"
            title="Regulatory & Quality Frameworks"
          />
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <Badge variant="cyan">{cert.name}</Badge>
                <p className="mt-3 text-sm leading-relaxed text-text/70">
                  {cert.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-border pt-16">
          <SectionHeader
            eyebrow="Local Content"
            title="Nigerian Content Commitments"
          />
          <ul className="mt-8 space-y-3">
            {localContentCommitments.map((commitment) => (
              <li
                key={commitment}
                className="rounded-lg border border-border bg-surface px-5 py-4 text-sm leading-relaxed text-text/80 md:text-base"
              >
                {commitment}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
