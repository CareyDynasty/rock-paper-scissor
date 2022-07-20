function computerPlay() {
    const options = ["Rock", "Paper", "Scissor"]
    const random = Math.floor(Math.random() * 3)

    return options[random]
  }

  function playRound(playerSelection, computerSelection) {
    const rock = "rock"
    const paper = "paper"
    const scissor = "scissor"

    if (playerSelection === computerSelection) {
        console.log("It's a Tie, try again")
        return null
      }
  
      if (playerSelection === rock && computerSelection === paper) {
        console.log("You Lose! Paper beats Rock")
        return false
      } else if (playerSelection === rock && computerSelection === scissor) {
        console.log("You Win! Rock beats Scissor")
        return true
      } else if (playerSelection === paper && computerSelection === rock) {
        console.log("You Win! Paper beats Rock")
        return true
  
      } else if (playerSelection === paper && computerSelection === scissor) {
        console.log("You Lose! Scissors beat Paper")
        return false
  
      } else if (playerSelection === scissor && computerSelection === rock) {
        console.log("You Lose! Rock beats Scissor")
        return false
  
      } else if (playerSelection === scissor && computerSelection === paper) {
        console.log("You Win!, Scissors beat Paper")
        return true
      } else {
        console.log("Error, Something is wrong")
        return null
      }
    }

    function lowerCase(text) {
        return text.toLowerCase()
      }
    
      function game() {
        let computerScore = 0
        let playerScore = 0
    
        for (let i = 0; i < 5; i++) {
          const playerSelection = prompt("Rock, Paper or Scissor? ")
          const computerSelection = computerPlay()
    
          const result = playRound(lowerCase(playerSelection), lowerCase(computerSelection))
    