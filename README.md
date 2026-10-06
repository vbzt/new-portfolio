# Portfólio de Vitor Buzato

Portfólio bilíngue em Next.js. A home (`/`) reúne apresentação, projetos selecionados, competências, trajetória e contato. O arquivo completo fica em `/projects`. O idioma é controlado por React Context e salvo no navegador; português é o idioma inicial e dos metadados públicos.

A página de projetos usa linhas editoriais para os três destaques, com explicações e diagramas, seguidas pelo arquivo de outros projetos.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. Para verificar a versão de produção:

```bash
npm run lint
npm run build
```

## Conteúdo e estrutura

- `lib/portfolio.ts`: dados dos projetos, links e textos em português e inglês. Adicione novos projetos a `selectedProjects` ou `archiveProjects` e preencha os dois idiomas.
- `components/PortfolioBlocks.tsx`: componentes de projeto, seções, contato e rodapé.
- `public/curriculo-vitor-buzato.pdf`: currículo em português servido em `/curriculo-vitor-buzato.pdf`; o cabeçalho abre o PDF e o contato permite baixá-lo.
- `app/`: rotas `/` e `/projects`; `components/LanguageProvider.tsx` controla o idioma na interface.
- `app/globals.css`: tokens de cor, tipografia, layout e estados responsivos.
- `lib/metadata.ts`, `app/sitemap.ts` e `app/robots.ts`: metadados e descoberta.

Os projetos usam `slug` para permitir futuras páginas individuais. Adicione links de deploy ou estudos de caso somente quando existirem; não há links provisórios. Os TODOs em `lib/portfolio.ts` indicam informações ainda pendentes de confirmação.

As decisões de produto e design estão em [`../context.md`](../context.md). O repositório `../old` contém a implementação anterior para referência.
