"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { serviceDetailCta } from "@/content/careers";
import type { Service } from "@/types/content";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { brandCtaClassName, cn } from "@/lib/utils";

type ServiceDetailSectionsProps = {
  service: Service;
};

const sectionHeaderBrand = {
  eyebrowClassName: "text-[#172168]",
  titleClassName: "text-[#172168]",
} as const;

export function ServiceDetailSections({ service }: ServiceDetailSectionsProps) {
  return (
    <div className="space-y-16 py-12 md:py-16">
      <section>
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Overview"
            title={`About ${service.title}`}
            {...sectionHeaderBrand}
          />
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-[#1B1F23]">
            {service.overview}
          </p>
        </RevealOnScroll>
      </section>

      <section>
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Benefits"
            title="Key Benefits"
            {...sectionHeaderBrand}
          />
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#F5BF23] [filter:drop-shadow(0_0_0.75px_#172168)]"
                  strokeWidth={2.5}
                  aria-hidden
                />
                <span className="text-sm leading-relaxed text-[#1B1F23] md:text-base">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </section>

      <section>
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Process"
            title="How We Deliver"
            {...sectionHeaderBrand}
          />
          <ol className="mt-6 space-y-4">
            {service.process.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#172168] font-heading text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-[#1B1F23] md:text-base">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </RevealOnScroll>
      </section>

      <section>
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Industries"
            title="Industries Served"
            {...sectionHeaderBrand}
          />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {service.industriesServed.map((industry) => (
              <li
                key={industry}
                className="rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm font-medium text-[#1B1F23]"
              >
                {industry}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </section>

      <RevealOnScroll>
        <section className="rounded-lg border border-[#D1D5DB] bg-white px-6 py-8 text-center md:px-10">
          <h2 className="heading-display font-heading text-2xl font-extrabold text-[#172168] md:text-3xl">
            Discuss your {service.title.toLowerCase()} requirements
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#1B1F23]">
            {serviceDetailCta.description}
          </p>
          <Button asChild className={cn("mt-6", brandCtaClassName)}>
            <Link href="/contact">
              {serviceDetailCta.linkLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </section>
      </RevealOnScroll>
    </div>
  );
}
