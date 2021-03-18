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
  const playerSelectionClean =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  console.log(` You chose ${playerSelectionClean}`);
  console.log(` Computer chose ${computerSelection}`);

  if (playerSelectionClean === computerSelection) {
    console.log(`Its a tie! You both chose ${playerSelectionClean}`);
    return true;
  }

  if (
    (playerSelectionClean === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelectionClean === 'Paper' && computerSelection === 'Rock') ||
    (playerSelectionClean === 'Scissors' && computerSelection === 'Paper')
  ) {
    console.log(`You win! ${playerSelectionClean} beats ${computerSelection}`);
    return 'p';
  }
  // If none of the above conditions are met the computer must have won
  console.log(`You lose! ${computerSelection} beats ${playerSelectionClean}`);
  return 'c';
}

// A `declareResult` function that decides the winner (or tie) of a game
// **Parameters:** `playerScore`, `computerScore`
// **Returns:** Nothing
// **Outputs:** A message to the console declaring the winner and scores of the game or if it was a tie
// **Variables changed:** None
function declareResult(playerScore, computerScore) {
  if (playerScore === computerScore) {
    console.log(`The game was tied at ${playerScore} each`);
  } else if (playerScore > computerScore) {
    console.log(
      `Well done! You win the game ${playerScore} to ${computerScore}`
    );
  } else {
    console.log(`Boo! You lose the game ${computerScore} to ${playerScore}`);
  }
}

const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach(button => {
  button.addEventListener('click', () => console.log(button.id));
});
