/* ═══════════════════════════════════════════════════════════
   main.js — Lógica compartilhada por todas as páginas
═══════════════════════════════════════════════════════════ */

/* ── NAV ATIVO ── */
function initNav() {
  const currentPath = window.location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    // verifica se o link aponta para a página atual
    const isActive = currentPath.endsWith(href) || 
                     (href === 'index.html' && (currentPath.endsWith('/') || currentPath === ''));
    a.classList.toggle('active', isActive);
  });

  // scroll spy para seções na mesma página
  const sections = document.querySelectorAll('section[id]');
  if (sections.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          document.querySelectorAll('.nav-links a').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => observer.observe(s));
  }

  // hamburger mobile
  const ham = document.querySelector('.nav-hamburger');
  const links = document.querySelector('.nav-links');
  if (ham && links) {
    ham.addEventListener('click', () => {
      links.classList.toggle('open');
      ham.textContent = links.classList.contains('open') ? '✕' : '☰';
    });
    // fechar ao clicar em link
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        ham.textContent = '☰';
      });
    });
  }
}

/* ── INTERSECTION OBSERVER para score bars ── */
function initScoreBarAnimations() {
  const cards = document.querySelectorAll('.deck-card');
  if (!cards.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(c => obs.observe(c));
}

/* ── HELPERS DE RENDER ── */
const COLOR_MAP = { vel:'#e08060', con:'#5588ee', int:'#cc5588', combo:'#cc44aa', mana:'#4caf82', sin:'#c9a84c' };
const SCORE_LABELS = { vel:'Velocidade', con:'Consistência', int:'Interação', combo:'Combos', mana:'Mana', sin:'Sinergia' };

function renderPips(colors) {
  return colors.map(c => `<div class="pip pip-${c}" title="${c}">${c}</div>`).join('');
}

function renderStars(n, max = 10) {
  const full = Math.round(n);
  return Array.from({ length: max }, (_, i) =>
    `<span class="star${i < full ? ' on' : ''}">${i < full ? '★' : '☆'}</span>`
  ).join('');
}

function typeBadgeClass(type) {
  return { proxy:'b-proxy', intacto:'b-intacto', alterado:'b-alterado', custom:'b-custom' }[type] || 'b-intacto';
}
function typeBadgeLbl(type) {
  return { proxy:'🔴 Proxy', intacto:'🟢 Precon Intacto', alterado:'🟡 Precon Alterado', custom:'🔵 Customizado' }[type] || type;
}

function noteColor(n) {
  if (n >= 7.5) return 'var(--green)';
  if (n >= 6)   return 'var(--gold)';
  return 'var(--text2)';
}

function renderScoreBars(scores) {
  return Object.entries(SCORE_LABELS).map(([k, lbl]) => `
    <div class="score-row">
      <span class="score-lbl">${lbl}</span>
      <div class="score-track">
        <div class="score-fill" style="width:${scores[k]*10}%;background:${COLOR_MAP[k]}"></div>
      </div>
      <span class="score-val">${scores[k]}</span>
    </div>`
  ).join('');
}

function renderTagList(arr, cls = '') {
  return arr.map(t => `<span class="tag ${cls}">${t}</span>`).join('');
}

function renderDeckCard(deck, rank) {
  const addsBlock = deck.cardsAdicionados.length
    ? `<div class="detail-block"><strong>Cartas Adicionadas</strong><div class="tag-group">${renderTagList(deck.cardsAdicionados,'add')}</div></div>`
    : '';
  const rmBlock = deck.cardsRemovidos && deck.cardsRemovidos.length
    ? `<div class="detail-block"><strong>Cartas Removidas</strong><div class="tag-group">${renderTagList(deck.cardsRemovidos,'rm')}</div></div>`
    : '';
  const proxyEvBlock = deck.proxyEvidence
    ? `<div class="detail-block"><strong>Evidência de Proxy</strong>${deck.proxyEvidence}</div>`
    : '';

  return `
  <div class="deck-card" data-type="${deck.type}" data-id="${deck.id}" data-colorid="${deck.colors.join('')}">
    ${rank ? `<div class="deck-rank-ghost">${rank}</div>` : ''}
    <div class="deck-head">
      <span class="deck-badge ${typeBadgeClass(deck.type)}">${typeBadgeLbl(deck.type)}</span>
      <div class="deck-name">${deck.name}</div>
      <div class="deck-cmd">${deck.commander}${deck.altCommander ? ` · ${deck.altCommander}` : ''}</div>
      <div class="color-pips">${renderPips(deck.colors)}</div>
      <div class="deck-arq">${deck.arquetipo}</div>
    </div>
    <div class="score-list">${renderScoreBars(deck.scores)}</div>
    <div class="nota-block">
      <div class="nota-row">
        <span class="nota-lbl">Poder</span>
        <div class="nota-stars">${renderStars(deck.nota)}</div>
        <span class="nota-num" style="color:${noteColor(deck.nota)}">${deck.nota}/10</span>
      </div>
      <div class="nota-row">
        <span class="nota-lbl" style="color:var(--blue)">2v2</span>
        <div class="nota-stars">${renderStars(deck.nota2v2)}</div>
        <span class="nota-num blue">${deck.nota2v2}/10</span>
      </div>
    </div>
    <button class="expand-btn" onclick="toggleExpand(this)">
      <span class="expand-arrow">▼</span>&nbsp;Ver análise
    </button>
    <div class="deck-detail">
      <div class="detail-block"><strong>Análise</strong>${deck.analise}</div>
      <div class="detail-block"><strong>Por que em 2v2?</strong>${deck.why2v2}</div>
      <div class="detail-block"><strong>Win-cons</strong><div class="tag-group">${renderTagList(deck.wincons,'win')}</div></div>
      ${addsBlock}${rmBlock}${proxyEvBlock}
      <div class="detail-block"><strong>Precon / Origem</strong>${deck.precon}</div>
      <div class="detail-block"><strong>Bracket</strong> ${deck.bracket} &nbsp;·&nbsp; <strong>Cores</strong> ${deck.colorName}</div>
      <div class="mt-2">
        <a class="btn btn-outline btn-sm" href="${deck.moxfield}" target="_blank" rel="noopener">
          🔗 Ver no Moxfield
        </a>
      </div>
    </div>
  </div>`;
}

function toggleExpand(btn) {
  btn.classList.toggle('open');
  btn.querySelector('.expand-arrow').style.transform =
    btn.classList.contains('open') ? 'rotate(180deg)' : '';
  const detail = btn.nextElementSibling;
  detail.classList.toggle('open');
}

/* ── FILTER BAR ── */
function initFilterBar(gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      const f = btn.dataset.f;
      grid.querySelectorAll('.deck-card').forEach(card => {
        card.classList.toggle('hidden', f !== 'all' && card.dataset.type !== f);
      });
    });
  });
}

/* ── TABELA SORTÁVEL ── */
function initSortableTable(tbodyId, data, renderRow) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;

  let sortCol = 'nota', sortAsc = false;

  function render() {
    const sorted = [...data].sort((a, b) => {
      let va = a[sortCol], vb = b[sortCol];
      if (typeof va === 'string') { va = va.toLowerCase(); vb = vb.toLowerCase(); }
      return sortAsc ? (va > vb ? 1 : -1) : (va < vb ? 1 : -1);
    });
    tbody.innerHTML = sorted.map((d, i) => renderRow(d, i + 1)).join('');
    document.querySelectorAll('th[data-col]').forEach(th => {
      th.classList.toggle('sorted', th.dataset.col === sortCol);
      const arr = th.querySelector('.sort-arrow');
      if (arr) arr.textContent = th.dataset.col === sortCol ? (sortAsc ? ' ▲' : ' ▼') : '';
    });
  }

  document.querySelectorAll('th[data-col]').forEach(th => {
    th.addEventListener('click', () => {
      if (sortCol === th.dataset.col) sortAsc = !sortAsc;
      else { sortCol = th.dataset.col; sortAsc = false; }
      render();
    });
  });

  render();
}

/* ── INIT GLOBAL ── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScoreBarAnimations();
});
