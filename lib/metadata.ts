import type { Metadata } from "next";
import { copy, site } from "./portfolio";

type PageKind = "home" | "projects";

export function pageMetadata(kind: PageKind): Metadata {
  const path = kind === "home" ? "" : `/${kind}`;
  const url = `${site.url}${path}`;
  const title = copy.pt.metadata[kind];
  const description = copy.pt.metadata[`${kind}Description`];

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
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
