import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

import { company } from "@/content/company";
import { notFoundPage } from "@/content/legal";
import { Button } from "@/components/ui/button";
import { brandCtaClassName } from "@/lib/utils";

export const metadata: Metadata = {
  title: notFoundPage.title,
  description: notFoundPage.description,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col">
      <section className="border-b border-border bg-gradient-to-br from-navy via-ocean-blue to-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:px-6 md:py-20 lg:px-8">
          <div className="mx-auto flex max-w-xl flex-col items-center">
            <span
              className="mb-6 h-2 w-2 rounded-full bg-gold"
              aria-hidden="true"
            />
            <p className="font-heading text-6xl font-bold tracking-tight text-cyan md:text-7xl">
              {notFoundPage.code}
            </p>
            <h1 className="mt-4 font-heading text-2xl font-bold md:text-3xl">
              {notFoundPage.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              {notFoundPage.description}
            </p>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-teal via-coral to-gold" />
      </section>

      <section className="flex flex-1 items-center bg-surface py-12 md:py-16">
        <div className="mx-auto w-full max-w-xl px-4 text-center md:px-6">
          <p className="text-sm text-text/60">
            {company.shortName} — {company.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              className="bg-cyan-strong text-white hover:bg-cyan-strong/90"
            >
              <Link href={notFoundPage.primaryAction.href}>
                <Home className="h-4 w-4" aria-hidden />
                {notFoundPage.primaryAction.label}
              </Link>
            </Button>
            <Button asChild className={brandCtaClassName}>
              <Link href={notFoundPage.secondaryAction.href}>
                {notFoundPage.secondaryAction.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>

          <nav
            aria-label="Helpful links"
            className="mt-10 border-t border-border pt-8"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-ocean-blue">
              You may be looking for
            </p>
            <ul className="mt-4 flex flex-wrap justify-center gap-4">
              {notFoundPage.helpfulLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-ocean-blue hover:text-ocean-blue/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
}
