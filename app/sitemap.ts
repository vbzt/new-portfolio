import type { MetadataRoute } from "next";
import { locales, site } from "@/lib/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects", "/about"].flatMap((path) =>
    locales.map((locale) => ({
      url: `${site.url}/${locale}${path}`,
      alternates: { languages: { "pt-BR": `${site.url}/pt${path}`, en: `${site.url}/en${path}` } },
    })),
  );
}
