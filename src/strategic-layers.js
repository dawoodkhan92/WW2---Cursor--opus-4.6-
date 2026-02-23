import L from 'leaflet';
import { chokepoints, navalBases, defensiveLines, industrialRegions } from './strategic.js';

let chokepointLayer, navalBaseLayer, defensiveLineLayer, industrialLayer;

function svgIcon(svgContent, size = 24) {
  return L.divIcon({
    html: svgContent,
    className: 'strategic-icon',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

const chokepointSvg = `<svg viewBox="0 0 24 24" width="24" height="24">
  <polygon points="12,2 22,12 12,22 2,12" fill="#fbbf24" fill-opacity="0.85" stroke="#92400e" stroke-width="1.5"/>
  <text x="12" y="16" text-anchor="middle" font-size="11" font-weight="bold" fill="#78350f">!</text>
</svg>`;

const navalBaseSvg = `<svg viewBox="0 0 24 24" width="22" height="22">
  <circle cx="12" cy="12" r="10" fill="#1e3a5f" fill-opacity="0.85" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#93c5fd">⚓</text>
</svg>`;

const industrialSvg = `<svg viewBox="0 0 24 24" width="22" height="22">
  <rect x="2" y="2" width="20" height="20" rx="3" fill="#78350f" fill-opacity="0.85" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="12" y="17" text-anchor="middle" font-size="13" fill="#fde68a">⚙</text>
</svg>`;

export function createStrategicLayers(map) {
  chokepointLayer = L.layerGroup();
  chokepoints.forEach(cp => {
    const marker = L.marker([cp.lat, cp.lng], {
      icon: svgIcon(chokepointSvg, 24),
    });
    marker.bindTooltip(buildChokepointTooltip(cp), {
      className: 'strategic-tooltip',
      direction: 'top',
      offset: [0, -14],
    });
    chokepointLayer.addLayer(marker);
  });
  chokepointLayer.addTo(map);

  navalBaseLayer = L.layerGroup();
  navalBases.forEach(nb => {
    const marker = L.marker([nb.lat, nb.lng], {
      icon: svgIcon(navalBaseSvg, 22),
    });
    marker.bindTooltip(buildNavalTooltip(nb), {
      className: 'strategic-tooltip',
      direction: 'top',
      offset: [0, -12],
    });
    navalBaseLayer.addLayer(marker);
  });
  navalBaseLayer.addTo(map);

  defensiveLineLayer = L.layerGroup();
  defensiveLines.forEach(dl => {
    const latlngs = dl.coordinates.map(c => [c[0], c[1]]);
    const line = L.polyline(latlngs, {
      color: '#ef4444',
      weight: 3,
      opacity: 0.8,
      dashArray: '8 4',
    });
    line.bindTooltip(buildDefenseTooltip(dl), {
      className: 'strategic-tooltip',
      sticky: true,
    });
    defensiveLineLayer.addLayer(line);
  });
  defensiveLineLayer.addTo(map);

  industrialLayer = L.layerGroup();
  industrialRegions.forEach(ir => {
    const marker = L.marker([ir.lat, ir.lng], {
      icon: svgIcon(industrialSvg, 22),
    });
    marker.bindTooltip(buildIndustrialTooltip(ir), {
      className: 'strategic-tooltip',
      direction: 'top',
      offset: [0, -12],
    });
    industrialLayer.addLayer(marker);
  });
  industrialLayer.addTo(map);

  return { chokepointLayer, navalBaseLayer, defensiveLineLayer, industrialLayer };
}

function buildChokepointTooltip(cp) {
  return `<div class="tt-title">◆ ${cp.name}</div>
          <div class="tt-detail">Controller: ${cp.controller.toUpperCase()}</div>
          <div class="tt-detail">${cp.significance}</div>`;
}

function buildNavalTooltip(nb) {
  return `<div class="tt-title">⚓ ${nb.name}</div>
          <div class="tt-detail">${nb.nation.toUpperCase()} — ${nb.fleet}</div>`;
}

function buildDefenseTooltip(dl) {
  return `<div class="tt-title">🛡 ${dl.name}</div>
          <div class="tt-detail">${dl.nation.toUpperCase()}</div>
          <div class="tt-detail">${dl.description}</div>`;
}

function buildIndustrialTooltip(ir) {
  return `<div class="tt-title">⚙ ${ir.name}</div>
          <div class="tt-detail">${ir.nation.toUpperCase()}</div>
          <div class="tt-detail">${ir.significance}</div>`;
}

export function toggleLayer(layerName, visible, map) {
  const layers = {
    chokepoints: chokepointLayer,
    naval: navalBaseLayer,
    defensive: defensiveLineLayer,
    industrial: industrialLayer,
  };

  const layer = layers[layerName];
  if (!layer) return;

  if (visible) {
    if (!map.hasLayer(layer)) map.addLayer(layer);
  } else {
    if (map.hasLayer(layer)) map.removeLayer(layer);
  }
}
