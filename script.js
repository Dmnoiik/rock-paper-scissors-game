

function computerPlay() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) {
        return "rock";
    } else if (number === 2) {
        return "paper";
    } else {
        return "scissors";
    };
}


function playRound() {
    let playerSelection = prompt("Rock, paper or scissors?");
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();
    if (playerSelection === "rock" && computerSelection === "scissors" 
    || playerSelection === "scissors" && computerSelection === "aper" 
    || playerSelection === "paper" && computerSelection === "rock") {
         console.log(`Player chose ${playerSelection} and Computer chose ${computerSelection}. Results: Player wins! `)
         return "player"
    } else if (playerSelection === "rock" && computerSelection === "rock" 
    || playerSelection === "scissors" && computerSelection === "scissors" 
    || playerSelection === "paper" && computerSelection === "paper") {
        console.log(`Player chose ${playerSelection} and Computer chose ${computerSelection}. Results: That's a draw :(`)
        return "draw"
    } else if (playerSelection === "rock" && computerSelection === "paper" 
    || playerSelection === "scissors" && computerSelection === "ock" 
    || playerSelection === "paper" && computerSelection === "scissors") {
        console.log(`Player chose ${playerSelection} and Computer chose ${computerSelection}. Results: Oof, computer wins this one`)
        return "computer"
    } else {
        return "I don't think it really works, sorry"
    }
}

function playGameFive() {
    for (let i = 0; i <= 5; i++) {
        console.log(playRound());
    }
}
console.log(playGameFive());



