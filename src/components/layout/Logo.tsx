"use client";

import Image from "next/image";
import { useState } from "react";

import { siteConfig } from "@/lib/navigation";
import { cn } from "@/lib/utils";

/**
 * Drop your logo file into /public/logo/ and update LOGO_SRC to match
 * its filename (.svg, .png, or .jpeg all work).
 */
const LOGO_SRC = "/logo/STS_Mark_variant.svg";

type LogoProps = {
  className?: string;
  /** Rendered height in px; width scales automatically. */
  height?: number;
  /** Show the company name next to the logo image. */
  withText?: boolean;
};

export function Logo({ className, height = 36, withText = false }: LogoProps) {
  const [imageFailed, setImageFailed] = useState(false);

  // Fallback: original dot + wordmark until a logo file is added.
  if (imageFailed) {
    return (
      <span className={cn("inline-flex items-center gap-2", className)}>
        <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
        <span className="font-heading text-lg font-bold tracking-tight">
          {siteConfig.shortName}
        </span>
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Image
        src={LOGO_SRC}
        alt={siteConfig.name}
        width={height * 3}
        height={height}
        priority
        className="w-auto"
        style={{ height }}
        onError={() => setImageFailed(true)}
      />
      {withText ? (
        <span className="font-heading text-lg font-bold tracking-tight">
          {siteConfig.shortName}
        </span>
      ) : null}
    </span>
  );
}
