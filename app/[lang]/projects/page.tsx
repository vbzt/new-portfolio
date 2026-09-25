import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/PortfolioBlocks";
import { pageMetadata } from "@/lib/metadata";
import { archiveProjects, copy, isLocale, selectedProjects } from "@/lib/portfolio";

export async function generateMetadata({ params }: PageProps<"/[lang]/projects">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return pageMetadata(lang, "projects");
}

export default async function Projects({ params }: PageProps<"/[lang]/projects">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = copy[lang];
  return (
    <main id="main-content" className="shell page-main inner-page">
      <header className="page-intro"><p className="eyebrow"><span className="eyebrow__dash" />{t.projectsPage.eyebrow}</p><h1>{t.projectsPage.title}</h1><p>{t.projectsPage.lead}</p></header>
      <section aria-labelledby="selected-heading" className="archive-section"><div className="archive-section__heading"><span>01 / {t.contact.selected}</span><h2 id="selected-heading">{t.sections.projects.title}</h2></div><div className="selected-grid">{selectedProjects.map((project, index) => <ProjectCard project={project} locale={lang} featured={index === 0} key={project.slug} />)}</div></section>
      <section aria-labelledby="archive-heading" className="archive-section"><div className="archive-section__heading"><span>02 / {t.contact.archive}</span><h2 id="archive-heading">{t.contact.more}</h2><p>{t.projectsPage.archiveIntro}</p></div><div className="archive-grid">{archiveProjects.map((project) => <ProjectCard project={project} locale={lang} key={project.slug} />)}</div></section>
    </main>
  );
}
