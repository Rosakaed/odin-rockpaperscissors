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

const playerImage = document.querySelector(".player-image");
const computerImage = document.querySelector(".computer-image");
const rock = document.querySelector('.rock');
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissor");
const score = document.querySelector(".score");
const result = document.querySelector(".Result");
let playerScore = 0;
let computerScore = 0;
let roundNo = 0;

function playRound(humanChoice, computerChoice) {
    roundNo++;
    let humanPng = `./images/${humanChoice}.png`;
    let computerPng = `./images/${computerChoice}.png`;
    let results = `You choose ${humanChoice}. Computer choose ${computerChoice}, Round-no:${roundNo}`;
    playerImage.setAttribute("src", humanPng);
    computerImage.setAttribute("src", computerPng);
    
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


    let s = `${playerScore}:${computerScore}`
    score.textContent = s;
    result.textContent = results;

}




rock.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
})
paper.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
})

scissors.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
})
