import type { Metadata } from "next";

import { pageIntros } from "@/content/careers";
import { leadership } from "@/content/leadership";
import { PageHero } from "@/components/layout/PageHero";
import { LeadershipHeadshot } from "@/components/sections/LeadershipHeadshot";
import { JsonLd } from "@/components/seo/JsonLd";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: pageIntros.leadership.title,
  description: pageIntros.leadership.description,
  path: "/leadership",
});

export default function LeadershipPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Leadership", href: "/leadership" },
  ] as const;

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([...breadcrumbs])} />
      <PageHero
        title={pageIntros.leadership.title}
        description={pageIntros.leadership.description}
        breadcrumbs={[...breadcrumbs]}
        brandAligned
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <ul className="grid gap-8 lg:grid-cols-2">
          {leadership.map((leader) => (
            <li key={leader.name}>
              <Card
                className="h-full border-[#172168]/15 shadow-[0_8px_24px_rgba(23,33,104,0.08)]"
                style={{ borderTop: "3px solid #F5BF23" }}
              >
                <div className="mb-6 flex justify-center">
                  <LeadershipHeadshot
                    src={leader.image}
                    alt={leader.name}
                    objectPosition={leader.imagePosition ?? "center"}
                    size={144}
                  />
                </div>
                <p className="mb-3 text-center text-sm font-semibold uppercase tracking-wider text-[#F5BF23]">
                  {leader.name}
                </p>
                <CardTitle className="text-center text-[#172168]">
                  {leader.title}
                </CardTitle>
                <CardDescription className="mt-4 text-pretty text-justify text-base leading-relaxed text-[#1B1F23] [text-justify:inter-word]">
                  {leader.bio}
                </CardDescription>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
