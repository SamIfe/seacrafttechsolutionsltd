import type { Metadata } from "next";
import Image from "next/image";

import { coreValues } from "@/content/company";
import { pageIntros } from "@/content/careers";
import { About } from "@/components/sections/About";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

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

      <About variant="full" />

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <section className="border-t border-border py-12 md:py-16">
          <SectionHeader
            eyebrow="Core Values"
            title="What Guides Us"
            eyebrowClassName="text-[#F5BF23]"
            titleClassName="text-[#172168]"
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_minmax(280px,0.85fr)] lg:grid-rows-3 lg:items-stretch">
            <ul className="contents">
              {coreValues.map((value, index) => (
                <li
                  key={value.title}
                  className={cn(
                    "rounded-lg border border-[#172168]/15 bg-white p-6 shadow-[0_8px_24px_rgba(23,33,104,0.08)]",
                    index === 2 &&
                      "sm:col-span-2 sm:w-[calc((100%-1.5rem)/2)] sm:justify-self-center",
                  )}
                  style={{ borderTop: "3px solid #F5BF23" }}
                >
                  <h3 className="font-heading text-lg font-semibold text-[#172168]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#1B1F23]">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
            <div className="relative sm:col-span-2 max-lg:aspect-[16/10] lg:col-span-1 lg:col-start-3 lg:row-span-3 lg:row-start-1 lg:min-h-0">
              <div className="absolute inset-0 overflow-hidden rounded-lg border-[3px] border-[#F5BF23]">
                <Image
                  src="/images/about/core-values.jpeg"
                  alt="ROV inspecting a subsea pipeline"
                  fill
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="object-cover object-[62%_40%]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
