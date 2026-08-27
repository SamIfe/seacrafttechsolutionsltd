"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { homeCta } from "@/content/company";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Button } from "@/components/ui/button";
import { isSectionLive } from "@/lib/navigation";
import { brandCtaClassName } from "@/lib/utils";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#172168] to-[#171B3B] py-20 text-white md:py-24">
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#13A1A0] via-[#F5BF23] to-[#13A1A0]" />
      <div className="relative mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
        <RevealOnScroll>
          <h2 className="heading-display font-heading text-4xl font-extrabold leading-[1.12] md:text-5xl">
            {homeCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            {homeCta.description}
          </p>
        </RevealOnScroll>
        <div className="mt-8 flex justify-center">
          {isSectionLive("/contact") ? (
            <MagneticButton>
              <Button asChild className={brandCtaClassName}>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </MagneticButton>
          ) : (
            <Button
              type="button"
              disabled
              className={`${brandCtaClassName} cursor-not-allowed`}
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
