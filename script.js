const optionButtons = document.querySelectorAll("[data-option]");

const winnerDisplay = document.querySelector(".display__winner");
const computerDisplay = document.querySelector(".display__computer");
const playerDisplay = document.querySelector(".display__player");
const playerScoreDisplay = document.querySelector(".display__score_player");
const computerScoreDisplay = document.querySelector(".display__score_computer");

optionButtons.forEach((button) => button.addEventListener("click", play));

let playerScore = 0;
let computerScore = 0;
let totalRounds = 0;

function play() {
  const player = this.dataset.option;
  const computer = getComputerChoice();
  const res = playRound(options.indexOf(player), computer);
  winnerDisplay.textContent = res;
  computerDisplay.textContent = `Computer: ${options[computer]}`;
  playerDisplay.textContent = `Player: ${player}`;
  computerScoreDisplay.textContent = `Computer score : ${computerScore}/${totalRounds}`;
  playerScoreDisplay.textContent = `Player score : ${playerScore}/${totalRounds}`;
}

const options = ["rock", "paper", "scissors"];

const getComputerChoice = () => Math.floor(Math.random() * 3);
const playRound = (playerSelection, computerSelection) => {
  const selections = `${playerSelection}${computerSelection}`;
  let result;
  switch (selections) {
    case "00":
    case "11":
    case "22":
      result = "Draw";
      break;
    case "01":
    case "12":
    case "20":
      result = "Player Lose";
      computerScore++;
      break;
    default:
      result = "Player Win";
      playerScore++;
      break;
  }
  totalRounds++;
  return result;
};
