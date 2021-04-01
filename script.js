/* eslint-disable no-use-before-define */
// *** SETUP ***
let playerTally = 0;
let computerTally = 0;

const buttons = document.querySelectorAll('button[class="button"]');
const scoresDisp = document.querySelector('.scores');
scoresDisp.textContent = `Your score: ${playerTally} Computer score: ${computerTally}`;
const choicesDisp = document.querySelector('.choices');
const resultsDisp = document.querySelector('.results');
const winnerDisp = document.querySelector('.winner');
const playAgain = document.querySelector('.play-again');
playAgain.classList.add('hidden');
playAgain.removeEventListener('click', () => window.location.reload());

// *** PLAY THE GAME WHEN A BUTTON IS CLICKED ***
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

function handleClick(e) {
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
}

// A `computerPlay` function creates the computers selection
// **Parameters:** None
// **Returns:** 'Rock', 'Paper' or 'Scissors'
// **Variables changed:** None
function computerPlay() {
  let output = '';
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) {
    output = 'rock';
  } else if (randomNumber === 2) {
    output = 'paper';
  } else {
    output = 'scissors';
  }
  return output;
}

// A `playRound` function that decides the winner (or tie) of a round
// **Parameters:** `playerSelection`, `computerSelection`
// **Returns:** true if a tie, 'p' if player wins, 'c' if computer wins
// **Outputs:** A message to the console declaring the winner of the turn or if it was a tie
// **Variables changed:** None
function playRound(playerSelection, computerSelection) {
  choicesDisp.textContent = `You chose ${playerSelection}, Computer chose ${computerSelection}`;

  if (playerSelection === computerSelection) {
    resultsDisp.textContent = `Its a tie!`;
    return true;
  }

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
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
  // Remove the r,p & s event listeners so they don't pile up
  buttons.forEach(button => {
    button.removeEventListener('click', handleClick);
  });

  if (playerScore === computerScore) {
    winnerDisp.textContent = `The game was tied at ${playerScore} each`;
  } else if (playerScore > computerScore) {
    winnerDisp.textContent = `Well done! You win the game ${playerScore} to ${computerScore}`;
  } else {
    winnerDisp.textContent = `Boo! You lose the game ${computerScore} to ${playerScore}`;
  }
  // Show the play again button
  playAgain.classList.remove('hidden');
  playAgain.addEventListener('click', () => window.location.reload());
}
