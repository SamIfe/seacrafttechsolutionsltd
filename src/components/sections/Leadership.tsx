"use client";

import Link from "next/link";

import { homeSections } from "@/content/company";
import { leadership } from "@/content/leadership";
import {
  RevealOnScroll,
  RevealStagger,
  RevealStaggerItem,
} from "@/components/motion/RevealOnScroll";
import { LeadershipHeadshot } from "@/components/sections/LeadershipHeadshot";
import { CardDescription, CardTitle } from "@/components/ui/Card";
import { MotionCard } from "@/components/ui/MotionCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Leadership() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Leadership"
            title="Experienced Offshore & Marine Executives"
            description={homeSections.leadershipIntro}
          />
        </RevealOnScroll>

        <RevealStagger as="ul" className="mt-12 grid gap-8 md:grid-cols-2">
          {leadership.map((leader) => (
            <RevealStaggerItem key={leader.name} as="li">
              <MotionCard className="h-full rounded-lg border border-border bg-white p-6 shadow-sm">
                <div className="mb-4 flex justify-center">
                  <LeadershipHeadshot
                    src={leader.image}
                    alt={leader.name}
                    objectPosition={leader.imagePosition ?? "center"}
                    size={112}
                  />
                </div>
                <CardTitle className="text-center">{leader.name}</CardTitle>
                <p className="mt-1 text-center text-sm font-medium text-ocean-blue">
                  {leader.title}
                </p>
                <CardDescription className="mt-4 text-center">
                  {leader.roleSummary}
                </CardDescription>
              </MotionCard>
            </RevealStaggerItem>
          ))}
        </RevealStagger>

        <RevealOnScroll className="mt-10 text-center">
          <Link
            href="/leadership"
            className="text-sm font-semibold text-ocean-blue hover:text-ocean-blue/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2"
          >
            Meet the full leadership team →
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
