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
  portrait: "/673314_007(1).jpg",
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
      pt: "Reconstruí o fluxo para que o backend controle preços, cupons e pagamentos. A autenticação usa Supabase, e os pagamentos têm integração com AbacatePay.",
      en: "I rebuilt the flow so the backend controls prices, coupons, and payments. Authentication uses Supabase, and payments are integrated with AbacatePay.",
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
      pt: "Contribuí na modelagem com Prisma, na comunicação em tempo real e no fluxo de criptografia ponta a ponta.",
      en: "I contributed to data modeling with Prisma, real-time communication, and the end-to-end encryption flow.",
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
      pt: "Aplicativo que usa IA para transformar imagens de anotações, exercícios e código em material de estudo.",
      en: "An app that uses AI to turn images of notes, exercises, and code into study material.",
    },
    detail: {
      pt: "A partir das imagens, gera resumos, flashcards e análises. Os registros ficam organizados por disciplina, e a matéria é sugerida pelo horário da captura.",
      en: "It generates summaries, flashcards, and analyses from the images. Records are organized by subject, and the app suggests a class based on when the image was captured.",
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
      pt: "API para gestão de padarias, com autenticação, controle de estoque, vendas e rastreamento de pedidos.",
      en: "An API for bakery management, with authentication, stock control, sales, and order tracking.",
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
      pt: "Ferramenta que converte arquivos multimídia com processamento local no navegador.",
      en: "A tool that converts multimedia files locally in the browser.",
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
      pt: "Plataforma para uma empresa de jardinagem, com um formulário que usa IA para recomendar plantas.",
      en: "A platform for a gardening company, with a form that uses AI to recommend plants.",
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
      capabilities: { number: "02 prática", title: "o que eu construo", intro: "como trabalho com APIs, dados e interfaces." },
      about: { number: "03 percurso", title: "trajetória", all: "Conhecer a trajetória" },
      contact: { number: "04 conversa", title: "vamos conversar?", intro: "busco oportunidades de estágio ou posições de início de carreira em desenvolvimento de software." },
    },
    capabilities: [
      { number: "01", title: "APIs e arquitetura", text: "Construo APIs com serviços, regras de negócio e integrações organizados em módulos.", tech: ["TypeScript", "Node.js", "NestJS", "FastAPI"] },
      { number: "02", title: "dados e acesso", text: "O armazenamento dos dados, a autenticação e as permissões de acesso também fazem parte do meu trabalho.", tech: ["PostgreSQL", "Prisma", "JWT", "Supabase Auth"] },
      { number: "03", title: "produto completo", text: "No frontend, desenvolvo interfaces e conecto os fluxos de uso ao backend.", tech: ["React", "Next.js", "WebSockets", "Docker"] },
    ],
    contact: { email: "E-mail", copy: "copiar e-mail", copied: "e-mail copiado", failed: "não foi possível copiar; selecione o endereço acima.", message: "uma conversa pode começar por aqui.", resumeDownload: "baixar currículo (PDF)", external: "Abrir", repo: "Repositório", live: "Acessar projeto", details: "Detalhes", more: "mais projetos", archive: "arquivo", selected: "selecionados" },
    journey: [
        { label: "origem", title: "bots, lógica e SQL", text: "Comecei aos 13 anos, durante a pandemia, criando bots de Discord em Python. Aprendi lógica e SQL enquanto resolvia bugs e procurava respostas no YouTube e no Stack Overflow." },
        { label: "formação", title: "desenvolvimento web na FIAP School", text: "Cursei Técnico em Informática na FIAP School de 2023 a 2025. No primeiro ano, conheci desenvolvimento web e comecei a construir aplicações completas fora da escola. Um dos primeiros projetos foi um clone do Twitter/X." },
        { label: "hoje", title: "backend e engenharia de software", text: "No segundo ano do técnico, conheci o NestJS e comecei a usá-lo em projetos como Crumbly e Nomuz. Hoje estudo Engenharia de Software na FIAP. Comecei em 2026, com conclusão prevista para 2029, e sigo com foco em backend e APIs." },
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
      capabilities: { number: "02 practice", title: "what I build", intro: "how I work with APIs, data, and interfaces." },
      about: { number: "03 about", title: "about", all: "Read more" },
      contact: { number: "04 conversation", title: "let's talk?", intro: "open to internships and early-career software development roles." },
    },
    capabilities: [
      { number: "01", title: "APIs and architecture", text: "I build APIs with services, business rules, and integrations organized into modules.", tech: ["TypeScript", "Node.js", "NestJS", "FastAPI"] },
      { number: "02", title: "data and access", text: "My work also includes data storage, authentication, and access permissions.", tech: ["PostgreSQL", "Prisma", "JWT", "Supabase Auth"] },
      { number: "03", title: "complete products", text: "On the frontend, I build interfaces and connect user flows to the backend.", tech: ["React", "Next.js", "WebSockets", "Docker"] },
    ],
    contact: { email: "Email", copy: "copy email", copied: "email copied", failed: "could not copy; select the address above.", message: "a conversation can start here.", resumeDownload: "download résumé (PDF, PT)", external: "Open", repo: "Repository", live: "Visit project", details: "Details", more: "more projects", archive: "archive", selected: "selected" },
    journey: [
        { label: "origin", title: "bots, logic, and SQL", text: "I started at 13, during the pandemic, building Discord bots in Python. I learned programming logic and SQL while fixing bugs and searching YouTube and Stack Overflow for answers." },
        { label: "education", title: "web development at FIAP School", text: "I studied Information Technology at FIAP School from 2023 to 2025. In my first year, I discovered web development and began building complete applications outside school. One of my first projects was a Twitter/X clone." },
        { label: "today", title: "backend and software engineering", text: "In my second year at FIAP School, I discovered NestJS and started using it in projects such as Crumbly and Nomuz. I started studying Software Engineering at FIAP in 2026 and expect to graduate in 2029. My focus remains on backend development and APIs." },
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
