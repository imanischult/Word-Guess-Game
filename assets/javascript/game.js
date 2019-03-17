// Create an array which includes a list of words for game //
var word = ["NIGERIA", "ETHIOPIA", "EGYPT", "DR CONGO", "TANZANIA", "SOUTHAFRICA", "KENYA", "UGANDA", "ALGERIA", "SUDAN", "CHAD", "GUINEA", "RWANDA", "BURUNDI", "SIERRALEONE"]

// Grab reference to my DOM elements //

var $randomWord = document.getElementById('randomWord');
var $wins = document.getElementById('wins');
var $loses = document.getElementById('losses');
var $guessesLeft = document.getElementById('guessesLeft');
var $lettersUsed = document.getElementById('lettersUsed');


// Create global variables for game //

var wins = 0;
var losses = 0;
var guessesLeft = 15;
var gameRunning = false; 
var randomWord = ' ';
var pickedWordPlaceholderArr = [];
var lettersUsedBank = [];

// newGame resets all stats except for score

function newGame () {
  // Reset game info //
  gameRunning = true;
  guessesLeft = 15;
  lettersUsedBank = [];
  pickedWordPlaceholderArr = [];
}

// Create a formula that picks a random integer between 0 and 14 //
randomWord = word[Math.floor(Math.random()* word.length)];
console.log(randomWord);

// Create a placeholder for new randomWord //

for (var i = 0; i < randomWord.length; i++) {
  if (randomWord[i] === ' ') {
    pickedWordPlaceholderArr.push(' ');
  } else {
      pickedWordPlaceholderArr.push('_');
      }
    }
  

/*
// Create an answer array (var answerArray) equal to the character count in the randomly chosen word. Each array will show as "_", representing each character in the random word //
for (var i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";

    console.log(answerArray);
} 

/*
var remainingLetters = randomWord.length;

// Create a string of underscores "_" with the "join" function, and //
var blankWord = answerArray.join(" ");

 console.log(blankWord);


var displayWord = document.getElementById("randomWord").innerHTML = blankWord;

// ********** THE MAIN GAME LOOP ************ //

// While guesses left is greater than 0

  // allow the player to guess a key using the keyboard
  document.onkeyup = (function(e) {
    var userGuess = e.key;
    console.log(userGuess);

    for (var j = 0; j < randomWord.length; j++) {
      //if the letter they guessed is in the word
      //at that point or index...
     if (randomWord[j] === userGuess) {
          //update the answer array with the letter they guessed at that point/index
          answerArray[j] = userGuess;
          //subtract one from remaining letters
          remainingLetters--;
      }
     }
    })














// document.onkeyup = function (e){
// var userGuess = e.key;
// console.log(userGuess);
// };

//  ------Use this to convert letters to upper case--------//
// if(event.key == Array.indexOf(i)) {
//   document.getElementById('asdfja;dsf').textContent.toUpperCase();
// }



//while (remainingLetters > 0) {
    // show the player their progress
   // alert(answerArray.join(" "));

    //get a guess from the player
    
    //prompt("Guess a letter, or click cancel to stop playing.");

//use "toLowerCase" 

    //if the guess is blank
    //if (userGuess == null) {
        //exit game loop
     //   break;
    // if the guess is more than one letter or no letters
    //} else if (userGuess.length !== 1) {
       // alert("Please enter a single letter.");
    // valid guess
  //  } else {
        //update game state with the guess
       // for (var j = 0; j < randomWord.length; j++) {
            //if the letter they guessed is in the word
            //at that point or index...
           // if (randomWord[j] === userGuess) {
                //update the answer array with the letter they guessed at that point/index
          //      answerArray[j] = userGuess;
                //subtract one from remaining letters
          //      remainingLetters--;
        //    }
      //  }
  //  }
    
//} 

//alert(answerArray.join(" "));

//alert(`Good job! The answer was ${randomWord}`) */