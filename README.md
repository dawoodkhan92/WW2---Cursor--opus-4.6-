# ✦ WW2 Battle Planner — 1939 Strategic Command

> An interactive, historically accurate battle planning tool set in the pre-World War II era (1938–1939). Built for historians, wargamers, and strategy enthusiasts.

**[▶ Try it Live →](https://dawoodkhan92.github.io/WW2---Cursor--opus-4.6-/)**

> Built with [Cursor](https://cursor.sh) AI Code Editor (claude-opus-4.6)

---

## What is this?

A fully browser-based war room that lets you plan battles on a historically accurate **1939 world map** — complete with correct borders, colonial territories, and alliance alignments of the pre-WWII era. No installs, no sign-ups. Just open and plan.

The map reflects the world as it was in **mid-1939**: post-Munich Agreement Germany, the full British and French Empires, the Soviet Union, Imperial Japan in China, and 170+ territories colour-coded by faction.

---

## Features

### 🗺️ Historically Accurate 1939 World Map
- Real pre-WWII borders — **170+ territories**, **37 nations** with full intelligence data
- Alliance colour-coded territories: Axis, Western Allies, Soviet, Neutral, Colonial Empires
- Click any territory for a full **intelligence briefing**: leader, military strength, resources, and strategic notes

### 🪖 Military Unit Placement
- 5 unit types: Infantry, Armor, Artillery, Naval, Air Force
- Custom SVG military counter icons per unit type
- Draggable markers — reposition freely on the map

### ✏️ Battle Planning Tools
| Tool | Use |
|------|-----|
| **INF / ARM / ART** | Place ground force markers |
| **NAV** | Place naval markers |
| **AIR** | Place air force markers |
| **ARROW** | Draw movement / attack vectors |
| **ZONE** | Draw rectangular control zones |
| **NOTE** | Drop text annotations on the map |
| **ERASE** | Remove any placed element |
| **SELECT** | Default — pan map and inspect territories |

### 🎯 Strategic Overlays
Toggle visual overlays for:
- Chokepoints and strategic passes
- Naval bases and sea lanes
- Defensive lines (Maginot, Siegfried, Mannerheim)
- Industrial and resource regions

### 💾 Save, Load & Export
- Save named battle plans to browser storage
- Load previous plans by name
- Export your complete plan as a **JSON file**
- Import and share plans with others

---

## How to Use

### Option 1: Live Demo (no install)
👉 **[https://dawoodkhan92.github.io/WW2---Cursor--opus-4.6-/](https://dawoodkhan92.github.io/WW2---Cursor--opus-4.6-/)**

### Option 2: Run Locally
```bash
git clone https://github.com/dawoodkhan92/WW2---Cursor--opus-4.6-.git
cd WW2---Cursor--opus-4.6-
npm install
npm run dev
# Open http://localhost:5173 in your browser
```

---

## Controls

| Action | How |
|--------|-----|
| Pan map | Click and drag |
| Zoom | Scroll wheel or +/− buttons |
| Territory intel | Click any country / territory |
| Place unit | Select tool, click on map |
| Draw arrow | ARROW tool, click and drag |
| Draw zone | ZONE tool, click and drag |
| Erase element | ERASE tool, click element |

---

## Tech Stack
- **[Vite 7](https://vitejs.dev/)** — lightning-fast build tool
- **[Leaflet.js](https://leafletjs.com/)** — interactive map engine
- **[world-atlas](https://github.com/topojson/world-atlas)** — Natural Earth country boundaries
- **[topojson-client](https://github.com/topojson/topojson-client)** — TopoJSON to GeoJSON conversion
- Vanilla JavaScript — no framework, no runtime dependencies

---

## Historical Accuracy Notes

- Map reflects **mid-1939**: post-Munich Agreement (Sudetenland in Reich), pre-invasion of Poland
- 37 nations with hand-researched intelligence data: leaders, armed forces, resources, strategic notes
- 170+ territories including colonial possessions (British India, French Indochina, Dutch East Indies, etc.)
- Alliance status matches September 1939: Axis (Germany, Italy, Japan), Allies (UK, France, Poland), Soviet, Neutral

---

## Comparison: Cursor vs Claude Code Desktop

| | **This repo** (Cursor) | **[Claude Code Desktop](https://github.com/dawoodkhan92/WW2---Claude-Code-Desktop---Sonnet-4.6)** |
|---|---|---|
| Editor | Cursor | Claude Code Desktop |
| Model | claude-opus-4.6 | Sonnet 4.6 |
| Stack | Vite + ES Modules | Vanilla HTML/CSS/JS |
| Map date | Mid-1939 | September 1938 |
| Territories | 170+ | 50 key nations |
| Scenarios | Custom only | 4 historical (Case White, Barbarossa, etc.) |
| Unit symbols | Custom SVG | NATO APP-6 milsymbol |
| Deploy | GitHub Actions (Vite build) | GitHub Pages (static) |

---

## Built with Cursor

This project was designed and built with [Cursor](https://cursor.sh) AI Code Editor as a demonstration of AI-assisted historical tooling.

---

*"In preparing for battle, I have always found that plans are useless but planning is indispensable." — Dwight D. Eisenhower*
