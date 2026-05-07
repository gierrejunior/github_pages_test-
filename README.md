# Meus Decks de Commander — MTG

Site estático de análise completa dos 12 decks de Commander.  
Funciona diretamente no GitHub Pages — sem build, sem dependências.

## Estrutura

```
index.html              ← Página inicial
pages/
  decks.html            ← Galeria com todos os 12 decks
  rankings.html         ← Rankings de poder e 2v2
  comparativos.html     ← Comparador side-by-side com radar
  commander-duplas.html ← Guia do modo Commander em Duplas
  estatisticas.html     ← Gráficos e análise da coleção
css/
  style.css             ← Design system completo
  responsive.css        ← Breakpoints e mobile
js/
  decks-data.js         ← Fonte única de todos os dados
  main.js               ← Lógica compartilhada (nav, cards, filtros)
  charts.js             ← Gráficos via Chart.js CDN
```

## Deploy no GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos mantendo a estrutura de pastas
3. Em Settings → Pages → selecione a branch `main` e pasta `/root`
4. O site estará disponível em `https://seuusuario.github.io/nome-do-repo`

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis e grid
- JavaScript vanilla (ES6+)
- [Chart.js 4.4](https://www.chartjs.org/) via CDN (apenas nas páginas de gráficos)
- Google Fonts via CDN

## Dados

Os dados estão em `js/decks-data.js`. Para atualizar qualquer informação de deck,
edite o array `DECKS` neste arquivo — todas as páginas se atualizam automaticamente.
