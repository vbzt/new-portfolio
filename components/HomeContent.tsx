"use client";

import { ContactPanel, HomeProjectRow, SectionHeading, TechBadge } from "@/components/PortfolioBlocks";
import { HomeHero } from "./HomeHero";
import { copy, selectedProjects, site } from "@/lib/portfolio";
import { useLanguage } from "./LanguageProvider";

const sectionClass = "scroll-mt-[100px] pt-[142px] max-[760px]:scroll-mt-[125px] max-[760px]:pt-24";
const shortSectionClass = "scroll-mt-[100px] pt-28 max-[760px]:scroll-mt-[125px] max-[540px]:pt-[78px]";
const projectsSectionClass = "scroll-mt-[100px] pt-12 max-[760px]:scroll-mt-[125px] max-[540px]:pt-8";

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
    <main id="main-content" className="shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }} />
      <HomeHero locale={lang} />

      <section className={projectsSectionClass} id="projects" aria-labelledby="projects-title">
        <SectionHeading id="projects-title" index={t.sections.projects.number} title={t.sections.projects.title} intro={t.sections.projects.intro} action={t.sections.projects.all} href="/projects" />
        <div className="border-t border-line">
          {selectedProjects.map((project) => <HomeProjectRow key={project.slug} project={project} locale={lang} />)}
        </div>
      </section>

      <section className={shortSectionClass} id="capabilities" aria-labelledby="capabilities-title">
        <SectionHeading id="capabilities-title" index={t.sections.capabilities.number} title={t.sections.capabilities.title} intro={t.sections.capabilities.intro} />
        <div className="border-t border-line">
          {t.capabilities.map((capability) => (
            <article className="editorial-row border-b border-line py-[30px] max-[540px]:py-6" key={capability.number}>
              <div className="flex items-start gap-5 max-[540px]:gap-3">
                <span className="pt-[6px] font-[Consolas,monospace] text-xs text-accent">{capability.number}</span>
                <h3 className="m-0 min-w-0 text-[clamp(24px,2.5vw,33px)] leading-[1.16] tracking-[-0.055em]">{capability.title}</h3>
              </div>
              <div className="min-w-0">
                <p className="description">{capability.text}</p>
                <div className="mt-[14px] flex flex-wrap gap-[7px]">{capability.tech.map((tech) => <TechBadge name={tech} key={tech} />)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClass} id="about" aria-labelledby="about-title">
        <SectionHeading id="about-title" index={t.sections.about.number} title={t.sections.about.title} />
        <div className="border-t border-line">
          {t.journey.map((item, index) => (
            <article className="editorial-row border-b border-line pt-[42px] pb-12 max-[540px]:pt-[30px] max-[540px]:pb-[34px]" key={item.label}>
              <div>
                <span className="font-[Consolas,monospace] text-xs text-accent">0{index + 1} {item.label}</span>
                <h3 className="mt-[17px] max-w-[480px] text-[clamp(27px,2.7vw,36px)] leading-[1.14] font-semibold tracking-[-0.05em] max-[540px]:mt-3">{item.title}</h3>
              </div>
              <p className="description">{item.text}</p>
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
