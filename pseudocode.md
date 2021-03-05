## Rules

1. Rock beats scissors (blunts them)
2. Paper beats rock (wraps around it)
3. Scissors beats paper (cuts it)

## User Interface

### What will it look like?

This game will be played in the browser's JavaScript console so no UI is needed.

### What functionality will it have?

N/A

### Paper sketch

N/A

## Input(s) - user entry or elsewhere?

A game will consist of 5 turns. The turn number will be stored in a counter variable.

The player will be asked to enter "Rock", "Paper" or "Scissors" for each turn using `prompt()`. This will be stored in a variable for that turn only.

The computer turn will be generated randomnly and stored in a variable for that turn only.

## Desired output(s)

After each turn the result will be output to the console.

At the end of the game the winner will be output to the console.

The user will be asked if they wish to play again.

## Steps needed to take input(s) and produce desired output(s) [Pseudo-code]

### Plain english description

The computer asks the player to enter their first turn: "Rock", "Paper" or "Scissors".

The computer converts the player input to lowercase and checks if it matches one of the 3 allowed inputs: "rock", "paper" or "scissors". If Ok then move to next step, if not ask the player to re-enter their turn.

The computer generates its own, random turn.

The computer compares the player's turn to its own and works out if there is a winner of that turn or if it is a tie (i.e. computer and player choose same hand) and outputs a message. The computer remembers the winner of that turn. The computer does not remember a tie.

The above continues for 5 turns. After the final turn winner announcement the computer works out who has won the game, or if it is a tie, and outputs a message.

The computer asks the player if they wish to play again. If yes, start a new game, if no, display a goodbye message and quit the program.

### Pseudo-code

1. Play a game
2. Initialise a counter variable (`turnNum`) to zero
3. If `turnNum` is less than 5
   1. Initialise a `playerScore` variable to zero
   2. Initialise a `computerScore` variable to zero
   3. Prompt the user to enter "Rock", "Paper" or "Scissors", validate the input and store the value in a `playerSelection` variable
   4. Call a `computerPlay` function to generate the computer's turn and store in a `computerSelection` variable
   5. A function `playRound` takes two arguments: `playerSelection` and `computerSelection`. This function declares the winner of the round, or a tie. If the player wins increment `playerScore` by 1, if the computer wins increment the `computerScore` variable by 1, if a tie do nothing
   6. Call the `playRound` function
   7. Increment `turnNum` by 1
4. If `turnNum` equals 5
   1. Determine the game winner or tie by comparing the `playerScore` and `computerScore` variables and outputting a suitable message
5. Prompt the player to play another game? If yes play a game, if no quit the program with a goodbye message