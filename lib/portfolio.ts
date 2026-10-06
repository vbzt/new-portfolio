export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

type Localized = Record<Locale, string>;

export const site = {
  url: "https://bzt.vercel.app",
  name: "Vitor de Castro Buzato",
  email: "vitorcastrobuzato@gmail.com",
  github: "https://github.com/vbzt",
  linkedin: "https://linkedin.com/in/vitor-buzato",
  resume: "/curriculo-vitor-buzato.pdf",
};

export type Project = {
  slug: string;
  name: string;
  category: Localized;
  role?: Localized;
  description: Localized;
  detail?: Localized;
  tech: string[];
  github: string;
  deploy?: string;
  visual?: "tracksafe" | "nomuz" | "deepy";
};

// TODO: Replace or extend these entries with confirmed case studies, screenshots,
// results and individual pages when the project owner supplies them.
export const selectedProjects: Project[] = [
  {
    slug: "tracksafe",
    name: "TrackSafe",
    category: { pt: "API · projeto autoral", en: "API · independent project" },
    role: { pt: "desenvolvimento integral", en: "built independently" },
    description: {
      pt: "API de agendamento criada após uma análise de segurança de uma plataforma real.",
      en: "A booking API built after a security review of a real platform.",
    },
    detail: {
      pt: "Reconstruí o fluxo para que preços, cupons e pagamentos sejam definidos no backend, com autenticação via Supabase e integração com AbacatePay.",
      en: "I rebuilt the flow so the backend controls prices, coupons, and payments, with Supabase authentication and AbacatePay integration.",
    },
    tech: ["NestJS", "TypeScript", "Prisma", "Supabase Auth", "AbacatePay"],
    github: "https://github.com/vbzt/kart",
    visual: "tracksafe",
  },
  {
    slug: "nomuz",
    name: "Nomuz",
    category: { pt: "plataforma jurídica · equipe", en: "legal platform · team" },
    role: { pt: "arquitetura da API e backend", en: "API architecture and backend" },
    description: {
      pt: "Plataforma que reúne gestão de casos e comunicação entre advogados, clientes e associados.",
      en: "A platform that brings case management and communication between lawyers, clients, and associates together.",
    },
    detail: {
      pt: "Contribuição em modelagem com Prisma, comunicação em tempo real e fluxo de criptografia ponta a ponta.",
      en: "Contributed to Prisma modeling, real-time communication, and the end-to-end encryption flow.",
    },
    tech: ["NestJS", "Next.js", "Prisma", "PostgreSQL", "WebSockets"],
    github: "https://github.com/vbzt/Nomuz",
    visual: "nomuz",
  },
  {
    slug: "deepy",
    name: "DeepY",
    category: { pt: "aplicativo de estudos · faculdade", en: "study app · university project" },
    description: {
      pt: "Aplicativo de apoio aos estudos que transforma imagens de anotações, exercícios e código em conteúdos úteis com IA.",
      en: "A study companion that turns images of notes, exercises, and code into useful learning material with AI.",
    },
    detail: {
      pt: "Gera resumos, flashcards e análises; organiza registros por disciplina e sugere a matéria pelo horário da captura.",
      en: "Generates summaries, flashcards, and analyses; organizes records by subject and suggests a class from capture time.",
    },
    tech: ["Next.js", "FastAPI", "Python", "Google Gemini"],
    github: "https://github.com/CameraJovi/FrontCameraJovi",
    visual: "deepy",
  },
];

export const archiveProjects: Project[] = [
  {
    slug: "crumbly",
    name: "Crumbly",
    category: { pt: "pessoal · 2024", en: "personal · 2024" },
    role: { pt: "solo", en: "solo" },
    description: {
      pt: "API backend para gestão de padarias. Autenticação, controle de estoque, vendas e rastreamento de pedidos.",
      en: "Backend API for bakery management. Authentication, stock control, sales and order tracking.",
    },
    tech: ["NestJS", "Prisma ORM", "MySQL", "TypeScript"],
    github: "https://github.com/vbzt/Crumbly",
  },
  {
    slug: "any2any",
    name: "Any2Any",
    category: { pt: "pessoal · 2024", en: "personal · 2024" },
    role: { pt: "solo", en: "solo" },
    description: {
      pt: "Ferramenta para conversão de arquivos multimídia com processamento local no navegador.",
      en: "Multimedia file conversion tool that processes files locally in the browser.",
    },
    tech: ["Vite", "TypeScript", "FFmpeg"],
    github: "https://github.com/vbzt/Any2Any",
    deploy: "https://anytoany.vercel.app/",
  },
  {
    slug: "ecoleaf",
    name: "EcoLeaf",
    category: { pt: "escola · 2024", en: "school · 2024" },
    role: { pt: "tech lead e backend", en: "tech lead and backend" },
    description: {
      pt: "Plataforma para uma empresa de jardinagem com formulário que usa IA para recomendar plantas.",
      en: "Platform for a gardening company with an AI-powered form that recommends plants.",
    },
    tech: ["Node.js", "React", "MongoDB", "Gemini API"],
    github: "https://github.com/vbzt/EcoLeaf",
  },
];

export const copy = {
  pt: {
    skip: "Pular para o conteúdo",
    nav: { home: "Início", projects: "Projetos", capabilities: "Competências", about: "Trajetória", contact: "Contato", resume: "currículo", language: "Idioma" },
    hero: {
      title: "Vitor de Castro Buzato",
      lead: ["fullstack dev com foco em backend", "engenharia de software @FIAP"],
      projects: "Explorar projetos", contact: "Entrar em contato",
    },
    sections: {
      projects: { number: "01 trabalhos", title: "projetos selecionados", intro: "uma API de agendamentos, uma plataforma jurídica e um aplicativo de estudos.", all: "Ver arquivo completo" },
      capabilities: { number: "02 prática", title: "o que eu construo", intro: "competências organizadas pelo papel que desempenham no software." },
      about: { number: "03 percurso", title: "trajetória", all: "Conhecer a trajetória" },
      contact: { number: "04 conversa", title: "vamos conversar?", intro: "busco oportunidades de estágio ou desenvolvimento de software em início de carreira." },
    },
    capabilities: [
      { number: "01", title: "APIs e arquitetura", text: "Serviços, regras de negócio e integrações organizados em módulos claros.", tech: ["TypeScript", "Node.js", "NestJS", "FastAPI"] },
      { number: "02", title: "dados e acesso", text: "Persistência, autenticação e permissões como parte central da experiência.", tech: ["PostgreSQL", "Prisma", "JWT", "Supabase Auth"] },
      { number: "03", title: "produto completo", text: "Interfaces e fluxos que conectam as capacidades do backend a quem usa.", tech: ["React", "Next.js", "WebSockets", "Docker"] },
    ],
    contact: { email: "E-mail", copy: "Copiar e-mail", copied: "E-mail copiado", failed: "Não foi possível copiar", message: "uma conversa pode começar por aqui.", resumeDownload: "baixar currículo (PDF)", external: "Abrir", repo: "Repositório", live: "Acessar projeto", details: "Detalhes", more: "mais projetos", archive: "arquivo", selected: "selecionados" },
    journey: [
        { label: "origem", title: "bots, lógica e SQL", text: "Comecei aos 13 anos, durante a pandemia, criando bots de Discord em Python. Aprendi lógica e SQL enquanto resolvia bugs e procurava respostas no YouTube e no Stack Overflow." },
        { label: "formação", title: "desenvolvimento web na FIAP School", text: "Cursei Técnico em Informática na FIAP School de 2023 a 2025. No primeiro ano, conheci desenvolvimento web e comecei a construir aplicações completas fora da escola. Um dos primeiros projetos foi um clone do Twitter/X." },
        { label: "hoje", title: "backend e engenharia de software", text: "No segundo ano do técnico, encontrei o NestJS e passei a usá-lo em projetos como Crumbly e Nomuz. Hoje estudo Engenharia de Software na FIAP, no curso previsto para 2026 a 2029, e sigo com foco em backend e APIs." },
    ],
    projectsPage: { title: "projetos", indexLabel: "Navegação pelos projetos" },
    footer: "Projetado e desenvolvido por Vitor Buzato.",
    metadata: {
      home: "Vitor Buzato | Desenvolvimento de software e backend",
      homeDescription: "Portfólio de Vitor Buzato, estudante de Engenharia de Software na FIAP com foco em backend, APIs e desenvolvimento de software.",
      projects: "Projetos | Vitor Buzato",
      projectsDescription: "TrackSafe, Nomuz, DeepY e outros projetos de software de Vitor Buzato.",
    },
  },
  en: {
    skip: "Skip to content",
    nav: { home: "Home", projects: "Projects", capabilities: "Skills", about: "About", contact: "Contact", resume: "résumé (PT)", language: "Language" },
    hero: {
      title: "Vitor de Castro Buzato",
      lead: ["fullstack dev focused on backend", "software engineering @FIAP"],
      projects: "Explore projects", contact: "Get in touch",
    },
    sections: {
      projects: { number: "01 work", title: "selected projects", intro: "a booking API, a legal platform, and a study app.", all: "View all projects" },
      capabilities: { number: "02 practice", title: "what I build", intro: "skills grouped by the part they play in software." },
      about: { number: "03 about", title: "about", all: "Read more" },
      contact: { number: "04 conversation", title: "let's talk?", intro: "open to internships and early-career software development roles." },
    },
    capabilities: [
      { number: "01", title: "APIs and architecture", text: "Services, business rules, and integrations organized into clear modules.", tech: ["TypeScript", "Node.js", "NestJS", "FastAPI"] },
      { number: "02", title: "data and access", text: "Persistence, authentication, and permissions as central parts of the experience.", tech: ["PostgreSQL", "Prisma", "JWT", "Supabase Auth"] },
      { number: "03", title: "complete products", text: "Interfaces and flows that connect backend capabilities to the people using them.", tech: ["React", "Next.js", "WebSockets", "Docker"] },
    ],
    contact: { email: "Email", copy: "Copy email", copied: "Email copied", failed: "Could not copy", message: "a conversation can start here.", resumeDownload: "download résumé (PDF, PT)", external: "Open", repo: "Repository", live: "Visit project", details: "Details", more: "more projects", archive: "archive", selected: "selected" },
    journey: [
        { label: "origin", title: "bots, logic, and SQL", text: "I started at 13, during the pandemic, building Discord bots in Python. I learned programming logic and SQL while fixing bugs and searching YouTube and Stack Overflow for answers." },
        { label: "education", title: "web development at FIAP School", text: "I studied Information Technology at FIAP School from 2023 to 2025. In my first year, I discovered web development and began building complete applications outside school. One of my first projects was a Twitter/X clone." },
        { label: "today", title: "backend and software engineering", text: "In my second year at FIAP School, I found NestJS and started using it in projects such as Crumbly and Nomuz. I now study Software Engineering at FIAP, in a program planned for 2026 to 2029, and continue to focus on backend development and APIs." },
    ],
    projectsPage: { title: "projects", indexLabel: "Project navigation" },
    footer: "Designed and developed by Vitor Buzato.",
    metadata: {
      home: "Vitor Buzato | Software development and backend",
      homeDescription: "Portfolio of Vitor Buzato, a Software Engineering student at FIAP focused on backend, APIs, and software development.",
      projects: "Projects | Vitor Buzato",
      projectsDescription: "TrackSafe, Nomuz, DeepY, and other software projects by Vitor Buzato.",
    },
  },
} as const;
