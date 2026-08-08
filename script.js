// ================================
// MODE SELECTION
// ================================

function showManual() {
  document.getElementById("manualAnalysis").classList.remove("hidden");
  document.getElementById("realMatch").classList.add("hidden");

  document.getElementById("manualAnalysis").scrollIntoView({
    behavior: "smooth"
  });
}


function showRealMatch() {
  document.getElementById("realMatch").classList.remove("hidden");
  document.getElementById("manualAnalysis").classList.add("hidden");

  document.getElementById("realMatch").scrollIntoView({
    behavior: "smooth"
  });
}


// ================================
// REAL MATCH
// ================================

function findRealMatch() {

  const player1 = document.getElementById("realPlayer1").value;
  const player2 = document.getElementById("realPlayer2").value;

  if (!player1 || !player2) {
    alert("Please select both players.");
    return;
  }

  if (player1 === player2) {
    alert("Please select two different players.");
    return;
  }

  alert(
    `${player1} vs ${player2}\n\n` +
    "Real tennis data will be connected here next! 🎾"
  );
}


// ================================
// MANUAL MATCH ANALYZER
// ================================

function analyzeMatch() {

  const player1 =
    document.getElementById("player1").value.trim();

  const player2 =
    document.getElementById("player2").value.trim();


  const serve1 =
    Number(document.getElementById("serve1").value);

  const serve2 =
    Number(document.getElementById("serve2").value);


  const winners1 =
    Number(document.getElementById("winners1").value);

  const winners2 =
    Number(document.getElementById("winners2").value);


  const errors1 =
    Number(document.getElementById("errors1").value);

  const errors2 =
    Number(document.getElementById("errors2").value);


  // -------------------------------
  // VALIDATION
  // -------------------------------

  if (!player1 || !player2) {

    alert("Please enter both player names.");

    return;
  }


  if (
    serve1 < 0 ||
    serve2 < 0 ||
    winners1 < 0 ||
    winners2 < 0 ||
    errors1 < 0 ||
    errors2 < 0
  ) {

    alert("Statistics cannot be negative.");

    return;
  }


  // -------------------------------
  // UPDATE NAMES
  // -------------------------------

  document.getElementById("player1Name").textContent =
    player1;

  document.getElementById("player2Name").textContent =
    player2;


  document.getElementById("performanceName1").textContent =
    player1;

  document.getElementById("performanceName2").textContent =
    player2;


  // -------------------------------
  // UPDATE STATISTICS
  // -------------------------------

  document.getElementById("serveResult1").textContent =
    serve1 + "%";

  document.getElementById("serveResult2").textContent =
    serve2 + "%";


  document.getElementById("winnerResult1").textContent =
    winners1;

  document.getElementById("winnerResult2").textContent =
    winners2;


  document.getElementById("errorResult1").textContent =
    errors1;

  document.getElementById("errorResult2").textContent =
    errors2;


  // -------------------------------
  // PERFORMANCE SCORE
  // -------------------------------

  let score1 =
    serve1 +
    winners1 * 2 -
    errors1;


  let score2 =
    serve2 +
    winners2 * 2 -
    errors2;


  score1 = Math.max(score1, 0);
  score2 = Math.max(score2, 0);


  const totalScore =
    score1 + score2;


  let percentage1 = 50;
  let percentage2 = 50;


  if (totalScore > 0) {

    percentage1 =
      Math.round(
        (score1 / totalScore) * 100
      );

    percentage2 =
      Math.round(
        (score2 / totalScore) * 100
      );
  }


  // -------------------------------
  // UPDATE PERFORMANCE
  // -------------------------------

  document.getElementById("score1").textContent =
    percentage1 + "%";

  document.getElementById("score2").textContent =
    percentage2 + "%";


  document.getElementById("bar1").style.width =
    percentage1 + "%";

  document.getElementById("bar2").style.width =
    percentage2 + "%";


  // -------------------------------
  // ANALYSIS
  // -------------------------------

  let result;


  if (percentage1 > percentage2) {

    result =
      `${player1} had the stronger statistical performance. 🏆`;

  }

  else if (percentage2 > percentage1) {

    result =
      `${player2} had the stronger statistical performance. 🏆`;

  }

  else {

    result =
      "Both players had an equal statistical performance. 🤝";

  }


  document.getElementById("result").textContent =
    result;


  // -------------------------------
  // SHOW RESULTS
  // -------------------------------

  document
    .getElementById("results")
    .classList
    .remove("hidden");


  document
    .getElementById("results")
    .scrollIntoView({
      behavior: "smooth"
    });
}
