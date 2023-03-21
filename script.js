let options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function getPlayerChoice() {
  return prompt("Your choice");
}

let playerScore = 0;
let pcScore = 0;

function increasePlayerScore() {
  playerScore += 1;
}

function increasePcScore() {
  pcScore += 1;
}

function updateScore(result) {
  result === "player wins" ? increasePlayerScore() : increasePcScore();
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
        updateScore("player wins");
        return "You win! Paper beats Rock";
      } else {
        updateScore("pc");
        return "You lose! Rock beat Scissors ";
      }
    case "paper":
      if (playerChoice === "scissors") {
        updateScore("player wins");
        return "You win! Scissors beat Paper ";
      } else {
        updateScore("pc");
        return "You lose! Paper beats Rock";
      }
    case "scissors":
      if (playerChoice === "rock") {
        updateScore("player wins");
        return "You win! Rock beats Scissors";
      } else {
        updateScore("pc");
        return "You lose! Scissors beats Paper";
      }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
  }

  console.log(`Final result: Player ${playerScore} - PC ${pcScore}`);
}

game();
