"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { serviceDetailCta } from "@/content/careers";
import type { Service } from "@/types/content";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SectionHeader } from "@/components/ui/SectionHeader";

type ServiceDetailSectionsProps = {
  service: Service;
};

export function ServiceDetailSections({ service }: ServiceDetailSectionsProps) {
  return (
    <div className="space-y-16 py-12 md:py-16">
      <section>
        <RevealOnScroll>
          <SectionHeader eyebrow="Overview" title={`About ${service.title}`} />
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-text/80">
            {service.overview}
          </p>
        </RevealOnScroll>
      </section>

      <section>
        <RevealOnScroll>
          <SectionHeader eyebrow="Benefits" title="Key Benefits" />
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-lg border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-text/80"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </section>

      <section>
        <RevealOnScroll>
          <SectionHeader eyebrow="Process" title="How We Deliver" />
          <ol className="mt-6 space-y-4">
            {service.process.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ocean-blue font-heading text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-text/80 md:text-base">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </RevealOnScroll>
      </section>

      <section>
        <RevealOnScroll>
          <SectionHeader eyebrow="Industries" title="Industries Served" />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {service.industriesServed.map((industry) => (
              <li
                key={industry}
                className="rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-navy"
              >
                {industry}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </section>

      <RevealOnScroll>
        <section className="rounded-lg bg-surface px-6 py-8 text-center md:px-10">
          <h2 className="font-heading text-xl font-bold text-navy">
            Discuss your {service.title.toLowerCase()} requirements
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-text/70">
            {serviceDetailCta.description}
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ocean-blue hover:gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2"
          >
            {serviceDetailCta.linkLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </RevealOnScroll>
    </div>
  );
}
