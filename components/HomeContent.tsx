"use client";

import { ContactPanel, HomeProjectRow, SectionHeading, TechBadge } from "@/components/PortfolioBlocks";
import { ArrowUpRight } from "@/components/Icons";
import { copy, selectedProjects, site } from "@/lib/portfolio";
import { useLanguage } from "./LanguageProvider";

export function HomeContent() {
  const { locale: lang } = useLanguage();
  const t = copy[lang];
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: site.email,
    sameAs: [site.github, site.linkedin],
    alumniOf: { "@type": "EducationalOrganization", name: "FIAP" },
    knowsAbout: ["Software development", "Backend development", "TypeScript", "NestJS", "APIs"],
  };

  return (
    <main id="main-content" className="shell page-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }} />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__main">
          <h1 id="hero-title">{t.hero.title}</h1>
          <p className="hero__lead">{t.hero.lead.map((line) => <span key={line}>{line}</span>)}</p>
          <a className="hero__stack" href="#capabilities" aria-label={lang === "pt" ? "Ver competências: TypeScript, NestJS e PostgreSQL" : "View skills: TypeScript, NestJS, and PostgreSQL"}>TypeScript, NestJS, PostgreSQL</a>
          <div className="hero__links">
            <a href="#projects">{t.hero.projects} <ArrowUpRight /></a>
            <a href="#contact">{t.hero.contact}</a>
            <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight /></a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <section className="section-block" id="projects" aria-labelledby="projects-title">
        <SectionHeading id="projects-title" index={t.sections.projects.number} title={t.sections.projects.title} intro={t.sections.projects.intro} action={t.sections.projects.all} href="/projects" />
        <div className="home-projects">
          {selectedProjects.map((project) => <HomeProjectRow key={project.slug} project={project} locale={lang} />)}
        </div>
      </section>

      <section className="section-block" id="capabilities" aria-labelledby="capabilities-title">
        <SectionHeading id="capabilities-title" index={t.sections.capabilities.number} title={t.sections.capabilities.title} intro={t.sections.capabilities.intro} />
        <div className="capability-grid">
          {t.capabilities.map((capability) => (
            <article className="capability-card" key={capability.number}>
              <span className="capability-card__number">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
              <div className="tech-list">{capability.tech.map((tech) => <TechBadge name={tech} key={tech} />)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="about" aria-labelledby="about-title">
        <SectionHeading id="about-title" index={t.sections.about.number} title={t.sections.about.title} />
        <div className="journey-list">
          {t.journey.map((item, index) => (
            <article className="journey-row" key={item.label}>
              <div className="journey-row__heading">
                <span className="journey-row__index">0{index + 1} {item.label}</span>
                <h3>{item.title}</h3>
              </div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block section-block--last" id="contact" aria-labelledby="contact-title">
        <SectionHeading id="contact-title" index={t.sections.contact.number} title={t.sections.contact.title} intro={t.sections.contact.intro} />
        <ContactPanel locale={lang} />
      </section>
    </main>
  );
}
