let button = document.querySelector("#startGame")
let timerEl = document.querySelector("#secLeft");
let resultText = document.querySelector("#resultText")
let wordDisplay = document.querySelector("#guessWord")
let cardWord = document.querySelector('.word')

let word = [
  'javascript',
  'array',
  'object',
];

// Function startgame
function startGame() {
  randomizer();
  countdown();
  for(let i = 0; i < randomWord.length; i++) {
    wordDisplay.textContent = wordDisplay.textContent + '-'
  }
  document.addEventListener('keydown', keydownAction);
};

let keyPress
function keydownAction(event) {
 keyPress = event.key;
 console.log(keyPress);
}

function check() {
  let alphabetNumericCharacters = "abcdefghijklmnopqrstuv".split[""];
  if (alphabetNumericCharacters = keyPress) {
    for (let i = 0; i < randomWord.length; i++) {
      if (keyPress = randomWord.split[i]) {
        randomWord.split.textContent[i] = keyPress;
      }
    }
  }
  
}

let randomWord = 0
// Randomizer function
function randomizer() {
  randomWord = word[Math.floor(Math.random() * word.length)]
  console.log(randomWord)
}

function displayWord(aword) {
  lettersInWord = aword.split("");
  numBlanks = lettersInChosenWord.length;
  blanksLetters = []
  // Uses loop to push blanks to blankLetters array
  for (var i = 0; i < numBlanks; i++) {
    blanksLetters.push("_");
  }
  // Converts blankLetters array into a string and renders it on the screen
  wordDisplay.textContent = blanksLetters.join(" ")
}

function countdown() {
  let timeLeft = 5;
  /* let losses = localStorage.getItem(losses); */
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  let timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      wordDisplay.textContent = '';
      overlay('GAMEOVER');
      /* let lossesLocal = localStorage.setItem('losses', losses); */
      // Call the `displayMessage()` function
    }
  }, 1000);
}

function overlay(txt) {
  resultText.textContent = txt;
}

button.addEventListener("click", startGame);

/* console.log(button) */