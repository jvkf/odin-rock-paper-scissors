let options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function trackScore(playerResult) {
  let userScore = 0;
  let computerScore = 0;
  if (playerResult === 1) {
  }
}

function playRound(playerSelection, computerSelection) {
  let playerChoice = playerSelection.toLowerCase();
  let pcChoice = computerSelection.toLowerCase();

  if (playerChoice === pcChoice) {
    return `It's a draw!`;
  }

  switch (pcChoice) {
    case "rock":
      if (playerChoice === "paper") {
        return "You win! Paper beats Rock";
      } else {
        return "You lose! Rock beat Scissors ";
      }
    case "paper":
      if (playerChoice === "scissors") {
        return "You win! Scissors beat Paper ";
      } else {
        return "You lose! Paper beats Rock";
      }
    case "scissors":
      if (playerChoice === "scissors") {
        return "You lose! Scissors beat Paper";
      } else {
        return "You win! Rock beats Scissors";
      }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Your turn");
    let computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
