"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy, site } from "@/lib/portfolio";
import { ArrowUpRight } from "./Icons";
import { useLanguage } from "./LanguageProvider";

export function SiteHeader() {
  const path = usePathname();
  const { locale, toggleLocale } = useLanguage();
  const t = copy[locale];
  const otherLocale = locale === "pt" ? "en" : "pt";
  const home = "/";

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <nav className="site-nav" aria-label={locale === "pt" ? "Navegação principal" : "Main navigation"}>
          <Link href={home} aria-current={path === home ? "page" : undefined}>{t.nav.home}</Link>
          <Link href="/projects" aria-current={path === "/projects" ? "page" : undefined}>{t.nav.projects}</Link>
          <Link href={`${home}#capabilities`}>{t.nav.capabilities}</Link>
          <Link href={`${home}#about`}>{t.nav.about}</Link>
          <Link href={`${home}#contact`}>{t.nav.contact}</Link>
        </nav>
        <div className="site-header__actions">
          <a className="resume-link" href={site.resume} target="_blank" rel="noopener noreferrer">{t.nav.resume}<ArrowUpRight /></a>
          <button className="language-link" type="button" onClick={toggleLocale} aria-label={`${t.nav.language}: ${otherLocale === "pt" ? "Português" : "English"}`}>
            {otherLocale.toUpperCase()}
          </button>
        </div>
      </div>
    </header>
  );
}
