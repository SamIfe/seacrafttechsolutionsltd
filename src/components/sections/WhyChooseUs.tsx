import Image from "next/image";
import { CheckCircle2, Handshake } from "lucide-react";

import { homeSections, valueProposition } from "@/content/company";
import {
  RevealOnScroll,
  RevealStagger,
  RevealStaggerItem,
} from "@/components/motion/RevealOnScroll";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function WhyChooseUs() {
  return (
    <section className="border-t border-border bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-stretch lg:gap-12">
          <RevealOnScroll
            delay={0.1}
            className="order-2 h-full min-h-0 w-full px-1 sm:px-2 lg:order-1 lg:px-0"
          >
            <div className="relative h-full min-h-0 w-full overflow-hidden rounded-2xl border-[3px] border-[#F5BF23] shadow-[0_12px_40px_rgba(23,33,104,0.12)] max-lg:aspect-[3/2]">
              <Image
                src={homeSections.whyChooseImage}
                alt={homeSections.whyChooseImageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[center_30%]"
              />
            </div>
          </RevealOnScroll>

          <div className="order-1 lg:order-2">
            <RevealOnScroll>
              <SectionHeader
                eyebrow="Why Choose Us"
                title="Delivering Measurable Value Offshore"
                description={homeSections.whyChooseIntro}
                eyebrowClassName="text-[#172168]"
                titleClassName="text-[#172168]"
              />
            </RevealOnScroll>

            <RevealStagger
              as="ul"
              stagger={0.07}
              className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-x-12"
            >
              {valueProposition.map((item) => (
                <RevealStaggerItem key={item} as="li">
                  <div className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#F5BF23] [filter:drop-shadow(0_0_0.75px_#172168)]"
                      strokeWidth={2.5}
                    />
                    <span className="text-sm leading-relaxed text-text/80 md:text-base">
                      {item}
                    </span>
                  </div>
                </RevealStaggerItem>
              ))}
            </RevealStagger>

            <RevealOnScroll className="mt-10">
              <p className="flex items-start gap-3 border-t border-border pt-6 text-sm text-text/70 md:text-base">
                <Handshake
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#F5BF23] [filter:drop-shadow(0_0_0.75px_#172168)]"
                  strokeWidth={2.5}
                  aria-hidden
                />
                {homeSections.partnershipCredit}
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
