import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactPanel, ProjectCard, SectionHeading, TechBadge } from "@/components/PortfolioBlocks";
import { ArrowUpRight } from "@/components/Icons";
import { pageMetadata } from "@/lib/metadata";
import { copy, isLocale, selectedProjects, site } from "@/lib/portfolio";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return pageMetadata(lang, "home");
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = copy[lang];
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: `${site.url}/${lang}`,
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
          <p className="eyebrow hero__eyebrow">{t.hero.index}</p>
          <h1 id="hero-title">{t.hero.title}</h1>
          <p className="hero__lead">{t.hero.lead}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projects">{t.hero.projects} <ArrowUpRight /></a>
            <a className="button button--outline" href="#contact">{t.hero.contact}</a>
          </div>
          <div className="hero__footer">
            <a className="hero__featured" href={`#project-${selectedProjects[0].slug}`}>
              <span>{t.hero.featured}</span>
              <strong>{selectedProjects[0].name}</strong>
              <span>{selectedProjects[0].category[lang]}</span>
              <ArrowUpRight />
            </a>
            <div className="hero__socials">
              <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight /></a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block" id="projects" aria-labelledby="projects-title">
        <SectionHeading id="projects-title" index={t.sections.projects.number} title={t.sections.projects.title} intro={t.sections.projects.intro} action={t.sections.projects.all} href={`/${lang}/projects`} />
        <div className="selected-grid">
          {selectedProjects.map((project, index) => <ProjectCard key={project.slug} project={project} locale={lang} featured={index === 0} />)}
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
        <SectionHeading id="about-title" index={t.sections.about.number} title={t.sections.about.title} intro={t.sections.about.intro} action={t.sections.about.all} href={`/${lang}/about`} />
        <div className="journey-panel">
          <div className="journey-panel__intro"><span>{lang === "pt" ? "PERCURSO / VITOR" : "PATH / VITOR"}</span><p>{lang === "pt" ? "Aprender, construir, entender o sistema inteiro." : "Learn, build, understand the whole system."}</p></div>
          <ol className="journey-list">{t.journey.map((item, index) => <li key={item.label}><span className="journey-list__number">0{index + 1}</span><div><span className="eyebrow">{item.label}</span><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol>
        </div>
      </section>

      <section className="section-block section-block--last" id="contact" aria-labelledby="contact-title">
        <SectionHeading id="contact-title" index={t.sections.contact.number} title={t.sections.contact.title} intro={t.sections.contact.intro} />
        <ContactPanel locale={lang} />
      </section>
    </main>
  );
}
