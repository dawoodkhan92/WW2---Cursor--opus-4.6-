import L from 'leaflet';

let map;
let planningLayer;
let activeTool = 'select';
let arrowStartPoint = null;
let zoneStartPoint = null;
let tempLine = null;
let tempRect = null;

const UNIT_SVGS = {
  infantry: `<svg viewBox="0 0 40 40" width="32" height="32">
    <rect x="4" y="4" width="32" height="32" rx="2" fill="#1a1a2e" stroke="#ffd700" stroke-width="2"/>
    <line x1="4" y1="4" x2="36" y2="36" stroke="#ffd700" stroke-width="2"/>
    <line x1="36" y1="4" x2="4" y2="36" stroke="#ffd700" stroke-width="2"/>
  </svg>`,
  armor: `<svg viewBox="0 0 40 40" width="32" height="32">
    <rect x="4" y="4" width="32" height="32" rx="2" fill="#1a1a2e" stroke="#ffd700" stroke-width="2"/>
    <ellipse cx="20" cy="20" rx="12" ry="8" fill="none" stroke="#ffd700" stroke-width="2"/>
  </svg>`,
  artillery: `<svg viewBox="0 0 40 40" width="32" height="32">
    <rect x="4" y="4" width="32" height="32" rx="2" fill="#1a1a2e" stroke="#ffd700" stroke-width="2"/>
    <circle cx="20" cy="20" r="8" fill="#ffd700"/>
  </svg>`,
  naval: `<svg viewBox="0 0 40 40" width="32" height="32">
    <rect x="4" y="4" width="32" height="32" rx="2" fill="#0c1929" stroke="#60a5fa" stroke-width="2"/>
    <line x1="20" y1="8" x2="20" y2="32" stroke="#60a5fa" stroke-width="2"/>
    <path d="M10 24 Q20 16 30 24" fill="none" stroke="#60a5fa" stroke-width="2"/>
  </svg>`,
  airforce: `<svg viewBox="0 0 40 40" width="32" height="32">
    <rect x="4" y="4" width="32" height="32" rx="2" fill="#1a1a2e" stroke="#ffd700" stroke-width="2"/>
    <line x1="10" y1="20" x2="30" y2="20" stroke="#ffd700" stroke-width="2"/>
    <line x1="20" y1="10" x2="20" y2="30" stroke="#ffd700" stroke-width="2"/>
  </svg>`,
};

export function initPlanning(mapInstance) {
  map = mapInstance;
  planningLayer = L.layerGroup().addTo(map);

  setupToolbarListeners();
  setupMapListeners();
}

function setupToolbarListeners() {
  document.querySelectorAll('.tool-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tool = btn.dataset.tool;
      setActiveTool(tool);
    });
  });
}

function setActiveTool(tool) {
  activeTool = tool;
  cleanupTempDrawing();

  document.querySelectorAll('.tool-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tool === tool);
  });

  const mapContainer = map.getContainer();
  mapContainer.style.cursor = getCursorForTool(tool);

  if (tool === 'select') {
    map.dragging.enable();
  } else {
    if (tool === 'arrow' || tool === 'zone') {
      map.dragging.disable();
    } else {
      map.dragging.enable();
    }
  }
}

function getCursorForTool(tool) {
  switch (tool) {
    case 'infantry':
    case 'armor':
    case 'artillery':
    case 'naval':
    case 'airforce':
    case 'note':
      return 'crosshair';
    case 'arrow':
    case 'zone':
      return 'crosshair';
    case 'eraser':
      return 'pointer';
    default:
      return '';
  }
}

function setupMapListeners() {
  map.on('click', handleMapClick);
  map.on('mousemove', handleMapMouseMove);
  map.on('mouseup', handleMapMouseUp);
  map.on('mousedown', handleMapMouseDown);
}

function handleMapClick(e) {
  const unitTools = ['infantry', 'armor', 'artillery', 'naval', 'airforce'];
  if (unitTools.includes(activeTool)) {
    placeUnitMarker(e.latlng, activeTool);
    return;
  }

  if (activeTool === 'note') {
    promptAndPlaceNote(e.latlng);
    return;
  }

  if (activeTool === 'eraser') {
    return;
  }
}

function handleMapMouseDown(e) {
  if (activeTool === 'arrow') {
    arrowStartPoint = e.latlng;
    tempLine = L.polyline([arrowStartPoint, arrowStartPoint], {
      color: '#ffd700',
      weight: 2,
      dashArray: '6 4',
      opacity: 0.7,
    }).addTo(map);
    return;
  }

  if (activeTool === 'zone') {
    zoneStartPoint = e.latlng;
    tempRect = L.rectangle([zoneStartPoint, zoneStartPoint], {
      color: '#ffd700',
      weight: 2,
      fillColor: '#ffd700',
      fillOpacity: 0.1,
      dashArray: '6 4',
    }).addTo(map);
    return;
  }
}

function handleMapMouseMove(e) {
  if (activeTool === 'arrow' && arrowStartPoint && tempLine) {
    tempLine.setLatLngs([arrowStartPoint, e.latlng]);
    return;
  }

  if (activeTool === 'zone' && zoneStartPoint && tempRect) {
    tempRect.setBounds(L.latLngBounds(zoneStartPoint, e.latlng));
    return;
  }
}

function handleMapMouseUp(e) {
  if (activeTool === 'arrow' && arrowStartPoint) {
    if (tempLine) {
      tempLine.remove();
      tempLine = null;
    }
    const endPoint = e.latlng;
    const dist = map.distance(arrowStartPoint, endPoint);
    if (dist > 5000) {
      placeArrow(arrowStartPoint, endPoint);
    }
    arrowStartPoint = null;
    return;
  }

  if (activeTool === 'zone' && zoneStartPoint) {
    if (tempRect) {
      tempRect.remove();
      tempRect = null;
    }
    const endPoint = e.latlng;
    const bounds = L.latLngBounds(zoneStartPoint, endPoint);
    if (bounds.getNorthEast().distanceTo(bounds.getSouthWest()) > 5000) {
      placeZone(bounds);
    }
    zoneStartPoint = null;
    return;
  }
}

function cleanupTempDrawing() {
  if (tempLine) { tempLine.remove(); tempLine = null; }
  if (tempRect) { tempRect.remove(); tempRect = null; }
  arrowStartPoint = null;
  zoneStartPoint = null;
}

function placeUnitMarker(latlng, unitType) {
  const icon = L.divIcon({
    html: UNIT_SVGS[unitType],
    className: 'unit-marker',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

  const marker = L.marker(latlng, {
    icon,
    draggable: true,
    title: unitType.toUpperCase(),
  });

  marker.planningType = 'unit';
  marker.unitType = unitType;

  marker.on('click', (e) => {
    if (activeTool === 'eraser') {
      L.DomEvent.stopPropagation(e);
      planningLayer.removeLayer(marker);
    }
  });

  marker.bindTooltip(unitType.toUpperCase(), {
    className: 'unit-tooltip',
    direction: 'bottom',
    offset: [0, 12],
    permanent: false,
  });

  planningLayer.addLayer(marker);
}

function placeArrow(start, end) {
  const arrowLine = L.polyline([start, end], {
    color: '#ffd700',
    weight: 3,
    opacity: 0.9,
  });

  const angle = Math.atan2(end.lng - start.lng, end.lat - start.lat);
  const arrowLen = 0.015 * map.getZoom();
  const arrowAngle = Math.PI / 6;

  const tip1 = L.latLng(
    end.lat - arrowLen * Math.cos(angle - arrowAngle),
    end.lng - arrowLen * Math.sin(angle - arrowAngle)
  );
  const tip2 = L.latLng(
    end.lat - arrowLen * Math.cos(angle + arrowAngle),
    end.lng - arrowLen * Math.sin(angle + arrowAngle)
  );

  const arrowHead = L.polyline([tip1, end, tip2], {
    color: '#ffd700',
    weight: 3,
    opacity: 0.9,
  });

  const group = L.layerGroup([arrowLine, arrowHead]);
  group.planningType = 'arrow';

  group.eachLayer(layer => {
    layer.on('click', (e) => {
      if (activeTool === 'eraser') {
        L.DomEvent.stopPropagation(e);
        planningLayer.removeLayer(group);
      }
    });
  });

  planningLayer.addLayer(group);
}

function placeZone(bounds) {
  const rect = L.rectangle(bounds, {
    color: '#ffd700',
    weight: 2,
    fillColor: '#ffd700',
    fillOpacity: 0.12,
    dashArray: '8 4',
  });

  rect.planningType = 'zone';

  rect.on('click', (e) => {
    if (activeTool === 'eraser') {
      L.DomEvent.stopPropagation(e);
      planningLayer.removeLayer(rect);
    }
  });

  planningLayer.addLayer(rect);
}

function promptAndPlaceNote(latlng) {
  const text = prompt('Enter battle note:');
  if (!text || !text.trim()) return;

  const noteIcon = L.divIcon({
    html: `<div class="note-marker">
      <svg viewBox="0 0 24 24" width="20" height="20">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#fbbf24" stroke="#92400e" stroke-width="1.5"/>
        <line x1="6" y1="8" x2="18" y2="8" stroke="#78350f" stroke-width="1"/>
        <line x1="6" y1="12" x2="18" y2="12" stroke="#78350f" stroke-width="1"/>
        <line x1="6" y1="16" x2="14" y2="16" stroke="#78350f" stroke-width="1"/>
      </svg>
    </div>`,
    className: 'note-icon',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

  const marker = L.marker(latlng, {
    icon: noteIcon,
    draggable: true,
  });

  marker.planningType = 'note';
  marker.noteText = text.trim();

  marker.bindTooltip(text.trim(), {
    className: 'note-tooltip',
    direction: 'top',
    offset: [0, -12],
    permanent: true,
  });

  marker.on('click', (e) => {
    if (activeTool === 'eraser') {
      L.DomEvent.stopPropagation(e);
      planningLayer.removeLayer(marker);
    }
  });

  planningLayer.addLayer(marker);
}

export function clearAllPlanning() {
  planningLayer.clearLayers();
}

export function getPlanningData() {
  const items = [];

  planningLayer.eachLayer(layer => {
    if (layer.planningType === 'unit') {
      items.push({
        type: 'unit',
        unitType: layer.unitType,
        lat: layer.getLatLng().lat,
        lng: layer.getLatLng().lng,
      });
    } else if (layer.planningType === 'note') {
      items.push({
        type: 'note',
        text: layer.noteText,
        lat: layer.getLatLng().lat,
        lng: layer.getLatLng().lng,
      });
    } else if (layer.planningType === 'zone') {
      const bounds = layer.getBounds();
      items.push({
        type: 'zone',
        north: bounds.getNorth(),
        south: bounds.getSouth(),
        east: bounds.getEast(),
        west: bounds.getWest(),
      });
    } else if (layer.planningType === 'arrow') {
      const layers = [];
      layer.eachLayer(l => {
        if (l instanceof L.Polyline) {
          layers.push(l.getLatLngs());
        }
      });
      if (layers.length >= 1) {
        const mainLine = layers[0];
        items.push({
          type: 'arrow',
          startLat: mainLine[0].lat,
          startLng: mainLine[0].lng,
          endLat: mainLine[1].lat,
          endLng: mainLine[1].lng,
        });
      }
    }
  });

  return items;
}

export function loadPlanningData(items) {
  clearAllPlanning();
  items.forEach(item => {
    if (item.type === 'unit') {
      placeUnitMarker(L.latLng(item.lat, item.lng), item.unitType);
    } else if (item.type === 'note') {
      const latlng = L.latLng(item.lat, item.lng);
      const noteIcon = L.divIcon({
        html: `<div class="note-marker"><svg viewBox="0 0 24 24" width="20" height="20"><rect x="2" y="2" width="20" height="20" rx="3" fill="#fbbf24" stroke="#92400e" stroke-width="1.5"/><line x1="6" y1="8" x2="18" y2="8" stroke="#78350f" stroke-width="1"/><line x1="6" y1="12" x2="18" y2="12" stroke="#78350f" stroke-width="1"/><line x1="6" y1="16" x2="14" y2="16" stroke="#78350f" stroke-width="1"/></svg></div>`,
        className: 'note-icon',
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      });
      const marker = L.marker(latlng, { icon: noteIcon, draggable: true });
      marker.planningType = 'note';
      marker.noteText = item.text;
      marker.bindTooltip(item.text, { className: 'note-tooltip', direction: 'top', offset: [0, -12], permanent: true });
      marker.on('click', (e) => { if (activeTool === 'eraser') { L.DomEvent.stopPropagation(e); planningLayer.removeLayer(marker); } });
      planningLayer.addLayer(marker);
    } else if (item.type === 'zone') {
      const bounds = L.latLngBounds([item.south, item.west], [item.north, item.east]);
      placeZone(bounds);
    } else if (item.type === 'arrow') {
      placeArrow(L.latLng(item.startLat, item.startLng), L.latLng(item.endLat, item.endLng));
    }
  });
}
