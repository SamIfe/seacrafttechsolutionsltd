import type { MetadataRoute } from "next";

import { allRoutes, isSectionLive } from "@/lib/navigation";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const blockedRoutes = allRoutes.filter(
    (path) =>
      !isSectionLive(path) && path !== "/privacy" && path !== "/terms",
  );

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", ...blockedRoutes],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
