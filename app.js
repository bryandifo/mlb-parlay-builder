const MARKETS = [
  "Game Lines",
  "Player Hits",
  "Player Runs",
  "Player Hits+Runs+RBIs",
  "Player Total Bases",
  "Alternate Strikeouts",
  "Pitcher Strikeouts"
];

const sampleLegs = [
  ["Blue Jays", "Moneyline", "TOR", "PIT", "PIT @ TOR", 58, -135, 4.9, 0, "Game Lines", "DraftKings"],
  ["Braves", "Moneyline", "ATL", "WSH", "WSH @ ATL", 63, -165, 5.3, 0, "Game Lines", "FanDuel"],
  ["Yankees/Rays", "Over 7.5 runs", "NYY", "TB", "TB @ NYY", 55, -110, 2.6, 0, "Game Lines", "BetMGM"],
  ["Travis Bazzana", "Over 0.5 hits", "CLE", "PHI", "CLE @ PHI", 90, -156, 29.1, 7, "Player Hits", "DraftKings"],
  ["Spencer Horwitz", "Over 0.5 hits", "PIT", "TOR", "PIT @ TOR", 90, -168, 27.3, 5, "Player Hits", "DraftKings"],
  ["Mark Vientos", "Over 0.5 hits", "NYM", "MIA", "NYM @ MIA", 80, -200, 13.3, 2, "Player Hits", "BetMGM"],
  ["Alec Burleson", "Over 0.5 hits", "STL", "CIN", "STL @ CIN", 80, -210, 12.3, 5, "Player Hits", "BetMGM"],
  ["Xavier Edwards", "Over 0.5 hits", "MIA", "NYM", "NYM @ MIA", 80, -220, 11.2, 6, "Player Hits", "ESPN Bet"],
  ["Konnor Griffin", "Over 0.5 runs", "PIT", "TOR", "PIT @ TOR", 80, 175, 43.6, 2, "Player Runs", "BetMGM"],
  ["Xavier Edwards", "Over 0.5 runs", "MIA", "NYM", "NYM @ MIA", 80, 128, 36.1, 5, "Player Runs", "BetRivers"],
  ["Juan Soto", "Over 0.5 runs", "NYM", "MIA", "NYM @ MIA", 80, 106, 31.5, 7, "Player Runs", "DraftKings"],
  ["Corbin Carroll", "Over 0.5 runs", "AZ", "COL", "COL @ AZ", 80, -133, 22.9, 3, "Player Runs", "DraftKings"],
  ["Aaron Judge", "Over 1.5 H+R+RBI", "NYY", "TB", "TB @ NYY", 66, -120, 6.4, 0, "Player Hits+Runs+RBIs", "DraftKings"],
  ["Juan Soto", "Over 1.5 H+R+RBI", "NYM", "MIA", "NYM @ MIA", 64, -115, 5.2, 0, "Player Hits+Runs+RBIs", "FanDuel"],
  ["Matt Olson", "Over 1.5 H+R+RBI", "ATL", "WSH", "WSH @ ATL", 61, 105, 7.8, 0, "Player Hits+Runs+RBIs", "Caesars"],
  ["Ketel Marte", "Over 1.5 total bases", "AZ", "COL", "COL @ AZ", 80, -110, 27.6, 4, "Player Total Bases", "BetMGM"],
  ["Matt Olson", "Over 1.5 total bases", "ATL", "WSH", "WSH @ ATL", 57, 125, 9.5, 0, "Player Total Bases", "Caesars"],
  ["Michael Harris II", "Over 1.5 total bases", "ATL", "WSH", "WSH @ ATL", 59, 110, 8.4, 0, "Player Total Bases", "DraftKings"],
  ["Gerrit Cole", "Over 4.5 strikeouts", "NYY", "TB", "TB @ NYY", 70, -145, 8.3, 0, "Pitcher Strikeouts", "FanDuel"],
  ["Jacob deGrom", "Over 5.5 strikeouts", "TEX", "LAA", "TEX @ LAA", 64, -120, 5.9, 0, "Pitcher Strikeouts", "DraftKings"],
  ["Logan Gilbert", "Over 5.5 strikeouts", "SEA", "KC", "SEA @ KC", 61, 105, 7.0, 0, "Pitcher Strikeouts", "BetMGM"],
  ["Gerrit Cole", "Alt over 6.5 strikeouts", "NYY", "TB", "TB @ NYY", 47, 165, 5.6, 0, "Alternate Strikeouts", "FanDuel"],
  ["Jacob deGrom", "Alt over 7.5 strikeouts", "TEX", "LAA", "TEX @ LAA", 39, 240, 4.6, 0, "Alternate Strikeouts", "DraftKings"],
  ["Logan Gilbert", "Alt over 7.5 strikeouts", "SEA", "KC", "SEA @ KC", 36, 310, 5.1, 0, "Alternate Strikeouts", "BetMGM"]
].map((row, index) => toLeg(row, index));

const games = [
  {
    id: "hou-chc-2026-05-22",
    date: "2026-05-22",
    time: "2:20 PM ET",
    away: "HOU",
    home: "CHC",
    venue: "Wrigley Field",
    weather: "Check wind before first pitch",
    park: "Wind-sensitive run environment",
    pitchers: { away: { name: "Spencer Arrighetti", hand: "R" }, home: { name: "Jameson Taillon", hand: "R" } },
    hitters: []
  },
  {
    id: "stl-cin-2026-05-22",
    date: "2026-05-22",
    time: "6:40 PM ET",
    away: "STL",
    home: "CIN",
    venue: "Great American Ball Park",
    weather: "Hitter-friendly park; check weather",
    park: "Power boost",
    pitchers: { away: { name: "Kyle Leahy", hand: "R" }, home: { name: "Chris Paddack", hand: "R" } },
    hitters: []
  },
  {
    id: "cle-phi-2026-05-22",
    date: "2026-05-22",
    time: "6:40 PM ET",
    away: "CLE",
    home: "PHI",
    venue: "Citizens Bank Park",
    weather: "Check late weather",
    park: "Good pull-side power park",
    pitchers: { away: { name: "Gavin Williams", hand: "R" }, home: { name: "Cristopher Sanchez", hand: "L" } },
    hitters: []
  },
  {
    id: "tb-nyy-2026-05-22",
    date: "2026-05-22",
    time: "7:05 PM ET",
    away: "TB",
    home: "NYY",
    venue: "Yankee Stadium",
    weather: "Check wind to right",
    park: "Short porch power boost",
    pitchers: { away: { name: "Nick Martinez", hand: "R" }, home: { name: "Gerrit Cole", hand: "R" } },
    hitters: []
  },
  {
    id: "pit-tor-2026-05-22",
    date: "2026-05-22",
    time: "7:07 PM ET",
    away: "PIT",
    home: "TOR",
    venue: "Rogers Centre",
    weather: "Dome",
    park: "Neutral-to-good for power",
    pitchers: { away: { name: "Bubba Chandler", hand: "R" }, home: { name: "Kevin Gausman", hand: "R" } },
    hitters: []
  },
  {
    id: "min-bos-2026-05-22",
    date: "2026-05-22",
    time: "7:10 PM ET",
    away: "MIN",
    home: "BOS",
    venue: "Fenway Park",
    weather: "Check wind over Green Monster",
    park: "Doubles boost",
    pitchers: { away: { name: "Connor Prielipp", hand: "L" }, home: { name: "Payton Tolle", hand: "L" } },
    hitters: []
  },
  {
    id: "nym-mia-2026-05-22",
    date: "2026-05-22",
    time: "7:10 PM ET",
    away: "NYM",
    home: "MIA",
    venue: "loanDepot park",
    weather: "Dome",
    park: "Suppresses home run carry",
    pitchers: { away: { name: "Freddy Peralta", hand: "R" }, home: { name: "Eury Perez", hand: "R" } },
    hitters: []
  },
  {
    id: "det-bal-2026-05-22",
    date: "2026-05-22",
    time: "7:15 PM ET",
    away: "DET",
    home: "BAL",
    venue: "Oriole Park at Camden Yards",
    weather: "Check humidity",
    park: "Left-field wall suppresses some power",
    pitchers: { away: { name: "Jack Flaherty", hand: "R" }, home: { name: "Chris Bassitt", hand: "R" } },
    hitters: []
  },
  {
    id: "wsh-atl-2026-05-22",
    date: "2026-05-22",
    time: "7:15 PM ET",
    away: "WSH",
    home: "ATL",
    venue: "Truist Park",
    weather: "Warm park environment",
    park: "Good right-center power alley",
    pitchers: { away: { name: "Miles Mikolas", hand: "R" }, home: { name: "Bryce Elder", hand: "R" } },
    hitters: []
  },
  {
    id: "sea-kc-2026-05-22",
    date: "2026-05-22",
    time: "7:40 PM ET",
    away: "SEA",
    home: "KC",
    venue: "Kauffman Stadium",
    weather: "Check wind",
    park: "Triples and gap-hit friendly",
    pitchers: { away: { name: "Logan Gilbert", hand: "R" }, home: { name: "Noah Cameron", hand: "L" } },
    hitters: []
  },
  {
    id: "lad-mil-2026-05-22",
    date: "2026-05-22",
    time: "7:40 PM ET",
    away: "LAD",
    home: "MIL",
    venue: "American Family Field",
    weather: "Roof watch",
    park: "Neutral with roof variable",
    pitchers: { away: { name: "Justin Wrobleski", hand: "L" }, home: { name: "Logan Henderson", hand: "R" } },
    hitters: []
  },
  {
    id: "tex-laa-2026-05-22",
    date: "2026-05-22",
    time: "9:38 PM ET",
    away: "TEX",
    home: "LAA",
    venue: "Angel Stadium",
    weather: "Marine layer watch",
    park: "Can mute late-night carry",
    pitchers: { away: { name: "Jacob deGrom", hand: "R" }, home: { name: "Grayson Rodriguez", hand: "R" } },
    hitters: []
  },
  {
    id: "col-az-2026-05-22",
    date: "2026-05-22",
    time: "9:40 PM ET",
    away: "COL",
    home: "AZ",
    venue: "Chase Field",
    weather: "Roof watch",
    park: "Boosts extra-base hits when roof is open",
    pitchers: { away: { name: "Tomoyuki Sugano", hand: "R" }, home: { name: "Michael Soroka", hand: "R" } },
    hitters: []
  },
  {
    id: "ath-sd-2026-05-22",
    date: "2026-05-22",
    time: "9:40 PM ET",
    away: "ATH",
    home: "SD",
    venue: "Petco Park",
    weather: "Marine layer watch",
    park: "Run suppression risk",
    pitchers: { away: { name: "Jeffrey Springs", hand: "L" }, home: { name: "Walker Buehler", hand: "R" } },
    hitters: []
  },
  {
    id: "cws-sf-2026-05-22",
    date: "2026-05-22",
    time: "10:15 PM ET",
    away: "CWS",
    home: "SF",
    venue: "Oracle Park",
    weather: "Cool night air",
    park: "Power suppression risk",
    pitchers: { away: { name: "Davis Martin", hand: "R" }, home: { name: "TBD", hand: "-" } },
    hitters: []
  }
];

let legs = sampleLegs;
let lastBuild = [];
let selectedGameId = "pit-tor-2026-05-22";
let activeMarket = "All Markets";

const els = {
  table: document.querySelector("#legTable"),
  build: document.querySelector("#buildParlays"),
  add: document.querySelector("#addLeg"),
  clear: document.querySelector("#clearBoard"),
  sample: document.querySelector("#loadSample"),
  import: document.querySelector("#importText"),
  paste: document.querySelector("#pasteBox"),
  legCount: document.querySelector("#legCount"),
  stake: document.querySelector("#stake"),
  minEdge: document.querySelector("#minEdge"),
  maxPerGame: document.querySelector("#maxPerGame"),
  strategy: document.querySelector("#strategy"),
  bankroll: document.querySelector("#bankroll"),
  parlayProb: document.querySelector("#parlayProb"),
  parlayOdds: document.querySelector("#parlayOdds"),
  profit: document.querySelector("#profit"),
  ev: document.querySelector("#expectedValue"),
  unit: document.querySelector("#unitSize"),
  kelly: document.querySelector("#kelly"),
  selected: document.querySelector("#selectedLegs"),
  warnings: document.querySelector("#warnings"),
  riskBadge: document.querySelector("#riskBadge"),
  ladder: document.querySelector("#ladderGrid"),
  slateDate: document.querySelector("#slateDate"),
  gameCalendar: document.querySelector("#gameCalendar"),
  matchupHeader: document.querySelector("#matchupHeader"),
  matchupTable: document.querySelector("#matchupTable"),
  marketTabs: document.querySelector("#marketTabs"),
  marketSummary: document.querySelector("#marketSummary")
};

function toLeg(row, index = cryptoRandom()) {
  return {
    id: `leg-${Date.now()}-${index}-${Math.random().toString(16).slice(2)}`,
    player: String(row[0] || ""),
    prop: String(row[1] || ""),
    team: String(row[2] || ""),
    opponent: String(row[3] || ""),
    game: String(row[4] || ""),
    probability: clamp(Number(row[5]) || 50, 1, 99),
    odds: Number(row[6]) || -110,
    edge: Number(row[7]) || 0,
    streak: Number(row[8]) || 0,
    category: normalizeMarket(row[9] || "Player Hits"),
    book: String(row[10] || ""),
    locked: false,
    excluded: false
  };
}

function normalizeMarket(value) {
  const raw = String(value || "").trim();
  const key = raw.toLowerCase().replaceAll(" ", "").replaceAll("-", "").replaceAll("_", "");
  const aliases = {
    gamelines: "Game Lines",
    game: "Game Lines",
    moneyline: "Game Lines",
    spread: "Game Lines",
    total: "Game Lines",
    totals: "Game Lines",
    hits: "Player Hits",
    playerhits: "Player Hits",
    runs: "Player Runs",
    playerruns: "Player Runs",
    hrrbi: "Player Hits+Runs+RBIs",
    hitsrunsrbis: "Player Hits+Runs+RBIs",
    playerhitsrunsrbis: "Player Hits+Runs+RBIs",
    "h+r+rbi": "Player Hits+Runs+RBIs",
    bases: "Player Total Bases",
    totalbases: "Player Total Bases",
    playertotalbases: "Player Total Bases",
    k: "Pitcher Strikeouts",
    ks: "Pitcher Strikeouts",
    strikeouts: "Pitcher Strikeouts",
    pitcherstrikeouts: "Pitcher Strikeouts",
    pitcherk: "Pitcher Strikeouts",
    alternatestrikeouts: "Alternate Strikeouts",
    altstrikeouts: "Alternate Strikeouts",
    altk: "Alternate Strikeouts",
    alternatek: "Alternate Strikeouts"
  };
  return aliases[key] || MARKETS.find((market) => market.toLowerCase() === raw.toLowerCase()) || raw || "Player Hits";
}

function marketOptions(selected) {
  return MARKETS.map((market) => `<option value="${escapeHtml(market)}" ${market === selected ? "selected" : ""}>${escapeHtml(market)}</option>`).join("");
}

function defaultPropForMarket(market) {
  const defaults = {
    "Game Lines": "Moneyline",
    "Player Hits": "Over 0.5 hits",
    "Player Runs": "Over 0.5 runs",
    "Player Hits+Runs+RBIs": "Over 1.5 H+R+RBI",
    "Player Total Bases": "Over 1.5 total bases",
    "Alternate Strikeouts": "Alt over 6.5 strikeouts",
    "Pitcher Strikeouts": "Over 4.5 strikeouts"
  };
  return defaults[market] || "Over 0.5 hits";
}

function legMatchesMarket(leg) {
  return activeMarket === "All Markets" || leg.category === activeMarket;
}

function visibleLegs() {
  return legs.filter(legMatchesMarket);
}

function isHitterMarket(leg) {
  return [
    "Player Hits",
    "Player Runs",
    "Player Hits+Runs+RBIs",
    "Player Total Bases"
  ].includes(leg.category);
}

function cryptoRandom() {
  return Math.floor(Math.random() * 100000);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function americanToDecimal(odds) {
  return odds > 0 ? 1 + odds / 100 : 1 + 100 / Math.abs(odds);
}

function decimalToAmerican(decimalOdds) {
  if (decimalOdds >= 2) return Math.round((decimalOdds - 1) * 100);
  return Math.round(-100 / (decimalOdds - 1));
}

function impliedProbability(odds) {
  return odds > 0 ? 100 / (odds + 100) : Math.abs(odds) / (Math.abs(odds) + 100);
}

function formatAmerican(odds) {
  if (!Number.isFinite(odds)) return "--";
  return odds > 0 ? `+${odds}` : String(odds);
}

function money(value) {
  const sign = value < 0 ? "-" : "";
  return `${sign}$${Math.abs(value).toFixed(2)}`;
}

function pct(value, digits = 1) {
  return `${(value * 100).toFixed(digits)}%`;
}

function scoreLeg(leg) {
  const p = leg.probability / 100;
  const implied = impliedProbability(leg.odds);
  const value = (p - implied) * 100;
  const price = americanToDecimal(leg.odds);
  const plusBoost = leg.odds > 0 ? Math.min(14, leg.odds / 55) : 0;
  const streakBoost = Math.min(8, leg.streak * 0.8);
  const edge = Number.isFinite(leg.edge) ? leg.edge : value;

  const weights = {
    safe: [62, 18, 6, 6],
    value: [40, 36, 10, 6],
    plus: [34, 26, 20, 8],
    balanced: [50, 26, 10, 7]
  }[els.strategy.value];

  return (
    p * weights[0] +
    Math.max(-15, edge) * (weights[1] / 30) +
    Math.min(18, price * 3) +
    plusBoost * (weights[2] / 10) +
    streakBoost * (weights[3] / 8)
  );
}

function renderMarkets() {
  const allCount = legs.length;
  const counts = new Map(MARKETS.map((market) => [market, 0]));
  legs.forEach((leg) => counts.set(leg.category, (counts.get(leg.category) || 0) + 1));

  const tabs = ["All Markets", ...MARKETS];
  els.marketTabs.innerHTML = tabs
    .map((market) => {
      const count = market === "All Markets" ? allCount : counts.get(market) || 0;
      return `<button class="market-tab ${market === activeMarket ? "active" : ""}" data-market="${escapeHtml(market)}">${escapeHtml(market)} <b>${count}</b></button>`;
    })
    .join("");

  const visibleCount = visibleLegs().length;
  els.marketSummary.textContent =
    activeMarket === "All Markets"
      ? `${visibleCount} legs across all requested markets`
      : `${visibleCount} legs in ${activeMarket}`;
}

function renderTable() {
  els.table.innerHTML = "";
  visibleLegs().forEach((leg) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <div class="status-cell">
          <button class="tiny-toggle ${leg.locked ? "active-lock" : ""}" data-action="lock" data-id="${leg.id}">Lock</button>
          <button class="tiny-toggle ${leg.excluded ? "active-ban" : ""}" data-action="exclude" data-id="${leg.id}">Cut</button>
        </div>
      </td>
      <td class="prop-cell">
        <input data-field="player" data-id="${leg.id}" value="${escapeHtml(leg.player)}" aria-label="Player" />
        <input data-field="prop" data-id="${leg.id}" value="${escapeHtml(leg.prop)}" aria-label="Prop" />
      </td>
      <td><input data-field="team" data-id="${leg.id}" value="${escapeHtml(leg.team)}" aria-label="Team" /></td>
      <td><input data-field="opponent" data-id="${leg.id}" value="${escapeHtml(leg.opponent)}" aria-label="Opponent" /></td>
      <td>
        <input data-field="game" data-id="${leg.id}" value="${escapeHtml(leg.game)}" aria-label="Game" />
      </td>
      <td><input type="number" min="1" max="99" step="0.1" data-field="probability" data-id="${leg.id}" value="${leg.probability}" aria-label="Probability" /></td>
      <td><input type="number" step="1" data-field="odds" data-id="${leg.id}" value="${leg.odds}" aria-label="Odds" /></td>
      <td><input type="number" step="0.1" data-field="edge" data-id="${leg.id}" value="${leg.edge}" aria-label="Edge" /></td>
      <td><select data-field="category" data-id="${leg.id}" aria-label="Market">${marketOptions(leg.category)}</select></td>
      <td><span class="score-pill">${scoreLeg(leg).toFixed(1)}</span></td>
    `;
    els.table.appendChild(tr);
  });

  if (!visibleLegs().length) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="10">No legs in ${escapeHtml(activeMarket)} yet. Add a leg or import rows using this market name.</td>`;
    els.table.appendChild(tr);
  }
}

function getGamesForDate() {
  return games.filter((game) => game.date === els.slateDate.value);
}

function gameLabel(game) {
  return `${game.away} @ ${game.home}`;
}

function renderCalendar() {
  const slateGames = getGamesForDate();
  if (!slateGames.some((game) => game.id === selectedGameId)) {
    selectedGameId = slateGames[0]?.id || "";
  }

  els.gameCalendar.innerHTML = "";
  if (!slateGames.length) {
    els.gameCalendar.innerHTML = `<div class="warning">No games loaded for this date. Use the sample dates 2026-05-22 or 2026-05-23.</div>`;
    renderMatchups();
    return;
  }

  slateGames.forEach((game) => {
    const boardCount = legs.filter((leg) => leg.game === gameLabel(game)).length;
    const card = document.createElement("button");
    card.className = `game-card ${game.id === selectedGameId ? "active" : ""}`;
    card.type = "button";
    card.dataset.gameId = game.id;
    card.innerHTML = `
      <strong>${escapeHtml(gameLabel(game))}</strong>
      <span>${escapeHtml(game.time)} | ${escapeHtml(game.venue)}</span>
      <span>${escapeHtml(game.pitchers.away.name)} (${game.pitchers.away.hand}) vs ${escapeHtml(game.pitchers.home.name)} (${game.pitchers.home.hand})</span>
      <span>${escapeHtml(game.weather)} | ${escapeHtml(game.park)}</span>
      <div class="game-meta">
        <b>${boardCount} board legs</b>
        <b>${game.hitters.length} hitter looks</b>
      </div>
    `;
    els.gameCalendar.appendChild(card);
  });

  renderMatchups();
}

function pitcherForHitter(game, hitter) {
  if (hitter.pitcher && hitter.pitcher !== "MIA lineup") return hitter.pitcher;
  return hitter.team === game.away ? game.pitchers.home.name : game.pitchers.away.name;
}

function pitcherHandForHitter(game, hitter) {
  const pitcherName = pitcherForHitter(game, hitter);
  if (pitcherName === game.pitchers.home.name) return game.pitchers.home.hand;
  if (pitcherName === game.pitchers.away.name) return game.pitchers.away.hand;
  return "-";
}

function bestBoardPlay(hitter) {
  const match = legs
    .filter((leg) => leg.player.toLowerCase() === hitter.name.toLowerCase())
    .sort((a, b) => scoreLeg(b) - scoreLeg(a))[0];
  if (!match) return "No board leg";
  return `${match.prop} | ${match.probability}% | ${formatAmerican(match.odds)}`;
}

function gradeClass(grade) {
  const normalized = String(grade).toLowerCase();
  if (normalized === "strong") return "angle-good";
  if (normalized === "good") return "angle-watch";
  return "angle-risk";
}

function renderMatchups() {
  const game = games.find((item) => item.id === selectedGameId);
  if (!game) {
    els.matchupHeader.innerHTML = `<strong>No game selected</strong><span>Pick a date with loaded games.</span>`;
    els.matchupTable.innerHTML = "";
    return;
  }

  els.matchupHeader.innerHTML = `
    <strong>${escapeHtml(gameLabel(game))}</strong>
    <span>${escapeHtml(game.time)} | ${escapeHtml(game.venue)} | ${escapeHtml(game.weather)}</span>
    <span>${escapeHtml(game.pitchers.away.name)} (${game.pitchers.away.hand}) vs ${escapeHtml(game.pitchers.home.name)} (${game.pitchers.home.hand})</span>
  `;

  const boardHitters = legs
    .filter((leg) => leg.game === gameLabel(game) && isHitterMarket(leg))
    .map((leg) => ({
      name: leg.player,
      team: leg.team,
      hand: "-",
      pitcher: "",
      angle: leg.category,
      grade: leg.edge >= 20 ? "Strong" : leg.edge >= 8 ? "Good" : "Watch",
      note: `${leg.prop} from the current board. Verify lineup spot and confirmed starter before using it.`,
      boardPlay: `${leg.prop} | ${leg.probability}% | ${formatAmerican(leg.odds)}`
    }));
  const manualHitters = game.hitters.filter(
    (hitter) => !boardHitters.some((boardHitter) => boardHitter.name.toLowerCase() === hitter.name.toLowerCase())
  );
  const hitters = [...boardHitters, ...manualHitters];

  if (!hitters.length) {
    els.matchupTable.innerHTML = `<tr><td colspan="6">No hitter legs loaded for this game yet. Add/import legs with game set to ${escapeHtml(gameLabel(game))}.</td></tr>`;
    return;
  }

  els.matchupTable.innerHTML = hitters
    .map((hitter) => {
      const pitcher = pitcherForHitter(game, hitter);
      const pHand = pitcherHandForHitter(game, hitter);
      return `
        <tr>
          <td><strong>${escapeHtml(hitter.name)}</strong><br><span class="muted-note">${escapeHtml(hitter.team)} bats ${escapeHtml(hitter.hand)}</span></td>
          <td>${escapeHtml(pitcher)}<br><span class="muted-note">throws ${escapeHtml(pHand)}</span></td>
          <td>${escapeHtml(hitter.hand)} vs ${escapeHtml(pHand)}</td>
          <td><span class="${gradeClass(hitter.grade)}">${escapeHtml(hitter.grade)}</span> ${escapeHtml(hitter.angle)}</td>
          <td>${escapeHtml(hitter.note)}</td>
          <td>${escapeHtml(hitter.boardPlay || bestBoardPlay(hitter))}</td>
        </tr>
      `;
    })
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function findLeg(id) {
  return legs.find((leg) => leg.id === id);
}

function build() {
  const requested = clamp(Number(els.legCount.value) || 4, 4, 25);
  els.legCount.value = requested;
  const minEdge = Number(els.minEdge.value) || 0;
  const maxPerGame = clamp(Number(els.maxPerGame.value) || 1, 1, 6);

  const warnings = [];
  const marketLegs = visibleLegs();
  const locked = marketLegs.filter((leg) => leg.locked && !leg.excluded);
  const candidates = marketLegs
    .filter((leg) => !leg.excluded && !leg.locked && leg.edge >= minEdge)
    .sort((a, b) => scoreLeg(b) - scoreLeg(a));

  const selected = [];
  const gameCounts = new Map();
  const addIfAllowed = (leg, force = false) => {
    const key = leg.game || `${leg.team}-${leg.opponent}` || "unknown";
    const count = gameCounts.get(key) || 0;
    if (!force && count >= maxPerGame) return false;
    if (selected.some((item) => item.id === leg.id)) return false;
    selected.push(leg);
    gameCounts.set(key, count + 1);
    return true;
  };

  locked.forEach((leg) => addIfAllowed(leg, true));
  candidates.forEach((leg) => {
    if (selected.length < requested) addIfAllowed(leg);
  });

  if (selected.length < requested) {
    marketLegs
      .filter((leg) => !leg.excluded && !selected.some((item) => item.id === leg.id))
      .sort((a, b) => scoreLeg(b) - scoreLeg(a))
      .forEach((leg) => {
        if (selected.length < requested) addIfAllowed(leg, true);
      });
  }

  if (locked.length > requested) {
    warnings.push(`You locked ${locked.length} legs, which is more than the requested ${requested}.`);
  }

  if (selected.length < requested) {
    warnings.push(`Only ${selected.length} eligible legs are available. Add more plays or lower your filters.`);
  }

  lastBuild = selected.slice(0, Math.max(requested, locked.length));
  renderResults(lastBuild, warnings);
  renderMarkets();
  renderTable();
  renderCalendar();
}

function renderResults(selected, warnings) {
  const stake = Number(els.stake.value) || 0;
  const bankroll = Number(els.bankroll.value) || 0;
  const combinedDecimal = selected.reduce((product, leg) => product * americanToDecimal(leg.odds), 1);
  const rawProbability = selected.reduce((product, leg) => product * (leg.probability / 100), 1);
  const correlationPenalty = estimateCorrelationPenalty(selected);
  const adjustedProbability = rawProbability * correlationPenalty;
  const profit = stake * (combinedDecimal - 1);
  const ev = adjustedProbability * profit - (1 - adjustedProbability) * stake;
  const american = decimalToAmerican(combinedDecimal);
  const kelly = combinedDecimal > 1 ? (adjustedProbability * combinedDecimal - 1) / (combinedDecimal - 1) : 0;
  const quarterKelly = Math.max(0, Math.min(bankroll * kelly * 0.25, bankroll * 0.02));

  els.parlayProb.textContent = selected.length ? pct(adjustedProbability, 3) : "--";
  els.parlayOdds.textContent = selected.length ? formatAmerican(american) : "--";
  els.profit.textContent = selected.length ? money(profit) : "--";
  els.ev.textContent = selected.length ? money(ev) : "--";
  els.ev.className = ev >= 0 ? "positive" : "negative";
  els.unit.textContent = selected.length ? money(quarterKelly) : "--";
  els.kelly.textContent = selected.length ? pct(Math.max(0, kelly), 2) : "--";

  els.selected.innerHTML = selected
    .map(
      (leg) => `<li><strong>${escapeHtml(leg.player)}: ${escapeHtml(leg.prop)}</strong><span>${escapeHtml(leg.game)} | ${leg.probability}% | ${formatAmerican(leg.odds)} | ${escapeHtml(leg.book)}</span></li>`
    )
    .join("");

  const finalWarnings = [...warnings, ...riskWarnings(selected, rawProbability, adjustedProbability, ev)];
  els.warnings.innerHTML = finalWarnings.map((item) => `<div class="warning">${escapeHtml(item)}</div>`).join("");
  setRiskBadge(selected.length, adjustedProbability, ev);
  renderLadder();
}

function estimateCorrelationPenalty(selected) {
  const gameCounts = countBy(selected, (leg) => leg.game);
  const categoryCounts = countBy(selected, (leg) => leg.category);
  let penalty = 1;

  gameCounts.forEach((count) => {
    if (count > 1) penalty *= Math.pow(0.94, count - 1);
  });

  categoryCounts.forEach((count, category) => {
    if (String(category).toLowerCase().includes("alternate strikeouts") && count > 1) penalty *= Math.pow(0.9, count - 1);
    if (String(category).toLowerCase().includes("pitcher strikeouts") && count > 1) penalty *= Math.pow(0.95, count - 1);
  });

  return clamp(penalty, 0.6, 1);
}

function countBy(items, picker) {
  const map = new Map();
  items.forEach((item) => {
    const key = picker(item) || "Unknown";
    map.set(key, (map.get(key) || 0) + 1);
  });
  return map;
}

function riskWarnings(selected, rawProbability, adjustedProbability, ev) {
  const warnings = [];
  if (selected.length >= 10) warnings.push("10+ leg parlays are lottery-style. Consider laddering 4-6 legs from the same board.");
  if (selected.length >= 18) warnings.push("18-25 legs usually need tiny stakes. Even strong-looking 80% legs collapse quickly when multiplied.");
  if (rawProbability - adjustedProbability > 0.01) warnings.push("Correlation penalty applied because several legs share games or prop types.");
  if (ev < 0) warnings.push("This build grades as negative EV using your entered probabilities and market odds.");
  if (selected.some((leg) => leg.probability >= 85 && leg.odds > 100)) warnings.push("Some legs claim very high probability at plus odds. Double-check the source before staking.");
  if (selected.some((leg) => leg.category === "Alternate Strikeouts")) warnings.push("Alternate strikeout ladders are higher variance than standard pitcher strikeouts.");
  return warnings;
}

function setRiskBadge(count, probability, ev) {
  if (!count) {
    els.riskBadge.textContent = "Ready";
    return;
  }
  if (count > 12 || probability < 0.01) {
    els.riskBadge.textContent = "Longshot";
    els.riskBadge.style.color = "var(--red)";
    return;
  }
  if (ev >= 0 && count <= 6) {
    els.riskBadge.textContent = "Tighter";
    els.riskBadge.style.color = "var(--green)";
    return;
  }
  els.riskBadge.textContent = "Volatile";
  els.riskBadge.style.color = "var(--yellow)";
}

function parseCsv(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const cells = [];
      let cell = "";
      let quoted = false;
      for (const char of line) {
        if (char === '"') {
          quoted = !quoted;
        } else if (char === "," && !quoted) {
          cells.push(cell.trim());
          cell = "";
        } else {
          cell += char;
        }
      }
      cells.push(cell.trim());
      return cells;
    })
    .filter((row) => row.length >= 7 && !/^player$/i.test(row[0]));
}

function simulateBuild(count) {
  const originalValue = els.legCount.value;
  els.legCount.value = count;
  const minEdge = Number(els.minEdge.value) || 0;
  const maxPerGame = clamp(Number(els.maxPerGame.value) || 1, 1, 6);
  const selected = [];
  const gameCounts = new Map();
  const addIfAllowed = (leg, force = false) => {
    const key = leg.game || `${leg.team}-${leg.opponent}` || "unknown";
    const current = gameCounts.get(key) || 0;
    if (!force && current >= maxPerGame) return false;
    selected.push(leg);
    gameCounts.set(key, current + 1);
    return true;
  };

  visibleLegs().filter((leg) => leg.locked && !leg.excluded).forEach((leg) => addIfAllowed(leg, true));
  visibleLegs()
    .filter((leg) => !leg.excluded && !leg.locked && leg.edge >= minEdge)
    .sort((a, b) => scoreLeg(b) - scoreLeg(a))
    .forEach((leg) => {
      if (selected.length < count) addIfAllowed(leg);
    });
  els.legCount.value = originalValue;
  return selected.slice(0, count);
}

function renderLadder() {
  els.ladder.innerHTML = "";
  for (let count = 4; count <= 25; count += 1) {
    const selected = simulateBuild(count);
    const probability = selected.reduce((product, leg) => product * (leg.probability / 100), 1) * estimateCorrelationPenalty(selected);
    const decimalOdds = selected.reduce((product, leg) => product * americanToDecimal(leg.odds), 1);
    const card = document.createElement("button");
    card.className = "ladder-card";
    card.type = "button";
    card.innerHTML = `<strong>${count} legs</strong><span>${selected.length}/${count} found</span><span>${pct(probability, 3)} hit chance</span><span>${formatAmerican(decimalToAmerican(decimalOdds))}</span>`;
    card.addEventListener("click", () => {
      els.legCount.value = count;
      build();
    });
    els.ladder.appendChild(card);
  }
}

els.table.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const leg = findLeg(button.dataset.id);
  if (!leg) return;
  if (button.dataset.action === "lock") {
    leg.locked = !leg.locked;
    if (leg.locked) leg.excluded = false;
  }
  if (button.dataset.action === "exclude") {
    leg.excluded = !leg.excluded;
    if (leg.excluded) leg.locked = false;
  }
  build();
});

function handleLegFieldChange(event) {
  const input = event.target.closest("[data-field]");
  if (!input) return;
  const leg = findLeg(input.dataset.id);
  if (!leg) return;
  const field = input.dataset.field;
  if (field === "category") {
    leg[field] = normalizeMarket(input.value);
  } else {
    leg[field] = ["probability", "odds", "edge"].includes(field) ? Number(input.value) : input.value;
  }
  build();
}

els.table.addEventListener("input", handleLegFieldChange);
els.table.addEventListener("change", handleLegFieldChange);

els.add.addEventListener("click", () => {
  const market = activeMarket === "All Markets" ? "Player Hits" : activeMarket;
  legs.unshift(toLeg(["", defaultPropForMarket(market), "", "", "", 65, -130, 0, 0, market, ""], Date.now()));
  build();
});

els.clear.addEventListener("click", () => {
  legs = [];
  lastBuild = [];
  renderMarkets();
  renderTable();
  renderResults([], []);
});

els.sample.addEventListener("click", () => {
  legs = sampleLegs.map((leg, index) => ({ ...leg, id: `sample-${Date.now()}-${index}`, locked: false, excluded: false }));
  build();
});

els.import.addEventListener("click", () => {
  const rows = parseCsv(els.paste.value);
  if (!rows.length) return;
  legs = rows.map((row, index) => toLeg(row, index));
  build();
});

els.gameCalendar.addEventListener("click", (event) => {
  const card = event.target.closest("[data-game-id]");
  if (!card) return;
  selectedGameId = card.dataset.gameId;
  renderCalendar();
});

els.marketTabs.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-market]");
  if (!tab) return;
  activeMarket = tab.dataset.market;
  build();
});

els.slateDate.addEventListener("change", () => {
  renderCalendar();
});

[els.legCount, els.stake, els.minEdge, els.maxPerGame, els.strategy, els.bankroll].forEach((el) => {
  el.addEventListener("input", build);
  el.addEventListener("change", build);
});

els.build.addEventListener("click", build);

renderTable();
build();
