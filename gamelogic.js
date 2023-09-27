const mainText = document.getElementById("mainText");
const secondText = document.getElementById("subText");
const arenaText = document.getElementById("arenaText");
const pokeChoices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function playerPick(playerChoice) {
	mainText.innerHTML = `You picked ${playerChoice}`;
	computerPick(playerChoice);
}

function computerPick(playerChoice) {
	// Pick a random number 0 to 2
	const randChoice = Math.floor(Math.random() * 3);

	const computerChoice = pokeChoices[randChoice];
	subText.innerHTML = `Computer picked ${computerChoice}`;

	arenaText.innerHTML = pickWinner(playerChoice, computerChoice);
	arenaText.style.backgroundColor = "antiquewhite";
}

// Start game
// game();

// WHat do we want to happen when choices are made
// Display choices on the field
// Animation
// Tie: message "evenly matched!"
// Win / loss: HP bar goes to zero
// Pokeballs counter: lose pokeball on loss

function pickWinner(playerChoice, computerChoice) {
	// Display choices
	console.log(`Player picked: ${playerChoice}`);
	console.log(`Computer picked: ${computerChoice}`);

	if (playerChoice === computerChoice) {
		return "Evenly matched!";
	} else if (playerChoice === "rock" && computerChoice === "scissors") {
		playerScore++;
		return `${playerChoice} beats ${computerChoice}`;
	} else if (pokeChoices.indexOf(playerChoice) > pokeChoices.indexOf(computerChoice)) {
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
