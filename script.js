const options = ["Rock", "Paper", "Scissors"];

// Game data
let playerScore = 0;
let pcScore = 0;
let counter = 0;
const maxRounds = 5;

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function increasePlayerScore() {
  playerScore += 1;
}

function increasePcScore() {
  pcScore += 1;
}

function updateScore(result) {
  result === "player" ? increasePlayerScore() : increasePcScore();
  updateCounter();
}

function updateCounter() {
  counter += 1;
}

function resetGame() {
  playerScore = 0;
  pcScore = 0;
  counter = 0;
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const pcChoice = computerSelection.toLowerCase();

  if (playerChoice === pcChoice) {
    updateCounter();
    return `It's a draw!`;
  }

  switch (pcChoice) {
    case "rock":
      if (playerChoice === "paper") {
        updateScore("player");
        return "You win! Paper beats Rock";
      } else {
        updateScore("pc");
        return "You lose! Rock beats Scissors ";
      }
    case "paper":
      if (playerChoice === "scissors") {
        updateScore("player");
        return "You win! Scissors beats Paper ";
      } else {
        updateScore("pc");
        return "You lose! Paper beats Rock";
      }
    case "scissors":
      if (playerChoice === "rock") {
        updateScore("player");
        return "You win! Rock beats Scissors";
      } else {
        updateScore("pc");
        return "You lose! Scissors beats Paper";
      }
  }
}

// DOM Manipulation + Using game

const playerSelection = document.querySelectorAll(".button");
const roundResult = document.querySelector(".result-container .round-result");
const playerResult = document.querySelector(".game-results .player-result");
const pcResult = document.querySelector(".game-results .pc-result");

function checkResult() {
  if (counter === maxRounds) {
    playerScore > pcScore
      ? alert(
          `You smashed the PC! \n Final result: Player ${playerScore} X ${pcScore} PC`
        )
      : alert(
          `The machines are going to rule the world D: \n Final result: Player ${playerScore} X ${pcScore} PC`
        );
    resetGame();
    updateTexts();
  }
}

function playGame(e) {
  const result = playRound(
    this.getAttribute("data-game-option"),
    getComputerChoice()
  );
  updateTexts(result);
  checkResult();
}

function updateTexts(result = "") {
  roundResult.innerText = result;
  playerResult.innerText = playerScore;
  pcResult.innerText = pcScore;
}

playerSelection.forEach((button) => button.addEventListener("click", playGame));
