let options = ['rock', 'paper', 'scissors'];
let randomChoice;
let computer;
let playerWins = 0;
let computerWins = 0;
let buttonPressed; 
let gameOver = false;

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    buttonPressed = 'rock';
    playRound();
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
  buttonPressed = 'paper';
  playRound();
});

const scissorsButton = document.querySelector('#scissors');
paperButton.addEventListener('click', () => {
  buttonPressed = 'scissors';
  playRound();
});

let results = document.querySelector('#results');
results.setAttribute('style', 'white-space: pre');

function playRound(computerSelection, playerSelection) {
  if (gameOver == true) return;
  getComputerChoice();
  computerSelection = computer;
  playerSelection = buttonPressed;

  if (computerSelection === playerSelection){
    results.textContent = `You both picked the same thing.\r\nIt's a tie. Neither wins.\r\n\r\nPlayer: ${playerWins}\r\nComputer: ${computerWins}`;
} else if (computerSelection === 'rock' && playerSelection === 'paper') {
    ++playerWins;
    results.textContent = `You picked Paper. Computer picked Rock.\r\nPaper beats Rock. You win.\r\n\r\nPlayer: ${playerWins}\r\nComputer: ${computerWins}`;
} else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    ++computerWins;
    results.textContent = `You picked Scissors. Computer picked Rock.\r\nRock beats Scissors. You lose.\r\n\r\nPlayer: ${playerWins}\r\nComputer: ${computerWins}`;
} else if (computerSelection === 'paper' && playerSelection === 'rock') {
    ++computerWins;
    results.textContent = `You picked Rock. Computer picked Paper.\r\nPaper beats Rock. You lose.\r\n\r\nPlayer: ${playerWins}\r\nComputer: ${computerWins}`;
} else if (computerSelection === 'paper' && playerSelection === 'scissors') {
    ++playerWins;
    results.textContent = `You picked Scissors. Computer picked Paper.\r\nScissors beats Paper. You win.\r\n\r\nPlayer: ${playerWins}\r\nComputer: ${computerWins}`;
} else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    ++computerWins;
    results.textContent = `You picked Paper. Computer picked Scissors.\r\nScissors beats Paper. You lose.\r\n\r\nPlayer: ${playerWins}\r\nComputer: ${computerWins}`;
} else if (computerSelection === 'scissors' && playerSelection === 'rock') {
    ++playerWins;  
    results.textContent = `You picked Rock. Computer picked Scissors.\r\nRock beats Scissors. You win.\r\n\r\nPlayer: ${playerWins}\r\nComputer: ${computerWins}`;    
}

