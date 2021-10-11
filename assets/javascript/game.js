// Variables 
var compLetters = ["K", "A", "R", "O", "N", "W", "P", "Y"];
var userWins = '';
var userLosses = '';
var userGuessesLeft = '';
var yourGuesses = '';

/*document.getElementById("wins").innerHTML = userWins;
document.getElementById("losses").innerHTML = userLosses;
document.getElementById("guessesLeft").innerHTML = userGuessesLeft;
document.getElementById("yourGuesses").innerHTML = yourGuesses;
document.getElementById("yourGuesses").innerHTML = compLetters;*/

// for loop for Computer Guessed Letters 
for (var i = 0; i < compLetters.length; i++) {
    var currentLetter = compLetters[i];

    console.log(currentLetter);
}
