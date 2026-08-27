import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { company } from "@/content/company";
import { careers } from "@/content/careers";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";
import { isSectionLive } from "@/lib/navigation";
import { brandCtaClassName, cn } from "@/lib/utils";

const CENTERED_FOCUS_AREA = "Marine and offshore operational support";

const upperFocusAreas = careers.focusAreas.filter(
  (area) => area !== CENTERED_FOCUS_AREA,
).slice(0, 2);
const lowerFocusAreas = careers.focusAreas.filter(
  (area) => area !== CENTERED_FOCUS_AREA,
).slice(2);

const sectionHeaderBrand = {
  eyebrowClassName: "text-[#172168]",
  titleClassName: "text-[#172168]",
  descriptionClassName: "text-[#1B1F23]",
} as const;

const focusCardClassName =
  "rounded-lg border border-[#172168]/15 bg-white px-5 py-4 text-sm font-medium text-[#1B1F23] shadow-[0_8px_24px_rgba(23,33,104,0.08)]";

export function generateMetadata(): Metadata {
  if (!isSectionLive("/careers")) {
    return {
      title: "Page Not Found",
      robots: { index: false, follow: true },
    };
  }

  return createPageMetadata({
    title: careers.title,
    description: careers.intro,
    path: "/careers",
  });
}

function FocusCard({
  area,
  className,
}: {
  area: string;
  className?: string;
}) {
  return (
    <li
      className={cn(focusCardClassName, className)}
      style={{ borderTop: "3px solid #F5BF23" }}
    >
      {area}
    </li>
  );
}

export default function CareersPage() {
  if (!isSectionLive("/careers")) {
    notFound();
  }

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
        brandAligned
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <section>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-stretch lg:gap-12">
            <div className="order-1">
              <SectionHeader
                eyebrow="Opportunities"
                title="Build Your Offshore Career"
                description={careers.note}
                {...sectionHeaderBrand}
              />

              <div className="mt-8 space-y-4">
                <ul className="grid gap-4 sm:grid-cols-2">
                  {upperFocusAreas.map((area) => (
                    <FocusCard key={area} area={area} />
                  ))}
                </ul>
                <ul className="flex justify-center">
                  <FocusCard
                    area={CENTERED_FOCUS_AREA}
                    className="w-full sm:w-[calc((100%-1rem)/2)]"
                  />
                </ul>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {lowerFocusAreas.map((area) => (
                    <FocusCard key={area} area={area} />
                  ))}
                </ul>
              </div>
            </div>

            <div className="order-2 h-full min-h-0 w-full">
              <div className="relative h-full min-h-0 w-full overflow-hidden rounded-2xl border-[3px] border-[#F5BF23] shadow-[0_12px_40px_rgba(23,33,104,0.12)] max-lg:aspect-[3/2]">
                <Image
                  src={careers.image}
                  alt={careers.imageAlt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 45vw"
                  className="object-cover object-[center_38%]"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 rounded-lg border border-[#172168]/15 bg-white px-6 py-8 text-center shadow-[0_8px_24px_rgba(23,33,104,0.08)] md:px-10">
          <h2 className="heading-display font-heading text-2xl font-extrabold text-[#172168] md:text-3xl">
            {careers.applyLabel}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#1B1F23]">
            {careers.applyDescription}
          </p>
          <Button
            asChild
            className={cn("mt-6", brandCtaClassName)}
          >
            <Link href={`mailto:${company.email}`}>{company.email}</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
