const computerPlay = () => {
    const responses = ['Rock', 'Paper', 'Scissors'];
    return responses[Math.floor(Math.random() * responses.length)];
}


const playRound = (playerSelection, computerSelection=computerPlay()) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Determine if there is a draw 
    if (computerSelection == playerSelection) {
        console.log("It's a tie!")
        return "Tie!";
    
    // Determine winner if computer selected Rock
    } else if (computerSelection == 'rock') {
        if (playerSelection == 'paper') {
            console.log("You Win! Paper beats rock.");
            return 'you';
        } else if (playerSelection == 'scissors') {
            console.log("You Lose! Rock beats scissors.");
            return 'comp';
        }
    
    // Determine winner if computer selected Paper
    } else if (computerSelection == 'paper') {
        if (playerSelection == 'scissors') {
            console.log("You Win! scissors beats paper.");
            return 'you';
        } else if (playerSelection == 'rock') {
            console.log("You Lose! Paper beats rock.");
            return 'comp';
        }

    // Determine winner if computer selected Scissors
    } else if (computerSelection == 'scissors') {
        if (playerSelection == 'rock') {
            console.log("You Win! Rock beats scissors.");
            return 'you';
        } else if (playerSelection == 'paper') {
            console.log("You Lose! Scissors beats paper.");
            return 'comp';
        }
    }
    
}

const game = () => {
    let compScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        if(playRound(window.prompt()) == 'you') {
            playerScore += 1;
        } else {
            compScore += 1;
        }
    }

    if (compScore > playerScore) {
        console.log('You lose!');
        return 'You lose';
    } else if (compScore < playerScore) {
        console.log('You win!');
        return 'You win';
    } else {
        console.log('Tie!');
        return "It's a tie!";
    }
}