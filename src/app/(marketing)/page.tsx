import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { Hero } from "@/components/sections/Hero";
import { HomeMotionExtras } from "@/components/motion/HomeMotionExtras";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { company } from "@/content/company";
import { certifications } from "@/content/hseq";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

const About = dynamic(() =>
  import("@/components/sections/About").then((mod) => mod.About),
);
const WhyChooseUs = dynamic(() =>
  import("@/components/sections/WhyChooseUs").then((mod) => mod.WhyChooseUs),
);
const Marquee = dynamic(() =>
  import("@/components/motion/Marquee").then((mod) => mod.Marquee),
);
const ProcessTimeline = dynamic(() =>
  import("@/components/sections/ProcessTimeline").then(
    (mod) => mod.ProcessTimeline,
  ),
);
const CtaBanner = dynamic(() =>
  import("@/components/sections/CtaBanner").then((mod) => mod.CtaBanner),
);

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
      <About />
      <WhyChooseUs />
      <Marquee items={certifications.map((cert) => cert.name)} />
      <ProcessTimeline />
      <CtaBanner />
    </>
  );
}
