// Computer Letters Array
var computerLetters = ["k", "a", "s", "o", "n", "w", "p", "y", "z", "f"];

// Creating variables to hold the number of wins, losses, guesses left and guesses so far.
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var guessesSoFar = 0;


// Variables that hold references to the places in the HTML where we want to display things.
var userWins = document.getElementById('wins');
var userLosses = document.getElementById('losses');
var userGuessesLeft = document.getElementById('guesses-left');
var yourGuesses = document.getElementById('your-guesses');
var computerChooseLetter = document.getElementById('computer-choice');

/* for loop for Computer Guessed Letters 
for (var i = 0; i < computerLetters.length; i++) {
    var currentLetter = computerLetters[i];

    console.log(currentLetter);
    document.onkeyup = function(event) {
        userWins.textContent = event.key;
    }
    
}*/

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    
    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerChoose = computerLetters[Math.floor(Math.random() * computerLetters.length)];


}