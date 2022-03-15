const computerPlay = () => {
    const responses = ['Rock', 'Paper', 'Scissors'];
    return responses[Math.floor(Math.random() * responses.length)];
}


const playRound = (playerSelection, computerSelection=computerPlay()) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Determine if there is a draw 
    if (computerSelection == playerSelection) {
        document.querySelector('#results').innerText = "It's a tie!"
        return "Tie!";
    
    // Determine winner if computer selected Rock
    } else if (computerSelection == 'rock') {
        if (playerSelection == 'paper') {
            document.querySelector('#results').innerText="You Win! Paper beats rock.";
            return 'you';
        } else if (playerSelection == 'scissors') {
            document.querySelector('#results').innerText="You Lose! Rock beats scissors.";
            return 'comp';
        }
    
    // Determine winner if computer selected Paper
    } else if (computerSelection == 'paper') {
        if (playerSelection == 'scissors') {
            document.querySelector('#results').innerText="You Win! scissors beats paper.";
            return 'you';
        } else if (playerSelection == 'rock') {
            document.querySelector('#results').innerText="You Lose! Paper beats rock.";
            return 'comp';
        }

    // Determine winner if computer selected Scissors
    } else if (computerSelection == 'scissors') {
        if (playerSelection == 'rock') {
            document.querySelector('#results').innerText="You Win! Rock beats scissors.";
            return 'you';
        } else if (playerSelection == 'paper') {
            document.querySelector('#results').innerText="You Lose! Scissors beats paper.";
            return 'comp';
        }
    }
    
}

const game = () => {
    let compScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        if(playRound('rock') == 'you' || playRound('paper') == 'you' || playRound('scissors') == 'you') {
            playerScore += 1;
            document.querySelector('#playerScore').innerText=`Player Score: ${playerScore}`
        } else {
            compScore += 1;
            document.querySelector('#compScore').innerText=`Evil Computer Score: ${compScore}`
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

const r = document.querySelector('#rock');
const p = document.querySelector('#paper');
const s = document.querySelector('#scissors');

r.addEventListener('click', () => {
    playRound('rock');
});

p.addEventListener('click', () => {
    playRound('paper');
});

s.addEventListener('click', () => {
    playRound('scissors');
});