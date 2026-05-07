/* ═══════════════════════════════════════════════════════════
   charts.js — Gráficos com Chart.js (via CDN)
═══════════════════════════════════════════════════════════ */

const CHART_DEFAULTS = {
  color: '#9898c0',
  gridColor: 'rgba(54,54,96,.4)',
  goldColor: '#c9a84c',
  gold2Color: '#e8c97e',
  font: "'JetBrains Mono', monospace",
  titleFont: "'Cinzel', serif",
};

Chart.defaults.color = CHART_DEFAULTS.color;
Chart.defaults.font.family = CHART_DEFAULTS.font;
Chart.defaults.font.size = 11;

function chartColors(n) {
  const palette = [
    '#c9a84c','#e8c97e','#4caf82','#5588ee','#e05555',
    '#9966cc','#44bbcc','#f08060','#6ec080','#bb77dd','#d4a017','#7ab0e8'
  ];
  return palette.slice(0, n);
}

/* ── Radar: perfil de um deck ── */
function createRadarChart(canvasId, deck) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  return new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Velocidade','Consistência','Interação','Combos','Mana','Sinergia'],
      datasets: [{
        label: deck.name,
        data: [deck.scores.vel, deck.scores.con, deck.scores.int, deck.scores.combo, deck.scores.mana, deck.scores.sin],
        backgroundColor: 'rgba(201,168,76,.15)',
        borderColor: CHART_DEFAULTS.goldColor,
        pointBackgroundColor: CHART_DEFAULTS.gold2Color,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: CHART_DEFAULTS.goldColor,
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      scales: {
        r: {
          min: 0, max: 10,
          ticks: { stepSize: 2, backdropColor: 'transparent', color: CHART_DEFAULTS.color },
          grid: { color: CHART_DEFAULTS.gridColor },
          angleLines: { color: CHART_DEFAULTS.gridColor },
          pointLabels: { font: { size: 11, family: CHART_DEFAULTS.font }, color: CHART_DEFAULTS.color }
        }
      },
      plugins: { legend: { display: false } }
    }
  });
}

/* ── Radar: comparação entre dois decks ── */
function createCompareRadar(canvasId, d1, d2) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  const colors = [
    { bg:'rgba(201,168,76,.15)',  line:'#c9a84c', pt:'#e8c97e' },
    { bg:'rgba(85,136,238,.15)',  line:'#5588ee', pt:'#7ab0e8' },
  ];

  return new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Velocidade','Consistência','Interação','Combos','Mana','Sinergia'],
      datasets: [d1, d2].map((d, i) => ({
        label: d.name,
        data: [d.scores.vel, d.scores.con, d.scores.int, d.scores.combo, d.scores.mana, d.scores.sin],
        backgroundColor: colors[i].bg,
        borderColor: colors[i].line,
        pointBackgroundColor: colors[i].pt,
        borderWidth: 2,
      }))
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      scales: {
        r: {
          min: 0, max: 10, ticks: { stepSize: 2, backdropColor: 'transparent' },
          grid: { color: CHART_DEFAULTS.gridColor },
          angleLines: { color: CHART_DEFAULTS.gridColor },
          pointLabels: { font: { size: 11 }, color: CHART_DEFAULTS.color }
        }
      },
      plugins: {
        legend: { position: 'bottom', labels: { padding: 16, boxWidth: 12, usePointStyle: true } }
      }
    }
  });
}

/* ── Bar: ranking geral ── */
function createRankingBar(canvasId, decks, field = 'nota', label = 'Poder Geral') {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  const sorted = [...decks].sort((a,b) => b[field] - a[field]);

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sorted.map(d => d.name),
      datasets: [{
        label,
        data: sorted.map(d => d[field]),
        backgroundColor: sorted.map(d => {
          if (d[field] >= 7.5) return 'rgba(76,175,130,.7)';
          if (d[field] >= 6)   return 'rgba(201,168,76,.7)';
          return 'rgba(90,90,150,.7)';
        }),
        borderColor: sorted.map(d => {
          if (d[field] >= 7.5) return '#4caf82';
          if (d[field] >= 6)   return '#c9a84c';
          return '#5c5c8c';
        }),
        borderWidth: 1,
        borderRadius: 4,
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true, maintainAspectRatio: false,
      scales: {
        x: { min: 0, max: 10, grid: { color: CHART_DEFAULTS.gridColor }, ticks: { stepSize: 1 } },
        y: { grid: { display: false }, ticks: { font: { size: 11 } } }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.dataset.label}: ${ctx.raw}/10`
          }
        }
      }
    }
  });
}

/* ── Doughnut: distribuição de tipos ── */
function createTypeDoughnut(canvasId, decks) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  const counts = { proxy: 0, intacto: 0, alterado: 0, custom: 0 };
  decks.forEach(d => { if (counts[d.type] !== undefined) counts[d.type]++; });

  return new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Proxy','Precon Intacto','Precon Alterado','Customizado'],
      datasets: [{
        data: [counts.proxy, counts.intacto, counts.alterado, counts.custom],
        backgroundColor: ['rgba(224,85,85,.8)','rgba(76,175,130,.8)','rgba(212,160,23,.8)','rgba(85,136,238,.8)'],
        borderColor: ['#e05555','#4caf82','#d4a017','#5588ee'],
        borderWidth: 1, hoverOffset: 6,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true, cutout: '65%',
      plugins: {
        legend: { position: 'bottom', labels: { padding: 14, boxWidth: 12, usePointStyle: true } }
      }
    }
  });
}

/* ── Bar: nota 2v2 ── */
function create2v2Bar(canvasId, decks) {
  return createRankingBar(canvasId, decks, 'nota2v2', 'Nota 2v2');
}

/* ── Radar: média geral da coleção ── */
function createCollectionRadar(canvasId, decks) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  const dims = ['vel','con','int','combo','mana','sin'];
  const avgs = dims.map(d => {
    const sum = decks.reduce((acc, dk) => acc + dk.scores[d], 0);
    return Math.round((sum / decks.length) * 10) / 10;
  });

  return new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Velocidade','Consistência','Interação','Combos','Mana','Sinergia'],
      datasets: [{
        label: 'Média da Coleção',
        data: avgs,
        backgroundColor: 'rgba(85,136,238,.12)',
        borderColor: '#5588ee',
        pointBackgroundColor: '#7ab0e8',
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      scales: {
        r: {
          min: 0, max: 10, ticks: { stepSize: 2, backdropColor: 'transparent' },
          grid: { color: CHART_DEFAULTS.gridColor },
          angleLines: { color: CHART_DEFAULTS.gridColor },
          pointLabels: { font: { size: 11 }, color: CHART_DEFAULTS.color }
        }
      },
      plugins: { legend: { display: false } }
    }
  });
}

/* ── Scatter: poder geral x nota 2v2 ── */
function createScatterPower2v2(canvasId, decks) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  return new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Decks',
        data: decks.map(d => ({ x: d.nota, y: d.nota2v2, name: d.name })),
        backgroundColor: chartColors(decks.length).map(c => c + 'cc'),
        borderColor: chartColors(decks.length),
        borderWidth: 1, pointRadius: 8, pointHoverRadius: 11,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      scales: {
        x: { min: 3, max: 10, title: { display: true, text: 'Poder Geral', color: CHART_DEFAULTS.color }, grid: { color: CHART_DEFAULTS.gridColor } },
        y: { min: 3, max: 10, title: { display: true, text: 'Nota 2v2',    color: CHART_DEFAULTS.color }, grid: { color: CHART_DEFAULTS.gridColor } }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.raw.name}: Geral ${ctx.raw.x} · 2v2 ${ctx.raw.y}`
          }
        }
      }
    }
  });
}
