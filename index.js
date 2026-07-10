function getComputerChoice() {
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";

  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return rock;
  } else if (randomNumber === 1) {
    return paper;
  } else if (randomNumber === 2) {
    return scissors;
  } else {
    return "Error: Invalid random number generated.";
  }
}

let round = 0;

function gameEnd() {
  round++;

  if(round === 5) {
    alert("Game has ended!");
  }
}

function playButtons() {
  rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    gameEnd();
  });

  paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    gameEnd();
  });

  scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    gameEnd();
  });
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    console.log("Human wins!");
  } else if (humanChoice === computerChoice) {
    console.log("Draw!");
  } else {
    computerScore++;
    console.log("Computer wins!");
  }
  console.log(round);
}

playButtons();
