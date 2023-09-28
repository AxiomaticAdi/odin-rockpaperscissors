const pokeChoices = ["Rock", "Paper", "Scissors"];
const playerScoreArray = ["", "playerScore1", "playerScore2", "playerScore3"];
const computerScoreArray = ["", "computerScore1", "computerScore2", "computerScore3"];

const mainText = document.getElementById("mainText");
const subText = document.getElementById("subText");
const arenaText = document.getElementById("arenaText");

const buttonContainer = document.getElementById("buttonContainer");
const buttons = buttonContainer.getElementsByTagName("button");

let playerScore = 0;
let computerScore = 0;

function playerPick(playerChoice) {
	mainText.innerHTML = `You picked ${playerChoice}`;
	computerPick(playerChoice);
}

function computerPick(playerChoice) {
	// Computer picks a choice randomly
	const randChoice = Math.floor(Math.random() * 3);
	const computerChoice = pokeChoices[randChoice];
	subText.innerHTML = `Gym leader picked ${computerChoice}`;

	// Update battlefield
	arenaText.innerHTML = pickWinner(playerChoice, computerChoice);
	arenaText.style.backgroundColor = "antiquewhite";
}

function pickWinner(playerChoice, computerChoice) {
	// Display choices
	console.log(`Player picked: ${playerChoice}`);
	console.log(`Gym leader picked: ${computerChoice}`);

	if (playerChoice === computerChoice) {
		return "Evenly matched!";
	} else if (playerChoice === "Rock" && computerChoice === "Scissors") {
		playerScore += 1;
		scoreUpdate("Player", playerScore);
		return `${playerChoice} beats ${computerChoice}`;
	} else if (computerChoice === "Rock" && playerChoice === "Scissors") {
		computerScore += 1;
		scoreUpdate("Computer", playerScore);
		return `${computerChoice} beats ${playerChoice}`;
	} else if (pokeChoices.indexOf(playerChoice) > pokeChoices.indexOf(computerChoice)) {
		playerScore += 1;
		scoreUpdate("Player", playerScore);
		return `${playerChoice} beats ${computerChoice}`;
	} else {
		computerScore += 1;
		scoreUpdate("Gym leader", computerScore);
		return `${computerChoice} beats ${playerChoice}`;
	}
}

function scoreUpdate(target, score) {
	console.log(`${target}, score: ${score}`);

	if (score <= 3) {
		if (target === "Player") {
			document.getElementById(playerScoreArray[score]).style.visibility = "visible";
		} else {
			document.getElementById(computerScoreArray[score]).style.visibility = "visible";
		}
	}

	if (score >= 3) {
		mainText.innerHTML = `Game over! ${target} wins!`;
		subText.innerHTML = "Refresh page to play again";

		// Turn off all buttons
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].disabled = true;
		}
		return;
	}
}
