// GLOBAL VARIABLES
// =================================================================

// Array of Word Options (all lowercase).
var wordsList = [
    "birdie", "eagle", "bunker", "fairway", "ball", "tee", "clubhead", "flagstick", "bogey", "clubhouse", "driver", "wedge", "divot", "mulligan", "dogleg", "gimme",
        ];
// Computer selected solution will be held here.
var chosenWord = "";

// break the chosen word into individual letters to be stored in an array
var lettersInChosenWord = [];

// This will be the number of blanks we show based on the solution.
var numBlanks = 0;

// Holds a mix of blank and solved letters
var blanksAndSuccesses = [];

// Holds all of the wrong guesses.
var wrongGuesses = [];

// Holds the letters guessed.
var lettersGuessed = "";

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// FUNCTIONS
// =================================================================

// Function to start the game
// This is how we will start and restart the game.

function startGame() {

    // Reset the guesses back to 0
    numGuesses = 9;

    // Solution chosen randomly from wordList
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];

    // The word is broken into individual letters
    lettersInChosenWord = chosenWord.split("");

    // Count the number of letters in the word
    numBlanks = lettersInChosenWord.length;

    // Print the solution in the console (for testing)
    // console.log(chosenWord);

    // CRITICAL
    // Here we *reset* the guess and success array at each rounf
    blanksAndSuccesses = [];

    // CRITICAL
    // Here we *reset* the wrong guesses from the previous round.
    wrongGuesses = [];

    // Fill up the blanksAnd Successes list with appropriate number of blanks.
    // This is based on number of letters in solution
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    // Print the initial blanks in console (for testing)
    // console.log(blanksAndSuccesses);

    // Reprints the guessesLeft to 9
    document.getElementById("guesses-left").innerHTML = "Guesses left: " + numGuesses;

    // Prints the blanks at the beginning of each round in the HTML
    document.getElementById("spaces").innerHTML = blanksAndSuccesses.join(" ");

    // Clears the wrong guesses from the previous round
    document.getElementById("letters").innerHTML = wrongGuesses.join(" ");
}

// Function to check the letters
// Where we do all of the comparisons for matches
// Again, not being called, just made for future use
function checkLetters(letter) {

    // This boolean will be toggled based on whether or not a user letter is found in the word
    var letterInWord = false;

    // Check if a letter exists inside the array at all
    for (var i = 0; i < numBlanks; i++) {

        if (chosenWord[i] === letter) {

            // If the letter exists then toggle this boolean to true.
            // This will be used in the next step
            letterInWord = true;
        }
    }

    // If the letter exists somewhere in the word, figure out exactly where (which indicies)
    if (letterInWord) {

        // Loop through the word
        for (var j = 0; j < numBlanks; j++) {

            // Populate the blanksAndSuccesses with every instance of the letter
            if (chosenWord[j] === letter) {

                // Here we set specific blank spaces to equal the correct letter
                // When there is a match
                blanksAndSuccesses[j] = letter;
            }
        }

        // Log the current blanks and successes for testing
        // console.log(blanksAndSuccesses);

    }

        // If the letter doesn't exist at all
        else {

            // We add the letter to the list of wrong letters
            wrongGuesses.push(letter);

            // We also subtract one of the guesses
            numGuesses--;

        }

    }


// Here we will have all pf the code that needs to be run afer each guess is made
function roundComplete() {

    // First, log an initial status update in the console telling us how many wins, losses, and guesses are left
    console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

    // HTML UPDATES
    // ============

    // Update the HTML to reflect the new number of guesses
    document.getElementById("guesses-left").innerHTML = "Guesses left: " + numGuesses;

    // This will pring the array of guesses and blanks onto the page
    document.getElementById("spaces").innerHTML = blanksAndSuccesses.join(" ");

    // This will print the wrong guesses onto the page
    document.getElementById("letters").innerHTML = wrongGuesses.join(" ");

    // If our Word Guess string equals the solution
    if (lettersInChosenWord.toString() ===
    blanksAndSuccesses.toString()) {

        // Add to the win counter
        winCounter++;

        // Give the user an alert
        alert("You win!");

        // Update the win counter in the HTML
        document.getElementById("wins").innerHTML = "Wins: " + winCounter;

        // Restart the game
        startGame();
    }

    // If we've run out of guesses
    else if (numGuesses === 0) {

        // Add to the loss counter
        lossCounter++;

        // Give the user an alert
        alert("You lose");

        // Update the loss counter in the HTML
        document.getElementById("loss-counter").innerHTML = "Losses: " + lossCounter;

        // Restart the game
        startGame();

    }

}

// MAIN PROCESS
// ===============================================================

// Starts the game by running startGame()
startGame();

// Initiates the function for capturing key clicks
document.onkeyup = function(event) {

    // Converts all key clicks to lowercase letters
    letterGuessed = String.fromCharCode(event.which).toLowerCase();

    // Runs the code to check for the correct guesses
    checkLetters(letterGuessed);

    // Runs the code that ends each round
    roundComplete();
};