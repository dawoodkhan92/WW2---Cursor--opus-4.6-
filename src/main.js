import './style.css';
import { initMap, getMap, toggleTerritoryColors } from './map.js';
import { initInfoPanel, showTerritoryInfo } from './info-panel.js';
import { createStrategicLayers, toggleLayer } from './strategic-layers.js';
import { initPlanning, clearAllPlanning, getPlanningData, loadPlanningData } from './planning.js';
import { savePlan, loadPlan, getPlanNames, exportPlanAsJSON, deletePlan } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const map = initMap(onTerritoryClick);

  initInfoPanel();
  createStrategicLayers(map);
  initPlanning(map);

  setupLayerToggles(map);
  setupTopBarButtons();
});

function onTerritoryClick(props) {
  showTerritoryInfo(props);
}

function setupLayerToggles(map) {
  const toggles = {
    'layer-chokepoints': 'chokepoints',
    'layer-naval': 'naval',
    'layer-defensive': 'defensive',
    'layer-industrial': 'industrial',
  };

  Object.entries(toggles).forEach(([checkboxId, layerName]) => {
    const checkbox = document.getElementById(checkboxId);
    if (checkbox) {
      checkbox.addEventListener('change', () => {
        toggleLayer(layerName, checkbox.checked, map);
      });
    }
  });

  const territoryToggle = document.getElementById('layer-territories');
  if (territoryToggle) {
    territoryToggle.addEventListener('change', () => {
      toggleTerritoryColors(territoryToggle.checked);
    });
  }
}

function setupTopBarButtons() {
  document.getElementById('btn-save').addEventListener('click', showSaveModal);
  document.getElementById('btn-load').addEventListener('click', showLoadModal);
  document.getElementById('btn-export').addEventListener('click', handleExport);
  document.getElementById('btn-clear').addEventListener('click', handleClear);
}

function showSaveModal() {
  const overlay = document.getElementById('modal-overlay');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');
  const confirm = document.getElementById('modal-confirm');
  const cancel = document.getElementById('modal-cancel');

  title.textContent = 'SAVE BATTLE PLAN';
  body.innerHTML = `
    <label class="modal-label">Plan Name:</label>
    <input type="text" id="save-name-input" class="modal-input" placeholder="e.g. Operation Barbarossa" maxlength="50" />
  `;

  overlay.classList.remove('hidden');

  const input = document.getElementById('save-name-input');
  input.focus();

  const onConfirm = () => {
    const name = input.value.trim();
    if (!name) return;
    const data = getPlanningData();
    savePlan(name, data);
    overlay.classList.add('hidden');
    showStatus(`PLAN SAVED: ${name.toUpperCase()}`);
    cleanup();
  };

  const onCancel = () => {
    overlay.classList.add('hidden');
    cleanup();
  };

  const cleanup = () => {
    confirm.removeEventListener('click', onConfirm);
    cancel.removeEventListener('click', onCancel);
  };

  confirm.addEventListener('click', onConfirm);
  cancel.addEventListener('click', onCancel);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') onConfirm(); });
}

function showLoadModal() {
  const overlay = document.getElementById('modal-overlay');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');
  const confirm = document.getElementById('modal-confirm');
  const cancel = document.getElementById('modal-cancel');

  const names = getPlanNames();
  title.textContent = 'LOAD BATTLE PLAN';

  if (names.length === 0) {
    body.innerHTML = '<p class="modal-empty">No saved battle plans found.</p>';
  } else {
    let html = '<div class="plan-list">';
    names.forEach(name => {
      html += `
        <div class="plan-list-item" data-plan="${name}">
          <span class="plan-name">${name}</span>
          <button class="plan-delete" data-delete="${name}" title="Delete">✕</button>
        </div>`;
    });
    html += '</div>';
    body.innerHTML = html;

    body.querySelectorAll('.plan-list-item').forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target.classList.contains('plan-delete')) return;
        body.querySelectorAll('.plan-list-item').forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
      });
    });

    body.querySelectorAll('.plan-delete').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const planName = btn.dataset.delete;
        deletePlan(planName);
        btn.parentElement.remove();
        if (body.querySelectorAll('.plan-list-item').length === 0) {
          body.innerHTML = '<p class="modal-empty">No saved battle plans found.</p>';
        }
      });
    });
  }

  overlay.classList.remove('hidden');

  const onConfirm = () => {
    const selected = body.querySelector('.plan-list-item.selected');
    if (!selected) return;
    const name = selected.dataset.plan;
    const data = loadPlan(name);
    if (data) {
      loadPlanningData(data);
      showStatus(`PLAN LOADED: ${name.toUpperCase()}`);
    }
    overlay.classList.add('hidden');
    cleanup();
  };

  const onCancel = () => {
    overlay.classList.add('hidden');
    cleanup();
  };

  const cleanup = () => {
    confirm.removeEventListener('click', onConfirm);
    cancel.removeEventListener('click', onCancel);
  };

  confirm.addEventListener('click', onConfirm);
  cancel.addEventListener('click', onCancel);
}

function handleExport() {
  const data = getPlanningData();
  if (data.length === 0) {
    showStatus('NOTHING TO EXPORT — PLACE UNITS OR DRAW FIRST');
    return;
  }
  const name = `plan-${new Date().toISOString().slice(0, 10)}`;
  exportPlanAsJSON(name, data);
  showStatus('BATTLE PLAN EXPORTED');
}

function handleClear() {
  if (getPlanningData().length === 0) return;
  if (confirm('Clear all battle planning markers and drawings?')) {
    clearAllPlanning();
    showStatus('ALL PLANNING MARKERS CLEARED');
  }
}

function showStatus(message) {
  const el = document.getElementById('status-message');
  el.textContent = message;
  setTimeout(() => {
    el.textContent = 'SELECT A TERRITORY FOR INTELLIGENCE BRIEFING';
  }, 3000);
}
