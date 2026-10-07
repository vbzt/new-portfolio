import Image from "next/image";
import { copy, site, type Locale } from "@/lib/portfolio";
import { ArrowUpRight } from "./Icons";

export function HomeHero({ locale }: { locale: Locale }) {
  const t = copy[locale].hero;
  const links = "flex flex-wrap items-center gap-x-[25px] gap-y-0 [&_a]:inline-flex [&_a]:min-h-11 [&_a]:items-center [&_a]:gap-[6px] [&_a:hover]:text-accent-hover [&_svg]:size-[15px] max-[540px]:gap-x-5";

  return (
    <section
      className="grid min-h-[calc(100svh-var(--site-header-height))] grid-rows-[minmax(32px,0.85fr)_auto_minmax(48px,1.15fr)] max-[540px]:grid-rows-[minmax(24px,0.85fr)_auto_minmax(32px,1.15fr)]"
      aria-labelledby="hero-title"
    >
      <div className="row-start-2 min-w-0">
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] items-center gap-[clamp(32px,5vw,80px)] max-[900px]:grid-cols-1 max-[900px]:gap-8">
          <div className="min-w-0">
            <h1 className="mb-4 max-w-[900px] text-[clamp(36px,4.2vw,56px)] leading-[1.1] font-[650] tracking-[-0.055em] max-[760px]:text-[clamp(35px,6vw,46px)] max-[540px]:mb-3 max-[540px]:text-[clamp(32px,9.5vw,43px)]" id="hero-title">{site.name}</h1>
            <p className="m-0 text-[clamp(15px,1.3vw,17px)] leading-[1.55] text-copy-secondary [&_span]:block max-[540px]:text-[15px]">
              {t.lead.map((line) => <span key={line}>{line}</span>)}
            </p>
            <div className="mt-[14px]">
              <a className="inline-flex min-h-11 items-center text-sm font-medium text-foreground underline decoration-accent-border underline-offset-[5px] hover:text-accent-hover hover:decoration-current" href="#capabilities" aria-label={locale === "pt" ? "Ver competências: TypeScript, NestJS e PostgreSQL" : "View skills: TypeScript, NestJS, and PostgreSQL"}>TypeScript, NestJS, PostgreSQL</a>
            </div>
          </div>
          <figure className="relative m-0 h-[clamp(360px,54svh,540px)] min-w-0 max-[900px]:mx-auto max-[900px]:w-full max-[900px]:max-w-[420px] max-[540px]:h-[360px]">
            <Image
              src={site.portrait}
              alt={locale === "pt" ? `Retrato de ${site.name}` : `Portrait of ${site.name}`}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 540px) calc(100vw - 32px), (max-width: 900px) 420px, 40vw"
              className="object-cover"
              style={{ objectPosition: "50% 10%" }}
            />
          </figure>
        </div>
        <div className={`${links} mt-10 justify-between gap-y-3 border-t border-line-soft pt-5 text-[13px] font-semibold lowercase text-copy-secondary max-[540px]:mt-7`}>
          <div className={`${links} [&_a:first-child]:text-foreground`}>
            <a href="#projects">{t.projects} <ArrowUpRight /></a>
            <a href="#contact">{t.contact}</a>
          </div>
          <div className={links}>
            <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight /></a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
