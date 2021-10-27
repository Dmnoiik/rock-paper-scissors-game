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

let playerSelection = prompt("Rock, paper or scissors?");
let computerSelection = computerPlay();



function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors" 
    || playerSelection === "Scissors" && computerSelection === "Paper" 
    || playerSelection === "Paper" && computerSelection === "Rock") {
        return `Player chose ${playerSelection} and Computer chose ${computerSelection}. Results: Player wins! `
    } else if (playerSelection === "Rock" && computerSelection === "Rock" 
    || playerSelection === "Scissors" && computerSelection === "Scissors" 
    || playerSelection === "Paper" && computerSelection === "Paper") {
        return `Player chose ${playerSelection} and Computer chose ${computerSelection}. Results: That's a draw :(`
    } else if (playerSelection === "Rock" && computerSelection === "Paper" 
    || playerSelection === "Scissors" && computerSelection === "Rock" 
    || playerSelection === "Paper" && computerSelection === "Scissors") {
        return `Player chose ${playerSelection} and Computer chose ${computerSelection}. Results: Oof, computer wins this one`
    } else {
        return "I don't think it really works, sorry"
    }
}

function playFive() {
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
};
console.log(playFive());