import type { Metadata } from "next";
import Image from "next/image";

import { pageIntros } from "@/content/careers";
import { leadership } from "@/content/leadership";
import { PageHero } from "@/components/layout/PageHero";
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
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <ul className="grid gap-8 lg:grid-cols-2">
          {leadership.map((leader) => (
            <li key={leader.name}>
              <Card className="h-full">
                <div className="mb-6 flex justify-center">
                  <div className="relative h-36 w-36 overflow-hidden rounded-full border border-border bg-ocean-blue/10">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="144px"
                      className="object-cover"
                      style={{ objectPosition: leader.imagePosition ?? "center" }}
                    />
                  </div>
                </div>
                <CardTitle className="text-center">{leader.name}</CardTitle>
                <p className="mt-1 text-center text-sm font-medium text-ocean-blue">
                  {leader.title}
                </p>
                <CardDescription className="mt-4 text-base leading-relaxed">
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
