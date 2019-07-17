const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const words = [
    "BIRDIE", "EAGLE", "BUNKER", "FAIRWAY", "BALL", "TEE", "CLUBHEAD", "FLAGSTICK", "BOGEY", "CLUBHOUSE", "DRIVER", "WEDGE", "DIVOT", "MULLIGAN", "DOGLEG", "GIMME"
            ];
// this is our randomly chosen word
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

// this variable holds the number of guesses left 
var guessesLeft = 9;
document.getElementById("guesses-left").innerHTML = ("You have " + guessesLeft + " guesses left!");

var userGuess = [];

for(var i = 0; i < word.length; i++) {
    document.getElementById("spaces").innerHTML += "_ ";
}

document.onkeyup = function(event) {
    var key = event.key;
    var bigKey = key.toUpperCase();
    userGuess.push(bigKey);
    var wordArr = word.match(bigKey);
    console.log(wordArr);
    // document.getElementById("spaces").innerHTML = "";
    for(var i = 0; i < word.length; i++) {
        if(wordArr == word[i]) {
        document.getElementById("spaces").innerHTML = userGuess.join("");
        var guesses = guessesLeft--;
        console.log(guesses);
        document.getElementById("guesses-left").innerHTML = ("You have " + guesses + " guesses left!");
        }
    }
}