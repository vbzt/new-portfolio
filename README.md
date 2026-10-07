# Portfólio de Vitor Buzato

Portfólio bilíngue em Next.js. A home (`/`) reúne apresentação, projetos selecionados, competências, trajetória e contato. O arquivo completo fica em `/projects`. O idioma é controlado por React Context e salvo no navegador; português é o idioma inicial e dos metadados públicos.

A página de projetos usa linhas editoriais para os três destaques, com explicações e diagramas, seguidas pelo arquivo de outros projetos.

O header reúne apenas início e projetos à esquerda, com currículo e seleção textual `pt / en` à direita, em uma linha. A cópia do e-mail também usa um controle textual, com confirmação por 2,5 segundos e orientação caso a área de transferência não esteja disponível.

As descrições principais usam 15px, cor secundária e entrelinha de 1,65. Detalhes complementares ficam em 14px. Projetos, competências e trajetória compartilham o alinhamento das colunas na home. Os textos em português e inglês descrevem os produtos e distinguem as contribuições pessoais, mantendo a trajetória como referência de voz.

No diagrama TrackSafe, os rótulos dos módulos ficam inteiros. Quando o espaço interno fica menor ou igual a 420px, os três módulos passam a linhas com número, título e descrição.

A abertura usa o retrato editorial com a foto `public/673314_007(1).jpg`, em cores originais e com posição vertical de 10% (`object-position: 50% 10%`). A foto aparece ao lado da apresentação no desktop e abaixo dela em telas menores. Os controles temporários de comparação foram retirados.

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
- `components/HomeHero.tsx`: apresentação e retrato da abertura.
- `public/curriculo-vitor-buzato.pdf`: currículo em português servido em `/curriculo-vitor-buzato.pdf`; o cabeçalho abre o PDF e o contato permite baixá-lo.
- `app/`: rotas `/` e `/projects`; `components/LanguageProvider.tsx` controla o idioma na interface.
- `app/globals.css`: tokens do Tailwind v4, estilos globais e CSS dos diagramas. Layout e estados responsivos ficam nas classes utilitárias dos componentes.
- `lib/metadata.ts`, `app/sitemap.ts` e `app/robots.ts`: metadados e descoberta.

Os projetos usam `slug` para permitir futuras páginas individuais. Adicione links de deploy ou estudos de caso somente quando existirem; não há links provisórios. Os TODOs em `lib/portfolio.ts` indicam informações ainda pendentes de confirmação.

As decisões de produto e design estão em [DESIGN.md](DESIGN.md).

O repositório principal é [vbzt/portfolio](https://github.com/vbzt/portfolio), na branch `master`. A implementação anterior está preservada na branch [legacy-before-redesign](https://github.com/vbzt/portfolio/tree/legacy-before-redesign). O histórico de construção da nova versão também permanece em [vbzt/new-portfolio](https://github.com/vbzt/new-portfolio).
