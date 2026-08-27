"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { homeSections } from "@/content/company";
import { services } from "@/content/services";
import {
  RevealOnScroll,
  RevealStagger,
  RevealStaggerItem,
} from "@/components/motion/RevealOnScroll";
import { CardDescription, CardTitle } from "@/components/ui/Card";
import { MotionCard } from "@/components/ui/MotionCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ServicesGrid() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Core Services"
            title="Integrated Subsea & Offshore Capabilities"
            description={homeSections.servicesIntro}
            eyebrowClassName="text-[#172168]"
            titleClassName="text-[#172168]"
            descriptionClassName="text-[#1B1F23]"
          />
        </RevealOnScroll>

        <RevealStagger
          as="ul"
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <RevealStaggerItem key={service.slug} as="li">
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BF23] focus-visible:ring-offset-2"
              >
                <MotionCard className="h-full rounded-lg border border-[#172168]/15 border-t-[3px] border-t-[#F5BF23] bg-white p-6 shadow-[0_8px_24px_rgba(23,33,104,0.08)]">
                  <CardTitle className="text-[#172168]">{service.title}</CardTitle>
                  <CardDescription className="flex-1 text-[#1B1F23]">
                    {service.shortDescription}
                  </CardDescription>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#F5BF23] underline-offset-4 group-hover:gap-2 group-hover:underline">
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </MotionCard>
              </Link>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
