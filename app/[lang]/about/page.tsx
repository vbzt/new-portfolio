import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { copy, isLocale, site } from "@/lib/portfolio";
import { pageMetadata } from "@/lib/metadata";
import { ArrowUpRight } from "@/components/Icons";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return pageMetadata(lang, "about");
}

export default async function About({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = copy[lang];

  return (
    <main id="main-content" className="shell page-main inner-page">
      <header className="page-intro"><p className="eyebrow"><span className="eyebrow__dash" />{t.aboutPage.eyebrow}</p><h1>{t.aboutPage.title}</h1><p>{t.aboutPage.lead}</p></header>
      <div className="about-layout">
        <aside className="about-sidebar"><span>{lang === "pt" ? "PERCURSO / VITOR" : "PATH / VITOR"}</span><p>{lang === "pt" ? "Construir também é uma forma de aprender." : "Building is a way to learn, too."}</p><Link className="text-link" href={`/${lang}/projects`}>{t.sections.projects.title}<ArrowUpRight /></Link></aside>
        <div className="about-chapters">
          {t.aboutPage.chapters.map((item, index) => <section className="about-chapter" key={item.label}><span className="about-chapter__index">0{index + 1} / {item.label}</span><h2>{item.title}</h2><p>{item.text}</p></section>)}
          <section className="about-chapter about-chapter--closing"><span className="about-chapter__index">06 / {t.nav.contact}</span><h2>{t.aboutPage.close}</h2><a className="button button--primary" href={`mailto:${site.email}`}>{t.hero.contact} <ArrowUpRight /></a></section>
        </div>
      </div>
    </main>
  );
}
