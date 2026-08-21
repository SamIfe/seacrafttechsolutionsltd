import Link from "next/link";

import { company } from "@/content/company";
import type { LegalSection } from "@/content/legal";
import { Button } from "@/components/ui/button";
import { brandCtaClassName } from "@/lib/utils";

type LegalDocumentProps = {
  title: string;
  description: string;
  lastUpdated: string;
  intro: string;
  sections: readonly LegalSection[];
};

export function LegalDocument({
  title,
  description,
  lastUpdated,
  intro,
  sections,
}: LegalDocumentProps) {
  return (
    <article className="mx-auto max-w-3xl">
      <header className="border-b border-border pb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-ocean-blue">
          Legal
        </p>
        <h1 className="mt-2 font-heading text-3xl font-bold text-navy md:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-text/70">
          {description}
        </p>
        <p className="mt-4 text-xs text-text/50">Last updated: {lastUpdated}</p>
      </header>

      <div className="prose-seacraft mt-8 space-y-10">
        <p className="text-sm leading-relaxed text-text/80 md:text-base">{intro}</p>

        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-heading text-xl font-semibold text-navy">
              {section.title}
            </h2>
            <div className="mt-3 space-y-3">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-sm leading-relaxed text-text/70 md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {section.list ? (
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {section.list.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-text/70 md:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      <footer className="mt-12 border-t border-border pt-8">
        <p className="text-sm text-text/60">
          {company.name} · RC {company.rcNumber}
        </p>
        <p className="mt-2 text-sm text-text/60">{company.address}</p>
        <p className="mt-4">
          <Button asChild className={brandCtaClassName}>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </p>
      </footer>
    </article>
  );
}
