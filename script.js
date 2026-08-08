function analyzeMatch() {
  const player1 = document.getElementById("player1").value.trim();
  const player2 = document.getElementById("player2").value.trim();

  if (player1 === "" || player2 === "") {
    alert("Please enter both player names!");
    return;
  }

  alert(`Analyzing ${player1} vs ${player2}! 🎾`);
}
