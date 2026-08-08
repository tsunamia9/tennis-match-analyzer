function analyzeMatch() {
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
