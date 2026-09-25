# Portfólio de Vitor Buzato

Portfólio bilíngue em Next.js, com páginas estáticas para português (`/pt`) e inglês (`/en`). A home reúne apresentação, projetos selecionados, competências, trajetória e contato. As rotas `/pt/projects`, `/en/projects`, `/pt/about` e `/en/about` aprofundam o conteúdo.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:3000/pt`. Para verificar a versão de produção:

```bash
npm run lint
npm run build
```

## Conteúdo e estrutura

- `lib/portfolio.ts`: dados dos projetos, links e textos em português e inglês. Adicione novos projetos a `selectedProjects` ou `archiveProjects` e preencha os dois idiomas.
- `components/PortfolioBlocks.tsx`: componentes de projeto, seções, contato e rodapé.
- `app/[lang]/`: páginas e layout por idioma. O conteúdo principal é renderizado no servidor.
- `app/globals.css`: tokens de cor, tipografia, layout e estados responsivos.
- `lib/metadata.ts`, `app/sitemap.ts` e `app/robots.ts`: metadados e descoberta.

Os projetos usam `slug` para permitir futuras páginas individuais. Adicione links de deploy ou estudos de caso somente quando existirem; não há links provisórios. Os TODOs em `lib/portfolio.ts` indicam informações ainda pendentes de confirmação.

As decisões de produto e design estão em [`../context.md`](../context.md). O repositório `../old` contém a implementação anterior para referência.
