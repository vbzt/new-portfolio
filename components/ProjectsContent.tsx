"use client";

import { ProjectCard } from "@/components/PortfolioBlocks";
import { archiveProjects, copy, selectedProjects } from "@/lib/portfolio";
import { useLanguage } from "./LanguageProvider";

export function ProjectsContent() {
  const { locale: lang } = useLanguage();
  const t = copy[lang];
  return (
    <main id="main-content" className="shell page-main inner-page projects-page">
      <header className="page-intro">
        <h1>{t.projectsPage.title}</h1>
      </header>

      <nav className="projects-index" aria-label={t.projectsPage.indexLabel}>
        {selectedProjects.map((project, index) => (
          <a href={`#project-${project.slug}`} key={project.slug}><span>0{index + 1}</span>{project.name}</a>
        ))}
        <a href="#archive"><span>04</span>{t.contact.archive}</a>
      </nav>

      <section aria-labelledby="selected-heading" className="archive-section archive-section--selected">
        <h2 id="selected-heading" className="sr-only">{t.sections.projects.title}</h2>
        <div className="featured-projects">
          {selectedProjects.map((project) => <ProjectCard project={project} locale={lang} key={project.slug} />)}
        </div>
      </section>

      <section id="archive" aria-labelledby="archive-heading" className="archive-section archive-section--archive">
        <div className="archive-section__heading"><h2 id="archive-heading">{t.contact.archive}</h2></div>
        <div className="archive-grid">{archiveProjects.map((project) => <ProjectCard project={project} locale={lang} key={project.slug} />)}</div>
      </section>
    </main>
  );
}
