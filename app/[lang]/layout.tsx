import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/PortfolioBlocks";
import { copy, isLocale, locales, site } from "@/lib/portfolio";
import "../globals.css";

const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang === "pt" ? "pt-BR" : "en"}>
      <body className={workSans.variable}>
        <a className="skip-link" href="#main-content">{copy[lang].skip}</a>
        <SiteHeader locale={lang} />
        {children}
        <SiteFooter locale={lang} />
      </body>
    </html>
  );
}
