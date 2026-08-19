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
                className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              >
                <MotionCard className="h-full rounded-lg border border-border bg-white p-6 shadow-sm">
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="flex-1">
                    {service.shortDescription}
                  </CardDescription>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ocean-blue group-hover:gap-2">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </MotionCard>
              </Link>
            </RevealStaggerItem>
          ))}
        </RevealStagger>

        <RevealOnScroll className="mt-10 text-center">
          <Link
            href="/services"
            className="text-sm font-semibold text-ocean-blue hover:text-ocean-blue/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2"
          >
            View all services →
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
