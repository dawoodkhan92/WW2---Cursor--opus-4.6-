import { nations } from './nations.js';

const panelEl = document.getElementById('info-panel');
const contentEl = document.getElementById('panel-content');
const closeBtn = document.getElementById('panel-close');
const statusMsg = document.getElementById('status-message');

const ALLIANCE_LABELS = {
  axis: 'AXIS POWERS',
  allies: 'ALLIED POWERS',
  soviet: 'SOVIET UNION',
  us: 'UNITED STATES',
  neutral: 'NEUTRAL',
  neutral_axis: 'NEUTRAL (Axis-leaning)',
  neutral_allied: 'NEUTRAL (Allied-leaning)',
};

const ALLIANCE_BADGE_CLASS = {
  axis: 'badge-axis',
  allies: 'badge-allies',
  soviet: 'badge-soviet',
  us: 'badge-us',
  neutral: 'badge-neutral',
  neutral_axis: 'badge-neutral-axis',
  neutral_allied: 'badge-neutral-allied',
};

const TYPE_LABELS = {
  core: '',
  colony: 'Colony',
  protectorate: 'Protectorate',
  mandate: 'League Mandate',
  puppet: 'Puppet State',
  dominion: 'Dominion',
  occupied: 'Occupied Territory',
};

export function initInfoPanel() {
  closeBtn.addEventListener('click', () => {
    panelEl.classList.add('hidden');
    statusMsg.textContent = 'SELECT A TERRITORY FOR INTELLIGENCE BRIEFING';
  });
}

export function showTerritoryInfo(props) {
  const nation = nations[props.controller];
  if (!nation && props.id === 'unclaimed') {
    statusMsg.textContent = 'NO INTELLIGENCE AVAILABLE';
    return;
  }

  panelEl.classList.remove('hidden');

  const territoryName = props.name || 'Unknown Territory';
  const typeLabel = TYPE_LABELS[props.type] || '';
  const allianceLabel = nation
    ? ALLIANCE_LABELS[nation.alliance] || 'UNKNOWN'
    : ALLIANCE_LABELS[props.alliance] || 'UNKNOWN';
  const badgeClass = nation
    ? ALLIANCE_BADGE_CLASS[nation.alliance] || 'badge-neutral'
    : ALLIANCE_BADGE_CLASS[props.alliance] || 'badge-neutral';

  statusMsg.textContent = `BRIEFING: ${territoryName.toUpperCase()}`;

  let html = `<div class="panel-header">`;
  html += `<h2 class="panel-territory-name">${territoryName}</h2>`;
  if (typeLabel) {
    html += `<span class="territory-type">${typeLabel}</span>`;
  }
  html += `<span class="alliance-badge ${badgeClass}">${allianceLabel}</span>`;
  html += `</div>`;

  if (nation) {
    html += `<div class="panel-section">`;
    html += `<div class="section-label">COMMANDING AUTHORITY</div>`;
    html += `<div class="leader-info">`;
    html += `<div class="leader-name">${nation.leader.name}</div>`;
    html += `<div class="leader-title">${nation.leader.title}</div>`;
    html += `</div>`;
    html += `</div>`;

    if (props.controller !== props.id && props.type !== 'core') {
      html += `<div class="panel-section">`;
      html += `<div class="section-label">SOVEREIGN POWER</div>`;
      html += `<div class="sovereign-name">${nation.name}</div>`;
      html += `</div>`;
    }

    html += `<div class="panel-section">`;
    html += `<div class="section-label">POPULATION</div>`;
    html += `<div class="stat-value">${formatNumber(nation.population)}</div>`;
    html += `</div>`;

    html += `<div class="panel-section">`;
    html += `<div class="section-label">MILITARY STRENGTH</div>`;
    html += buildMilitaryBars(nation.military);
    html += `</div>`;

    html += `<div class="panel-section">`;
    html += `<div class="section-label">KEY RESOURCES</div>`;
    html += `<div class="resources-list">`;
    nation.resources.forEach(r => {
      html += `<span class="resource-tag">${r}</span>`;
    });
    html += `</div>`;
    html += `</div>`;

    if (nation.notes) {
      html += `<div class="panel-section">`;
      html += `<div class="section-label">STRATEGIC ASSESSMENT</div>`;
      html += `<p class="notes-text">${nation.notes}</p>`;
      html += `</div>`;
    }
  } else {
    html += `<div class="panel-section">`;
    html += `<p class="notes-text">Limited intelligence available for this territory.</p>`;
    html += `</div>`;
  }

  contentEl.innerHTML = html;
}

function buildMilitaryBars(mil) {
  const maxTroops = 5000000;
  const maxShips = 20;
  const maxSubs = 170;
  const maxAir = 5500;

  let html = '<div class="military-stats">';

  html += militaryBar('Active Troops', mil.activeTroops, maxTroops, formatNumber(mil.activeTroops));
  html += militaryBar('Reserves', mil.reserves, maxTroops, formatNumber(mil.reserves));
  html += militaryBar('Capital Ships', mil.capitalShips, maxShips, mil.capitalShips.toString());
  html += militaryBar('Submarines', mil.submarines, maxSubs, mil.submarines.toString());
  html += militaryBar('Aircraft', mil.aircraft, maxAir, formatNumber(mil.aircraft));

  html += '</div>';
  return html;
}

function militaryBar(label, value, max, displayValue) {
  const pct = Math.min(100, (value / max) * 100);
  return `
    <div class="mil-bar-row">
      <span class="mil-bar-label">${label}</span>
      <span class="mil-bar-value">${displayValue}</span>
      <div class="mil-bar-track">
        <div class="mil-bar-fill" style="width:${pct}%"></div>
      </div>
    </div>`;
}

function formatNumber(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
  return n.toString();
}
