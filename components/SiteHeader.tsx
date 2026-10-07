"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy, site, type Locale } from "@/lib/portfolio";
import { ArrowUpRight } from "./Icons";
import { useLanguage } from "./LanguageProvider";

const navLink = "inline-flex min-h-11 items-center whitespace-nowrap px-1 text-[13px] font-semibold lowercase text-copy-secondary transition-colors duration-180 hover:text-foreground aria-[current=page]:text-foreground aria-[current=page]:shadow-[inset_0_-2px_var(--accent)] max-[760px]:text-xs max-[540px]:px-0";
const locales: Locale[] = ["pt", "en"];

export function SiteHeader() {
  const path = usePathname();
  const { locale, setLocale } = useLanguage();
  const t = copy[locale];
  const home = "/";

  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-[rgba(11,11,13,0.96)] backdrop-blur-[14px]">
      <div className="shell flex min-h-[calc(var(--site-header-height)-1px)] items-center justify-between gap-7 max-[760px]:gap-3">
        <nav className="flex shrink-0 items-center gap-6 max-[760px]:gap-4 max-[540px]:gap-3" aria-label={locale === "pt" ? "Navegação principal" : "Main navigation"}>
          <Link className={navLink} href={home} aria-current={path === home ? "page" : undefined}>{t.nav.home}</Link>
          <Link className={navLink} href="/projects" aria-current={path === "/projects" ? "page" : undefined}>{t.nav.projects}</Link>
        </nav>
        <div className="flex shrink-0 items-center gap-5 max-[760px]:gap-3">
          <a className="inline-flex min-h-11 items-center gap-[5px] whitespace-nowrap text-[13px] font-semibold text-copy-secondary hover:text-foreground max-[760px]:text-xs" href={site.resume} target="_blank" rel="noopener noreferrer">{t.nav.resume}<ArrowUpRight /></a>
          <div className="flex items-center gap-1 text-[13px] font-semibold max-[760px]:text-xs" role="group" aria-label={t.nav.language}>
            {locales.map((value, index) => (
              <span className="inline-flex items-center gap-1" key={value}>
                {index > 0 && <span className="text-copy-secondary" aria-hidden="true">/</span>}
                <button className="inline-flex min-h-11 min-w-6 cursor-pointer items-center justify-center px-1 text-copy-secondary underline-offset-[5px] transition-colors duration-180 hover:text-foreground hover:underline aria-pressed:text-foreground aria-pressed:underline" type="button" onClick={() => setLocale(value)} aria-label={value === "pt" ? "Português" : "English"} aria-pressed={locale === value}>
                  {value}
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
