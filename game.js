// Available options for the game 
const options = ["Rock","Paper","Scissors"];

// Variables to track player and computer wins
let playerWin = 0;
let computerWin = 0;
let gameOver = 0;

// Event listeners for the buttons 
const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => playRound("Rock"));

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => playRound("Paper"));

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => playRound("Scissors"));

const results = document.querySelector("#result");
results.setAttribute("style", "white-space: pre");

// Function to play a round of the game
function playRound(playerSelection) {
    if (gameOver) return;
    const computerSelection = getRandomChoice();
    let resultMessage = " ";

    if (playerSelection === computerSelection) {
        resultMessage = `You both picked ${playerSelection}.\r\nIt's a tie. Neither wins.`;
      } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
      ) {
        playerWin++;
        resultMessage = `You picked ${playerSelection}. Computer picked ${computerSelection}.\r\n${playerSelection} beats ${computerSelection}. You win.`;
      } else {
        computerWin++;
        resultMessage = `You picked ${playerSelection}. Computer picked ${computerSelection}.\r\n${computerSelection} beats ${playerSelection}. You lose.`;
      }

      results.textContent = `${resultMessage}\r\n\r\nPlayer: ${playerWin}\r\nComputer: ${computerWin}`;

