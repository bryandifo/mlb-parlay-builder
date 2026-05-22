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

const sampleGames = [
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
let games = sampleGames.map((game) => ({ ...game }));
let lastBuild = [];
let selectedGameId = "pit-tor-2026-05-22";
let activeMarket = "All Markets";
let activeLadderCount = Number(document.querySelector("#legCount")?.value || 6);
const bvpCache = new Map();

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
  ladderStatus: document.querySelector("#ladderStatus"),
  slateDate: document.querySelector("#slateDate"),
  gameCalendar: document.querySelector("#gameCalendar"),
  matchupHeader: document.querySelector("#matchupHeader"),
  matchupTable: document.querySelector("#matchupTable"),
  marketTabs: document.querySelector("#marketTabs"),
  marketSummary: document.querySelector("#marketSummary"),
  dataStatus: document.querySelector("#dataStatus"),
  syncMlb: document.querySelector("#syncMlb"),
  syncLineups: document.querySelector("#syncLineups"),
  autoLegTable: document.querySelector("#autoLegTable"),
  addAllGameLegs: document.querySelector("#addAllGameLegs")
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
  const selectedIds = new Set(lastBuild.map((leg) => leg.id));
  visibleLegs().forEach((leg) => {
    const tr = document.createElement("tr");
    tr.className = selectedIds.has(leg.id) ? "selected-build-row" : "";
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

function teamAbbrev(team) {
  return team?.abbreviation || team?.teamCode || team?.fileCode || team?.name || "TBD";
}

function pitcherFromMlbTeam(teamSide) {
  const pitcher = teamSide?.probablePitcher;
  return {
    id: pitcher?.id,
    name: pitcher?.fullName || "TBD",
    hand: pitcher?.pitchHand?.code || pitcher?.pitchHand?.description?.slice(0, 1) || "-"
  };
}

function gameFromMlb(rawGame) {
  const away = rawGame.teams?.away?.team || {};
  const home = rawGame.teams?.home?.team || {};
  const date = new Date(rawGame.gameDate);
  const time = Number.isNaN(date.getTime())
    ? "TBD"
    : date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", timeZoneName: "short" });
  return {
    id: `mlb-${rawGame.gamePk}`,
    gamePk: rawGame.gamePk,
    date: els.slateDate.value,
    time,
    away: teamAbbrev(away).toUpperCase(),
    home: teamAbbrev(home).toUpperCase(),
    awayTeamId: away.id,
    homeTeamId: home.id,
    venue: rawGame.venue?.name || "TBD",
    weather: rawGame.weather?.condition || "Weather pending",
    park: rawGame.status?.detailedState || "Scheduled",
    pitchers: {
      away: pitcherFromMlbTeam(rawGame.teams?.away),
      home: pitcherFromMlbTeam(rawGame.teams?.home)
    },
    hitters: [],
    pitchersPool: []
  };
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json();
}

async function syncMlbSchedule() {
  const date = els.slateDate.value;
  els.dataStatus.textContent = `Syncing MLB slate for ${date}...`;
  els.syncMlb.disabled = true;
  try {
    const url = `https://statsapi.mlb.com/api/v1/schedule?sportId=1&date=${encodeURIComponent(date)}&hydrate=probablePitcher,venue,weather`;
    const data = await fetchJson(url);
    const syncedGames = (data.dates?.[0]?.games || []).map(gameFromMlb);
    if (!syncedGames.length) {
      els.dataStatus.textContent = `No MLB games returned for ${date}. Keeping local sample slate.`;
      return;
    }
    games = syncedGames;
    selectedGameId = games[0].id;
    els.dataStatus.textContent = `Synced ${games.length} MLB games. Loading roster looks...`;
    await hydrateRosterLooksForGames(games);
    els.dataStatus.textContent = `Synced ${games.length} MLB games and roster looks from MLB.com for ${date}.`;
    renderCalendar();
  } catch (error) {
    els.dataStatus.textContent = `MLB sync failed. Static GitHub Pages can only use browser-friendly APIs. ${error.message}`;
  } finally {
    els.syncMlb.disabled = false;
  }
}

async function fetchRoster(teamId) {
  if (!teamId) return [];
  const url = `https://statsapi.mlb.com/api/v1/teams/${teamId}/roster?rosterType=active&hydrate=person(batSide,pitchHand,primaryPosition)`;
  const data = await fetchJson(url);
  return data.roster || [];
}

function rosterPlayerName(entry) {
  return entry?.person?.fullName || entry?.person?.boxscoreName || "Unknown player";
}

function rosterPosition(entry) {
  return entry?.position?.abbreviation || entry?.person?.primaryPosition?.abbreviation || "";
}

function rosterBatHand(entry) {
  return entry?.person?.batSide?.code || "-";
}

function rosterPitchHand(entry) {
  return entry?.person?.pitchHand?.code || "-";
}

function hitterLooksFromRoster(roster, teamCode, opposingPitcher) {
  return roster
    .filter((entry) => rosterPosition(entry) !== "P")
    .map((entry) => ({
      playerId: entry.person?.id,
      name: rosterPlayerName(entry),
      team: teamCode,
      hand: rosterBatHand(entry),
      pitcherId: opposingPitcher.id,
      pitcher: opposingPitcher.name,
      angle: "Roster look",
      grade: "Watch",
      note: "Active-roster hitter. Upgrade only after lineup spot, weather, and market price are confirmed.",
      boardPlay: "Add from Auto Legs"
    }));
}

function pitcherLooksFromRoster(roster, teamCode, opponentCode) {
  return roster
    .filter((entry) => rosterPosition(entry) === "P")
    .map((entry) => ({
      id: entry.person?.id,
      name: rosterPlayerName(entry),
      team: teamCode,
      opponent: opponentCode,
      hand: rosterPitchHand(entry),
      probable: false
    }));
}

function dedupeByName(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = String(item.name || "").toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function hydrateRosterLooksForGame(game) {
  if (!game?.awayTeamId || !game?.homeTeamId) return game;
  const [awayRoster, homeRoster] = await Promise.all([
    fetchRoster(game.awayTeamId),
    fetchRoster(game.homeTeamId)
  ]);
  const awayHitters = hitterLooksFromRoster(awayRoster, game.away, game.pitchers.home);
  const homeHitters = hitterLooksFromRoster(homeRoster, game.home, game.pitchers.away);
  const awayPitchers = pitcherLooksFromRoster(awayRoster, game.away, game.home);
  const homePitchers = pitcherLooksFromRoster(homeRoster, game.home, game.away);
  const probablePitchers = [
    { ...game.pitchers.away, team: game.away, opponent: game.home, probable: true },
    { ...game.pitchers.home, team: game.home, opponent: game.away, probable: true }
  ].filter((pitcher) => pitcher.name && pitcher.name !== "TBD");

  game.hitters = dedupeByName([...awayHitters, ...homeHitters]);
  game.pitchersPool = dedupeByName([...probablePitchers, ...awayPitchers, ...homePitchers]);
  return game;
}

async function hydrateRosterLooksForGames(targetGames) {
  const chunks = [];
  for (let index = 0; index < targetGames.length; index += 4) {
    chunks.push(targetGames.slice(index, index + 4));
  }
  for (const chunk of chunks) {
    await Promise.all(chunk.map(hydrateRosterLooksForGame));
  }
}

function playerNameFromBoxscorePlayer(playerEntry) {
  return playerEntry?.person?.fullName || playerEntry?.person?.boxscoreName || "Unknown player";
}

function hitterRowsFromBoxscoreTeam(team, teamCode, opposingPitcher) {
  const players = Object.values(team?.players || {});
  return players
    .filter((player) => player.battingOrder)
    .sort((a, b) => Number(a.battingOrder) - Number(b.battingOrder))
    .map((player) => ({
      playerId: player.person?.id,
      name: playerNameFromBoxscorePlayer(player),
      team: teamCode,
      hand: player?.person?.batSide?.code || "-",
      pitcherId: opposingPitcher.id,
      pitcher: opposingPitcher.name,
      angle: "Lineup",
      grade: "Watch",
      note: `Batting order ${String(player.battingOrder).slice(0, -2) || "posted"}. Add a board leg once you choose the market.`,
      boardPlay: "Lineup player"
    }));
}

async function syncSelectedGameLineups() {
  const game = games.find((item) => item.id === selectedGameId);
  if (!game?.gamePk) {
    els.dataStatus.textContent = "Roster looks need an MLB-synced game. Click Sync MLB first.";
    return;
  }
  els.dataStatus.textContent = `Loading roster looks and posted lineups for ${gameLabel(game)}...`;
  els.syncLineups.disabled = true;
  try {
    await hydrateRosterLooksForGame(game);
    const boxscore = await fetchJson(`https://statsapi.mlb.com/api/v1/game/${game.gamePk}/boxscore`);
    const awayHitters = hitterRowsFromBoxscoreTeam(boxscore.teams?.away, game.away, game.pitchers.home);
    const homeHitters = hitterRowsFromBoxscoreTeam(boxscore.teams?.home, game.home, game.pitchers.away);
    const hitters = [...awayHitters, ...homeHitters];
    if (hitters.length) {
      const lineupNames = new Set(hitters.map((hitter) => hitter.name.toLowerCase()));
      game.hitters = [...hitters, ...game.hitters.filter((hitter) => !lineupNames.has(hitter.name.toLowerCase()))];
      els.dataStatus.textContent = `Loaded ${hitters.length} posted lineup hitters plus roster looks for ${gameLabel(game)}.`;
    } else {
      els.dataStatus.textContent = `Lineups are not posted yet, but roster looks are loaded for ${gameLabel(game)}.`;
    }
    renderCalendar();
  } catch (error) {
    els.dataStatus.textContent = `Lineup sync failed: ${error.message}`;
  } finally {
    els.syncLineups.disabled = false;
  }
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
        <b>${game.pitchersPool?.length || 0} pitcher looks</b>
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

function emptyBvpText(hitter) {
  if (!hitter.playerId || !hitter.pitcherId) return "Sync MLB for BvP IDs";
  return "Loading BvP...";
}

function statValue(stat, keys) {
  for (const key of keys) {
    if (stat?.[key] !== undefined && stat?.[key] !== null) return stat[key];
  }
  return 0;
}

function formatBvpStat(stat) {
  if (!stat) return "No BvP history";
  const atBats = Number(statValue(stat, ["atBats", "ab"]));
  const plateAppearances = Number(statValue(stat, ["plateAppearances", "pa"]));
  const hits = Number(statValue(stat, ["hits", "h"]));
  const homeRuns = Number(statValue(stat, ["homeRuns", "homeruns", "hr"]));
  const rbi = Number(statValue(stat, ["rbi", "runsBattedIn"]));
  const strikeOuts = Number(statValue(stat, ["strikeOuts", "strikeouts", "so"]));
  const walks = Number(statValue(stat, ["baseOnBalls", "walks", "bb"]));
  const avg = stat.avg || (atBats ? (hits / atBats).toFixed(3).replace(/^0/, "") : ".000");
  const ops = stat.ops || "--";
  const sample = plateAppearances ? `${plateAppearances} PA` : `${atBats} AB`;
  if (!atBats && !plateAppearances) return "No BvP history";
  return `${hits}-${atBats} (${avg}) | OPS ${ops} | ${homeRuns} HR | ${rbi} RBI | ${strikeOuts} K/${walks} BB | ${sample}`;
}

async function fetchBvpStat(hitterId, pitcherId) {
  const key = `${hitterId}-${pitcherId}`;
  if (bvpCache.has(key)) return bvpCache.get(key);
  const url = `https://statsapi.mlb.com/api/v1/people/${hitterId}/stats?stats=vsPlayer&group=hitting&opposingPlayerId=${pitcherId}&sportId=1`;
  const data = await fetchJson(url);
  const stat = data.stats?.[0]?.splits?.[0]?.stat || null;
  const formatted = formatBvpStat(stat);
  bvpCache.set(key, formatted);
  return formatted;
}

async function hydrateBvpForVisibleHitters(hitters) {
  const withIds = hitters.filter((hitter) => hitter.playerId && hitter.pitcherId);
  const chunk = withIds.slice(0, 30);
  await Promise.all(
    chunk.map(async (hitter) => {
      const cell = document.querySelector(`[data-bvp-key="${hitter.playerId}-${hitter.pitcherId}"]`);
      if (!cell) return;
      try {
        cell.textContent = await fetchBvpStat(hitter.playerId, hitter.pitcherId);
      } catch (error) {
        cell.textContent = "BvP unavailable";
      }
    })
  );
}

function renderMatchups() {
  const game = games.find((item) => item.id === selectedGameId);
  if (!game) {
    els.matchupHeader.innerHTML = `<strong>No game selected</strong><span>Pick a date with loaded games.</span>`;
    els.matchupTable.innerHTML = "";
    els.autoLegTable.innerHTML = "";
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
    els.matchupTable.innerHTML = `<tr><td colspan="7">No hitter legs loaded for this game yet. Add/import legs with game set to ${escapeHtml(gameLabel(game))}.</td></tr>`;
    renderAutoLegs(game, []);
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
          <td data-bvp-key="${escapeHtml(`${hitter.playerId || ""}-${hitter.pitcherId || ""}`)}">${escapeHtml(emptyBvpText(hitter))}</td>
          <td><span class="${gradeClass(hitter.grade)}">${escapeHtml(hitter.grade)}</span> ${escapeHtml(hitter.angle)}</td>
          <td>${escapeHtml(hitter.note)}</td>
          <td>${escapeHtml(hitter.boardPlay || bestBoardPlay(hitter))}</td>
        </tr>
      `;
    })
    .join("");
  renderAutoLegs(game, hitters);
  hydrateBvpForVisibleHitters(hitters);
}

function existingLegKey(leg) {
  return `${leg.player}|${leg.prop}|${leg.team}|${leg.game}|${leg.category}`.toLowerCase();
}

function autoLegKey(leg) {
  return `${leg.player}|${leg.prop}|${leg.team}|${leg.game}|${leg.category}`.toLowerCase();
}

function suggestedLeg(player, prop, team, opponent, game, probability, odds, edge, category, reason) {
  return {
    player,
    prop,
    team,
    opponent,
    game: gameLabel(game),
    probability,
    odds,
    edge,
    streak: 0,
    category,
    book: "Auto",
    reason
  };
}

function pitcherSuggestions(game) {
  const pool = game.pitchersPool?.length
    ? game.pitchersPool
    : [
        { ...game.pitchers.away, team: game.away, opponent: game.home, probable: true },
        { ...game.pitchers.home, team: game.home, opponent: game.away, probable: true }
      ];
  const suggestions = [];
  pool.forEach((pitcher) => {
    if (!pitcher?.name || pitcher.name === "TBD") return;
    const standardProb = pitcher.probable ? 58 : 42;
    const standardOdds = pitcher.probable ? -115 : 145;
    const standardEdge = pitcher.probable ? 3.8 : 1.4;
    const altProb = pitcher.probable ? 34 : 21;
    const altOdds = pitcher.probable ? 220 : 410;
    const altEdge = pitcher.probable ? 2.6 : 0.7;
    suggestions.push(
      suggestedLeg(pitcher.name, "Over 4.5 strikeouts", pitcher.team, pitcher.opponent, game, standardProb, standardOdds, standardEdge, "Pitcher Strikeouts", pitcher.probable ? "Probable starter from MLB schedule." : "Roster pitcher look; confirm role before using."),
      suggestedLeg(pitcher.name, "Alt over 6.5 strikeouts", pitcher.team, pitcher.opponent, game, altProb, altOdds, altEdge, "Alternate Strikeouts", pitcher.probable ? "Higher-variance ladder leg from probable starter." : "Deep alternate K look; use only if pitcher is confirmed to work bulk innings.")
    );
  });
  return suggestions;
}

function gameLineSuggestions(game) {
  return [
    suggestedLeg(game.home, "Moneyline", game.home, game.away, game, 54, -115, 1.8, "Game Lines", "Home side template from MLB schedule."),
    suggestedLeg(game.away, "Moneyline", game.away, game.home, game, 46, 105, 1.0, "Game Lines", "Away side template from MLB schedule."),
    suggestedLeg(`${game.away}/${game.home}`, "Over 7.5 runs", game.home, game.away, game, 52, -110, 0.8, "Game Lines", "Total template; adjust after weather and lineup confirmation.")
  ];
}

function hitterSuggestions(game, hitters) {
  const source = hitters.filter((hitter) => hitter.name && hitter.name !== "Unknown player");
  return source.flatMap((hitter, index) => {
    const opponent = hitter.team === game.away ? game.home : game.away;
    const lineupBoost = hitter.angle === "Lineup" ? 6 : 0;
    const depthPenalty = Math.min(10, Math.floor(index / 6) * 2);
    return [
      suggestedLeg(hitter.name, "Over 0.5 hits", hitter.team, opponent, game, clamp(58 + lineupBoost - depthPenalty, 35, 74), -150, 2.4, "Player Hits", "Roster hitter look against listed probable pitcher."),
      suggestedLeg(hitter.name, "Over 0.5 runs", hitter.team, opponent, game, clamp(39 + lineupBoost - depthPenalty, 22, 58), 130, 1.8, "Player Runs", "Run leg template; strongest for top-order hitters."),
      suggestedLeg(hitter.name, "Over 1.5 H+R+RBI", hitter.team, opponent, game, clamp(43 + lineupBoost - depthPenalty, 26, 62), -105, 2.1, "Player Hits+Runs+RBIs", "Combines contact plus lineup-context paths."),
      suggestedLeg(hitter.name, "Over 1.5 total bases", hitter.team, opponent, game, clamp(35 + lineupBoost - depthPenalty, 18, 54), 125, 1.9, "Player Total Bases", "Extra-base template; check handedness and park before locking.")
    ];
  });
}

function automatedLegsForGame(game, hitters = []) {
  const existing = new Set(legs.map(existingLegKey));
  return [...gameLineSuggestions(game), ...pitcherSuggestions(game), ...hitterSuggestions(game, hitters)]
    .filter((leg) => !existing.has(autoLegKey(leg)))
    .sort((a, b) => scoreLeg(b) - scoreLeg(a));
}

function addAutoLeg(suggestion) {
  legs.unshift(toLeg([
    suggestion.player,
    suggestion.prop,
    suggestion.team,
    suggestion.opponent,
    suggestion.game,
    suggestion.probability,
    suggestion.odds,
    suggestion.edge,
    suggestion.streak,
    suggestion.category,
    suggestion.book
  ], Date.now()));
}

function renderAutoLegs(game, hitters) {
  const suggestions = automatedLegsForGame(game, hitters);
  if (!suggestions.length) {
    els.autoLegTable.innerHTML = `<tr><td colspan="6">All generated legs for this game are already on the board.</td></tr>`;
    return;
  }
  els.autoLegTable.innerHTML = suggestions
    .map((leg, index) => `
      <tr>
        <td><button class="add-leg-button" data-auto-leg="${index}">Add</button></td>
        <td>${escapeHtml(leg.category)}</td>
        <td><strong>${escapeHtml(leg.player)}</strong><br><span class="muted-note">${escapeHtml(leg.prop)}</span></td>
        <td>${leg.probability}%</td>
        <td>${formatAmerican(leg.odds)}</td>
        <td>${escapeHtml(leg.reason)}</td>
      </tr>
    `)
    .join("");
  els.autoLegTable.dataset.suggestions = JSON.stringify(suggestions);
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

function build(options = {}) {
  const requested = clamp(Number(els.legCount.value) || 4, 4, 25);
  els.legCount.value = requested;
  activeLadderCount = requested;
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
  if (options.scrollToBuild) {
    document.querySelector(".result-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
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
  els.ladderStatus.textContent = `${activeLadderCount}-leg build is active with ${lastBuild.length} selected`;
  for (let count = 4; count <= 25; count += 1) {
    const selected = simulateBuild(count);
    const probability = selected.reduce((product, leg) => product * (leg.probability / 100), 1) * estimateCorrelationPenalty(selected);
    const decimalOdds = selected.reduce((product, leg) => product * americanToDecimal(leg.odds), 1);
    const card = document.createElement("button");
    card.className = `ladder-card ${count === activeLadderCount ? "active" : ""}`;
    card.type = "button";
    card.dataset.ladderCount = String(count);
    card.innerHTML = `<strong>${count} legs</strong><span>${selected.length}/${count} will show in Best Build</span><span>${pct(probability, 3)} hit chance</span><span>${formatAmerican(decimalToAmerican(decimalOdds))}</span>`;
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

els.autoLegTable.addEventListener("click", (event) => {
  const button = event.target.closest("[data-auto-leg]");
  if (!button) return;
  const suggestions = JSON.parse(els.autoLegTable.dataset.suggestions || "[]");
  const suggestion = suggestions[Number(button.dataset.autoLeg)];
  if (!suggestion) return;
  addAutoLeg(suggestion);
  activeMarket = suggestion.category;
  build();
});

els.ladder.addEventListener("click", (event) => {
  const card = event.target.closest("[data-ladder-count]");
  if (!card) return;
  const count = clamp(Number(card.dataset.ladderCount) || 4, 4, 25);
  els.legCount.value = count;
  activeLadderCount = count;
  build({ scrollToBuild: true });
});

els.addAllGameLegs.addEventListener("click", () => {
  const suggestions = JSON.parse(els.autoLegTable.dataset.suggestions || "[]");
  suggestions.slice(0, 12).forEach(addAutoLeg);
  activeMarket = "All Markets";
  build();
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

els.syncMlb.addEventListener("click", syncMlbSchedule);
els.syncLineups.addEventListener("click", syncSelectedGameLineups);

[els.legCount, els.stake, els.minEdge, els.maxPerGame, els.strategy, els.bankroll].forEach((el) => {
  el.addEventListener("input", build);
  el.addEventListener("change", build);
});

els.build.addEventListener("click", build);

renderTable();
build();
