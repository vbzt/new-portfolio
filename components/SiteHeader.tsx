"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy, site } from "@/lib/portfolio";
import { ArrowUpRight } from "./Icons";
import { useLanguage } from "./LanguageProvider";

const navLink = "min-h-11 px-1 py-3 text-[13px] font-semibold lowercase text-copy-secondary transition-colors duration-180 hover:text-foreground aria-[current=page]:text-foreground aria-[current=page]:shadow-[inset_0_-2px_var(--accent)] max-[760px]:whitespace-nowrap max-[760px]:text-xs max-[540px]:px-px max-[540px]:text-[11px]";

export function SiteHeader() {
  const path = usePathname();
  const { locale, toggleLocale } = useLanguage();
  const t = copy[locale];
  const otherLocale = locale === "pt" ? "en" : "pt";
  const home = "/";

  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-[rgba(11,11,13,0.96)] backdrop-blur-[14px]">
      <div className="shell flex min-h-[68px] items-center justify-between gap-7 max-[1000px]:gap-[18px] max-[760px]:grid max-[760px]:min-h-0 max-[760px]:grid-cols-[1fr_auto] max-[760px]:gap-[10px] max-[760px]:py-[10px] max-[540px]:grid-cols-1 max-[540px]:gap-0">
        <nav className="flex items-center gap-[clamp(8px,1.8vw,26px)] max-[1000px]:gap-3 max-[760px]:flex-wrap max-[760px]:gap-x-[10px] max-[760px]:gap-y-0 max-[540px]:justify-between max-[540px]:gap-x-[5px]" aria-label={locale === "pt" ? "Navegação principal" : "Main navigation"}>
          <Link className={navLink} href={home} aria-current={path === home ? "page" : undefined}>{t.nav.home}</Link>
          <Link className={navLink} href="/projects" aria-current={path === "/projects" ? "page" : undefined}>{t.nav.projects}</Link>
          <Link className={navLink} href={`${home}#capabilities`}>{t.nav.capabilities}</Link>
          <Link className={navLink} href={`${home}#about`}>{t.nav.about}</Link>
          <Link className={navLink} href={`${home}#contact`}>{t.nav.contact}</Link>
        </nav>
        <div className="flex items-center gap-[15px] max-[760px]:justify-self-end max-[540px]:gap-[18px]">
          <a className="inline-flex items-center gap-[5px] whitespace-nowrap text-[13px] font-semibold text-copy-secondary hover:text-foreground" href={site.resume} target="_blank" rel="noopener noreferrer">{t.nav.resume}<ArrowUpRight /></a>
          <button className="inline-flex min-h-11 min-w-[46px] cursor-pointer items-center justify-center rounded-[10px] border border-control bg-transparent text-xs font-bold tracking-[0.05em] text-foreground transition-[border-color,background] duration-180 hover:border-accent hover:bg-accent-soft" type="button" onClick={toggleLocale} aria-label={`${t.nav.language}: ${otherLocale === "pt" ? "Português" : "English"}`}>
            {otherLocale.toUpperCase()}
          </button>
        </div>
      </div>
    </header>
  );
}
