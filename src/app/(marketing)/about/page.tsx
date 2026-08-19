import type { Metadata } from "next";

import {
  company,
  coreValues,
  valueProposition,
} from "@/content/company";
import { pageIntros } from "@/content/careers";
import { GlassCard } from "@/components/ui/GlassCard";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Testimonials } from "@/components/sections/Testimonials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircle2 } from "lucide-react";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: pageIntros.about.title,
  description: pageIntros.about.description,
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ] as const;

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([...breadcrumbs])} />
      <PageHero
        title={pageIntros.about.title}
        description={pageIntros.about.description}
        breadcrumbs={[...breadcrumbs]}
      />

      <StatsStrip />

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <section className="py-12 md:py-16">
          <SectionHeader
            eyebrow="Company Overview"
            title="Who We Are"
            description={company.overview}
          />
        </section>

        <section className="pb-12 md:pb-16">
          <div className="rounded-xl bg-gradient-to-br from-navy via-ocean-blue to-navy p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <GlassCard title="Overview">{company.overview}</GlassCard>
              <GlassCard title="Vision">{company.vision}</GlassCard>
              <GlassCard title="Mission">{company.mission}</GlassCard>
            </div>
          </div>
        </section>

        <section className="border-t border-border py-12 md:py-16">
          <SectionHeader eyebrow="Core Values" title="What Guides Us" />
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <li
                key={value.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="font-heading text-lg font-semibold text-navy">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text/70">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-border py-12 md:py-16">
          <SectionHeader eyebrow="Value Proposition" title="Why SeaCraft" />
          <ul className="mt-8 space-y-4">
            {valueProposition.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" aria-hidden />
                <span className="text-sm leading-relaxed text-text/80 md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-border py-12 md:py-16">
          <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-ocean-blue">
              Strategic Partnership
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-navy">
              {company.partnership.partner}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text/70">
              {company.partnership.description}
            </p>
            <p className="mt-6 border-t border-border pt-4 text-xs text-text/50">
              {company.partnership.displayNote}
            </p>
          </div>
        </section>
      </div>

      <Testimonials />
    </>
  );
}
