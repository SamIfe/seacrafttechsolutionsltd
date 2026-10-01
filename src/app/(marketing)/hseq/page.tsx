import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { pageIntros } from "@/content/careers";
import {
  certifications,
  hseqPrinciples,
  hseqPrinciplesImage,
  localContentCommitments,
} from "@/content/hseq";
import { PageHero } from "@/components/layout/PageHero";
import { CertificationLogo } from "@/components/sections/CertificationLogo";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

const sectionHeaderBrand = {
  eyebrowClassName: "text-[#172168]",
  titleClassName: "text-[#172168]",
  descriptionClassName: "text-[#1B1F23]",
} as const;

const cardAccentStyle = {
  borderTop: "3px solid #F5BF23",
} as const;

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
        brandAligned
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <section>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12">
            <div className="order-1">
              <SectionHeader
                eyebrow="Principles"
                title="HSEQ Principles"
                {...sectionHeaderBrand}
              />
              <ul className="mt-8 space-y-4">
                {hseqPrinciples.map((principle) => (
                  <li key={principle} className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#F5BF23] [filter:drop-shadow(0_0_0.75px_#172168)]"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                    <span className="text-base leading-relaxed text-[#1B1F23]">
                      {principle}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative order-2 h-full min-h-0 w-full overflow-hidden rounded-2xl border-[3px] border-[#F5BF23] shadow-[0_12px_40px_rgba(23,33,104,0.12)] max-lg:aspect-[3/2]">
              <Image
                src={hseqPrinciplesImage.src}
                alt={hseqPrinciplesImage.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-[center_40%]"
              />
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-border pt-16">
          <SectionHeader
            eyebrow="Certifications"
            title="Regulatory & Quality Frameworks"
            {...sectionHeaderBrand}
          />
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="rounded-lg border border-[#172168]/15 bg-white p-6 shadow-[0_8px_24px_rgba(23,33,104,0.08)]"
                style={cardAccentStyle}
              >
                {cert.logo ? (
                  <CertificationLogo
                    src={cert.logo}
                    alt={`${cert.name} certification badge`}
                  />
                ) : (
                  <div
                    className="mx-auto flex h-24 w-full max-w-[17.5rem] items-center justify-center font-heading text-3xl font-extrabold tracking-wide text-[#172168]"
                    aria-hidden
                  >
                    {cert.name}
                  </div>
                )}
                <h3 className="mt-4 text-center font-heading text-base font-bold text-[#172168]">
                  {cert.name}
                </h3>
                <p className="mt-2 text-center text-sm leading-relaxed text-[#1B1F23]">
                  {cert.description}
                </p>
                {cert.footnote ? (
                  <p className="mt-3 text-center text-xs leading-snug text-[#1B1F23]/50">
                    {cert.footnote}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-border pt-16">
          <SectionHeader
            eyebrow="Local Content"
            title="Nigerian Content Commitments"
            {...sectionHeaderBrand}
          />
          <ul className="mt-8 space-y-3">
            {localContentCommitments.map((commitment) => (
              <li
                key={commitment}
                className="rounded-lg border border-[#172168]/15 bg-white px-5 py-4 text-sm leading-relaxed text-[#1B1F23] shadow-[0_8px_24px_rgba(23,33,104,0.08)] md:text-base"
                style={cardAccentStyle}
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
