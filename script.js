// ============================================================
// TENNIS MATCH ANALYZER
// ============================================================

// ------------------------------------------------------------
// PLAYER DATABASE
// ------------------------------------------------------------

const CURRENT_PLAYERS = [
  "Jannik Sinner",
  "Alexander Zverev",
  "Carlos Alcaraz",
  "Felix Auger-Aliassime",
  "Alex de Minaur",
  "Ben Shelton",
  "Novak Djokovic",
  "Daniil Medvedev",
  "Taylor Fritz",
  "Alexander Bublik",
  "Lorenzo Musetti",
  "Jiri Lehecka",
  "Andrey Rublev",
  "Flavio Cobolli",
  "Karen Khachanov",
  "Casper Ruud",
  "Luciano Darderi",
  "Learner Tien",
  "Valentin Vacherot",
  "Arthur Fils",
  "Tommy Paul",
  "Frances Tiafoe",
  "Alejandro Davidovich Fokina",
  "Cameron Norrie",
  "Arthur Rinderknech",
  "Francisco Cerundolo",
  "Jakub Mensik",
  "Tomas Martin Etcheverry",
  "Rafael Jodar",
  "Joao Fonseca",
  "Ignacio Buse",
  "Ugo Humbert",
  "Tallon Griekspoor",
  "Corentin Moutet",
  "Brandon Nakashima",
  "Alejandro Tabilo",
  "Alexander Blockx",
  "Mariano Navone",
  "Denis Shapovalov",
  "Zizou Bergs",
  "Jaume Munar",
  "Alex Michelsen",
  "Tomas Machac",
  "Holger Rune",
  "Adrian Mannarino",
  "Marin Cilic",
  "Sebastian Korda",
  "Miomir Kecmanovic",
  "Gabriel Diallo",
  "Ethan Quinn"
];

const LEGENDS = [
  "Roger Federer",
  "Rafael Nadal",
  "Novak Djokovic",
  "Andy Murray",
  "Stan Wawrinka",
  "Juan Martin del Potro",
  "Andy Roddick",
  "David Ferrer",
  "Jo-Wilfried Tsonga",
  "Tomas Berdych",
  "Dominic Thiem",
  "Nick Kyrgios",
  "Grigor Dimitrov",
  "Gael Monfils",
  "Kei Nishikori",
  "Richard Gasquet",
  "Milos Raonic",
  "John Isner",
  "Ivo Karlovic",
  "David Nalbandian",
  "Fernando Verdasco",
  "Feliciano Lopez",
  "Gilles Simon",
  "Joao Sousa",
  "Ernests Gulbis",
  "Marcos Baghdatis",
  "Tommy Haas",
  "Nikolay Davydenko",
  "Robin Soderling",
  "Lleyton Hewitt",
  "Gustavo Kuerten",
  "Andre Agassi",
  "Pete Sampras",
  "Boris Becker",
  "Stefan Edberg",
  "Ivan Lendl",
  "John McEnroe",
  "Bjorn Borg",
  "Jimmy Connors",
  "Mats Wilander",
  "Michael Chang",
  "Thomas Muster",
  "Jim Courier",
  "Juan Carlos Ferrero",
  "Marat Safin"
];

const ALL_PLAYERS = [
  ...CURRENT_PLAYERS,
  ...LEGENDS.filter(
    player => !CURRENT_PLAYERS.includes(player)
  )
];

// ------------------------------------------------------------
// MODE SELECTION
// ------------------------------------------------------------

function showManual() {
  document
    .getElementById("manualAnalysis")
    .classList.remove("hidden");

  document
    .getElementById("realMatch")
    .classList.add("hidden");

  document
    .getElementById("manualAnalysis")
    .scrollIntoView({
      behavior: "smooth"
    });
}

function showRealMatch() {
  document
    .getElementById("realMatch")
    .classList.remove("hidden");

  document
    .getElementById("manualAnalysis")
    .classList.add("hidden");

  document
    .getElementById("realMatch")
    .scrollIntoView({
      behavior: "smooth"
    });
}

// ------------------------------------------------------------
// PLAYER SELECTORS
// ------------------------------------------------------------

function populatePlayers(list = ALL_PLAYERS) {

  const select1 =
    document.getElementById("realPlayer1");

  const select2 =
    document.getElementById("realPlayer2");

  if (!select1 || !select2) {
    return;
  }

  select1.innerHTML = "";
  select2.innerHTML = "";

  const currentGroup =
    document.createElement("optgroup");

  currentGroup.label =
    "🔥 Current ATP Players";

  CURRENT_PLAYERS
    .filter(player => list.includes(player))
    .forEach(player => {

      const option =
        document.createElement("option");

      option.value = player;
      option.textContent = player;

      currentGroup.appendChild(option);
    });

  const legendGroup =
    document.createElement("optgroup");

  legendGroup.label =
    "👑 Legends & Icons";

  LEGENDS
    .filter(player => list.includes(player))
    .forEach(player => {

      const option =
        document.createElement("option");

      option.value = player;
      option.textContent = player;

      legendGroup.appendChild(option);
    });

  select1.appendChild(currentGroup);
  select1.appendChild(legendGroup);

  const currentGroup2 =
    currentGroup.cloneNode(true);

  const legendGroup2 =
    legendGroup.cloneNode(true);

  select2.appendChild(currentGroup2);
  select2.appendChild(legendGroup2);

  select1.value =
    CURRENT_PLAYERS.includes("Carlos Alcaraz")
      ? "Carlos Alcaraz"
      : ALL_PLAYERS[0];

  select2.value =
    CURRENT_PLAYERS.includes("Jannik Sinner")
      ? "Jannik Sinner"
      : ALL_PLAYERS[1];
}

// ------------------------------------------------------------
// PLAYER SEARCH
// ------------------------------------------------------------

function filterPlayers() {

  const input =
    document.getElementById("playerSearch");

  if (!input) {
    return;
  }

  const query =
    input.value
      .trim()
      .toLowerCase();

  if (!query) {
    populatePlayers();
    return;
  }

  const filtered =
    ALL_PLAYERS.filter(player =>
      player.toLowerCase().includes(query)
    );

  populatePlayers(filtered);
}

// ------------------------------------------------------------
// REAL MATCH
// ------------------------------------------------------------

async function findRealMatch() {

  const player1 =
    document.getElementById("realPlayer1").value;

  const player2 =
    document.getElementById("realPlayer2").value;

  if (!player1 || !player2) {
    alert("Please select both players.");
    return;
  }

  if (player1 === player2) {
    alert("Please select two different players.");
    return;
  }

  showComparisonSections();

  setLoadingState();

  try {

    const [data1, data2] =
      await Promise.all([
        fetchPlayer(player1),
        fetchPlayer(player2)
      ]);

    renderPlayer(
      data1,
      player1,
      "playerResult1"
    );

    renderPlayer(
      data2,
      player2,
      "playerResult2"
    );

    updatePerformance(
      data1,
      data2,
      player1,
      player2
    );

    updateBasicH2H(
      data1,
      data2,
      player1,
      player2
    );

    updateAnalysis(
      data1,
      data2,
      player1,
      player2
    );

  } catch (error) {

    console.error(
      "Match analysis error:",
      error
    );

    document.getElementById(
      "playerResult1"
    ).innerHTML = `
      <div class="status error">
        ⚠️ ${escapeHtml(error.message)}
      </div>
    `;

    document.getElementById(
      "playerResult2"
    ).innerHTML = `
      <div class="status error">
        ⚠️ Could not load player comparison.
      </div>
    `;
  }
}

// ------------------------------------------------------------
// API REQUEST
// ------------------------------------------------------------

async function fetchPlayer(playerName) {

  const response =
    await fetch(
      `/api/player/${encodeURIComponent(playerName)}`
    );

  let data;

  try {
    data = await response.json();
  } catch {
    throw new Error(
      "Invalid response from tennis API."
    );
  }

  if (!response.ok) {

    throw new Error(
      data.detail ||
      "Player could not be found."
    );
  }

  return data;
}

// ------------------------------------------------------------
// PLAYER CARD
// ------------------------------------------------------------

function renderPlayer(
  data,
  fallbackName,
  elementId
) {

  const element =
    document.getElementById(elementId);

  if (!element) {
    return;
  }

  const name =
    getValue(
      data,
      [
        "name",
        "playerName",
        "fullName",
        "displayName"
      ],
      fallbackName
    );

  const rank =
    getValue(
      data,
      [
        "currentRank",
        "rank",
        "ranking",
        "rankingPosition"
      ],
      "N/A"
    );

  const country =
    getCountry(data);

  const hand =
    getValue(
      data,
      [
        "hand",
        "playingHand",
        "dominantHand"
      ],
      "N/A"
    );

  const birthDate =
    getValue(
      data,
      [
        "birthDate",
        "dateOfBirth",
        "dob"
      ],
      "N/A"
    );

  element.innerHTML = `

    <div class="player-result-header">

      <div class="player-result-avatar">
        🎾
      </div>

      <div>

        <h3>
          ${escapeHtml(name)}
        </h3>

        <p>
          ${escapeHtml(country)}
        </p>

      </div>

    </div>

    <div class="rank-box">

      <span>
        World Ranking
      </span>

      <strong>
        #${escapeHtml(String(rank))}
      </strong>

    </div>

    <div class="data-row">

      <span>
        Country
      </span>

      <strong>
        ${escapeHtml(country)}
      </strong>

    </div>

    <div class="data-row">

      <span>
        Playing Hand
      </span>

      <strong>
        ${escapeHtml(String(hand))}
      </strong>

    </div>

    <div class="data-row">

      <span>
        Birth Date
      </span>

      <strong>
        ${escapeHtml(String(birthDate))}
      </strong>

    </div>

    <div class="status">
      🟢 Live API profile loaded
    </div>
  `;
}

// ------------------------------------------------------------
// PERFORMANCE
// ------------------------------------------------------------

function updatePerformance(
  data1,
  data2,
  player1,
  player2
) {

  const rank1 =
    Number(
      getValue(
        data1,
        ["currentRank", "rank", "ranking"],
        100
      )
    ) || 100;

  const rank2 =
    Number(
      getValue(
        data2,
        ["currentRank", "rank", "ranking"],
        100
      )
    ) || 100;

  const score1 =
    calculateProfileScore(
      data1,
      rank1
    );

  const score2 =
    calculateProfileScore(
      data2,
      rank2
    );

  const total =
    score1 + score2;

  let percentage1 = 50;
  let percentage2 = 50;

  if (total > 0) {

    percentage1 =
      Math.round(
        score1 / total * 100
      );

    percentage2 =
      100 - percentage1;
  }

  document.getElementById(
    "performanceName1"
  ).textContent = player1;

  document.getElementById(
    "performanceName2"
  ).textContent = player2;

  document.getElementById(
    "score1"
  ).textContent =
    percentage1 + "%";

  document.getElementById(
    "score2"
  ).textContent =
    percentage2 + "%";

  document.getElementById(
    "bar1"
  ).style.width =
    percentage1 + "%";

  document.getElementById(
    "bar2"
  ).style.width =
    percentage2 + "%";
}

function calculateProfileScore(
  data,
  rank
) {

  const rankScore =
    Math.max(
      1,
      101 - Math.min(rank, 100)
    );

  const wins =
    Number(
      getValue(
        data,
        [
          "wins",
          "careerWins",
          "seasonWins"
        ],
        0
      )
    ) || 0;

  const titles =
    Number(
      getValue(
        data,
        [
          "titles",
          "careerTitles",
          "grandSlamTitles"
        ],
        0
      )
    ) || 0;

  return (
    rankScore * 3 +
    Math.min(wins, 100) +
    titles * 5
  );
}

// ------------------------------------------------------------
// BASIC H2H
// ------------------------------------------------------------

function updateBasicH2H(
  data1,
  data2,
  player1,
  player2
) {

  document.getElementById(
    "h2hPlayer1"
  ).textContent = player1;

  document.getElementById(
    "h2hPlayer2"
  ).textContent = player2;

  document.getElementById(
    "h2hCountry1"
  ).textContent =
    getCountry(data1);

  document.getElementById(
    "h2hCountry2"
  ).textContent =
    getCountry(data2);

  const wins1 =
    Number(
      getValue(
        data1,
        [
          "headToHeadWins",
          "h2hWins"
        ],
        0
      )
    ) || 0;

  const wins2 =
    Number(
      getValue(
        data2,
        [
          "headToHeadWins",
          "h2hWins"
        ],
        0
      )
    ) || 0;

  document.getElementById(
    "h2hWins1"
  ).textContent = wins1;

  document.getElementById(
    "h2hWins2"
  ).textContent = wins2;

  const matches =
    wins1 + wins2;

  document.getElementById(
    "h2hMatches"
  ).textContent =
    matches > 0
      ? `${matches} Matches`
      : "No H2H data";

  if (matches > 0) {

    const percentage1 =
      wins1 / matches * 100;

    document.getElementById(
      "h2hLeft"
    ).style.width =
      percentage1 + "%";

    document.getElementById(
      "h2hRight"
    ).style.width =
      (100 - percentage1) + "%";
  }
}

// ------------------------------------------------------------
// ANALYSIS
// ------------------------------------------------------------

function updateAnalysis(
  data1,
  data2,
  player1,
  player2
) {

  const rank1 =
    Number(
      getValue(
        data1,
        ["currentRank", "rank", "ranking"],
        100
      )
    ) || 100;

  const rank2 =
    Number(
      getValue(
        data2,
        ["currentRank", "rank", "ranking"],
        100
      )
    ) || 100;

  let text;

  if (rank1 < rank2) {

    text =
      `${player1} currently has the stronger ranking profile. ` +
      `The ranking advantage suggests stronger recent tour performance, ` +
      `although a ranking alone cannot predict the result of an individual match.`;

  } else if (rank2 < rank1) {

    text =
      `${player2} currently has the stronger ranking profile. ` +
      `The ranking advantage suggests stronger recent tour performance, ` +
      `although a ranking alone cannot predict the result of an individual match.`;

  } else {

    text =
      `Both players have a similar ranking profile. ` +
      `The matchup would likely depend more heavily on surface, form, ` +
      `serve performance and head-to-head history.`;
  }

  document.getElementById(
    "analysisText"
  ).textContent = text;
}

// ------------------------------------------------------------
// UI STATES
// ------------------------------------------------------------

function showComparisonSections() {

  [
    "comparisonSection",
    "performanceSection",
    "h2hSection",
    "recentMatchesSection",
    "analysisSection"
  ].forEach(id => {

    const element =
      document.getElementById(id);

    if (element) {
      element.classList.remove("hidden");
    }
  });
}

function setLoadingState() {

  document.getElementById(
    "playerResult1"
  ).innerHTML = `
    <div class="status loading">
      ⏳ Loading player 1...
    </div>
  `;

  document.getElementById(
    "playerResult2"
  ).innerHTML = `
    <div class="status loading">
      ⏳ Loading player 2...
    </div>
  `;
}

// ------------------------------------------------------------
// MANUAL MATCH ANALYZER
// ------------------------------------------------------------

function analyzeMatch() {

  const player1 =
    document
      .getElementById("player1")
      .value
      .trim();

  const player2 =
    document
      .getElementById("player2")
      .value
      .trim();

  const serve1 =
    Number(
      document
        .getElementById("serve1")
        .value
    );

  const serve2 =
    Number(
      document
        .getElementById("serve2")
        .value
    );

  const winners1 =
    Number(
      document
        .getElementById("winners1")
        .value
    );

  const winners2 =
    Number(
      document
        .getElementById("winners2")
        .value
    );

  const errors1 =
    Number(
      document
        .getElementById("errors1")
        .value
    );

  const errors2 =
    Number(
      document
        .getElementById("errors2")
        .value
    );

  if (!player1 || !player2) {
    alert(
      "Please enter both player names."
    );
    return;
  }

  if (
    serve1 < 0 ||
    serve1 > 100 ||
    serve2 < 0 ||
    serve2 > 100 ||
    winners1 < 0 ||
    winners2 < 0 ||
    errors1 < 0 ||
    errors2 < 0
  ) {
    alert(
      "Please enter valid statistics."
    );
    return;
  }

  document.getElementById(
    "player1Name"
  ).textContent = player1;

  document.getElementById(
    "player2Name"
  ).textContent = player2;

  document.getElementById(
    "serveResult1"
  ).textContent =
    serve1 + "%";

  document.getElementById(
    "serveResult2"
  ).textContent =
    serve2 + "%";

  document.getElementById(
    "winnerResult1"
  ).textContent =
    winners1;

  document.getElementById(
    "winnerResult2"
  ).textContent =
    winners2;

  document.getElementById(
    "errorResult1"
  ).textContent =
    errors1;

  document.getElementById(
    "errorResult2"
  ).textContent =
    errors2;

  const score1 =
    Math.max(
      serve1 +
      winners1 * 2 -
      errors1,
      0
    );

  const score2 =
    Math.max(
      serve2 +
      winners2 * 2 -
      errors2,
      0
    );

  const total =
    score1 + score2;

  let percentage1 = 50;
  let percentage2 = 50;

  if (total > 0) {

    percentage1 =
      Math.round(
        score1 / total * 100
      );

    percentage2 =
      100 - percentage1;
  }

  document.getElementById(
    "performanceName1"
  ).textContent = player1;

  document.getElementById(
    "performanceName2"
  ).textContent = player2;

  document.getElementById(
    "score1"
  ).textContent =
    percentage1 + "%";

  document.getElementById(
    "score2"
  ).textContent =
    percentage2 + "%";

  document.getElementById(
    "bar1"
  ).style.width =
    percentage1 + "%";

  document.getElementById(
    "bar2"
  ).style.width =
    percentage2 + "%";

  let result;

  if (percentage1 > percentage2) {

    result =
      `${player1} had the stronger statistical performance. 🏆`;

  } else if (percentage2 > percentage1) {

    result =
      `${player2} had the stronger statistical performance. 🏆`;

  } else {

    result =
      "Both players had an equal statistical performance. 🤝";
  }

  document.getElementById(
    "result"
  ).textContent = result;

  document.getElementById(
    "results"
  ).classList.remove("hidden");

  document.getElementById(
    "results"
  ).scrollIntoView({
    behavior: "smooth"
  });
}

// ------------------------------------------------------------
// HELPERS
// ------------------------------------------------------------

function getValue(
  data,
  keys,
  fallback
) {

  for (const key of keys) {

    if (
      data &&
      data[key] !== undefined &&
      data[key] !== null &&
      data[key] !== ""
    ) {
      return data[key];
    }
  }

  return fallback;
}

function getCountry(data) {

  if (!data) {
    return "Unknown";
  }

  if (
    data.country &&
    typeof data.country === "object"
  ) {

    return (
      data.country.name ||
      data.country.code ||
      "Unknown"
    );
  }

  return (
    data.country ||
    data.nationality ||
    "Unknown"
  );
}

function escapeHtml(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ------------------------------------------------------------
// INITIALIZE
// ------------------------------------------------------------

document.addEventListener(
  "DOMContentLoaded",
  () => {

    populatePlayers();

    const realMatch =
      document.getElementById(
        "realMatch"
      );

    const manual =
      document.getElementById(
        "manualAnalysis"
      );

    if (realMatch) {
      realMatch.classList.remove(
        "hidden"
      );
    }

    if (manual) {
      manual.classList.add(
        "hidden"
      );
    }
  }
);
