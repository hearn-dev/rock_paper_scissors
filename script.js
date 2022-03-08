const computerPlay = () => {
    const responses = ['Rock', 'Paper', 'Scissors'];
    return responses[Math.floor(Math.random() * responses.length)];
}


const playRound = (playerSelection, computerSelection=computerPlay()) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Determine if there is a draw 
    if (computerSelection == playerSelection) {
        return "Tie!"
    
    // Determine winner if computer selected Rock
    } else if (computerSelection == 'rock') {
        if (playerSelection == 'paper') {
            return "You Win! Paper beats rock."
        } else if (playerSelection == 'scissors') {
            return "You Lose! Rock beats scissors."
        }
    
    // Determine winner if computer selected Paper
    } else if (computerSelection == 'paper') {
        if (playerSelection == 'scissors') {
            return "You Win! scissors beats paper."
        } else if (playerSelection == 'rock') {
            return "You Lose! Paper beats rock."
        }

    // Determine winner if computer selected Scissors
    } else if (computerSelection == 'scissors') {
        if (playerSelection == 'rock') {
            return "You Win! Rock beats scissors."
        } else if (playerSelection == 'paper') {
            return "You Lose! Scissors beats paper."
        }
    }
    
}