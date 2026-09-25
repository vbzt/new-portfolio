"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy, site, type Locale } from "@/lib/portfolio";
import { ArrowUpRight } from "./Icons";

export function SiteHeader({ locale }: { locale: Locale }) {
  const path = usePathname();
  const t = copy[locale];
  const otherLocale = locale === "pt" ? "en" : "pt";
  const languagePath = path.replace(/^\/(pt|en)(?=\/|$)/, `/${otherLocale}`);
  const home = `/${locale}`;

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <Link className="brand" href={home} aria-label={`${site.name} — ${t.nav.home}`}>
          <span className="brand__mark" aria-hidden="true">VB</span>
          <span className="brand__name">Vitor Buzato</span>
        </Link>
        <nav className="site-nav" aria-label={locale === "pt" ? "Navegação principal" : "Main navigation"}>
          <Link href={`${home}/projects`} aria-current={path.endsWith("/projects") ? "page" : undefined}>{t.nav.projects}</Link>
          <Link href={`${home}#capabilities`}>{t.nav.capabilities}</Link>
          <Link href={`${home}#about`}>{t.nav.about}</Link>
          <Link href={`${home}#contact`}>{t.nav.contact}</Link>
        </nav>
        <div className="site-header__actions">
          <a className="resume-link" href={site.resume[locale]} target="_blank" rel="noopener noreferrer">{t.nav.resume}<ArrowUpRight /></a>
          <Link className="language-link" href={languagePath || `/${otherLocale}`} hrefLang={otherLocale === "pt" ? "pt-BR" : "en"} aria-label={`${t.nav.language}: ${otherLocale === "pt" ? "Português" : "English"}`}>
            {otherLocale.toUpperCase()}
          </Link>
        </div>
      </div>
    </header>
  );
}
