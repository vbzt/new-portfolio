"use client";

import { ContactPanel, HomeProjectRow, SectionHeading, TechBadge } from "@/components/PortfolioBlocks";
import { ArrowUpRight } from "@/components/Icons";
import { copy, selectedProjects, site } from "@/lib/portfolio";
import { useLanguage } from "./LanguageProvider";

const sectionClass = "scroll-mt-[100px] pt-[142px] max-[760px]:scroll-mt-[125px] max-[760px]:pt-24";
const shortSectionClass = "scroll-mt-[100px] pt-28 max-[760px]:scroll-mt-[125px] max-[540px]:pt-[78px]";

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
    <main id="main-content" className="shell pt-[42px] max-[760px]:pt-5">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }} />
      <section aria-labelledby="hero-title">
        <div className="min-w-0 pt-[clamp(38px,5vw,68px)] max-[760px]:pt-7 max-[540px]:pt-[22px]">
          <h1 className="mb-4 max-w-[900px] text-[clamp(36px,4.2vw,56px)] leading-[1.1] font-[650] tracking-[-0.055em] max-[760px]:text-[clamp(35px,6vw,46px)] max-[540px]:mb-3 max-[540px]:text-[clamp(32px,9.5vw,43px)]" id="hero-title">{t.hero.title}</h1>
          <p className="m-0 text-[clamp(15px,1.3vw,17px)] leading-[1.55] text-copy-secondary [&_span]:block max-[540px]:text-[15px]">{t.hero.lead.map((line) => <span key={line}>{line}</span>)}</p>
          <a className="mt-[14px] inline-flex min-h-11 items-center text-sm font-medium text-foreground underline decoration-accent-border underline-offset-[5px] hover:text-accent-hover hover:decoration-current" href="#capabilities" aria-label={lang === "pt" ? "Ver competências: TypeScript, NestJS e PostgreSQL" : "View skills: TypeScript, NestJS, and PostgreSQL"}>TypeScript, NestJS, PostgreSQL</a>
          <div className="mt-[13px] flex flex-wrap items-center gap-x-[25px] gap-y-0 text-[13px] font-semibold lowercase text-copy-secondary [&_a]:inline-flex [&_a]:min-h-11 [&_a]:items-center [&_a]:gap-[6px] [&_a:first-child]:text-foreground [&_a:hover]:text-accent-hover [&_svg]:size-[15px] max-[540px]:gap-x-5">
            <a href="#projects">{t.hero.projects} <ArrowUpRight /></a>
            <a href="#contact">{t.hero.contact}</a>
            <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight /></a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <section className={shortSectionClass} id="projects" aria-labelledby="projects-title">
        <SectionHeading id="projects-title" index={t.sections.projects.number} title={t.sections.projects.title} intro={t.sections.projects.intro} action={t.sections.projects.all} href="/projects" />
        <div className="border-t border-line">
          {selectedProjects.map((project) => <HomeProjectRow key={project.slug} project={project} locale={lang} />)}
        </div>
      </section>

      <section className={shortSectionClass} id="capabilities" aria-labelledby="capabilities-title">
        <SectionHeading id="capabilities-title" index={t.sections.capabilities.number} title={t.sections.capabilities.title} intro={t.sections.capabilities.intro} />
        <div className="border-t border-line">
          {t.capabilities.map((capability) => (
            <article className="grid grid-cols-[52px_minmax(180px,0.72fr)_minmax(200px,1fr)] items-start gap-x-7 gap-y-[14px] border-b border-line py-[30px] max-[760px]:grid-cols-[38px_minmax(170px,0.8fr)_minmax(0,1fr)] max-[760px]:gap-x-[18px] max-[760px]:gap-y-3 max-[540px]:grid-cols-[34px_1fr] max-[540px]:gap-x-3 max-[540px]:gap-y-[10px] max-[540px]:py-6" key={capability.number}>
              <span className="pt-[6px] font-[Consolas,monospace] text-xs text-accent">{capability.number}</span>
              <h3 className="m-0 text-[clamp(24px,2.5vw,33px)] leading-[1.16] tracking-[-0.055em]">{capability.title}</h3>
              <p className="m-0 max-w-[520px] text-[15px] leading-[1.6] text-copy-secondary max-[540px]:col-start-2">{capability.text}</p>
              <div className="col-start-2 col-end-[-1] flex flex-wrap gap-[7px] max-[540px]:col-end-3">{capability.tech.map((tech) => <TechBadge name={tech} key={tech} />)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClass} id="about" aria-labelledby="about-title">
        <SectionHeading id="about-title" index={t.sections.about.number} title={t.sections.about.title} />
        <div className="border-t border-line">
          {t.journey.map((item, index) => (
            <article className="grid grid-cols-[minmax(230px,0.65fr)_minmax(0,1fr)] gap-x-14 gap-y-6 border-b border-line pt-[42px] pb-12 max-[760px]:grid-cols-[minmax(180px,0.7fr)_minmax(0,1fr)] max-[760px]:gap-6 max-[540px]:grid-cols-1 max-[540px]:gap-3 max-[540px]:pt-[30px] max-[540px]:pb-[34px]" key={item.label}>
              <div>
                <span className="font-[Consolas,monospace] text-xs text-accent">0{index + 1} {item.label}</span>
                <h3 className="mt-[17px] max-w-[480px] text-[clamp(27px,2.7vw,36px)] leading-[1.14] font-semibold tracking-[-0.05em] max-[540px]:mt-3">{item.title}</h3>
              </div>
              <p className="m-0 max-w-[640px] text-base leading-[1.7] text-copy-secondary">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} pb-[118px]`} id="contact" aria-labelledby="contact-title">
        <SectionHeading id="contact-title" index={t.sections.contact.number} title={t.sections.contact.title} intro={t.sections.contact.intro} />
        <ContactPanel locale={lang} />
      </section>
    </main>
  );
}
