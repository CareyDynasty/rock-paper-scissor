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

