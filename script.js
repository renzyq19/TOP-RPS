const round = document.querySelector(".round");

const optionButtons = document.querySelectorAll(".player [data-option]");
const computerButtons = document.querySelectorAll(".computer [data-option]");

const playerScoreDisplay = document.querySelector(".score.player");
const computerScoreDisplay = document.querySelector(".score.computer");

optionButtons.forEach((button) => button.addEventListener("click", play));

let playerScore = 0;
let computerScore = 0;
let totalRounds = 0;

function play() {
  totalRounds++;
  const player = this.dataset.option;
  const computer = getComputerChoice();
  const res = playRound(options.indexOf(player), computer);

  if (res.indexOf("win") == 0) playerScore++;
  if (res.indexOf("win") == 1) computerScore++;
  [...optionButtons, ...computerButtons].forEach((button) =>
    button.classList.remove(...button.classList)
  );
  this.classList.add("bold", res[0]);
  computerButtons.forEach((option) => {
    if (option.dataset.option == options[computer])
      option.classList.add(res[1], "bold");
  });
  computerScoreDisplay.textContent = `${computerScore}`;
  playerScoreDisplay.textContent = `${playerScore}`;
  round.textContent = `Round: ${totalRounds}`;
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
      result = ["draw", "draw"];
      break;
    case "01":
    case "12":
    case "20":
      result = ["lose", "win"];
      break;
    default:
      result = ["win", "lose"];
      break;
  }
  return result;
};
