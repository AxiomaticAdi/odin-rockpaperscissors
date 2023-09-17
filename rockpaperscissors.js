import { rpsOptions } from "./constants";

// Initialize global variables
let playerScore = 0;
let computerScore = 0;

// Start game
game();

// Helper functions
function getComputerChoice() {
	return rpsOptions[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
	let playerInput;

	do {
		playerInput = prompt("Rock, paper, or scissors? You can also write R, P, or S").toLowerCase();

		switch (playerInput) {
			case "r":
				playerInput = "rock";
				break;
			case "p":
				playerInput = "paper";
				break;
			case "s":
				playerInput = "scissors";
				break;
		}

		if (rpsOptions.includes(playerInput)) {
			return playerInput;
		} else {
			playerInput = undefined;
		}
	} while (playerInput === undefined);

	// ERROR MESSAGE
	console.log("SOMETHING WENT WRONG IN getPlayerChoice");
	return playerInput;
}

function pickWinner(playerChoice, computerChoice) {
	// Display choices
	console.log(`Player picked: ${playerChoice}`);
	console.log(`Computer picked: ${computerChoice}`);

	if (playerChoice === computerChoice) {
		return "Tie! ";
	} else if (playerChoice === "rock" && computerChoice === "scissors") {
		playerScore++;
		return `${playerChoice} beats ${computerChoice}`;
	} else if (rpsOptions.indexOf(playerChoice) > rpsOptions.indexOf(computerChoice)) {
		playerScore++;
		return `${playerChoice} beats ${computerChoice}`;
	} else {
		computerScore++;
		return `${computerChoice} beats ${playerChoice}`;
	}
}

function game() {
	console.log("Welcome to console Rock-Paper-Scissors!");
	console.log("Compete against the computer in a best of 5 rounds");

	for (let i = 0; i < 5; i++) {
		console.log(pickWinner(getPlayerChoice(), getComputerChoice()));
		console.log(`Current scores - player: ${playerScore}, computer: ${computerScore}`);
		console.log();
	}

	// Final winner calc
	console.log(`Final score: ${playerScore} to ${computerScore}`);
	if (playerScore === computerScore) {
		console.log("It's a tie!");
		console.log();
	} else if (playerScore > computerScore) {
		console.log("You win!");
		console.log();
	} else {
		console.log("You lose!");
		console.log();
	}

	// Reset scores
	playerScore = 0;
	computerScore = 0;
}
