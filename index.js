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

function playButtons() {
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";

  rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    round++;
    if (round === 5) {
      alert("Game has ended!")
    }
  });

  paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    round++;
    if (round === 5) {
      alert("Game has ended!")
    }
  });
  
  scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    round++;
    if (round === 5) {
      alert("Game has ended!")
    }
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
  } else{
    computerScore++;
    console.log("Computer wins!");
  }console.log(round);
}

playButtons();