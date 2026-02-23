# WWII Battle Planner — 1939 Strategic Command

An interactive pre-World War II (1938-1939) world map and battle planning board. Built as a client-side web app with no backend.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Features

- **Historical Map**: World borders as of mid-1939 (post-Munich Agreement, pre-invasion of Poland) with 170+ territories color-coded by alliance
- **Nation Intelligence**: Click any territory to see detailed intelligence — leader, military strength, resources, and strategic notes for 37 nations
- **Strategic Overlays**: Toggle chokepoints, naval bases, defensive lines, and industrial regions
- **Battle Planning Tools**: Place infantry, armor, artillery, naval, and air force markers; draw movement arrows and zones; add text notes
- **Save/Load**: Save named battle plans to localStorage and export as JSON

## How to Use

### Viewing the Map
- **Pan**: Click and drag the map
- **Zoom**: Scroll wheel or +/- buttons
- **Territory Info**: Click any country or territory to open the intelligence panel on the right

### Planning Tools (Left Toolbar)
| Tool | Action |
|------|--------|
| INF/ARM/ART/NAV/AIR | Click map to place a military unit marker (draggable) |
| ARROW | Click and drag to draw a movement arrow |
| ZONE | Click and drag to draw a rectangular zone |
| NOTE | Click map to place a text note |
| ERASE | Click on any placed element to remove it |
| SELECT | Default mode — pan and click territories |

### Save & Export (Top Bar)
- **SAVE**: Save current battle plan with a name
- **LOAD**: Load a previously saved plan
- **EXPORT**: Download the plan as a JSON file
- **CLEAR**: Remove all planning markers

## Tech Stack

- [Vite](https://vitejs.dev/) — build tool
- [Leaflet.js](https://leafletjs.com/) — mapping library
- [world-atlas](https://github.com/topojson/world-atlas) — Natural Earth country boundaries
- [topojson-client](https://github.com/topojson/topojson-client) — TopoJSON to GeoJSON conversion
- Vanilla JavaScript — no framework
