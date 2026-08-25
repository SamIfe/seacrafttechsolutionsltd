import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getServiceBySlug, services } from "@/content/services";
import { isSectionLive } from "@/lib/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { ServiceDetailSections } from "@/components/sections/ServiceDetailSections";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbSchema,
  buildServiceSchema,
  createPageMetadata,
} from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  if (!isSectionLive("/services")) {
    return [];
  }

  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!isSectionLive("/services") || !service) {
    return { title: "Service Not Found", robots: { index: false, follow: false } };
  }

  return createPageMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!isSectionLive("/services") || !service) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.title, href: `/services/${service.slug}` },
  ] as const;

  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema({
            name: service.title,
            description: service.shortDescription,
            path: `/services/${service.slug}`,
          }),
          buildBreadcrumbSchema([...breadcrumbs]),
        ]}
      />
      <PageHero
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={[...breadcrumbs]}
        brandAligned
      />
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ServiceDetailSections service={service} />
      </div>
    </>
  );
}
