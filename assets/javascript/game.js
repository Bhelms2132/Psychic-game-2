// Computer Letters Array
var computerChoice = [1, 2, 3, 4, 5];
     


// Creating variables to hold the number of wins, losses, guesses left and guesses so far.
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var guessesSoFar = [];


// Variables that hold references to the places in the HTML where we want to display things.
var userWins = document.getElementById('wins');
var userLosses = document.getElementById('losses');
var userGuessesLeft = document.getElementById('guesses-left');
var yourGuesses = document.getElementById('your-guesses');


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    
    // Determines which key was pressed.
    var userGuess = event.key;
    guessesLeft --;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerChoose = computerChoice[Math.floor(Math.random() * computerChoice.length)];
     console.log(computerChoose);

    // This logic determines the outcome of the game (win/loss/), and increments the appropriate number

        if (userGuess === computerChoose) {
            wins++;
            userWins.textContent = wins;
            computerChoose = computerChoice[Math.floor(Math.random() * computerChoice.length)];
            guessesLeft = 5;
            guessesSoFar = [];
         } else if (guessesLeft === 0) {
            losses++;
            userLosses.textContent = losses;
            computerChoose = computerChoice[Math.floor(Math.random() * computerChoice.length)];
            guessesLeft = 5;
            guessesSoFar = [];
        }

    // Display the user and computer guesses, and wins, losses, guesses left and guesses so far.
        
        
        userGuessesLeft.textContent = guessesLeft;
        yourGuesses.textContent = userGuess;

    
  
}