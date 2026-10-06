import Link from "next/link";
import { EmailCopy } from "./EmailCopy";
import { copy, site, type Locale, type Project } from "@/lib/portfolio";
import { ArrowDown, ArrowRight, ArrowUpRight, SignalMark } from "./Icons";

export function SectionHeading({ id, index, title, intro, action, href }: { id: string; index: string; title: string; intro?: string; action?: string; href?: string }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow"><span className="eyebrow__dash" />{index}</p>
        <h2 id={id}>{title}</h2>
        {intro && <p className="section-heading__intro">{intro}</p>}
      </div>
      {action && href && <Link className="text-link" href={href}>{action}<ArrowUpRight /></Link>}
    </div>
  );
}

export function TechBadge({ name }: { name: string }) {
  return <span className="tech-badge">{name}</span>;
}

export function HomeProjectRow({ project, locale }: { project: Project; locale: Locale }) {
  const t = copy[locale].contact;

  return (
    <article className="home-project" id={`project-${project.slug}`}>
      <div className="home-project__heading">
        <span className="eyebrow">{project.category[locale]}</span>
        <h3>{project.name}</h3>
      </div>
      <div className="home-project__body">
        {project.role && <p className="home-project__role">{project.role[locale]}</p>}
        <p className="home-project__description">{project.description[locale]}</p>
        <div className="home-project__links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name}: ${t.repo}`}>{t.repo} <ArrowUpRight /></a>
          {project.deploy && <a href={project.deploy} target="_blank" rel="noopener noreferrer" aria-label={`${project.name}: ${t.live}`}>{t.live} <ArrowUpRight /></a>}
        </div>
      </div>
    </article>
  );
}

function ProjectVisual({ project, locale }: { project: Project; locale: Locale }) {
  const isPt = locale === "pt";
  if (!project.visual) return null;

  if (project.visual === "tracksafe") {
    return (
      <figure className="project-visual project-visual--tracksafe" aria-label={isPt ? "Fluxo de dados críticos da API TrackSafe" : "TrackSafe API critical data flow"}>
        <div className="visual-topline"><span>TrackSafe / API</span><span>01–03</span></div>
        <div className="tracksafe-map">
          <div className="tracksafe-map__system"><span>Supabase Auth</span><strong>TrackSafe API</strong><span>AbacatePay</span></div>
          <div className="tracksafe-map__modules">
            <div><span className="visual-number">01</span><strong>{isPt ? "autorização" : "authorization"}</strong><small>{isPt ? "controle de acesso" : "access control"}</small></div>
            <div><span className="visual-number">02</span><strong>{isPt ? "agendamento" : "booking"}</strong><small>{isPt ? "dados no backend" : "server-side data"}</small></div>
            <div><span className="visual-number">03</span><strong>{isPt ? "pagamento" : "payment"}</strong><small>{isPt ? "preços e cupons" : "prices and coupons"}</small></div>
          </div>
        </div>
        <figcaption>{isPt ? "Preços, cupons e pagamentos controlados pelo backend" : "Prices, coupons, and payments controlled by the backend"}</figcaption>
      </figure>
    );
  }

  if (project.visual === "nomuz") {
    return (
      <figure className="project-visual project-visual--nomuz" aria-label={isPt ? "Estrutura documentada do Nomuz" : "Documented Nomuz structure"}>
        <div className="visual-topline"><span>nomuz / {isPt ? "estrutura" : "structure"}</span><span>02</span></div>
        <div className="visual-stack">
          <div className="visual-stack__row"><span>frontend/</span><strong>Next.js</strong></div>
          <div className="visual-stack__row visual-stack__row--active"><span>api/</span><strong>NestJS · WebSockets</strong></div>
          <div className="visual-stack__row"><span>data/</span><strong>Prisma · PostgreSQL</strong></div>
        </div>
        <figcaption>{isPt ? "Estrutura simplificada a partir do README" : "Simplified structure based on the README"}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="project-visual project-visual--deepy" aria-label={isPt ? "Fluxo documentado de análise de imagens do DeepY" : "Documented DeepY image analysis flow"}>
      <div className="visual-topline"><span>DeepY / {isPt ? "análise de imagem" : "image analysis"}</span><span>03</span></div>
      <div className="visual-deepy-flow">
        <span>{isPt ? "imagem" : "image"}</span><ArrowRight /><span>FastAPI + Gemini</span><ArrowRight /><span>{isPt ? "conteúdo de estudo" : "study material"}</span>
      </div>
      <figcaption>{isPt ? "Análises de imagem; organização por horário ocorre no navegador" : "Image analysis; schedule matching runs in the browser"}</figcaption>
    </figure>
  );
}

export function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const t = copy[locale].contact;
  return (
    <article className="project-card" id={`project-${project.slug}`}>
      <div className="project-card__content">
        <div className="project-card__top"><span className="eyebrow">{project.category[locale]}</span><span className="project-card__index">/{project.slug}</span></div>
        <h3>{project.name}</h3>
        {project.role && <p className="project-card__role">{project.role[locale]}</p>}
        <p className="project-card__description">{project.description[locale]}</p>
        {project.detail && <p className="project-card__detail">{project.detail[locale]}</p>}
        <div className="project-card__bottom">
          <div className="tech-list" aria-label={locale === "pt" ? "Tecnologias" : "Technologies"}>{project.tech.map((tech) => <TechBadge name={tech} key={tech} />)}</div>
          <div className="project-card__links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name}: ${t.repo}`}>{t.repo} <ArrowUpRight /></a>
            {project.deploy && <a href={project.deploy} target="_blank" rel="noopener noreferrer" aria-label={`${project.name}: ${t.live}`}>{t.live} <ArrowUpRight /></a>}
          </div>
        </div>
      </div>
      <ProjectVisual project={project} locale={locale} />
    </article>
  );
}

export function ContactPanel({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <div className="contact-panel">
      <div className="contact-panel__main">
        <span className="contact-panel__asterisk"><SignalMark /></span>
        <p>{t.contact.message}</p>
        <a className="contact-panel__email" href={`mailto:${site.email}`}>{site.email}</a>
        <EmailCopy locale={locale} />
      </div>
      <div className="contact-panel__links">
        <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight /></a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight /></a>
        <a href={site.resume} download="Curriculo-Vitor-de-Castro-Buzato.pdf">{t.contact.resumeDownload} <ArrowDown /></a>
      </div>
    </div>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <footer className="site-footer shell">
      <p>{t.footer}</p>
      <nav aria-label={locale === "pt" ? "Links do rodapé" : "Footer links"}>
        <Link href="/">{t.nav.home}</Link>
        <Link href="/projects">{t.nav.projects}</Link>
        <a href={`mailto:${site.email}`}>{t.nav.contact}</a>
      </nav>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
