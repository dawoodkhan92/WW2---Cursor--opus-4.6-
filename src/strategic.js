// ---------------------------------------------------------------------------
// Strategic military data for a pre-WWII (1938-1939) interactive battle
// planning map.  All coordinates are decimal-degree [lat, lng].
// ---------------------------------------------------------------------------

// ── 1. CHOKEPOINTS ─────────────────────────────────────────────────────────
export const chokepoints = [
  {
    id: "suez",
    name: "Suez Canal",
    lat: 30.45,
    lng: 32.35,
    controller: "uk",
    significance: "Links Mediterranean to Red Sea and Indian Ocean",
  },
  {
    id: "gibraltar",
    name: "Strait of Gibraltar",
    lat: 35.96,
    lng: -5.35,
    controller: "uk",
    significance:
      "Controls the only sea passage between the Atlantic and Mediterranean",
  },
  {
    id: "dardanelles",
    name: "Turkish Straits / Dardanelles",
    lat: 40.2,
    lng: 26.4,
    controller: "turkey",
    significance:
      "Controls access between the Mediterranean and the Black Sea",
  },
  {
    id: "malacca",
    name: "Strait of Malacca",
    lat: 2.5,
    lng: 101.8,
    controller: "uk",
    significance:
      "Primary sea lane between the Indian Ocean and the Pacific via Singapore",
  },
  {
    id: "panama",
    name: "Panama Canal",
    lat: 9.08,
    lng: -79.68,
    controller: "usa",
    significance:
      "Allows rapid fleet transfer between the Atlantic and the Pacific",
  },
  {
    id: "danish_straits",
    name: "Danish Straits / Skagerrak",
    lat: 57.7,
    lng: 10.6,
    controller: "denmark",
    significance:
      "Controls passage between the North Sea and the Baltic Sea",
  },
  {
    id: "giuk_gap",
    name: "GIUK Gap",
    lat: 63.0,
    lng: -15.0,
    controller: "uk",
    significance:
      "Greenland–Iceland–UK gap; controls North Atlantic access from the Arctic",
  },
  {
    id: "hormuz",
    name: "Strait of Hormuz",
    lat: 26.56,
    lng: 56.25,
    controller: "uk",
    significance:
      "Gateway to the Persian Gulf and Middle Eastern oil exports",
  },
  {
    id: "good_hope",
    name: "Cape of Good Hope",
    lat: -34.35,
    lng: 18.47,
    controller: "uk",
    significance:
      "Alternative route between the Atlantic and Indian Ocean bypassing Suez",
  },
];

// ── 2. NAVAL BASES ─────────────────────────────────────────────────────────
export const navalBases = [
  {
    id: "scapa_flow",
    name: "Scapa Flow",
    lat: 58.91,
    lng: -3.1,
    nation: "uk",
    fleet: "Home Fleet HQ",
  },
  {
    id: "portsmouth",
    name: "Portsmouth",
    lat: 50.8,
    lng: -1.1,
    nation: "uk",
    fleet: "Royal Navy — Channel & Home Waters",
  },
  {
    id: "gibraltar_base",
    name: "Gibraltar",
    lat: 36.14,
    lng: -5.35,
    nation: "uk",
    fleet: "Western Mediterranean",
  },
  {
    id: "malta",
    name: "Malta / Valletta",
    lat: 35.9,
    lng: 14.51,
    nation: "uk",
    fleet: "Central Mediterranean",
  },
  {
    id: "alexandria",
    name: "Alexandria",
    lat: 31.2,
    lng: 29.92,
    nation: "uk",
    fleet: "Eastern Mediterranean",
  },
  {
    id: "singapore",
    name: "Singapore",
    lat: 1.26,
    lng: 103.83,
    nation: "uk",
    fleet: "Far East",
  },
  {
    id: "toulon",
    name: "Toulon",
    lat: 43.12,
    lng: 5.93,
    nation: "france",
    fleet: "Main French naval base — Mediterranean Fleet",
  },
  {
    id: "mers_el_kebir",
    name: "Mers-el-Kébir / Oran",
    lat: 35.73,
    lng: -0.71,
    nation: "france",
    fleet: "North Africa",
  },
  {
    id: "dakar",
    name: "Dakar",
    lat: 14.69,
    lng: -17.44,
    nation: "france",
    fleet: "West Africa / Atlantic",
  },
  {
    id: "wilhelmshaven",
    name: "Wilhelmshaven",
    lat: 53.53,
    lng: 8.14,
    nation: "germany",
    fleet: "North Sea — Kriegsmarine HQ",
  },
  {
    id: "kiel",
    name: "Kiel",
    lat: 54.33,
    lng: 10.14,
    nation: "germany",
    fleet: "Baltic",
  },
  {
    id: "taranto",
    name: "Taranto",
    lat: 40.47,
    lng: 17.24,
    nation: "italy",
    fleet: "Mediterranean — Regia Marina",
  },
  {
    id: "la_spezia",
    name: "La Spezia",
    lat: 44.1,
    lng: 9.82,
    nation: "italy",
    fleet: "Mediterranean — Regia Marina",
  },
  {
    id: "yokosuka",
    name: "Yokosuka",
    lat: 35.28,
    lng: 139.67,
    nation: "japan",
    fleet: "Pacific — Imperial Japanese Navy",
  },
  {
    id: "kure",
    name: "Kure",
    lat: 34.23,
    lng: 132.56,
    nation: "japan",
    fleet: "Pacific — IJN shipbuilding and fleet base",
  },
  {
    id: "truk_lagoon",
    name: "Truk Lagoon",
    lat: 7.42,
    lng: 151.78,
    nation: "japan",
    fleet: "Central Pacific forward base",
  },
  {
    id: "pearl_harbor",
    name: "Pearl Harbor",
    lat: 21.35,
    lng: -157.95,
    nation: "usa",
    fleet: "Pacific Fleet",
  },
  {
    id: "norfolk",
    name: "Norfolk, Virginia",
    lat: 36.95,
    lng: -76.33,
    nation: "usa",
    fleet: "Atlantic Fleet",
  },
  {
    id: "san_diego",
    name: "San Diego",
    lat: 32.68,
    lng: -117.18,
    nation: "usa",
    fleet: "Pacific",
  },
  {
    id: "kronstadt",
    name: "Kronstadt",
    lat: 59.99,
    lng: 29.77,
    nation: "soviet_union",
    fleet: "Baltic Fleet",
  },
  {
    id: "sevastopol",
    name: "Sevastopol",
    lat: 44.62,
    lng: 33.52,
    nation: "soviet_union",
    fleet: "Black Sea Fleet",
  },
];

// ── 3. DEFENSIVE LINES ────────────────────────────────────────────────────
export const defensiveLines = [
  {
    id: "maginot",
    name: "Maginot Line",
    nation: "france",
    coordinates: [
      [47.5, 7.57],   // near Basel — Swiss border
      [47.85, 7.35],  // Mulhouse area
      [48.25, 7.15],  // Colmar – Strasbourg gap
      [48.58, 7.75],  // Strasbourg
      [48.97, 7.96],  // Haguenau
      [49.14, 7.37],  // Bitche / Sarreguemines
      [49.36, 6.17],  // Metz
      [49.55, 5.82],  // Luxembourg border terminus
    ],
    description:
      "French fortification system along the Franco-German border from the Swiss border to the Luxembourg border, designed to deter a direct German invasion",
  },
  {
    id: "siegfried",
    name: "Siegfried Line / Westwall",
    nation: "germany",
    coordinates: [
      [47.6, 7.6],    // near Basel — Swiss border
      [48.0, 7.8],    // Upper Rhine east bank
      [48.52, 8.2],   // east of Strasbourg
      [49.0, 8.0],    // Karlsruhe region
      [49.45, 6.7],   // Saar region
      [49.75, 6.35],  // Trier area
      [50.35, 6.1],   // Aachen region
      [51.0, 6.0],    // Kleve — Dutch border terminus
    ],
    description:
      "German defensive fortification system facing the Maginot Line, stretching from the Swiss border to the Dutch frontier",
  },
  {
    id: "mannerheim",
    name: "Mannerheim Line",
    nation: "finland",
    coordinates: [
      [60.58, 28.71],  // Gulf of Finland coast — Koivisto
      [60.65, 28.9],   // Summa sector
      [60.72, 29.15],  // Taipale area approaches
      [60.78, 29.35],  // Muolaa sector
      [60.85, 29.55],  // Suvanto lake area
      [61.05, 29.85],  // Taipale — Lake Ladoga shore
    ],
    description:
      "Finnish defensive fortification across the Karelian Isthmus between the Gulf of Finland and Lake Ladoga, built to resist Soviet invasion",
  },
  {
    id: "metaxas",
    name: "Metaxas Line",
    nation: "greece",
    coordinates: [
      [41.25, 24.05],  // western end — Nestos valley
      [41.3, 24.5],    // Drama region
      [41.28, 24.85],  // Nevrokop approaches
      [41.2, 25.25],   // Komotini hinterland
      [41.35, 25.7],   // Didymoteicho area
      [41.4, 26.05],   // Evros — Turkish border terminus
    ],
    description:
      "Greek fortification along the Bulgarian border in Thrace and eastern Macedonia, built to defend against a Bulgarian attack",
  },
  {
    id: "czech_fortifications",
    name: "Czech Fortifications",
    nation: "germany",
    coordinates: [
      [50.77, 14.22],  // Děčín — northern Bohemia
      [50.65, 15.05],  // Liberec area
      [50.45, 15.75],  // Krkonoše mountains
      [50.2, 16.55],   // Orlické hory
      [49.85, 17.15],  // Jeseníky
      [49.55, 17.6],   // Olomouc outer works
      [49.2, 17.25],   // Zlín — Moravian gap
      [48.85, 16.9],   // Břeclav — Austrian border terminus
    ],
    description:
      "Elaborate Czechoslovak border fortifications along the Sudetenland, seized by Germany after the 1938 Munich Agreement",
  },
];

// ── 4. INDUSTRIAL REGIONS ──────────────────────────────────────────────────
export const industrialRegions = [
  {
    id: "ruhr",
    name: "Ruhr Valley",
    lat: 51.45,
    lng: 7.01,
    nation: "germany",
    significance: "Heart of German heavy industry: steel, coal, chemicals",
  },
  {
    id: "silesia",
    name: "Silesia",
    lat: 50.3,
    lng: 18.95,
    nation: "germany",
    significance: "Major coal and steel production region in eastern Germany/Poland",
  },
  {
    id: "saar",
    name: "Saar",
    lat: 49.23,
    lng: 7.0,
    nation: "germany",
    significance: "Coal mining and steel production heartland on the French border",
  },
  {
    id: "skoda_plzen",
    name: "Škoda Works, Plzeň",
    lat: 49.74,
    lng: 13.38,
    nation: "germany",
    significance:
      "Major arms manufacturer — artillery, tanks, and munitions (seized with the Protectorate of Bohemia and Moravia)",
  },
  {
    id: "donbas",
    name: "Donbas / Donets Basin",
    lat: 48.0,
    lng: 38.0,
    nation: "soviet_union",
    significance: "Principal Soviet coal, steel, and heavy industry region",
  },
  {
    id: "baku",
    name: "Baku Oil Fields",
    lat: 40.41,
    lng: 49.87,
    nation: "soviet_union",
    significance:
      "Produces ~70% of Soviet oil; critical strategic resource target",
  },
  {
    id: "ploiesti",
    name: "Ploiești Oil Fields",
    lat: 44.94,
    lng: 26.03,
    nation: "romania",
    significance:
      "Critical European oil source; supplies the majority of Axis petroleum",
  },
  {
    id: "kiruna",
    name: "Kiruna Iron Ore",
    lat: 67.86,
    lng: 20.22,
    nation: "sweden",
    significance:
      "Supplies ~40% of German iron ore; shipped via Narvik and Luleå",
  },
  {
    id: "midlands",
    name: "Midlands / Birmingham",
    lat: 52.49,
    lng: -1.89,
    nation: "uk",
    significance:
      "Steel production, aircraft manufacturing, and arms industry centre",
  },
  {
    id: "detroit",
    name: "Detroit",
    lat: 42.33,
    lng: -83.05,
    nation: "usa",
    significance:
      "Auto manufacturing hub with massive war production potential (Arsenal of Democracy)",
  },
];
