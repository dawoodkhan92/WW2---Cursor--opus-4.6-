import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import * as topojson from 'topojson-client';
import worldTopo from 'world-atlas/countries-110m.json';
import { countryMapping } from './country-mapping.js';
import { nations } from './nations.js';

const ALLIANCE_COLORS = {
  axis:           '#b91c1c',
  allies:         '#1e40af',
  soviet:         '#7f1d1d',
  us:             '#1e3a5f',
  neutral:        '#4a5568',
  neutral_axis:   '#8b5c3b',
  neutral_allied: '#2d5a4a',
};

const ALLIANCE_HOVER = {
  axis:           '#ef4444',
  allies:         '#3b82f6',
  soviet:         '#dc2626',
  us:             '#3b82f6',
  neutral:        '#9ca3af',
  neutral_axis:   '#c4815c',
  neutral_allied: '#48a382',
};

let map;
let geojsonLayer;
let selectedLayer = null;

export function initMap(onTerritoryClick) {
  map = L.map('map', {
    center: [30, 15],
    zoom: 3,
    minZoom: 2,
    maxZoom: 8,
    zoomControl: false,
    attributionControl: false,
    worldCopyJump: true,
  });

  L.control.zoom({ position: 'topright' }).addTo(map);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  const geoData = topojson.feature(worldTopo, worldTopo.objects.countries);

  geoData.features.forEach(feature => {
    const isoCode = String(feature.id).padStart(3, '0');
    const mapping = countryMapping[isoCode];

    if (mapping) {
      feature.properties = { ...feature.properties, ...mapping, isoCode };
    } else {
      feature.properties = {
        ...feature.properties,
        id: 'unknown',
        name: `Unknown (${isoCode})`,
        controller: 'unknown',
        alliance: 'neutral',
        type: 'core',
        isoCode,
      };
    }
  });

  geojsonLayer = L.geoJSON(geoData, {
    style: territoryStyle,
    onEachFeature: (feature, layer) => {
      layer.on({
        mouseover: handleMouseOver,
        mouseout: handleMouseOut,
        click: (e) => handleClick(e, onTerritoryClick),
      });
    },
  }).addTo(map);

  return map;
}

function territoryStyle(feature) {
  const alliance = feature.properties.alliance || 'neutral';
  return {
    fillColor: ALLIANCE_COLORS[alliance] || ALLIANCE_COLORS.neutral,
    weight: 0.8,
    opacity: 0.9,
    color: '#e2c088',
    fillOpacity: 0.55,
  };
}

function handleMouseOver(e) {
  const layer = e.target;
  const alliance = layer.feature.properties.alliance || 'neutral';

  layer.setStyle({
    fillColor: ALLIANCE_HOVER[alliance] || ALLIANCE_HOVER.neutral,
    weight: 1.5,
    color: '#ffd700',
    fillOpacity: 0.75,
  });
  layer.bringToFront();

  const props = layer.feature.properties;
  const nation = nations[props.controller];
  const displayName = props.name || 'Unknown';
  const controllerName = nation ? nation.shortName || nation.name : props.controller;

  let tooltip = displayName;
  if (props.type !== 'core' && controllerName !== displayName) {
    tooltip += ` (${controllerName})`;
  }

  layer.bindTooltip(tooltip, {
    sticky: true,
    className: 'territory-tooltip',
    direction: 'top',
    offset: [0, -10],
  }).openTooltip();
}

function handleMouseOut(e) {
  const layer = e.target;
  if (layer !== selectedLayer) {
    geojsonLayer.resetStyle(layer);
  }
  layer.unbindTooltip();
}

function handleClick(e, onTerritoryClick) {
  if (selectedLayer) {
    geojsonLayer.resetStyle(selectedLayer);
  }

  const layer = e.target;
  selectedLayer = layer;

  layer.setStyle({
    weight: 2.5,
    color: '#ffd700',
    fillOpacity: 0.8,
  });

  const props = layer.feature.properties;
  onTerritoryClick(props);
}

export function getMap() {
  return map;
}

export function toggleTerritoryColors(visible) {
  if (geojsonLayer) {
    if (visible) {
      geojsonLayer.setStyle(territoryStyle);
    } else {
      geojsonLayer.setStyle({
        fillColor: 'transparent',
        fillOpacity: 0,
        weight: 0.5,
        color: '#555',
      });
    }
  }
}
