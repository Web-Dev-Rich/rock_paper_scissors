// *** SETUP ***
let playerTally = 0;
let computerTally = 0;

const buttons = document.querySelectorAll('button[class="button"]');
const scoresDisp = document.querySelector('.scores');
scoresDisp.textContent = `Your score: ${playerTally} Computer score: ${computerTally}`;
const resultsDisp = document.querySelector('.results');
const winnerDisp = document.querySelector('.winner');
const playAgain = document.querySelector('.play-again');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    const playerChoice = e.target.id;
    const computerChoice = computerPlay();
    const winner = playRound(playerChoice, computerChoice);

    if (winner === 'p') {
      playerTally += 1;
    } else if (winner === 'c') {
      computerTally += 1;
    }
    scoresDisp.textContent = `Your score: ${playerTally} Computer score: ${computerTally}`;

    if (playerTally === 5 || computerTally === 5) {
      declareResult(playerTally, computerTally);
    }
  });
});

// A `computerPlay` function creates the computers selection
// **Parameters:** None
// **Returns:** 'Rock', 'Paper' or 'Scissors'
// **Variables changed:** None

function computerPlay() {
  let output = '';
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) {
    output = 'Rock';
  } else if (randomNumber === 2) {
    output = 'Paper';
  } else {
    output = 'Scissors';
  }
  return output;
}

// A `playRound` function that decides the winner (or tie) of a round
// **Parameters:** `playerSelection`, `computerSelection`
// **Returns:** true if a tie, 'p' if player wins, 'c' if computer wins
// **Outputs:** A message to the console declaring the winner of the turn or if it was a tie
// **Variables changed:** None

function playRound(playerSelection, computerSelection) {
  resultsDisp.textContent = `You chose ${playerSelection} Computer chose ${computerSelection}`;

  if (playerSelection === computerSelection) {
    resultsDisp.textContent = `Its a tie! You both chose ${playerSelection}`;
    return true;
  }

  if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    resultsDisp.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    return 'p';
  }
  // If none of the above conditions are met the computer must have won
  resultsDisp.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  return 'c';
}

// A `declareResult` function that decides the winner (or tie) of a game
// **Parameters:** `playerScore`, `computerScore`
// **Returns:** Nothing
// **Outputs:** A message to the console declaring the winner and scores of the game or if it was a tie
// **Variables changed:** None
function declareResult(playerScore, computerScore) {
  if (playerScore === computerScore) {
    winnerDisp.textContent = `The game was tied at ${playerScore} each`;
  } else if (playerScore > computerScore) {
    winnerDisp.textContent = `Well done! You win the game ${playerScore} to ${computerScore}`;
  } else {
    winnerDisp.textContent = `Boo! You lose the game ${computerScore} to ${playerScore}`;
  }
  playAgain.classList.remove('hidden');
}
