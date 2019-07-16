// Global Variables
// ========================
// this is our array of words
const words = [
    "birdie", "eagle", "bunker", "fairway", "ball", "tee", "clubhead", "flagstick", "bogey", "clubhouse", "driver", "wedge", "divot", "mulligan"
            ];
// this is our randomly chosen word
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

// this variable holds the number of guesses left 
var guessesLeft = 10;
document.getElementById("guesses-left").innerHTML = ("You have " + guessesLeft + " guesses left");

// get the word and figure out how many characters there are and create an array
var wordChar = word.split("");
console.log(wordChar);










































// document.getElementById("guesses-left").innerHTML = ("Number of guesses remaining: " + guessesLeft);

// this variable will count the number of times won
// var wins = 0;
// document.getElementById("wins").innerHTML = ("Wins: " + wins);

// console.log(wins);

// var resetLetters = "";

// this is an empty array we will push blanks to
// var rightGuesses = [];
// var wrongGuesses = [];
// // this is another array that we will push the letters from the current word to for comparison of whether the player's guess is correct or not 
// var mysteryWord = [];
// wordSpaces.push(mysteryWord);
// // var i;

// console.log("Current word is " + word);

// // This will store our random generated word so we can see the answer in the console for our reference
// for (i = 0; i < word.length; i++) {}
// console.log(word.length);

// // This is the code that will push out blank spaces for the letters of the current word so the player can see the word and begin to guess letters
// for (var i = 0; i < word.length; i++) {
//     rightGuesses.push("__");
// }
// document.getElementById("spaces").innerHTML = ("Current Word: " + rightGuesses.join(" "));

// console.log(rightGuesses);

// // This is the code that will push out the letters of the current word to the new variable for comparison
// for (var i = 0; i < word.length; i++) {
//     mysteryWord.toString(i)
//     mysteryWord.push(word.charAt(i));
//     console.log(mysteryWord);
//     }

//  // These are the key events used to play and to document the letters already used and/or letters in the answers
// document.onkeyup = function(onKeyUp) {
//     letter = onKeyUp.keyCode;
//     lettersGuessed = String.fromCharCode(letter);
//     lowerLettersGuessed = lettersGuessed.toLowerCase();
//     console.log(lowerLettersGuessed);
//     console.log(lettersGuessed);
//     console.log(letter);

// //     function allLetter(inputtxt)
// //   {
// //    var letters = /^[A-Za-z]+$/;
//    if(lowerLettersGuessed.value.match(wordSpaces))
//      {
//       rightGuesses.push(wordSpaces);
//      }
//    else
//      {
//      alert("Yup! Onto the next one!", "Mashed Potatoes!", "You're like the Tiger Woods of Hangman!", "Dont hurt em!", "Nice round!");
//      return false;
//      }
//   }
  
//     // This will alert correct and compare the letter guessed with the current word
// // document.onkeyup = function(onKeyUpAgain)
// //     var letter = onkyeup.keyCode;
// //     lettersGuessed = String.fromCharCode(letter);
// //     lowerLettersGuessed = lettersGuessed.toLowerCase();

//           if (lowerLettersGuessed === mysteryWord[0] || lowerLettersGuessed === mysteryWord[1] || lowerLettersGuessed === mysteryWord[2] || lowerLettersGuessed === mysteryWord[3] || lowerLettersGuessed === mysteryWord[4] || lowerLettersGuessed === mysteryWord[5] || lowerLettersGuessed === mysteryWord[6] || lowerLettersGuessed === mysteryWord[7] || lowerLettersGuessed === mysteryWord[8] || lowerLettersGuessed === mysteryWord[9]) {
//               // replace progress Word underscore with letter pressed
//               document.getElementById("spaces").innerHTML = mysteryWord.join(" ");
              
//               document.getElementById("guesses-left").innerHTML = ("You have " + guessesLeft-- + " guesses left!");

//                 } else {
//         //             // alert("WRONG!");
//                     document.getElementById("letters").innerHTML += lettersGuessed + " ";

//         //             // subtract a point from guesses left
                    
//                     document.getElementById("guesses-left").innerHTML = ("You have " + guessesLeft-- + " guesses left!")}

//         //         // This code will tell the user the game is over along with a message about their win streak, then it will reset the game while quickly showing what the word was
//                 if (guessesLeft === 0) {
//                     alert("Game Over!");
//                     location.reload();
//                     document.getElementById("spaces").innerHTML = ("Current Word: " + wordSpaces);
//                 }

//         //         // this is the code that alerts you when you've won the game, then it will reset the current word to begin another round
//                 if (lowerLettersGuessed === lowerLettersGuessed[i]) {
//                     var phrases = ["Yup! Onto the next one!", "Mashed Potatoes!", "You're like the Tiger Woods of Hangman!", "Dont hurt em!", "Nice round!"]
//                     var nextRound = phrases[Math.floor(Math.random() * phrases.length)];
//                     alert(nextRound);
//                 }

//                 // reset guesses left
//                 guessesLeft = 10;
//                 document.getElementById("guesses-left").innerHTML = guessesLeft;

//         //         // reset letters guessed
//         //         document.getElementById("letters").innerHTML = resetLetters;

//         //         // This code generates a new word to guess and then pushes out the blanks again
//         //         word = words[Math.floor(Math.random() * words.length)].toUpperCase();

//         //         progressWord = [];
//         //         for (var i = 0; i < word.length; i++) {
//         //         progressWord.push("__");
//         //         progressWord.toString()
//         //         document.getElementById("spaces").innerHTML = progressWord.join(" ");
//         //         }

//         //         mysteryWord = []
//         //         for (var i = 0; i < word.length; i++) {
//         //         mysteryWord.push(word.charAt(i));
//         //         mysteryWord.toString(i)
//         //         }
            
//         //         console.log(word);
//         //         console.log(progressWord);
//         //         console.log(mysteryWord);

//         //         // Add to the win total
//         //         wins++;
//         //         document.getElementById("wins").innerHTML = wins;
//         //     }




// // // DOM
// // var docSpaces = document.getElementById('word');
// // var docCorrect = document.getElementById('spaces');
// // var docWrong = document.getElementById('letters');
// // var keyword = String.fromCharCode("onkeyup");
// // var lowerKeyword = keyword.toLowerCase();

// // Main
// // ====================================================
// // Create underscores based on length of word
// // document.getElementById("spaces").innerHTML + wordSpaces;
// // document.write(wordSpaces);
// // Get user's guess
// // document.getElementById('spaces').addEventListener("onkeyup", function () {
    
// //     // If user's guess is right
// //     if(word.indexOf(lowerKeyword) > -1 )
// //     // Add to the correct array
// //         correct.push(lowerKeyword);
        
// //     // Replace underscore with correct letter
// //         underscore[word.indexOf(lowerKeyword)] = lowerKeyword;
// //         docSpaces.write.innerHTML = correct.join('');
// //         docCorrect.write.innerHTML = correct.join('');
// //         if(underscore.join('') == word) {
// //             alert('You Win!');
// //         }
// // });
// //     if(underscore.join('') !== word) {
// //         incorrect.push(word);
// //         docWrong[0].innerHTML = incorrect.join('');
// //         };



// // // If user's guess is right
// // //     add to right words array
// // //     correct.push(word);
// // //     console.log(correct);



// // // Check if guess is right
// // // If right, push to right array
// // // If wrong, push to wrong array
// // //  
