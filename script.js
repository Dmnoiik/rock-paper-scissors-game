

function computerPlay() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) {
        return "Rock";
    } else if (number === 2) {
        return "Paper";
    } else {
        return "Scissors";
    };
}


function playRound() {
    let playerSelection = prompt("Rock, paper or scissors?");
    let computerSelection = computerPlay();
    if (playerSelection === "Rock" && computerSelection === "Scissors" 
    || playerSelection === "Scissors" && computerSelection === "Paper" 
    || playerSelection === "Paper" && computerSelection === "Rock") {
         console.log(`Player chose ${playerSelection} and Computer chose ${computerSelection}. Results: Player wins! `)
         return "Player"
    } else if (playerSelection === "Rock" && computerSelection === "Rock" 
    || playerSelection === "Scissors" && computerSelection === "Scissors" 
    || playerSelection === "Paper" && computerSelection === "Paper") {
        console.log(`Player chose ${playerSelection} and Computer chose ${computerSelection}. Results: That's a draw :(`)
        return "draw"
    } else if (playerSelection === "Rock" && computerSelection === "Paper" 
    || playerSelection === "Scissors" && computerSelection === "Rock" 
    || playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log(`Player chose ${playerSelection} and Computer chose ${computerSelection}. Results: Oof, computer wins this one`)
        return "computer"
    } else {
        return "I don't think it really works, sorry"
    }
}

function playGame() {
    for (let i = 0; i <= 5; i++) {
        console.log(playRound());
    }
}
console.log(playGame());



