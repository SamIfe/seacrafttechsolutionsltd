import type { MetadataRoute } from "next";

import { allRoutes, isSectionLive } from "@/lib/navigation";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const publicRoutes = allRoutes.filter(
    (path) =>
      isSectionLive(path) || path === "/privacy" || path === "/terms",
  );

  return publicRoutes.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
