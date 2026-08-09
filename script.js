document.addEventListener("DOMContentLoaded", () => {

    // --------------------------------------------------
    // PLAYER LIST
    // --------------------------------------------------

    const players = [
        "Jannik Sinner",
        "Carlos Alcaraz",
        "Novak Djokovic",
        "Alexander Zverev",
        "Daniil Medvedev",
        "Taylor Fritz",
        "Alex de Minaur",
        "Ben Shelton",
        "Felix Auger-Aliassime",
        "Lorenzo Musetti",
        "Andrey Rublev",
        "Casper Ruud",
        "Holger Rune",
        "Jack Draper",
        "Tommy Paul",
        "Frances Tiafoe",
        "Alejandro Davidovich Fokina",
        "Cameron Norrie",
        "Brandon Nakashima",
        "Sebastian Korda"
    ];

    const select1 = document.getElementById("realPlayer1");
    const select2 = document.getElementById("realPlayer2");

    if (!select1 || !select2) {
        console.error("Player dropdowns not found.");
        return;
    }


    // --------------------------------------------------
    // POPULATE DROPDOWNS
    // --------------------------------------------------

    function populatePlayers(list = players) {

        select1.innerHTML = "";
        select2.innerHTML = "";

        list.forEach(player => {

            const option1 = document.createElement("option");
            option1.value = player;
            option1.textContent = player;

            const option2 = document.createElement("option");
            option2.value = player;
            option2.textContent = player;

            select1.appendChild(option1);
            select2.appendChild(option2);
        });

        if (list.includes("Carlos Alcaraz")) {
            select1.value = "Carlos Alcaraz";
        }

        if (list.includes("Jannik Sinner")) {
            select2.value = "Jannik Sinner";
        }
    }

    populatePlayers();

    console.log("Players loaded:", players.length);


    // --------------------------------------------------
    // MODE SWITCHING
    // --------------------------------------------------

    window.showManual = function () {

        document.getElementById("manualAnalysis")?.classList.remove("hidden");

        document.getElementById("realMatch")?.classList.add("hidden");
        document.getElementById("comparisonSection")?.classList.add("hidden");
        document.getElementById("performanceSection")?.classList.add("hidden");
        document.getElementById("h2hSection")?.classList.add("hidden");
        document.getElementById("recentMatchesSection")?.classList.add("hidden");
        document.getElementById("analysisSection")?.classList.add("hidden");
        document.getElementById("results")?.classList.add("hidden");

        document.getElementById("manualAnalysis")?.scrollIntoView({
            behavior: "smooth"
        });
    };


    window.showRealMatch = function () {

        document.getElementById("realMatch")?.classList.remove("hidden");

        document.getElementById("manualAnalysis")?.classList.add("hidden");
        document.getElementById("results")?.classList.add("hidden");

        document.getElementById("realMatch")?.scrollIntoView({
            behavior: "smooth"
        });
    };


    // --------------------------------------------------
    // PLAYER SEARCH
    // --------------------------------------------------

    const playerSearch = document.getElementById("playerSearch");

    if (playerSearch) {

        playerSearch.addEventListener("input", () => {

            const search = playerSearch.value
                .toLowerCase()
                .trim();

            const filteredPlayers = players.filter(player =>
                player.toLowerCase().includes(search)
            );

            populatePlayers(filteredPlayers);
        });
    }


    // --------------------------------------------------
    // API REQUEST
    // --------------------------------------------------

    async function getPlayer(playerName) {

        const encodedName = encodeURIComponent(playerName);

        const response = await fetch(
            `/api/player/${encodedName}`
        );

        if (!response.ok) {

            let message = "Failed to load player.";

            try {
                const errorData = await response.json();

                if (errorData.detail) {
                    message = errorData.detail;
                }

            } catch {
                // Ignore JSON error
            }

            throw new Error(message);
        }

        return await response.json();
    }


    // --------------------------------------------------
    // HELPERS
    // --------------------------------------------------

    function getRank(player) {

        if (
            player.rank === null ||
            player.rank === undefined ||
            player.rank === ""
        ) {
            return "N/A";
        }

        return player.rank;
    }


    function getCountry(player) {
        return player.country || "Unknown";
    }


    function getHand(player) {
        return player.hand || "Unknown";
    }


    function getBirthDate(player) {
        return player.birthDate || "Unknown";
    }


    function escapeHtml(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    // --------------------------------------------------
    // PLAYER CARD
    // --------------------------------------------------

    function renderPlayerCard(player, elementId) {

        const container = document.getElementById(elementId);

        if (!container) {
            return;
        }

        container.innerHTML = `

            <div class="player-result-header">

                <div class="player-result-avatar">
                    🎾
                </div>

                <div>
                    <h3>
                        ${escapeHtml(player.name)}
                    </h3>

                    <p>
                        Professional player profile
                    </p>
                </div>

            </div>

            <div class="rank-box">

                <span>
                    ATP Ranking
                </span>

                <strong>
                    #${escapeHtml(String(getRank(player)))}
                </strong>

            </div>

            <div class="data-row">

                <span>
                    Country
                </span>

                <strong>
                    ${escapeHtml(getCountry(player))}
                </strong>

            </div>

            <div class="data-row">

                <span>
                    Playing Hand
                </span>

                <strong>
                    ${escapeHtml(getHand(player))}
                </strong>

            </div>

            <div class="data-row">

                <span>
                    Birth Date
                </span>

                <strong>
                    ${escapeHtml(getBirthDate(player))}
                </strong>

            </div>
        `;
    }


    // --------------------------------------------------
    // PERFORMANCE
    // --------------------------------------------------

    function calculatePerformance(rank1, rank2) {

        const r1 = Number(rank1);
        const r2 = Number(rank2);

        if (!Number.isFinite(r1) || !Number.isFinite(r2)) {
            return {
                score1: 50,
                score2: 50
            };
        }

        const total = r1 + r2;

        if (total <= 0) {
            return {
                score1: 50,
                score2: 50
            };
        }

        return {
            score1: Math.round((r2 / total) * 100),
            score2: Math.round((r1 / total) * 100)
        };
    }


    function renderPerformance(player1, player2) {

        const name1 = document.getElementById("performanceName1");
        const name2 = document.getElementById("performanceName2");

        const score1 = document.getElementById("score1");
        const score2 = document.getElementById("score2");

        const bar1 = document.getElementById("bar1");
        const bar2 = document.getElementById("bar2");

        const note = document.getElementById("performanceNote");

        if (!name1 || !name2 || !score1 || !score2) {
            return;
        }

        const performance = calculatePerformance(
            player1.rank,
            player2.rank
        );

        name1.textContent = player1.name;
        name2.textContent = player2.name;

        score1.textContent = `${performance.score1}%`;
        score2.textContent = `${performance.score2}%`;

        if (bar1) {
            bar1.style.width = `${performance.score1}%`;
        }

        if (bar2) {
            bar2.style.width = `${performance.score2}%`;
        }

        if (note) {

            if (
                Number.isFinite(Number(player1.rank)) &&
                Number.isFinite(Number(player2.rank))
            ) {

                note.textContent =
                    "The comparison is based on current ATP ranking positions.";

            } else {

                note.textContent =
                    "Ranking data was not available for both players.";
            }
        }
    }


    // --------------------------------------------------
    // HEAD TO HEAD
    // --------------------------------------------------

    function renderHeadToHead(player1, player2) {

        const name1 = document.getElementById("h2hPlayer1");
        const name2 = document.getElementById("h2hPlayer2");

        const country1 = document.getElementById("h2hCountry1");
        const country2 = document.getElementById("h2hCountry2");

        const wins1 = document.getElementById("h2hWins1");
        const wins2 = document.getElementById("h2hWins2");

        const matches = document.getElementById("h2hMatches");

        const left = document.getElementById("h2hLeft");
        const right = document.getElementById("h2hRight");

        const note = document.getElementById("h2hNote");

        if (!name1 || !name2) {
            return;
        }

        name1.textContent = player1.name;
        name2.textContent = player2.name;

        if (country1) {
            country1.textContent = getCountry(player1);
        }

        if (country2) {
            country2.textContent = getCountry(player2);
        }

        if (wins1) {
            wins1.textContent = "—";
        }

        if (wins2) {
            wins2.textContent = "—";
        }

        if (matches) {
            matches.textContent = "—";
        }

        if (left) {
            left.style.width = "50%";
        }

        if (right) {
            right.style.width = "50%";
        }

        if (note) {
            note.textContent =
                "Verified head-to-head data is not available from the current profile endpoint.";
        }
    }


    // --------------------------------------------------
    // ANALYSIS
    // --------------------------------------------------

    function renderAnalysis(player1, player2) {

        const analysisText =
            document.getElementById("analysisText");

        if (!analysisText) {
            return;
        }

        const rank1 = Number(player1.rank);
        const rank2 = Number(player2.rank);

        if (
            Number.isFinite(rank1) &&
            Number.isFinite(rank2)
        ) {

            if (rank1 < rank2) {

                analysisText.textContent =
                    `${player1.name} currently has the higher ATP ranking ` +
                    `(#${rank1}) compared with ${player2.name} (#${rank2}).`;

            } else if (rank2 < rank1) {

                analysisText.textContent =
                    `${player2.name} currently has the higher ATP ranking ` +
                    `(#${rank2}) compared with ${player1.name} (#${rank1}).`;

            } else {

                analysisText.textContent =
                    "Both players currently have the same ranking position.";
            }

        } else {

            analysisText.textContent =
                `The profiles of ${player1.name} and ${player2.name} were loaded, ` +
                "but ranking data was not available.";
        }
    }


    // --------------------------------------------------
    // HIDE REAL RESULTS
    // --------------------------------------------------

    function hideRealResults() {

        document.getElementById("comparisonSection")
            ?.classList.add("hidden");

        document.getElementById("performanceSection")
            ?.classList.add("hidden");

        document.getElementById("h2hSection")
            ?.classList.add("hidden");

        document.getElementById("recentMatchesSection")
            ?.classList.add("hidden");

        document.getElementById("analysisSection")
            ?.classList.add("hidden");
    }


    // --------------------------------------------------
    // REAL PLAYER ANALYSIS
    // --------------------------------------------------

    window.findRealMatch = async function () {

        const player1Name = select1.value;
        const player2Name = select2.value;

        if (!player1Name || !player2Name) {

            alert("Please select two players.");
            return;
        }

        if (player1Name === player2Name) {

            alert("Please select two different players.");
            return;
        }

        const button =
            document.querySelector(
                '#realMatch button[onclick="findRealMatch()"]'
            );

        const originalText =
            button?.textContent || "Analyze Players 🎾";

        if (button) {

            button.disabled = true;
            button.textContent = "Loading...";
        }

        hideRealResults();

        try {

            console.log("Loading player 1:", player1Name);
            console.log("Loading player 2:", player2Name);

            const [player1, player2] =
                await Promise.all([
                    getPlayer(player1Name),
                    getPlayer(player2Name)
                ]);

            console.log("Player 1 data:", player1);
            console.log("Player 2 data:", player2);

            renderPlayerCard(
                player1,
                "playerResult1"
            );

            renderPlayerCard(
                player2,
                "playerResult2"
            );

            renderPerformance(
                player1,
                player2
            );

            renderHeadToHead(
                player1,
                player2
            );

            renderAnalysis(
                player1,
                player2
            );

            document.getElementById("comparisonSection")
                ?.classList.remove("hidden");

            document.getElementById("performanceSection")
                ?.classList.remove("hidden");

            document.getElementById("h2hSection")
                ?.classList.remove("hidden");

            document.getElementById("analysisSection")
                ?.classList.remove("hidden");

            document.getElementById("recentMatchesSection")
                ?.classList.remove("hidden");

            const recentMatches =
                document.getElementById("recentMatches");

            if (recentMatches) {

                recentMatches.innerHTML = `
                    <div class="status">
                        Recent match history is not connected yet.
                    </div>
                `;
            }

            document.getElementById("comparisonSection")
                ?.scrollIntoView({
                    behavior: "smooth"
                });

        } catch (error) {

            console.error(
                "Player loading failed:",
                error
            );

            const comparison =
                document.getElementById(
                    "comparisonSection"
                );

            if (comparison) {

                comparison.classList.remove("hidden");

                document.getElementById(
                    "playerResult1"
                ).innerHTML = `
                    <div class="status error">
                        <strong>
                            Could not load player data.
                        </strong>

                        <br><br>

                        ${escapeHtml(error.message)}
                    </div>
                `;

                document.getElementById(
                    "playerResult2"
                ).innerHTML = `
                    <div class="status error">
                        The RapidAPI request failed.
                    </div>
                `;
            }

        } finally {

            if (button) {

                button.disabled = false;
                button.textContent = originalText;
            }
        }
    };


    // --------------------------------------------------
    // MANUAL MATCH ANALYSIS
    // --------------------------------------------------

    window.analyzeMatch = function () {

        const player1Name =
            document.getElementById("player1")
                ?.value.trim() || "Player 1";

        const player2Name =
            document.getElementById("player2")
                ?.value.trim() || "Player 2";

        const serve1 =
            Number(document.getElementById("serve1")?.value);

        const serve2 =
            Number(document.getElementById("serve2")?.value);

        const winners1 =
            Number(document.getElementById("winners1")?.value);

        const winners2 =
            Number(document.getElementById("winners2")?.value);

        const errors1 =
            Number(document.getElementById("errors1")?.value);

        const errors2 =
            Number(document.getElementById("errors2")?.value);


        if (
            !Number.isFinite(serve1) ||
            !Number.isFinite(serve2) ||
            !Number.isFinite(winners1) ||
            !Number.isFinite(winners2) ||
            !Number.isFinite(errors1) ||
            !Number.isFinite(errors2)
        ) {

            alert("Please enter all match statistics.");
            return;
        }


        if (
            serve1 < 0 ||
            serve1 > 100 ||
            serve2 < 0 ||
            serve2 > 100
        ) {

            alert(
                "First serve percentage must be between 0 and 100."
            );

            return;
        }


        document.getElementById("player1Name")
            .textContent = player1Name;

        document.getElementById("player2Name")
            .textContent = player2Name;

        document.getElementById("serveResult1")
            .textContent = `${serve1}%`;

        document.getElementById("serveResult2")
            .textContent = `${serve2}%`;

        document.getElementById("winnerResult1")
            .textContent = winners1;

        document.getElementById("winnerResult2")
            .textContent = winners2;

        document.getElementById("errorResult1")
            .textContent = errors1;

        document.getElementById("errorResult2")
            .textContent = errors2;


        const maxWinners =
            Math.max(winners1, winners2, 1);

        const maxErrors =
            Math.max(errors1, errors2, 1);


        const score1 =
            (serve1 * 0.4) +
            ((winners1 / maxWinners) * 100 * 0.4) +
            ((1 - errors1 / (maxErrors + 1)) * 100 * 0.2);


        const score2 =
            (serve2 * 0.4) +
            ((winners2 / maxWinners) * 100 * 0.4) +
            ((1 - errors2 / (maxErrors + 1)) * 100 * 0.2);


        let resultText;


        if (Math.abs(score1 - score2) < 0.5) {

            resultText =
                `${player1Name} and ${player2Name} are very closely matched ` +
                "based on the entered statistics.";

        } else if (score1 > score2) {

            resultText =
                `${player1Name} has the stronger statistical indicator ` +
                `(${score1.toFixed(1)} vs ${score2.toFixed(1)}).`;

        } else {

            resultText =
                `${player2Name} has the stronger statistical indicator ` +
                `(${score2.toFixed(1)} vs ${score1.toFixed(1)}).`;
        }


        const result =
            document.getElementById("result");

        if (result) {
            result.textContent = resultText;
        }


        document.getElementById("results")
            ?.classList.remove("hidden");


        document.getElementById("results")
            ?.scrollIntoView({
                behavior: "smooth"
            });
    };


    console.log("Tennis Match Analyzer JS loaded successfully.");

});