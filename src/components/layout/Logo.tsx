"use client";

import Image from "next/image";
import { useState } from "react";

import { siteConfig } from "@/lib/navigation";
import { cn } from "@/lib/utils";

/**
 * Footer / default mark. Navbar passes a different `src` for the header variant.
 */
const DEFAULT_LOGO_SRC = "/logo/STS_Mark_variant.svg";

type LogoProps = {
  className?: string;
  /** Override the image file; footer keeps the default mark. */
  src?: string;
  /** Rendered height in px; width scales automatically. */
  height?: number;
  /** Show the company name next to the logo image. */
  withText?: boolean;
  /** Preload the image — only for the above-the-fold header logo. */
  priority?: boolean;
};

export function Logo({
  className,
  src = DEFAULT_LOGO_SRC,
  height = 36,
  withText = false,
  priority = false,
}: LogoProps) {
  const [imageFailed, setImageFailed] = useState(false);

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
        src={src}
        alt={siteConfig.name}
        width={Math.round(height * 1.67)}
        height={height}
        priority={priority}
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
