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
  resume: {
    pt: "https://docs.google.com/document/d/1UH2OT_F1BBe5n5wlnRhfdjF1SezjTyoBz7Qm-rCtmx4/edit?tab=t.0",
    en: "https://docs.google.com/document/d/1UH2OT_F1BBe5n5wlnRhfdjF1SezjTyoBz7Qm-rCtmx4/edit?tab=t.gbz01bqi8f4n",
  },
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
  visual?: "kart" | "nomuz" | "deepy";
};

// TODO: Replace or extend these entries with confirmed case studies, screenshots,
// results and individual pages when the project owner supplies them.
export const selectedProjects: Project[] = [
  {
    slug: "kart",
    name: "Kart",
    category: { pt: "API · projeto autoral", en: "API · independent project" },
    role: { pt: "Desenvolvimento integral", en: "Built independently" },
    description: {
      pt: "API para agendar baterias de drift de kart, gerenciar assinaturas e receber pagamentos Pix.",
      en: "An API for booking drift kart sessions, managing subscriptions, and taking Pix payments.",
    },
    detail: {
      pt: "Regras de disponibilidade e capacidade, autenticação com Supabase e integração com AbacatePay.",
      en: "Availability and capacity rules, Supabase authentication, and AbacatePay integration.",
    },
    tech: ["NestJS", "TypeScript", "Prisma", "Supabase Auth", "AbacatePay"],
    github: "https://github.com/vbzt/kart",
    visual: "kart",
  },
  {
    slug: "nomuz",
    name: "Nomuz",
    category: { pt: "Plataforma jurídica · equipe", en: "Legal platform · team" },
    role: { pt: "Arquitetura da API e backend", en: "API architecture and backend" },
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
    category: { pt: "Aplicativo de estudos · faculdade", en: "Study app · university project" },
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
    category: { pt: "Pessoal · 2024", en: "Personal · 2024" },
    role: { pt: "Solo", en: "Solo" },
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
    category: { pt: "Pessoal · 2024", en: "Personal · 2024" },
    role: { pt: "Solo", en: "Solo" },
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
    category: { pt: "Escola · 2024", en: "School · 2024" },
    role: { pt: "Tech Lead e backend", en: "Tech Lead and backend" },
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
    nav: { home: "Início", projects: "Projetos", capabilities: "Competências", about: "Trajetória", contact: "Contato", resume: "Currículo", language: "Idioma" },
    hero: {
      title: "Vitor de C. Buzato",
      lead: "Desenvolvedor de software e estudante de Engenharia de Software na FIAP. Meu foco está em backend, especialmente APIs, autenticação, dados e integrações.",
      projects: "Explorar projetos", contact: "Entrar em contato", index: "PORTFÓLIO / 2026",
      featured: "Projeto em destaque",
    },
    sections: {
      projects: { number: "01 / TRABALHOS", title: "Projetos selecionados", intro: "Três formas de resolver problemas reais: uma API de agendamentos, uma plataforma jurídica e um aplicativo de estudos.", all: "Ver arquivo completo" },
      capabilities: { number: "02 / PRÁTICA", title: "O que eu construo", intro: "Competências organizadas pelo papel que desempenham no software." },
      about: { number: "03 / PERCURSO", title: "Trajetória", intro: "Da curiosidade com bots à construção de aplicações completas.", all: "Conhecer a trajetória" },
      contact: { number: "04 / CONVERSA", title: "Vamos conversar?", intro: "Busco oportunidades de estágio ou desenvolvimento de software em início de carreira." },
    },
    capabilities: [
      { number: "01", title: "APIs e arquitetura", text: "Serviços, regras de negócio e integrações organizados em módulos claros.", tech: ["TypeScript", "Node.js", "NestJS", "FastAPI"] },
      { number: "02", title: "Dados e acesso", text: "Persistência, autenticação e permissões como parte central da experiência.", tech: ["PostgreSQL", "Prisma", "JWT", "Supabase Auth"] },
      { number: "03", title: "Produto completo", text: "Interfaces e fluxos que conectam as capacidades do backend a quem usa.", tech: ["React", "Next.js", "WebSockets", "Docker"] },
    ],
    journey: [
      { label: "Origem", title: "Primeiros projetos", text: "Comecei criando bots de Discord em Python e aprendendo lógica de programação e SQL." },
      { label: "Formação", title: "FIAP School → FIAP", text: "Cursei Técnico em Informática na FIAP School e estudo Engenharia de Software na FIAP." },
      { label: "Direção", title: "Backend como foco", text: "Encontrei no NestJS uma forma de organizar APIs e construir projetos como Crumbly, Nomuz e Kart." },
    ],
    contact: { email: "E-mail", copy: "Copiar e-mail", copied: "E-mail copiado", failed: "Não foi possível copiar", message: "Uma conversa pode começar por aqui.", external: "Abrir", repo: "Repositório", live: "Acessar projeto", details: "Detalhes", more: "Mais projetos", archive: "Arquivo", selected: "Selecionados" },
    aboutPage: {
      eyebrow: "SOBRE / VITOR", title: "Uma trajetória em construção.", lead: "Sou Vitor de Castro Buzato, estudante de Engenharia de Software na FIAP e desenvolvedor com foco em backend e APIs.", close: "Hoje, procuro aplicar esse aprendizado em projetos e oportunidades de desenvolvimento de software.",
      chapters: [
        { label: "Origem", title: "Bots, lógica e SQL", text: "Comecei aos 13 anos, durante a pandemia, criando bots de Discord em Python. Aprendi lógica de programação e SQL resolvendo bugs e procurando respostas no YouTube e no Stack Overflow." },
        { label: "Formação", title: "FIAP School", text: "Ao perceber que gostava de programar, ingressei no curso Técnico em Informática da FIAP School, que cursei de 2023 a 2025." },
        { label: "Web", title: "Aplicações completas", text: "No primeiro ano, conheci o desenvolvimento web e passei a criar aplicações completas fora da escola. Um dos primeiros projetos foi um clone do Twitter/X." },
        { label: "Backend", title: "Encontrando o NestJS", text: "No segundo ano, encontrei o NestJS e passei a usá-lo como stack principal em projetos como Crumbly e Nomuz." },
        { label: "Hoje", title: "Engenharia de Software", text: "Estudo Engenharia de Software na FIAP. O curso de bacharelado está previsto para 2026 a 2030." },
      ],
    },
    projectsPage: { eyebrow: "PROJETOS / ARQUIVO", title: "Projetos em contexto.", lead: "Uma seleção do que venho construindo, com o papel, a solução e as tecnologias de cada trabalho.", archiveIntro: "Outros projetos já presentes no portfólio." },
    footer: "Projetado e desenvolvido por Vitor Buzato.",
    metadata: {
      home: "Vitor Buzato | Desenvolvimento de software e backend",
      homeDescription: "Portfólio de Vitor Buzato, estudante de Engenharia de Software na FIAP com foco em backend, APIs e desenvolvimento de software.",
      projects: "Projetos | Vitor Buzato",
      projectsDescription: "Kart, Nomuz, DeepY e outros projetos de software de Vitor Buzato.",
      about: "Trajetória | Vitor Buzato",
      aboutDescription: "Conheça a trajetória, formação e foco técnico de Vitor Buzato.",
    },
  },
  en: {
    skip: "Skip to content",
    nav: { home: "Home", projects: "Projects", capabilities: "Skills", about: "Journey", contact: "Contact", resume: "Résumé", language: "Language" },
    hero: {
      title: "Vitor de C. Buzato",
      lead: "Software developer and Software Engineering student at FIAP. I focus on backend work, especially APIs, authentication, data, and integrations.",
      projects: "Explore projects", contact: "Get in touch", index: "PORTFOLIO / 2026",
      featured: "Featured project",
    },
    sections: {
      projects: { number: "01 / WORK", title: "Selected projects", intro: "Three ways to solve real problems: a booking API, a legal platform, and a study app.", all: "View all projects" },
      capabilities: { number: "02 / PRACTICE", title: "What I build", intro: "Skills grouped by the part they play in software." },
      about: { number: "03 / PATH", title: "My journey", intro: "From curiosity about bots to building complete applications.", all: "Read my story" },
      contact: { number: "04 / CONVERSATION", title: "Let's talk?", intro: "I'm looking for internship or early-career software development opportunities." },
    },
    capabilities: [
      { number: "01", title: "APIs and architecture", text: "Services, business rules, and integrations organized into clear modules.", tech: ["TypeScript", "Node.js", "NestJS", "FastAPI"] },
      { number: "02", title: "Data and access", text: "Persistence, authentication, and permissions as central parts of the experience.", tech: ["PostgreSQL", "Prisma", "JWT", "Supabase Auth"] },
      { number: "03", title: "Complete products", text: "Interfaces and flows that connect backend capabilities to the people using them.", tech: ["React", "Next.js", "WebSockets", "Docker"] },
    ],
    journey: [
      { label: "Origin", title: "First projects", text: "I started building Discord bots in Python while learning programming logic and SQL." },
      { label: "Education", title: "FIAP School → FIAP", text: "I studied Information Technology at FIAP School and now study Software Engineering at FIAP." },
      { label: "Direction", title: "Backend as a focus", text: "NestJS became a way to organize APIs and build projects such as Crumbly, Nomuz, and Kart." },
    ],
    contact: { email: "Email", copy: "Copy email", copied: "Email copied", failed: "Could not copy", message: "A conversation can start here.", external: "Open", repo: "Repository", live: "Visit project", details: "Details", more: "More projects", archive: "Archive", selected: "Selected" },
    aboutPage: {
      eyebrow: "ABOUT / VITOR", title: "A journey in progress.", lead: "I'm Vitor de Castro Buzato, a Software Engineering student at FIAP and a developer focused on backend and APIs.", close: "Today, I look to apply that learning in projects and software development opportunities.",
      chapters: [
        { label: "Origin", title: "Bots, logic, and SQL", text: "I started at 13, during the pandemic, building Discord bots in Python. I learned programming logic and SQL by working through bugs and searching YouTube and Stack Overflow for answers." },
        { label: "Education", title: "FIAP School", text: "When I realized I enjoyed programming, I enrolled in the Information Technology technical program at FIAP School, which I attended from 2023 to 2025." },
        { label: "Web", title: "Complete applications", text: "In my first year, I discovered web development and started building full-stack applications outside school. One of my first projects was a Twitter/X clone." },
        { label: "Backend", title: "Finding NestJS", text: "I found NestJS in my second year and made it my main stack for projects such as Crumbly and Nomuz." },
        { label: "Today", title: "Software Engineering", text: "I study Software Engineering at FIAP. The bachelor's program is planned for 2026 to 2030." },
      ],
    },
    projectsPage: { eyebrow: "PROJECTS / ARCHIVE", title: "Projects in context.", lead: "A selection of what I've been building, with the role, solution, and technologies behind each project.", archiveIntro: "Other projects already featured in this portfolio." },
    footer: "Designed and developed by Vitor Buzato.",
    metadata: {
      home: "Vitor Buzato | Software development and backend",
      homeDescription: "Portfolio of Vitor Buzato, a Software Engineering student at FIAP focused on backend, APIs, and software development.",
      projects: "Projects | Vitor Buzato",
      projectsDescription: "Kart, Nomuz, DeepY, and other software projects by Vitor Buzato.",
      about: "Journey | Vitor Buzato",
      aboutDescription: "Learn about Vitor Buzato's journey, education, and technical focus.",
    },
  },
} as const;
