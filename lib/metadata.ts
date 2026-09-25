import type { Metadata } from "next";
import { copy, site, type Locale } from "./portfolio";

type PageKind = "home" | "projects" | "about";

export function pageMetadata(locale: Locale, kind: PageKind): Metadata {
  const path = kind === "home" ? "" : `/${kind}`;
  const url = `${site.url}/${locale}${path}`;
  const title = copy[locale].metadata[kind];
  const description = copy[locale].metadata[`${kind}Description`];

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "pt-BR": `${site.url}/pt${path}`,
        en: `${site.url}/en${path}`,
        "x-default": `${site.url}/pt${path}`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      alternateLocale: locale === "pt" ? ["en_US"] : ["pt_BR"],
      url,
      siteName: "Vitor Buzato",
      title,
      description,
      images: [{ url: `${site.url}/opengraph-image`, width: 1200, height: 630, alt: "Vitor Buzato — Software Engineering" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${site.url}/opengraph-image`],
    },
  };
}
