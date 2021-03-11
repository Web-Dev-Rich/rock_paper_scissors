const playGame = prompt(`This game is played in the browser console
Do you want to play? Enter y to play`);

if (playGame === 'y' || playGame === 'Y') game();

function game() {
  // Initialise a round counter variable to zero
  let turnNum = 1;

  // Initialise a variable to keep player's game score to zero
  let playerTally = 0;

  // Initialise a variable to keep computer's game score to zero
  let computerTally = 0;

  while (turnNum < 6) {
    console.log(`Round ${turnNum} of 5`);
    // Prompt the user to enter "Rock", "Paper" or "Scissors", validate the input and store the value in a variable
    let playerChoice = prompt('Enter rock, paper or scissors');

    while (
      playerChoice.toLowerCase() !== 'rock' &&
      playerChoice.toLowerCase() !== 'paper' &&
      playerChoice.toLowerCase() !== 'scissors'
    ) {
      playerChoice = prompt('Try again! Enter rock, paper or scissors');
    }

    // Call a function to return the computer's turn and store the returned value in a  variable
    const computerChoice = computerPlay();

    // Call the `playRound` function
    const winner = playRound(playerChoice, computerChoice);
    if (winner === 'p') {
      playerTally += 1;
    } else if (winner === 'c') {
      computerTally += 1;
    }

    // Increment `turnNum` by 1
    turnNum += 1;
  }
  // Declare the game result
  declareResult(playerTally, computerTally);
}

// #### **A `computerPlay` function to return the computer's turn**

function computerPlay() {
  //   * Initialise an `output` variable to empty string
  let output = '';
  //   * Generate a random number 1,2 or 3
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  //   * If 1 then assign 'Rock' to `output`
  if (randomNumber === 1) {
    output = 'Rock';
    //   * If 2 then assign 'Paper' to `output`
  } else if (randomNumber === 2) {
    output = 'Paper';
    //   * If 3 then assign 'Scissors' to `output`
  } else {
    output = 'Scissors';
  }
  //   * return `output`
  return output;
}

// ---

// #### **A `playRound` function that decides the winner (or tie) of a round**

// **Parameters:** `playerSelection`, `computerSelection`
// **Returns:** nothing
// **Outputs:** A message to the console declaring the winner of the turn or if it was a tie
// **Variables changed:** `playerScore`, `computerScore` or neither if a tie

function playRound(playerSelection, computerSelection) {
  const playerSelectionClean =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  console.log(` You chose ${playerSelectionClean}`);
  console.log(` Computer chose ${computerSelection}`);
  // * If `playerScore` and `computerScore` are equal declare a tie and exit
  if (playerSelectionClean === computerSelection) {
    console.log(`Its a tie! You both chose ${playerSelectionClean}`);
    return true;
  }
  if (
    // * If `playerScore` equals 'Rock' and `computerScore` equals 'Scissors' OR
    //   `playerScore` equals 'Paper' and `computerScore` equals 'Rock' OR
    //   `playerScore` equals 'Scissors' and `computerScore` equals 'Paper'
    (playerSelectionClean === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelectionClean === 'Paper' && computerSelection === 'Rock') ||
    (playerSelectionClean === 'Scissors' && computerSelection === 'Paper')
  ) {
    //   * Declare the player the winner because `playerSelection` beats `computerSelection`
    console.log(`You win! ${playerSelectionClean} beats ${computerSelection}`);

    return 'p';
  }
  // * If `playerScore` equals 'Rock' and `computerScore` equals 'Paper' OR
  //   `playerScore` equals 'Paper' and `computerScore` equals 'Scissors' OR
  //   `playerScore` equals 'Scissors' and `computerScore` equals 'Rock'

  //   * Declare the computer the winner because `computerSelection` beats `playerSelection`
  console.log(`You lose! ${computerSelection} beats ${playerSelectionClean}`);

  return 'c';
}
// ---

// #### **A `declareResult` function that decides the winner (or tie) of a game**

// **Parameters:** `playerScore`, `computerScore`
// **Returns:** nothing
// **Outputs:** A message to the console declaring the winner and scores of the game or if it was a tie
// **Variables changed:** none
function declareResult(playerScore, computerScore) {
  // * If `playerScore` and `computerScore` are equal declare a tie and say what the score was
  if (playerScore === computerScore) {
    console.log(`The game was tied at ${playerScore} each`);
  } else if (playerScore > computerScore) {
    // * If `playerScore` is greater than `computerScore` declare the player the winner and show the scores
    console.log(
      `Well done! You win the game ${playerScore} to ${computerScore}`
    );
  } else {
    // * Else declare the computer the winner and show the scores
    console.log(`Boo! You lose the game ${computerScore} to ${playerScore}`);
  }
}
