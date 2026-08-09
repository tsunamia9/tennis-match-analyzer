const playerData = {
  "Jannik Sinner": {
    country: "Italy",
    flag: "🇮🇹",
    rank: 1,
    serve: 72,
    winners: 35,
    errors: 15,
    score: 84,
    form: ["W", "W", "W", "L", "W"]
  },

  "Carlos Alcaraz": {
    country: "Spain",
    flag: "🇪🇸",
    rank: 2,
    serve: 68,
    winners: 32,
    errors: 18,
    score: 78,
    form: ["W", "W", "L", "W", "W"]
  },

  "Alexander Zverev": {
    country: "Germany",
    flag: "🇩🇪",
    rank: 3,
    serve: 70,
    winners: 30,
    errors: 20,
    score: 75,
    form: ["W", "L", "W", "W", "L"]
  },

  "Novak Djokovic": {
    country: "Serbia",
    flag: "🇷🇸",
    rank: 4,
    serve: 69,
    winners: 28,
    errors: 16,
    score: 82,
    form: ["W", "W", "W", "W", "L"]
  },

  "Daniil Medvedev": {
    country: "Russia",
    flag: "🇷🇺",
    rank: 5,
    serve: 71,
    winners: 27,
    errors: 19,
    score: 74,
    form: ["L", "W", "W", "L", "W"]
  },

  "Taylor Fritz": {
    country: "USA",
    flag: "🇺🇸",
    rank: 6,
    serve: 73,
    winners: 31,
    errors: 21,
    score: 76,
    form: ["W", "W", "L", "W", "W"]
  },

  "Jack Draper": {
    country: "United Kingdom",
    flag: "🇬🇧",
    rank: 7,
    serve: 67,
    winners: 29,
    errors: 22,
    score: 71,
    form: ["W", "L", "W", "W", "L"]
  },

  "Alex de Minaur": {
    country: "Australia",
    flag: "🇦🇺",
    rank: 8,
    serve: 66,
    winners: 25,
    errors: 17,
    score: 73,
    form: ["W", "W", "L", "W", "L"]
  },

  "Andrey Rublev": {
    country: "Russia",
    flag: "🇷🇺",
    rank: 9,
    serve: 68,
    winners: 34,
    errors: 24,
    score: 70,
    form: ["L", "W", "W", "L", "W"]
  },

  "Tommy Paul": {
    country: "USA",
    flag: "🇺🇸",
    rank: 10,
    serve: 65,
    winners: 27,
    errors: 18,
    score: 72,
    form: ["W", "W", "W", "L", "W"]
  },

  "Lorenzo Musetti": {
    country: "Italy",
    flag: "🇮🇹",
    rank: 11,
    serve: 64,
    winners: 26,
    errors: 19,
    score: 69,
    form: ["W", "L", "W", "W", "L"]
  },

  "Ben Shelton": {
    country: "USA",
    flag: "🇺🇸",
    rank: 12,
    serve: 75,
    winners: 33,
    errors: 25,
    score: 74,
    form: ["W", "W", "L", "W", "W"]
  },

  "Holger Rune": {
    country: "Denmark",
    flag: "🇩🇰",
    rank: 13,
    serve: 67,
    winners: 29,
    errors: 21,
    score: 70,
    form: ["L", "W", "W", "W", "L"]
  },

  "Casper Ruud": {
    country: "Norway",
    flag: "🇳🇴",
    rank: 14,
    serve: 68,
    winners: 24,
    errors: 16,
    score: 71,
    form: ["W", "W", "L", "W", "L"]
  },

  "Karen Khachanov": {
    country: "Russia",
    flag: "🇷🇺",
    rank: 15,
    serve: 69,
    winners: 30,
    errors: 22,
    score: 68,
    form: ["W", "L", "W", "L", "W"]
  },

  "Stefanos Tsitsipas": {
    country: "Greece",
    flag: "🇬🇷",
    rank: 16,
    serve: 70,
    winners: 31,
    errors: 23,
    score: 72,
    form: ["W", "W", "L", "L", "W"]
  },

  "Frances Tiafoe": {
    country: "USA",
    flag: "🇺🇸",
    rank: 17,
    serve: 71,
    winners: 28,
    errors: 24,
    score: 69,
    form: ["L", "W", "W", "L", "W"]
  },

  "Sebastian Korda": {
    country: "USA",
    flag: "🇺🇸",
    rank: 18,
    serve: 69,
    winners: 27,
    errors: 20,
    score: 70,
    form: ["W", "L", "W", "W", "L"]
  },

  "Arthur Fils": {
    country: "France",
    flag: "🇫🇷",
    rank: 19,
    serve: 66,
    winners: 29,
    errors: 23,
    score: 67,
    form: ["W", "L", "W", "L", "W"]
  },

  "Ugo Humbert": {
    country: "France",
    flag: "🇫🇷",
    rank: 20,
    serve: 68,
    winners: 28,
    errors: 21,
    score: 69,
    form: ["W", "W", "L", "L", "W"]
  },

  "Alejandro Davidovich Fokina": {
    country: "Spain",
    flag: "🇪🇸",
    rank: 21,
    serve: 64,
    winners: 26,
    errors: 25,
    score: 65,
    form: ["L", "W", "L", "W", "L"]
  },

  "Francisco Cerundolo": {
    country: "Argentina",
    flag: "🇦🇷",
    rank: 22,
    serve: 67,
    winners: 27,
    errors: 20,
    score: 70,
    form: ["W", "W", "L", "W", "L"]
  },

  "Alexander Bublik": {
    country: "Kazakhstan",
    flag: "🇰🇿",
    rank: 23,
    serve: 72,
    winners: 36,
    errors: 29,
    score: 68,
    form: ["W", "L", "W", "L", "W"]
  },

  "Matteo Berrettini": {
    country: "Italy",
    flag: "🇮🇹",
    rank: 24,
    serve: 75,
    winners: 34,
    errors: 22,
    score: 73,
    form: ["W", "W", "L", "W", "W"]
  },

  "Flavio Cobolli": {
    country: "Italy",
    flag: "🇮🇹",
    rank: 25,
    serve: 65,
    winners: 25,
    errors: 19,
    score: 67,
    form: ["W", "L", "W", "W", "L"]
  },

  "Jiri Lehecka": {
    country: "Czech Republic",
    flag: "🇨🇿",
    rank: 26,
    serve: 68,
    winners: 29,
    errors: 22,
    score: 69,
    form: ["W", "W", "L", "L", "W"]
  },

  "Alex Michelsen": {
    country: "USA",
    flag: "🇺🇸",
    rank: 27,
    serve: 70,
    winners: 28,
    errors: 23,
    score: 68,
    form: ["W", "L", "W", "W", "L"]
  },

  "Brandon Nakashima": {
    country: "USA",
    flag: "🇺🇸",
    rank: 28,
    serve: 69,
    winners: 26,
    errors: 18,
    score: 71,
    form: ["W", "W", "L", "W", "L"]
  },

  "Tallon Griekspoor": {
    country: "Netherlands",
    flag: "🇳🇱",
    rank: 29,
    serve: 71,
    winners: 30,
    errors: 24,
    score: 68,
    form: ["L", "W", "W", "L", "W"]
  },

  "Jan-Lennard Struff": {
    country: "Germany",
    flag: "🇩🇪",
    rank: 30,
    serve: 72,
    winners: 31,
    errors: 25,
    score: 67,
    form: ["W", "L", "W", "L", "W"]
  },

  "Nuno Borges": {
    country: "Portugal",
    flag: "🇵🇹",
    rank: 31,
    serve: 64,
    winners: 24,
    errors: 18,
    score: 66,
    form: ["W", "L", "W", "W", "L"]
  },

  "Sebastian Baez": {
    country: "Argentina",
    flag: "🇦🇷",
    rank: 32,
    serve: 63,
    winners: 23,
    errors: 17,
    score: 68,
    form: ["W", "W", "L", "W", "L"]
  },

  "Tomas Machac": {
    country: "Czech Republic",
    flag: "🇨🇿",
    rank: 33,
    serve: 67,
    winners: 27,
    errors: 21,
    score: 68,
    form: ["L", "W", "W", "L", "W"]
  },

  "Luciano Darderi": {
    country: "Italy",
    flag: "🇮🇹",
    rank: 34,
    serve: 65,
    winners: 24,
    errors: 20,
    score: 65,
    form: ["W", "L", "L", "W", "W"]
  },

  "Denis Shapovalov": {
    country: "Canada",
    flag: "🇨🇦",
    rank: 35,
    serve: 69,
    winners: 32,
    errors: 27,
    score: 67,
    form: ["W", "L", "W", "L", "W"]
  },

  "Jordan Thompson": {
    country: "Australia",
    flag: "🇦🇺",
    rank: 36,
    serve: 67,
    winners: 26,
    errors: 22,
    score: 66,
    form: ["L", "W", "W", "L", "W"]
  },

  "Arthur Rinderknech": {
    country: "France",
    flag: "🇫🇷",
    rank: 37,
    serve: 73,
    winners: 30,
    errors: 26,
    score: 65,
    form: ["W", "L", "W", "L", "L"]
  },

  "Alexandre Muller": {
    country: "France",
    flag: "🇫🇷",
    rank: 38,
    serve: 64,
    winners: 23,
    errors: 19,
    score: 65,
    form: ["L", "W", "W", "L", "W"]
  },

  "Mariano Navone": {
    country: "Argentina",
    flag: "🇦🇷",
    rank: 39,
    serve: 62,
    winners: 22,
    errors: 18,
    score: 64,
    form: ["W", "L", "W", "L", "W"]
  },

  "Fabian Marozsan": {
    country: "Hungary",
    flag: "🇭🇺",
    rank: 40,
    serve: 66,
    winners: 25,
    errors: 21,
    score: 66,
    form: ["L", "W", "W", "L", "W"]
  },

  "Miomir Kecmanovic": {
    country: "Serbia",
    flag: "🇷🇸",
    rank: 41,
    serve: 65,
    winners: 24,
    errors: 20,
    score: 65,
    form: ["W", "L", "W", "L", "W"]
  },

  "Pedro Martinez": {
    country: "Spain",
    flag: "🇪🇸",
    rank: 42,
    serve: 63,
    winners: 22,
    errors: 17,
    score: 64,
    form: ["L", "W", "W", "L", "W"]
  },

  "Roberto Bautista Agut": {
    country: "Spain",
    flag: "🇪🇸",
    rank: 43,
    serve: 65,
    winners: 23,
    errors: 16,
    score: 67,
    form: ["W", "W", "L", "W", "L"]
  },

  "Gael Monfils": {
    country: "France",
    flag: "🇫🇷",
    rank: 44,
    serve: 68,
    winners: 28,
    errors: 23,
    score: 68,
    form: ["W", "L", "W", "W", "L"]
  },

  "Grigor Dimitrov": {
    country: "Bulgaria",
    flag: "🇧🇬",
    rank: 45,
    serve: 67,
    winners: 29,
    errors: 20,
    score: 72,
    form: ["W", "W", "L", "W", "W"]
  },

  // Famous / popular players

  "Nick Kyrgios": {
    country: "Australia",
    flag: "🇦🇺",
    rank: "—",
    serve: 72,
    winners: 34,
    errors: 27,
    score: 70,
    form: ["W", "L", "W", "L", "W"]
  },

  "Rafael Nadal": {
    country: "Spain",
    flag: "🇪🇸",
    rank: "—",
    serve: 65,
    winners: 30,
    errors: 21,
    score: 82,
    form: ["W", "W", "W", "L", "W"]
  },

  "Roger Federer": {
    country: "Switzerland",
    flag: "🇨🇭",
    rank: "—",
    serve: 68,
    winners: 31,
    errors: 18,
    score: 90,
    form: ["W", "W", "W", "W", "W"]
  },

  "Andy Murray": {
    country: "United Kingdom",
    flag: "🇬🇧",
    rank: "—",
    serve: 64,
    winners: 25,
    errors: 20,
    score: 79,
    form: ["W", "L", "W", "W", "L"]
  },

  "Stan Wawrinka": {
    country: "Switzerland",
    flag: "🇨🇭",
    rank: "—",
    serve: 67,
    winners: 32,
    errors: 24,
    score: 78,
    form: ["W", "W", "L", "W", "L"]
  },

  "Dominic Thiem": {
    country: "Austria",
    flag: "🇦🇹",
    rank: "—",
    serve: 66,
    winners: 34,
    errors: 26,
    score: 80,
    form: ["W", "L", "W", "W", "W"]
  },

  "Kei Nishikori": {
    country: "Japan",
    flag: "🇯🇵",
    rank: "—",
    serve: 62,
    winners: 26,
    errors: 17,
    score: 76,
    form: ["W", "W", "L", "W", "L"]
  },

  "Marin Cilic": {
    country: "Croatia",
    flag: "🇭🇷",
    rank: "—",
    serve: 71,
    winners: 33,
    errors: 25,
    score: 77,
    form: ["W", "L", "W", "W", "L"]
  },

  "Fabio Fognini": {
    country: "Italy",
    flag: "🇮🇹",
    rank: "—",
    serve: 63,
    winners: 29,
    errors: 24,
    score: 73,
    form: ["L", "W", "W", "L", "W"]
  },

  "Diego Schwartzman": {
    country: "Argentina",
    flag: "🇦🇷",
    rank: "—",
    serve: 59,
    winners: 22,
    errors: 14,
    score: 75,
    form: ["W", "W", "L", "W", "L"]
  },

  "David Goffin": {
    country: "Belgium",
    flag: "🇧🇪",
    rank: "—",
    serve: 64,
    winners: 24,
    errors: 16,
    score: 72,
    form: ["W", "L", "W", "W", "L"]
  },

  "Richard Gasquet": {
    country: "France",
    flag: "🇫🇷",
    rank: "—",
    serve: 65,
    winners: 28,
    errors: 20,
    score: 74,
    form: ["W", "W", "L", "L", "W"]
  },

  "Lucas Pouille": {
    country: "France",
    flag: "🇫🇷",
    rank: "—",
    serve: 67,
    winners: 27,
    errors: 22,
    score: 69,
    form: ["L", "W", "W", "L", "W"]
  },

  "Jo-Wilfried Tsonga": {
    country: "France",
    flag: "🇫🇷",
    rank: "—",
    serve: 72,
    winners: 35,
    errors: 26,
    score: 80,
    form: ["W", "W", "W", "L", "W"]
  },

  "Juan Martin Del Potro": {
    country: "Argentina",
    flag: "🇦🇷",
    rank: "—",
    serve: 74,
    winners: 38,
    errors: 24,
    score: 84,
    form: ["W", "W", "L", "W", "W"]
  }
};


// ============================================
// SEARCH FUNCTIONALITY
// ============================================

function setupSearch(searchId, selectId) {
  const search = document.getElementById(searchId);
  const select = document.getElementById(selectId);

  if (!search || !select) return;

  search.addEventListener("input", function () {
    const query = this.value.toLowerCase().trim();

    const options = Array.from(
      select.querySelectorAll("option")
    );

    options.forEach(option => {
      if (!option.value) {
        option.style.display = "";
        return;
      }

      const name = option.value.toLowerCase();

      option.style.display =
        name.includes(query) ? "" : "none";
    });

    if (query.length > 0) {
      select.focus();
    }
  });
}


// ============================================
// FORM DOTS
// ============================================

function renderForm(player, containerId) {
  const container = document.getElementById(containerId);

  if (!container) return;

  container.innerHTML = "";

  player.form.forEach(result => {
    const dot = document.createElement("span");

    dot.classList.add("form-dot");

    if (result === "W") {
      dot.classList.add("win");
      dot.textContent = "W";
    } else {
      dot.classList.add("loss");
      dot.textContent = "L";
    }

    container.appendChild(dot);
  });
}


// ============================================
// GET PLAYER NAME
// ============================================

function getPlayerName(player) {
  return player.name || player._name || "";
}


// ============================================
// UPDATE PLAYER CARD
// ============================================

function updatePlayerCard(player, number) {
  const avatar = document.getElementById(`avatar${number}`);
  const resultName = document.getElementById(`resultName${number}`);
  const country = document.getElementById(`country${number}`);
  const rank = document.getElementById(`rank${number}`);
  const score = document.getElementById(`score${number}`);
  const performanceResult =
    document.getElementById(`performanceResult${number}`);
  const serveResult =
    document.getElementById(`serveResult${number}`);
  const winnersResult =
    document.getElementById(`winnersResult${number}`);
  const errorsResult =
    document.getElementById(`errorsResult${number}`);
  const serveBar =
    document.getElementById(`serveBar${number}`);
  const winnersBar =
    document.getElementById(`winnersBar${number}`);
  const errorsBar =
    document.getElementById(`errorsBar${number}`);

  // Flag / avatar
  if (avatar) {
    avatar.textContent = player.flag;
  }

  // Player name WITH FLAG
  if (resultName) {
    resultName.textContent =
      `${player.flag} ${getPlayerName(player)}`;
  }

  // Country WITH FLAG
  if (country) {
    country.textContent =
      `${player.flag} ${player.country} · ATP`;
  }

  // Ranking
  if (rank) {
    rank.textContent =
      player.rank === "—"
        ? "—"
        : `#${player.rank}`;
  }

  // Score
  if (score) {
    score.textContent =
      `${player.score}%`;
  }

  if (performanceResult) {
    performanceResult.textContent =
      `${player.score}%`;
  }

  // Statistics
  if (serveResult) {
    serveResult.textContent =
      `${player.serve}%`;
  }

  if (winnersResult) {
    winnersResult.textContent =
      player.winners;
  }

  if (errorsResult) {
    errorsResult.textContent =
      player.errors;
  }

  // Progress bars
  if (serveBar) {
    serveBar.style.width =
      `${player.serve}%`;
  }

  if (winnersBar) {
    winnersBar.style.width =
      `${Math.min(player.winners * 2, 100)}%`;
  }

  if (errorsBar) {
    errorsBar.style.width =
      `${Math.min(player.errors * 3, 100)}%`;
  }

  // Recent form
  renderForm(
    player,
    `form${number}`
  );
}


// ============================================
// COMPARISON
// ============================================

function comparePlayers() {
  const player1Name =
    document.getElementById("player1")?.value;

  const player2Name =
    document.getElementById("player2")?.value;

  if (!player1Name || !player2Name) {
    alert("Please select two players.");
    return;
  }

  if (player1Name === player2Name) {
    alert("Please select two different players.");
    return;
  }

  const player1 = {
    ...playerData[player1Name],
    name: player1Name
  };

  const player2 = {
    ...playerData[player2Name],
    name: player2Name
  };

  updatePlayerCard(
    player1,
    1
  );

  updatePlayerCard(
    player2,
    2
  );

  updateComparison(
    player1,
    player2
  );

  const results =
    document.getElementById("results");

  if (results) {
    results.classList.add("active");

    results.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


// ============================================
// UPDATE COMPARISON
// ============================================

function updateComparison(player1, player2) {
  const comparisonName1 =
    document.getElementById("comparisonName1");

  const comparisonName2 =
    document.getElementById("comparisonName2");

  const comparisonScore1 =
    document.getElementById("comparisonScore1");

  const comparisonScore2 =
    document.getElementById("comparisonScore2");

  const comparisonBar1 =
    document.getElementById("comparisonBar1");

  const comparisonBar2 =
    document.getElementById("comparisonBar2");

  const winner =
    document.getElementById("winner");


  // Player names WITH FLAGS
  if (comparisonName1) {
    comparisonName1.textContent =
      `${player1.flag} ${player1.name}`;
  }

  if (comparisonName2) {
    comparisonName2.textContent =
      `${player2.flag} ${player2.name}`;
  }


  // Scores
  if (comparisonScore1) {
    comparisonScore1.textContent =
      `${player1.score}%`;
  }

  if (comparisonScore2) {
    comparisonScore2.textContent =
      `${player2.score}%`;
  }


  // Score bars
  if (comparisonBar1) {
    comparisonBar1.style.width =
      `${player1.score}%`;
  }

  if (comparisonBar2) {
    comparisonBar2.style.width =
      `${player2.score}%`;
  }


  // Winner
  if (winner) {
    if (player1.score > player2.score) {

      winner.textContent =
        `🏆 ${player1.flag} ${player1.name}`;

    } else if (player2.score > player1.score) {

      winner.textContent =
        `🏆 ${player2.flag} ${player2.name}`;

    } else {

      winner.textContent =
        "🤝 Draw";
    }
  }
}


// ============================================
// COMPARE BUTTON
// ============================================

const compareButton =
  document.getElementById("compareButton");

if (compareButton) {
  compareButton.addEventListener(
    "click",
    comparePlayers
  );
}


// ============================================
// SEARCH INITIALIZATION
// ============================================

setupSearch(
  "search1",
  "player1"
);

setupSearch(
  "search2",
  "player2"
);


// ============================================
// DEFAULT DATA
// ============================================

window.addEventListener(
  "DOMContentLoaded",
  () => {

    const player1 =
      document.getElementById("player1");

    const player2 =
      document.getElementById("player2");

    if (player1 && player2) {

      player1.value =
        "Carlos Alcaraz";

      player2.value =
        "Jannik Sinner";

      comparePlayers();
    }
  }
);
