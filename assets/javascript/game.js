// Create an array which includes a list of words for game //
var word = ["NIGERIA", "ETHIOPIA", "EGYPT", "DR CONGO", "TANZANIA", "SOUTH AFRICA", "KENYA", "UGANDA", "ALGERIA", "SUDAN", "CHAD", "GUINEA", "RWANDA", "BURUNDI", "SIERRA LEONE"]

// Grab reference to my DOM elements //

var $randomWord = document.getElementById('randomWord');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');
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

// newGame resets all stats except for score //

function newGame () {
  // Reset game stats //
  gameRunning = true;
  guessesLeft = 15;
  lettersUsedBank = [];
  pickedWordPlaceholderArr = [];

  //Re-pick random word //
  randomWord = word[Math.floor(Math.random()* word.length)];
  console.log(randomWord);

  // Re-display placeholders //
  for (var i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === ' ') {
      pickedWordPlaceholderArr.push(' ');
    } else {
        pickedWordPlaceholderArr.push('_');
      }
    }

  // Display contents to DOM //
  $randomWord.textContent = pickedWordPlaceholderArr.join(' ')
  $guessesLeft.textContent = guessesLeft;
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


// Write new info to DOM //
$randomWord.textContent = pickedWordPlaceholderArr.join(' ')
$wins.textContent = wins;
$losses.textContent = losses;
$guessesLeft.textContent = guessesLeft; 

//letterGuess function

function letterGuess(letter) {
  console.log(letter);

  if (guessesLeft > 0 && lettersUsedBank.indexOf(letter) === -1) {
    // Run Game Logic //
    lettersUsedBank.push(letter);
    guessesLeft--;

    // Check if guessed letter is in picked word //
      for (var i = 0; i < randomWord.length; i++) {
        //convert both guessed letter and random word to lower case //
        if (randomWord[i].toLowerCase() === letter.toLowerCase()) {
          // If a match, swap out character placeholder with letter //
          pickedWordPlaceholderArr[i] = randomWord[i]; 
        }
      }

  } else if (guessesLeft > 0 && lettersUsedBank.indexOf(letter) === 1) { 
           alert(`You've already guesed this letter. Try another one`)

  } else if (guessesLeft === 0) {
    alert ("Aw shucks! You lost. The word was " + randomWord);
    losses++;
    $losses.textContent = losses;
    newGame()

  } else if (randomWord.toLocaleLowerCase() == pickedWordPlaceholderArr.join('').toLowerCase()) {
    alert("You win! The word was " + randomWord)
    wins++;
    $wins.textContent = wins;
    newGame();
  }
   

  // Show everything in DOM //
  
  $randomWord.textContent = pickedWordPlaceholderArr.join(' ');
  $guessesLeft.textContent = guessesLeft;
  $lettersUsed.textContent = lettersUsedBank.join('  ')
  $guessesLeft.textContent = guessesLeft; 

}

document.onkeyup = function(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
      letterGuess(event.key)
  }
}

