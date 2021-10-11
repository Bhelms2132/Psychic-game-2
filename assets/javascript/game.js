// Computer Letters Array
var computerLetters = ["K", "A", "R", "O", "N", "W", "P", "Y"];

// Variables that hold references to the places in the HTML where we want to display things.
var userWins = document.getElementById('wins');
var userLosses = document.getElementById('losses');
var guessesLeft = document.getElementById('guesses-left');
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
    console.log(userGuess);

    
}