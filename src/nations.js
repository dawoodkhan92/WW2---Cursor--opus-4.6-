export const nations = {

  // ═══════════════════════════════════════════════════════════════
  //  AXIS POWERS
  // ═══════════════════════════════════════════════════════════════

  germany: {
    name: "German Reich",
    shortName: "Germany",
    leader: { name: "Adolf Hitler", title: "Führer und Reichskanzler" },
    alliance: "axis",
    population: 80000000,
    military: {
      activeTroops: 3700000,
      reserves: 1500000,
      capitalShips: 7,
      submarines: 57,
      aircraft: 4000
    },
    resources: ["Coal (Ruhr/Silesia)", "Steel", "Chemicals", "Synthetic Fuel"],
    notes:
      "Post-Anschluss Germany includes Austria, Sudetenland, and the Protectorate of Bohemia-Moravia. Massive rearmament program since 1935."
  },

  italy: {
    name: "Kingdom of Italy",
    shortName: "Italy",
    leader: { name: "Benito Mussolini", title: "Duce del Fascismo, Head of Government" },
    alliance: "axis",
    population: 44000000,
    military: {
      activeTroops: 1800000,
      reserves: 6000000,
      capitalShips: 6,
      submarines: 115,
      aircraft: 2800
    },
    resources: ["Mercury", "Sulfur", "Marble", "Hydroelectric Power", "Colonial Agriculture (Libya, East Africa)"],
    notes:
      "Controls Libya, Ethiopia, Eritrea, Italian Somalia, and Albania (annexed April 1939). Navy is the dominant Mediterranean force but fuel reserves are critically low."
  },

  japan: {
    name: "Empire of Japan",
    shortName: "Japan",
    leader: { name: "Emperor Hirohito / PM Prince Fumimaro Konoe", title: "Emperor / Prime Minister" },
    alliance: "axis",
    population: 73000000,
    military: {
      activeTroops: 2000000,
      reserves: 1700000,
      capitalShips: 10,
      submarines: 63,
      aircraft: 3700
    },
    resources: ["Limited Domestic Iron", "Coal (Manchuria)", "Rubber (Occupied Southeast Asia Plans)", "Rice"],
    notes:
      "Controls Korea, Taiwan, Manchukuo, and large swathes of coastal China. Engaged in full-scale war with China since 1937; heavily dependent on imported oil and raw materials."
  },

  // ═══════════════════════════════════════════════════════════════
  //  ALLIED POWERS
  // ═══════════════════════════════════════════════════════════════

  uk: {
    name: "United Kingdom of Great Britain and Northern Ireland",
    shortName: "United Kingdom",
    leader: { name: "King George VI / PM Neville Chamberlain", title: "King / Prime Minister" },
    alliance: "allies",
    population: 47500000,
    military: {
      activeTroops: 900000,
      reserves: 500000,
      capitalShips: 15,
      submarines: 69,
      aircraft: 2800
    },
    resources: ["Coal", "Steel", "Global Colonial Trade Networks", "Rubber (Malaya)", "Oil (Middle East Concessions)"],
    notes:
      "Commands the world's largest empire spanning every continent, with the Royal Navy as its strategic backbone. Rearmament accelerated after Munich but readiness remains uneven."
  },

  france: {
    name: "French Republic (Third Republic)",
    shortName: "France",
    leader: { name: "President Albert Lebrun / PM Édouard Daladier", title: "President / Prime Minister" },
    alliance: "allies",
    population: 42000000,
    military: {
      activeTroops: 900000,
      reserves: 5000000,
      capitalShips: 7,
      submarines: 77,
      aircraft: 1400
    },
    resources: ["Iron Ore (Lorraine)", "Colonial Resources (Indochina, North Africa)", "Wine & Agriculture", "Bauxite"],
    notes:
      "Possesses the largest standing army in Western Europe and a vast colonial empire. Defense strategy centres on the Maginot Line; air force modernisation is lagging behind Germany's Luftwaffe."
  },

  poland: {
    name: "Second Polish Republic",
    shortName: "Poland",
    leader: { name: "President Ignacy Mościcki / Marshal Edward Rydz-Śmigły", title: "President / Commander-in-Chief" },
    alliance: "allies",
    population: 35000000,
    military: {
      activeTroops: 1000000,
      reserves: 2500000,
      capitalShips: 0,
      submarines: 5,
      aircraft: 900
    },
    resources: ["Coal (Silesia)", "Timber", "Agriculture", "Salt"],
    notes:
      "Strategically exposed between Germany and the Soviet Union. Large but under-equipped army; cavalry still plays a significant role. Allied with France and Britain through mutual defence pacts."
  },

  china: {
    name: "Republic of China",
    shortName: "China",
    leader: { name: "Chiang Kai-shek", title: "Chairman of the National Government / Generalissimo" },
    alliance: "allies",
    population: 517000000,
    military: {
      activeTroops: 2500000,
      reserves: 3000000,
      capitalShips: 0,
      submarines: 0,
      aircraft: 300
    },
    resources: ["Tungsten", "Tin", "Rice", "Manpower", "Antimony"],
    notes:
      "At war with Japan since 1937; the government has retreated to Chongqing. Enormous manpower but severe shortages of modern equipment. Also facing internal conflict with Communist forces under Mao Zedong."
  },

  canada: {
    name: "Dominion of Canada",
    shortName: "Canada",
    leader: { name: "King George VI / PM William Lyon Mackenzie King", title: "King / Prime Minister" },
    alliance: "allies",
    population: 11300000,
    military: {
      activeTroops: 60000,
      reserves: 50000,
      capitalShips: 0,
      submarines: 0,
      aircraft: 270
    },
    resources: ["Nickel", "Timber", "Wheat", "Aluminum (Bauxite Processing)", "Iron Ore"],
    notes:
      "British dominion with vast natural resources and growing industrial capacity. Small peacetime military but enormous potential for wartime mobilisation and arms production."
  },

  australia: {
    name: "Commonwealth of Australia",
    shortName: "Australia",
    leader: { name: "King George VI / PM Robert Menzies", title: "King / Prime Minister" },
    alliance: "allies",
    population: 6900000,
    military: {
      activeTroops: 80000,
      reserves: 40000,
      capitalShips: 2,
      submarines: 0,
      aircraft: 250
    },
    resources: ["Wool", "Wheat", "Gold", "Iron Ore", "Coal"],
    notes:
      "British dominion in the Pacific with significant agricultural output. Geographically vulnerable to Japanese expansion; relies heavily on the Royal Navy for defence."
  },

  south_africa: {
    name: "Union of South Africa",
    shortName: "South Africa",
    leader: { name: "King George VI / PM J.B.M. Hertzog", title: "King / Prime Minister" },
    alliance: "allies",
    population: 10000000,
    military: {
      activeTroops: 18000,
      reserves: 50000,
      capitalShips: 0,
      submarines: 0,
      aircraft: 170
    },
    resources: ["Gold", "Diamonds", "Platinum", "Chromium", "Coal"],
    notes:
      "British dominion controlling critical mineral resources and the Cape sea route. Politically divided between pro-British and pro-neutrality Afrikaner factions."
  },

  new_zealand: {
    name: "Dominion of New Zealand",
    shortName: "New Zealand",
    leader: { name: "King George VI / PM Michael Joseph Savage", title: "King / Prime Minister" },
    alliance: "allies",
    population: 1600000,
    military: {
      activeTroops: 12000,
      reserves: 40000,
      capitalShips: 2,
      submarines: 0,
      aircraft: 70
    },
    resources: ["Wool", "Dairy", "Timber", "Gold"],
    notes:
      "Small but fiercely loyal British dominion. Limited military forces in peacetime but proportionally high mobilisation rate. Dependent on the Royal Navy for security."
  },

  // ═══════════════════════════════════════════════════════════════
  //  SOVIET UNION
  // ═══════════════════════════════════════════════════════════════

  soviet_union: {
    name: "Union of Soviet Socialist Republics",
    shortName: "Soviet Union",
    leader: { name: "Joseph Stalin", title: "General Secretary of the Communist Party" },
    alliance: "soviet",
    population: 170000000,
    military: {
      activeTroops: 5000000,
      reserves: 14000000,
      capitalShips: 3,
      submarines: 165,
      aircraft: 10000
    },
    resources: ["Oil (Baku/Caucasus)", "Iron Ore", "Coal (Donbas/Kuzbas)", "Timber", "Grain", "Manganese"],
    notes:
      "Largest country by land area with enormous natural resources and manpower. The Great Purge of 1937-38 devastated the Red Army officer corps, severely reducing combat effectiveness despite massive numerical strength."
  },

  // ═══════════════════════════════════════════════════════════════
  //  UNITED STATES
  // ═══════════════════════════════════════════════════════════════

  usa: {
    name: "United States of America",
    shortName: "United States",
    leader: { name: "Franklin D. Roosevelt", title: "President" },
    alliance: "us",
    population: 131000000,
    military: {
      activeTroops: 334000,
      reserves: 200000,
      capitalShips: 17,
      submarines: 99,
      aircraft: 2500
    },
    resources: ["Oil (Texas/California/Oklahoma)", "Steel", "Coal", "Copper", "Agricultural Surplus", "Industrial Capacity"],
    notes:
      "Neutral by law (Neutrality Acts) but the world's largest industrial economy. Military is small for its size due to isolationist politics, but mobilisation potential is unmatched."
  },

  // ═══════════════════════════════════════════════════════════════
  //  NEUTRAL NATIONS
  // ═══════════════════════════════════════════════════════════════

  spain: {
    name: "Spanish State",
    shortName: "Spain",
    leader: { name: "Francisco Franco", title: "Caudillo de España" },
    alliance: "neutral_axis",
    population: 26000000,
    military: {
      activeTroops: 850000,
      reserves: 500000,
      capitalShips: 2,
      submarines: 6,
      aircraft: 500
    },
    resources: ["Mercury (Almadén)", "Iron Ore", "Pyrites", "Olive Oil"],
    notes:
      "Devastated by the 1936-39 Civil War. Sympathetic to the Axis powers that supported Franco's Nationalists, but too exhausted to enter another conflict. Economy in ruins."
  },

  turkey: {
    name: "Republic of Turkey",
    shortName: "Turkey",
    leader: { name: "İsmet İnönü", title: "President" },
    alliance: "neutral_allied",
    population: 17500000,
    military: {
      activeTroops: 200000,
      reserves: 1000000,
      capitalShips: 1,
      submarines: 6,
      aircraft: 370
    },
    resources: ["Chromite", "Copper", "Tobacco", "Cotton"],
    notes:
      "Controls the strategic Turkish Straits (Bosporus and Dardanelles). Leaning toward the Allies after Atatürk's death in 1938; signed a mutual aid pact with Britain and France in 1939."
  },

  sweden: {
    name: "Kingdom of Sweden",
    shortName: "Sweden",
    leader: { name: "King Gustaf V / PM Per Albin Hansson", title: "King / Prime Minister" },
    alliance: "neutral",
    population: 6300000,
    military: {
      activeTroops: 100000,
      reserves: 400000,
      capitalShips: 7,
      submarines: 16,
      aircraft: 250
    },
    resources: ["Iron Ore (Kiruna/Gällivare)", "Timber", "Steel", "Ball Bearings (SKF)"],
    notes:
      "Key supplier of high-grade iron ore to Germany via Narvik and the Baltic. Swedish ball bearing production (SKF) is critical to both sides' war industries. Committed to armed neutrality."
  },

  norway: {
    name: "Kingdom of Norway",
    shortName: "Norway",
    leader: { name: "King Haakon VII / PM Johan Nygaardsvold", title: "King / Prime Minister" },
    alliance: "neutral",
    population: 2900000,
    military: {
      activeTroops: 25000,
      reserves: 120000,
      capitalShips: 2,
      submarines: 5,
      aircraft: 70
    },
    resources: ["Fish", "Hydroelectric Power", "Merchant Shipping Fleet", "Aluminum"],
    notes:
      "Strategically vital for the North Atlantic and the iron ore route from Narvik. Possesses one of the world's largest merchant marine fleets. Minimal defence spending."
  },

  denmark: {
    name: "Kingdom of Denmark",
    shortName: "Denmark",
    leader: { name: "King Christian X / PM Thorvald Stauning", title: "King / Prime Minister" },
    alliance: "neutral",
    population: 3800000,
    military: {
      activeTroops: 15000,
      reserves: 50000,
      capitalShips: 0,
      submarines: 7,
      aircraft: 90
    },
    resources: ["Agriculture (Dairy, Pork)", "Fishing", "Shipping"],
    notes:
      "Small, flat country bordering Germany with virtually no natural defences. Controls Greenland, Iceland, and the Faroe Islands. Military is token-sized and could not resist a major invasion."
  },

  finland: {
    name: "Republic of Finland",
    shortName: "Finland",
    leader: { name: "President Kyösti Kallio", title: "President" },
    alliance: "neutral",
    population: 3700000,
    military: {
      activeTroops: 37000,
      reserves: 400000,
      capitalShips: 2,
      submarines: 5,
      aircraft: 150
    },
    resources: ["Timber", "Nickel (Petsamo)", "Copper", "Cellulose"],
    notes:
      "Shares a long border with the Soviet Union, which has territorial claims. Highly motivated citizen army trained for winter warfare. The Mannerheim Line fortifies the Karelian Isthmus."
  },

  belgium: {
    name: "Kingdom of Belgium",
    shortName: "Belgium",
    leader: { name: "King Leopold III / PM Hubert Pierlot", title: "King / Prime Minister" },
    alliance: "neutral",
    population: 8400000,
    military: {
      activeTroops: 120000,
      reserves: 600000,
      capitalShips: 0,
      submarines: 0,
      aircraft: 250
    },
    resources: ["Coal", "Steel (Liège/Charleroi)", "Diamonds (Antwerp)", "Congo Colony Resources (Rubber, Uranium, Copper)"],
    notes:
      "Strategically located between France and Germany; invaded in 1914 and at high risk again. Controls the Belgian Congo, a vast source of rubber, uranium, and minerals. Returned to neutrality policy in 1936."
  },

  netherlands: {
    name: "Kingdom of the Netherlands",
    shortName: "Netherlands",
    leader: { name: "Queen Wilhelmina / PM Dirk Jan de Geer", title: "Queen / Prime Minister" },
    alliance: "neutral",
    population: 8700000,
    military: {
      activeTroops: 100000,
      reserves: 250000,
      capitalShips: 2,
      submarines: 15,
      aircraft: 150
    },
    resources: ["Colonial Resources (Dutch East Indies: Oil, Rubber, Tin)", "Agriculture", "Shipping"],
    notes:
      "Controls the Dutch East Indies, the world's fourth-largest oil producer and critical source of rubber and tin. Homeland is flat, low-lying, and difficult to defend. Water Line defences partially modernised."
  },

  switzerland: {
    name: "Swiss Confederation",
    shortName: "Switzerland",
    leader: { name: "Federal Council (rotating presidency)", title: "Federal Council" },
    alliance: "neutral",
    population: 4200000,
    military: {
      activeTroops: 200000,
      reserves: 500000,
      capitalShips: 0,
      submarines: 0,
      aircraft: 250
    },
    resources: ["Precision Manufacturing (Watches, Instruments)", "Banking/Finance", "Hydroelectric Power", "Chocolate/Food Processing"],
    notes:
      "Long-standing armed neutrality backed by mountainous terrain and a well-trained citizen militia (National Redoubt strategy). Key international banking centre and home to the Red Cross and League of Nations."
  },

  ireland: {
    name: "Ireland (Éire)",
    shortName: "Ireland",
    leader: { name: "Éamon de Valera", title: "Taoiseach (Prime Minister)" },
    alliance: "neutral",
    population: 2900000,
    military: {
      activeTroops: 20000,
      reserves: 25000,
      capitalShips: 0,
      submarines: 0,
      aircraft: 30
    },
    resources: ["Agriculture (Cattle, Dairy)", "Peat", "Fishing"],
    notes:
      "Recently independent from Britain (1922), maintaining strict neutrality partly to assert sovereignty. Known as 'The Emergency' period. Refused to allow British use of Treaty Ports returned in 1938."
  },

  portugal: {
    name: "Portuguese Republic (Estado Novo)",
    shortName: "Portugal",
    leader: { name: "António de Oliveira Salazar", title: "Prime Minister (Presidente do Conselho)" },
    alliance: "neutral",
    population: 7700000,
    military: {
      activeTroops: 100000,
      reserves: 200000,
      capitalShips: 1,
      submarines: 3,
      aircraft: 150
    },
    resources: ["Tungsten (Wolfram)", "Colonial Resources (Angola, Mozambique, Timor)", "Cork", "Fish"],
    notes:
      "Oldest ally of Britain (Treaty of Windsor, 1373) but governed by the authoritarian Estado Novo regime. Controls Angola, Mozambique, Goa, Macau, and Timor. Tungsten exports are strategically valuable to both sides."
  },

  romania: {
    name: "Kingdom of Romania",
    shortName: "Romania",
    leader: { name: "King Carol II", title: "King" },
    alliance: "neutral_allied",
    population: 20000000,
    military: {
      activeTroops: 350000,
      reserves: 1500000,
      capitalShips: 0,
      submarines: 1,
      aircraft: 700
    },
    resources: ["Oil (Ploiești)", "Wheat", "Timber", "Natural Gas"],
    notes:
      "The Ploiești oil fields make Romania one of Europe's most strategically important nations. Guaranteed by Britain and France in 1939 but under growing German economic pressure. Ethnically diverse with large Hungarian and German minorities."
  },

  hungary: {
    name: "Kingdom of Hungary",
    shortName: "Hungary",
    leader: { name: "Miklós Horthy", title: "Regent" },
    alliance: "neutral_axis",
    population: 9100000,
    military: {
      activeTroops: 85000,
      reserves: 200000,
      capitalShips: 0,
      submarines: 0,
      aircraft: 350
    },
    resources: ["Bauxite", "Agriculture (Wheat, Livestock)", "Manganese"],
    notes:
      "Revisionist state seeking return of territories lost in the Treaty of Trianon (1920). Gained southern Slovakia and Carpatho-Ukraine via the First Vienna Award (1938). Increasingly aligned with Germany."
  },

  yugoslavia: {
    name: "Kingdom of Yugoslavia",
    shortName: "Yugoslavia",
    leader: { name: "Prince Regent Paul / PM Dragiša Cvetković", title: "Prince Regent / Prime Minister" },
    alliance: "neutral",
    population: 16000000,
    military: {
      activeTroops: 200000,
      reserves: 1400000,
      capitalShips: 0,
      submarines: 4,
      aircraft: 450
    },
    resources: ["Copper", "Bauxite", "Chromium", "Lead", "Agriculture"],
    notes:
      "Multi-ethnic kingdom of Serbs, Croats, and Slovenes under constant internal tension. Strategically positioned in the Balkans. Trying to balance between Axis and Allied pressures."
  },

  greece: {
    name: "Kingdom of Greece",
    shortName: "Greece",
    leader: { name: "King George II / PM Ioannis Metaxas", title: "King / Prime Minister" },
    alliance: "neutral_allied",
    population: 7200000,
    military: {
      activeTroops: 120000,
      reserves: 400000,
      capitalShips: 1,
      submarines: 6,
      aircraft: 160
    },
    resources: ["Tobacco", "Olive Oil", "Chromite", "Merchant Shipping"],
    notes:
      "Governed under the authoritarian Metaxas regime since 1936 but traditionally aligned with Britain. Controls strategically important islands in the Aegean. Strong naval tradition."
  },

  bulgaria: {
    name: "Kingdom of Bulgaria",
    shortName: "Bulgaria",
    leader: { name: "Tsar Boris III", title: "Tsar" },
    alliance: "neutral_axis",
    population: 6200000,
    military: {
      activeTroops: 100000,
      reserves: 400000,
      capitalShips: 0,
      submarines: 0,
      aircraft: 300
    },
    resources: ["Tobacco", "Agriculture", "Coal", "Lead"],
    notes:
      "Revisionist state seeking return of territories lost in WWI (Southern Dobruja, Western Thrace, Macedonia). Traditionally close to Russia but increasingly drawn into the German economic orbit."
  },

  brazil: {
    name: "Republic of Brazil (Estado Novo)",
    shortName: "Brazil",
    leader: { name: "Getúlio Vargas", title: "President" },
    alliance: "neutral",
    population: 40000000,
    military: {
      activeTroops: 80000,
      reserves: 200000,
      capitalShips: 2,
      submarines: 3,
      aircraft: 350
    },
    resources: ["Coffee", "Rubber", "Iron Ore", "Manganese", "Cotton"],
    notes:
      "Largest country in South America with immense natural resources. Under the authoritarian Estado Novo regime; courted by both the US and Germany. Controls vast Atlantic coastline of strategic importance."
  },

  argentina: {
    name: "Argentine Republic",
    shortName: "Argentina",
    leader: { name: "Roberto María Ortiz", title: "President" },
    alliance: "neutral",
    population: 14000000,
    military: {
      activeTroops: 50000,
      reserves: 250000,
      capitalShips: 2,
      submarines: 3,
      aircraft: 300
    },
    resources: ["Beef/Cattle", "Wheat", "Wool", "Linseed Oil"],
    notes:
      "Major agricultural exporter with strong economic ties to Britain and significant German and Italian immigrant communities. Military has growing political influence. Officially neutral but sympathies are divided."
  },

  iran: {
    name: "Imperial State of Iran",
    shortName: "Iran",
    leader: { name: "Reza Shah Pahlavi", title: "Shah" },
    alliance: "neutral",
    population: 15000000,
    military: {
      activeTroops: 127000,
      reserves: 100000,
      capitalShips: 0,
      submarines: 0,
      aircraft: 150
    },
    resources: ["Oil (Anglo-Iranian Oil Company)", "Natural Gas", "Carpets", "Agriculture"],
    notes:
      "Major oil producer under British concession (AIOC). Reza Shah has pursued modernisation and developed economic ties with Germany to counterbalance British and Soviet influence. Strategically vital for any Middle Eastern theatre."
  },

  iraq: {
    name: "Kingdom of Iraq",
    shortName: "Iraq",
    leader: { name: "King Ghazi I / Regent Abd al-Ilah (after Ghazi's death April 1939)", title: "King / Regent" },
    alliance: "neutral_allied",
    population: 4000000,
    military: {
      activeTroops: 43000,
      reserves: 30000,
      capitalShips: 0,
      submarines: 0,
      aircraft: 100
    },
    resources: ["Oil (Kirkuk/Mosul)", "Dates", "Agriculture (Mesopotamia)"],
    notes:
      "Independent since 1932 but Britain retains significant military bases (Habbaniya, Basra) and oil concession rights. The Iraq Petroleum Company is a major oil exporter. Anti-British nationalist sentiment is growing."
  },

  saudi_arabia: {
    name: "Kingdom of Saudi Arabia",
    shortName: "Saudi Arabia",
    leader: { name: "Abdulaziz ibn Abdul Rahman Al Saud (Ibn Saud)", title: "King" },
    alliance: "neutral",
    population: 3000000,
    military: {
      activeTroops: 20000,
      reserves: 15000,
      capitalShips: 0,
      submarines: 0,
      aircraft: 10
    },
    resources: ["Oil (newly discovered — ARAMCO concession, 1938)", "Dates", "Livestock"],
    notes:
      "Unified the kingdom in 1932. Oil was commercially discovered in 1938 at Dammam; full exploitation has barely begun. Extremely limited industrial or military infrastructure. Reliant on Hajj pilgrim revenue."
  },

  thailand: {
    name: "Kingdom of Thailand (Siam)",
    shortName: "Thailand",
    leader: { name: "Plaek Phibunsongkhram (Phibun)", title: "Prime Minister" },
    alliance: "neutral",
    population: 15000000,
    military: {
      activeTroops: 80000,
      reserves: 100000,
      capitalShips: 2,
      submarines: 4,
      aircraft: 200
    },
    resources: ["Rice", "Rubber", "Tin", "Teak"],
    notes:
      "Only Southeast Asian nation never colonised by a European power. Military government under Phibun is nationalist and modernising. Renamed from Siam to Thailand in 1939. Growing Japanese influence."
  },

  egypt: {
    name: "Kingdom of Egypt",
    shortName: "Egypt",
    leader: { name: "King Farouk I / PM Muhammad Mahmoud Pasha", title: "King / Prime Minister" },
    alliance: "neutral_allied",
    population: 16000000,
    military: {
      activeTroops: 23000,
      reserves: 30000,
      capitalShips: 0,
      submarines: 0,
      aircraft: 100
    },
    resources: ["Cotton", "Suez Canal Revenue", "Agriculture (Nile Valley)"],
    notes:
      "Nominally independent but Britain maintains a massive military presence, especially around the Suez Canal Zone (1936 Anglo-Egyptian Treaty). The Suez Canal is one of the world's most strategic waterways."
  }
};
