function getComputerChoice() {
    let x = Math.floor(Math.random() * 3)
    let ans;
    if (x === 0) {
        ans = "Rock";
    }
    else if (x === 1) {
        ans = "Paper";
    }
    else {
        ans = "Scissors";
    }
    return ans;
}

function getHumanChoice() {
    let x;
    while (true) {
        x = prompt("Please enter a choice between Rock, Paper or Scissors")
        x = x.toLowerCase();
        if (x === "rock" || x === "paper" || x === "scissors")
            break;
    }
    return x;
}
let playerScore=0;
let computerScore=0;
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You Lose! Paper Beats Rock")
            computerScore++;
        }

        if (computerChoice === "rock") {
            console.log("It's a draw! Rock vs Rock")
        }
        if (computerChoice === "scissors") {
            console.log("You Win! Rock beats Scissors")
            playerScore++;
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "paper") {
            console.log("It's a draw! Paper vs Paper")
        }

        if (computerChoice === "rock") {
            console.log("You Win! Paper beats Rock")
            playerScore++;
        }
        if (computerChoice === "scissors") {
            console.log("You Lose! Scissors Beats Paper")
            computerScore++;
        }
    }
    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            
            console.log("You Win! Scissors beats Paper")
            playerScore++;
        }

        if (computerChoice === "rock") {
            console.log("You Lose! Rock Beats Scissors")
            computerScore++;
        }
        if (computerChoice === "scissors") {
            console.log("It's a draw! Scissors vs Scissors")
        }
    }

    
    let s=`Current score ${playerScore} - ${computerScore}`
    console.log(s);
}



function playGame()
{
    while (playerScore < 5 && computerScore < 5)
    {
        playRound(getHumanChoice(),getComputerChoice());

    }
    
    if (playerScore === 5)
    {
        console.log("Congratulations! You Win")

    }
    else
    {
        console.log("You Lose");
        }
}


playGame();
