import { company } from "@/content/company";
import { services } from "@/content/services";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const siteConfig = {
  name: company.name,
  shortName: company.shortName,
  tagline: company.tagline,
} as const;

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
      description: service.shortDescription,
    })),
  },
  { label: "Equipment", href: "/equipment" },
  { label: "Leadership", href: "/leadership" },
  { label: "HSEQ", href: "/hseq" },
  { label: "Careers", href: "/careers" },
];

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Leadership", href: "/leadership" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "All Services", href: "/services" },
    { label: "Equipment", href: "/equipment" },
    { label: "HSEQ", href: "/hseq" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;

/** Public marketing sections currently live in the nav. Others remain built but disabled. */
export const liveSectionHrefs = [
  "/",
  "/about",
  "/equipment",
  "/leadership",
  "/hseq",
  "/careers",
  "/contact",
] as const;

export function isSectionLive(href: string): boolean {
  const live = liveSectionHrefs as readonly string[];
  if (live.includes(href)) {
    return true;
  }

  return live.some((path) => path !== "/" && href.startsWith(`${path}/`));
}

export const allRoutes = [
  "/",
  "/about",
  "/services",
  ...services.map((s) => `/services/${s.slug}`),
  "/equipment",
  "/leadership",
  "/hseq",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
] as const;
