import Link from "next/link";
import { EmailCopy } from "./EmailCopy";
import { copy, site, type Locale, type Project } from "@/lib/portfolio";
import { ArrowDown, ArrowRight, ArrowUpRight, SignalMark } from "./Icons";

export function SectionHeading({ id, index, title, intro, action, href }: { id: string; index: string; title: string; intro?: string; action?: string; href?: string }) {
  return (
    <div className="mb-[30px] flex items-end justify-between gap-9 max-[540px]:flex-col max-[540px]:items-start max-[540px]:gap-3">
      <div>
        <p className="m-0 inline-flex items-center gap-[10px] text-[11px] font-bold tracking-[0.14em] text-copy-muted"><span className="inline-block h-[2px] w-5 shrink-0 bg-accent" />{index}</p>
        <h2 className="mt-[17px] mb-2 text-[clamp(34px,3.65vw,52px)] leading-[1.12] font-[650] tracking-[-0.065em] max-[540px]:text-[38px]" id={id}>{title}</h2>
        {intro && <p className="description">{intro}</p>}
      </div>
      {action && href && <Link className="inline-flex min-h-11 shrink-0 items-center gap-[6px] border-b border-accent text-[13px] font-[650] text-foreground hover:text-accent-hover" href={href}>{action}<ArrowUpRight /></Link>}
    </div>
  );
}

export function TechBadge({ name }: { name: string }) {
  return <span className="inline-flex min-h-[29px] items-center whitespace-nowrap rounded-[7px] border border-line bg-surface-inset px-[9px] py-[5px] text-[11px] font-semibold text-copy-secondary">{name}</span>;
}

export function HomeProjectRow({ project, locale }: { project: Project; locale: Locale }) {
  const t = copy[locale].contact;

  return (
    <article className="editorial-row border-b border-line py-[25px] max-[540px]:py-6" id={`project-${project.slug}`}>
      <div>
        <span className="text-[11px] font-bold tracking-[0.07em] text-copy-muted">{project.category[locale]}</span>
        <h3 className="mt-[10px] text-[clamp(26px,2.7vw,37px)] leading-[1.1] font-[650] tracking-[-0.055em]">{project.name}</h3>
      </div>
      <div className="flex flex-col items-start">
        {project.role && <p className="mb-[9px] text-xs font-[650] text-accent-hover">{project.role[locale]}</p>}
        <p className="description">{project.description[locale]}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-[10px] pt-[10px] [&_a]:inline-flex [&_a]:min-h-10 [&_a]:items-center [&_a]:gap-[6px] [&_a]:border-b [&_a]:border-accent-border [&_a]:text-xs [&_a]:font-[650] [&_a:hover]:text-accent-hover [&_svg]:size-[15px]">
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name}: ${t.repo}`}>{t.repo} <ArrowUpRight /></a>
          {project.deploy && <a href={project.deploy} target="_blank" rel="noopener noreferrer" aria-label={`${project.name}: ${t.live}`}>{t.live} <ArrowUpRight /></a>}
        </div>
      </div>
    </article>
  );
}

function ProjectVisual({ project, locale }: { project: Project; locale: Locale }) {
  const isPt = locale === "pt";
  const visualClass = "project-visual my-6 flex min-h-[270px] min-w-0 flex-col rounded-[16px] border border-line bg-surface-inset px-[30px] pt-[27px] pb-5 max-[900px]:mt-[22px] max-[900px]:mb-9 max-[540px]:min-h-[260px] max-[540px]:p-[22px]";
  if (!project.visual) return null;

  if (project.visual === "tracksafe") {
    return (
      <figure className={`${visualClass} tracksafe-visual`} aria-label={isPt ? "Fluxo de dados críticos da API TrackSafe" : "TrackSafe API critical data flow"}>
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
      <figure className={visualClass} aria-label={isPt ? "Estrutura documentada do Nomuz" : "Documented Nomuz structure"}>
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
    <figure className={visualClass} aria-label={isPt ? "Fluxo documentado de análise de imagens do DeepY" : "Documented DeepY image analysis flow"}>
      <div className="visual-topline"><span>DeepY / {isPt ? "análise de imagem" : "image analysis"}</span><span>03</span></div>
      <div className="visual-deepy-flow">
        <span>{isPt ? "imagem" : "image"}</span><ArrowRight /><span>FastAPI + Gemini</span><ArrowRight /><span>{isPt ? "conteúdo de estudo" : "study material"}</span>
      </div>
      <figcaption>{isPt ? "Análises de imagem; organização por horário ocorre no navegador" : "Image analysis; schedule matching runs in the browser"}</figcaption>
    </figure>
  );
}

export function ProjectCard({ project, locale, variant }: { project: Project; locale: Locale; variant: "featured" | "archive" }) {
  const t = copy[locale].contact;
  const featured = variant === "featured";
  const linksClass = "flex flex-wrap gap-[18px] [&_a]:inline-flex [&_a]:min-h-11 [&_a]:items-center [&_a]:gap-2 [&_a]:border-b [&_a]:border-accent [&_a]:text-[13px] [&_a]:font-bold [&_a]:text-foreground [&_a:hover]:text-accent-hover";
  return (
    <article className={featured ? "grid min-w-0 scroll-mt-24 grid-cols-[minmax(0,1fr)_minmax(330px,0.86fr)] items-center gap-[clamp(24px,4vw,64px)] border-b border-line max-[900px]:grid-cols-1 max-[900px]:gap-0" : "block min-w-0 scroll-mt-24 border-b border-line"} id={`project-${project.slug}`}>
      <div className={featured ? "flex min-w-0 flex-col py-[42px] max-[900px]:pb-0" : "grid min-w-0 grid-cols-[minmax(170px,0.55fr)_minmax(0,1fr)] gap-x-[42px] gap-y-3 py-7 max-[540px]:grid-cols-1"}>
        <div className="col-span-full flex items-start justify-between gap-3"><span className="text-[11px] font-bold tracking-[0.09em] text-copy-muted">{project.category[locale]}</span><span className="font-[Consolas,monospace] text-[11px] tracking-[0.08em] text-copy-muted">/{project.slug}</span></div>
        <h3 className={featured ? "mt-5 mb-[7px] text-[clamp(28px,2.7vw,38px)] leading-[1.1] font-[650] tracking-[-0.065em] max-[540px]:text-4xl" : "m-0 text-[clamp(28px,2.7vw,38px)] leading-[1.1] font-[650] tracking-[-0.065em] max-[540px]:text-4xl"}>{project.name}</h3>
        {project.role && <p className={featured ? "mb-5 text-[13px] font-bold text-accent" : "col-start-1 m-0 text-[13px] font-bold text-accent"}>{project.role[locale]}</p>}
        <p className={featured ? "description" : "description col-start-2 max-[540px]:col-start-1"}>{project.description[locale]}</p>
        {project.detail && <p className={featured ? "description-detail mt-[10px] mb-0 max-w-[640px]" : "description-detail col-start-2 mt-[10px] mb-0 max-w-[640px] max-[540px]:col-start-1"}>{project.detail[locale]}</p>}
        <div className={featured ? "pt-6" : "col-start-2 pt-1 max-[540px]:col-start-1"}>
          <div className="flex flex-wrap gap-[7px]" aria-label={locale === "pt" ? "Tecnologias" : "Technologies"}>{project.tech.map((tech) => <TechBadge name={tech} key={tech} />)}</div>
          <div className={`${featured ? "mt-[26px]" : "mt-3"} ${linksClass}`}>
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
    <div className="grid grid-cols-[1fr_230px] overflow-hidden rounded-[24px] border border-line bg-surface-elevated max-[760px]:grid-cols-1">
      <div className="relative min-w-0 p-[clamp(28px,4vw,52px)] max-[540px]:p-[26px]">
        <span className="text-[34px] leading-none text-accent"><SignalMark /></span>
        <div className="mt-[55px] mb-3 max-[760px]:mt-[35px]"><p className="description">{t.contact.message}</p></div>
        <a className="inline-block max-w-full border-b-2 border-accent pb-2 text-[clamp(23px,3.4vw,47px)] font-semibold tracking-[-0.055em] [overflow-wrap:anywhere] hover:text-accent-hover max-[540px]:text-[clamp(19px,5.8vw,29px)]" href={`mailto:${site.email}`}>{site.email}</a>
        <EmailCopy locale={locale} />
      </div>
      <div className="flex flex-col justify-end border-l border-line p-6 [&_a]:flex [&_a]:min-h-[54px] [&_a]:items-center [&_a]:justify-between [&_a]:gap-3 [&_a]:border-b [&_a]:border-line [&_a]:text-sm [&_a]:font-semibold [&_a:last-child]:border-0 [&_a:hover]:text-accent-hover max-[760px]:border-t max-[760px]:border-l-0">
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
    <footer className="shell flex min-h-[94px] flex-wrap items-center justify-between gap-[15px] border-t border-line-soft text-xs text-copy-muted max-[540px]:py-[26px]">
      <p className="m-0">{t.footer}</p>
      <nav className="flex gap-[22px] [&_a]:inline-flex [&_a]:min-h-11 [&_a]:items-center [&_a:hover]:text-foreground" aria-label={locale === "pt" ? "Links do rodapé" : "Footer links"}>
        <Link href="/">{t.nav.home}</Link>
        <Link href="/projects">{t.nav.projects}</Link>
        <a href={`mailto:${site.email}`}>{t.nav.contact}</a>
      </nav>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
