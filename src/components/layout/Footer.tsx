"use client";

import Link from "next/link";

import { company } from "@/content/company";
import { certifications } from "@/content/hseq";
import { Logo } from "@/components/layout/Logo";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { footerNav, isSectionLive, siteConfig } from "@/lib/navigation";

const footerHeadingClassName =
  "font-heading text-base font-bold uppercase tracking-[0.08em] text-[#F5BF23]";

function FooterLink({ href, label }: { href: string; label: string }) {
  if (!isSectionLive(href) && href !== "/privacy" && href !== "/terms") {
    return (
      <span
        className="cursor-not-allowed text-sm text-white/30"
        aria-disabled="true"
      >
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className="group relative inline-block text-sm text-white/70 hover:text-[#F5BF23] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BF23]"
    >
      {label}
      <span
        aria-hidden
        className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[#F5BF23] transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100"
      />
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#172168] text-white">
      <div className="h-1 bg-gradient-to-r from-[#13A1A0] via-[#F5BF23] to-[#13A1A0]" />

      <RevealOnScroll>
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <Link
                href="/"
                className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BF23]"
              >
                <Logo height={40} />
              </Link>
              <p className="mt-3 text-sm text-white/60">{siteConfig.tagline}</p>
            </div>

            <div>
              <h2 className={footerHeadingClassName}>
                Company
              </h2>
              <ul className="mt-4 space-y-2">
                {footerNav.company.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={footerHeadingClassName}>
                Services
              </h2>
              <ul className="mt-4 space-y-2">
                {footerNav.services.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={footerHeadingClassName}>
                Legal
              </h2>
              <ul className="mt-4 space-y-2">
                {footerNav.legal.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="rounded-full border border-[#F5BF23]/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white"
              >
                {cert.name}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
            <p>
              © {year} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-xs">RC {company.rcNumber}</p>
          </div>
        </div>
      </RevealOnScroll>
    </footer>
  );
}
