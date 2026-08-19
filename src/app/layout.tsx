import type { Metadata } from "next";
import { Inter, Manrope, Playfair_Display } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { Toaster } from "@/components/ui/sonner";
import { company } from "@/content/company";
import {
  absoluteUrl,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
} from "@/lib/seo";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

/* Serif display face — scoped exception to the Manrope/Inter rule, hero headline only. */
const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.website),
  title: {
    default: company.name,
    template: `%s | ${company.name}`,
  },
  description: company.overview,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: absoluteUrl("/"),
    siteName: company.name,
    title: company.name,
    description: company.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description: company.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} ${playfair.variable} flex min-h-screen flex-col`}
      >
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [buildOrganizationSchema(), buildLocalBusinessSchema()],
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-cyan-strong focus:px-4 focus:py-2 focus:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-strong"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
