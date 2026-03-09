import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["", "/platform", "/architecture", "/docs", "/docs/new-here", "/docs/getting-started", "/docs/concepts", "/pricing", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/docs") ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
