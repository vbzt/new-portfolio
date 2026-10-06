import type { MetadataRoute } from "next";
import { site } from "@/lib/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects"].map((path) => ({ url: `${site.url}${path}` }));
}
