let compScore = 0;
let playerScore = 0;
let plays = 0;

const computerPlay = () => {
    const responses = ['Rock', 'Paper', 'Scissors'];
    return responses[Math.floor(Math.random() * responses.length)];
}

const gameEnd = () => {
    if (compScore > playerScore) {
        document.querySelector('#winner').innerText ="You've lost. Humanity is doomed to enslavement by the machine.";
    } else if (compScore < playerScore) {
        document.querySelector('#winner').innerText ="You've conquered the machine, but cursed humanity to live without technology.";
    } else {
        document.querySelector('#winner').innerText ="It's a tie, and the machine has decided to spare you.";
    }
    document.querySelector('#rock').disabled = true;
    document.querySelector('#paper').disabled = true;
    document.querySelector('#scissors').disabled = true;
    return;
}


const playRound = (playerSelection, computerSelection=computerPlay()) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Determine if there is a draw 
    if (computerSelection == playerSelection) {
        document.querySelector('#results').innerText = "It's a tie!"
        plays++;
    
    // Determine winner if computer selected Rock
    } else if (computerSelection == 'rock') {
        if (playerSelection == 'paper') {
            document.querySelector('#results').innerText="You Win! Paper beats rock.";
            playerScore++;
            document.querySelector('#playerScore').innerText=`Player Score: ${playerScore}`;
            plays++;
        } else if (playerSelection == 'scissors') {
            document.querySelector('#results').innerText="You Lose! Rock beats scissors.";
            compScore++;
            document.querySelector('#compScore').innerText=`Evil Computer Score: ${compScore}`;
            plays++;
        }
    
    // Determine winner if computer selected Paper
    } else if (computerSelection == 'paper') {
        if (playerSelection == 'scissors') {
            document.querySelector('#results').innerText="You Win! scissors beats paper.";
            playerScore++;
            document.querySelector('#playerScore').innerText=`Player Score: ${playerScore}`;
            plays++;
        } else if (playerSelection == 'rock') {
            document.querySelector('#results').innerText="You Lose! Paper beats rock.";
            compScore++;
            document.querySelector('#compScore').innerText=`Evil Computer Score: ${compScore}`;
            plays++;
        }

    // Determine winner if computer selected Scissors
    } else if (computerSelection == 'scissors') {
        if (playerSelection == 'rock') {
            document.querySelector('#results').innerText="You Win! Rock beats scissors.";
            playerScore++;
            document.querySelector('#playerScore').innerText=`Player Score: ${playerScore}`;
            plays++;
        } else if (playerSelection == 'paper') {
            document.querySelector('#results').innerText="You Lose! Scissors beats paper.";
            compScore++;
            document.querySelector('#compScore').innerText=`Evil Computer Score: ${compScore}`;
            plays++;
        }
    }

    if (plays>=5) {
        gameEnd();
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

