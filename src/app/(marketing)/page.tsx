import type { Metadata } from "next";

import { HomeMotionExtras } from "@/components/motion/HomeMotionExtras";
import { About } from "@/components/sections/About";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Hero } from "@/components/sections/Hero";
import { PartnerMarquee } from "@/components/sections/PartnerMarquee";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { JsonLd } from "@/components/seo/JsonLd";
import { company } from "@/content/company";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: company.tagline,
  description: company.overview,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([{ label: "Home", href: "/" }])}
      />
      <HomeMotionExtras />
      <Hero />
      <StatsStrip />
      <PartnerMarquee />
      <About />
      <WhyChooseUs />
      <ProcessTimeline />
      <CtaBanner />
    </>
  );
}
