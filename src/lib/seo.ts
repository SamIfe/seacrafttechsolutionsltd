import type { Metadata } from "next";

import { company } from "@/content/company";

export const siteUrl = company.website.replace(/\/$/, "");

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
};

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  ogType = "website",
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: ogType,
      locale: "en_NG",
      url,
      siteName: company.name,
      title: `${title} | ${company.name}`,
      description,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${title} | ${company.name}`,
      description,
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: siteUrl,
    email: company.email,
    telephone: company.phones,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: "Victoria Island, Lagos",
      addressCountry: "NG",
    },
    foundingDate: String(company.yearIncorporated),
    identifier: company.rcNumber,
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    url: siteUrl,
    email: company.email,
    telephone: company.phones,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: "Victoria Island, Lagos",
      addressCountry: "NG",
    },
    description: company.overview,
  };
}

export function buildServiceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: {
      "@type": "Organization",
      name: company.name,
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
}
