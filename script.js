function computerPlay() {
    const options = ["Rock", "Paper", "Scissor"]
    const random = Math.floor(Math.random() * 3)

    return options[random]
  }

  function playRound(playerSelection, computerSelection) {
    const rock = "rock"
    const paper = "paper"
    const scissor = "scissor"