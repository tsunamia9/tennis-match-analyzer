function analyzeMatch() {
  const player1 = document.getElementById("player1").value;
  const player2 = document.getElementById("player2").value;

  if (!player1 || !player2) {
    alert("Please enter both player names!");
    return;
  }

  document.getElementById("player1Name").textContent = player1;
  document.getElementById("player2Name").textContent = player2;

  alert(`Analyzing ${player1} vs ${player2}! 🎾`);
}
