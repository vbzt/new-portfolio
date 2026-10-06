"use client";

import { copy } from "@/lib/portfolio";
import { useLanguage } from "./LanguageProvider";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./PortfolioBlocks";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();
  return (
    <>
      <a className="skip-link" href="#main-content">{copy[locale].skip}</a>
      <SiteHeader />
      {children}
      <SiteFooter locale={locale} />
    </>
  );
}
