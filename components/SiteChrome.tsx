"use client";

import { copy } from "@/lib/portfolio";
import { useLanguage } from "./LanguageProvider";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./PortfolioBlocks";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();
  return (
    <>
      <a className="fixed top-3 left-3 z-100 -translate-y-[150%] rounded-[10px] bg-accent px-[18px] py-3 font-bold text-background focus:translate-y-0" href="#main-content">{copy[locale].skip}</a>
      <SiteHeader />
      {children}
      <SiteFooter locale={locale} />
    </>
  );
}
