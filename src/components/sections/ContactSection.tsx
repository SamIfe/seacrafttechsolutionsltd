"use client";

import { Mail, MapPin, Phone } from "lucide-react";

import { company, homeSections } from "@/content/company";
import { ContactForm } from "@/components/forms/ContactForm";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SectionHeader } from "@/components/ui/SectionHeader";

type ContactSectionProps = {
  showHeader?: boolean;
};

const labelClassName =
  "font-heading text-sm font-extrabold uppercase tracking-[0.12em] text-[#172168]";

const bodyClassName = "mt-1 text-sm leading-relaxed text-[#1B1F23]";

const linkClassName =
  "text-sm text-[#1B1F23] hover:text-[#F5BF23] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BF23] focus-visible:ring-offset-2";

export function ContactSection({ showHeader = true }: ContactSectionProps) {
  const mapQuery = encodeURIComponent(company.address);
  const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {showHeader ? (
          <RevealOnScroll>
            <SectionHeader
              eyebrow="Contact"
              title="Get in Touch"
              description={homeSections.contactIntro}
              eyebrowClassName="text-[#172168]"
              titleClassName="text-[#172168]"
              descriptionClassName="text-[#1B1F23]"
            />
          </RevealOnScroll>
        ) : null}

        <RevealOnScroll
          className={
            showHeader
              ? "mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16"
              : "grid gap-10 lg:grid-cols-2 lg:gap-16"
          }
        >
          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin
                className="mt-1 h-5 w-5 shrink-0 text-[#F5BF23] [filter:drop-shadow(0_0_0.75px_#172168)]"
                strokeWidth={2.5}
                aria-hidden
              />
              <div>
                <p className={labelClassName}>Address</p>
                <p className={bodyClassName}>{company.address}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone
                className="mt-1 h-5 w-5 shrink-0 text-[#F5BF23] [filter:drop-shadow(0_0_0.75px_#172168)]"
                strokeWidth={2.5}
                aria-hidden
              />
              <div>
                <p className={labelClassName}>Phone</p>
                <ul className="mt-1 space-y-1">
                  {company.phones.map((phone) => (
                    <li key={phone}>
                      <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className={linkClassName}
                      >
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail
                className="mt-1 h-5 w-5 shrink-0 text-[#F5BF23] [filter:drop-shadow(0_0_0.75px_#172168)]"
                strokeWidth={2.5}
                aria-hidden
              />
              <div>
                <p className={labelClassName}>Email</p>
                <a href={`mailto:${company.email}`} className={`mt-1 block ${linkClassName}`}>
                  {company.email}
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-[#D1D5DB]">
              <iframe
                title="SeaCraft office location"
                src={mapSrc}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <ContactForm />
        </RevealOnScroll>
      </div>
    </section>
  );
}
