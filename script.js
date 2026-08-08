function analyzeMatch() {
  const player1 = document.getElementById("player1").value.trim();
  const player2 = document.getElementById("player2").value.trim();

  const serve1 = Number(document.getElementById("serve1").value);
  const serve2 = Number(document.getElementById("serve2").value);

  const winners1 = Number(document.getElementById("winners1").value);
  const winners2 = Number(document.getElementById("winners2").value);

  const errors1 = Number(document.getElementById("errors1").value);
  const errors2 = Number(document.getElementById("errors2").value);

  // Check player names
  if (!player1 || !player2) {
    alert("Please enter both player names.");
    return;
  }

  // Check statistics
  if (
    serve1 < 0 ||
    serve2 < 0 ||
    winners1 < 0 ||
    winners2 < 0 ||
    errors1 < 0 ||
    errors2 < 0 ||
    !Number.isFinite(serve1) ||
    !Number.isFinite(serve2) ||
    !Number.isFinite(winners1) ||
    !Number.isFinite(winners2) ||
    !Number.isFinite(errors1) ||
    !Number.isFinite(errors2)
  ) {
    alert("Please enter valid match statistics.");
    return;
  }

  // Update player names
  document.getElementById("player1Name").textContent = player1;
  document.getElementById("player2Name").textContent = player2;

  document.getElementById("performanceName1").textContent = player1;
  document.getElementById("performanceName2").textContent = player2;

  // Update statistics
  document.getElementById("serveResult1").textContent = serve1 + "%";
  document.getElementById("serveResult2").textContent = serve2 + "%";

  document.getElementById("winnerResult1").textContent = winners1;
  document.getElementById("winnerResult2").textContent = winners2;

  document.getElementById("errorResult1").textContent = errors1;
  document.getElementById("errorResult2").textContent = errors2;

  // Calculate performance scores
  let score1 = serve1 + (winners1 * 2) - errors1;
  let score2 = serve2 + (winners2 * 2) - errors2;

  // Prevent negative scores
  score1 = Math.max(score1, 0);
  score2 = Math.max(score2, 0);

  // Convert scores to percentages
  const totalScore = score1 + score2;

  let percentage1 = 50;
  let percentage2 = 50;

  if (totalScore > 0) {
    percentage1 = Math.round((score1 / totalScore) * 100);
    percentage2 = Math.round((score2 / totalScore) * 100);
  }

  // Update scores
  document.getElementById("score1").textContent =
    percentage1 + "%";

  document.getElementById("score2").textContent =
    percentage2 + "%";

  // Update performance bars
  document.getElementById("bar1").style.width =
    percentage1 + "%";

  document.getElementById("bar2").style.width =
    percentage2 + "%";

  // Create analysis
  let result = "";

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

  document.getElementById("result").textContent = result;
}function analyzeMatch() {
  const player1 = document.getElementById("player1").value.trim();
  const player2 = document.getElementById("player2").value.trim();

  const serve1 = Number(document.getElementById("serve1").value);
  const serve2 = Number(document.getElementById("serve2").value);

  const winners1 = Number(document.getElementById("winners1").value);
  const winners2 = Number(document.getElementById("winners2").value);

  const errors1 = Number(document.getElementById("errors1").value);
  const errors2 = Number(document.getElementById("errors2").value);

  if (!player1 || !player2) {
    alert("Please enter both player names!");
    return;
  }

  if (
    !serve1 ||
    !serve2 ||
    !winners1 ||
    !winners2 ||
    !errors1 ||
    !errors2
  ) {
    alert("Please enter all match statistics!");
    return;
  }

  document.getElementById("player1Name").textContent = player1;
  document.getElementById("player2Name").textContent = player2;

  document.getElementById("serveResult1").textContent = serve1 + "%";
  document.getElementById("serveResult2").textContent = serve2 + "%";

  document.getElementById("winnerResult1").textContent = winners1;
  document.getElementById("winnerResult2").textContent = winners2;

  document.getElementById("errorResult1").textContent = errors1;
  document.getElementById("errorResult2").textContent = errors2;

  const score1 =
    serve1 +
    winners1 * 2 -
    errors1;

  const score2 =
    serve2 +
    winners2 * 2 -
    errors2;

  let result;

  if (score1 > score2) {
    result = `${player1} had the stronger statistical performance! 🏆`;
  } else if (score2 > score1) {
    result = `${player2} had the stronger statistical performance! 🏆`;
  } else {
    result = "The players had an equal statistical score! 🤝";
  }

  document.getElementById("result").textContent = result;
}
