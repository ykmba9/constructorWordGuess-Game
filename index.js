const Word = require("./word.js");
const inquirer = require("inquirer");

const wordBank = [
  "century", "opaque", "crisp",
  "philosopher", "upgrade", "tutor",
  "champion", "pastry", "lyrics",
  "eureka", "avocado", "mascot",
  "bride"
];

let guesses;
let pickedWords;
let word;
let pickedWord;

function init() {
  pickedWords = [];
  console.log("Welcome to Word Guessing Game!");
  console.log("------------------------------------------");
  playGame();
}

function playGame() {
  pickedWord = "";
  guesses = 15;
  if(pickedWords.length < wordBank.length) {
    pickedWord = getWord();
  } else {
    // WIN CONDITION
    console.log("Cheers!");
    continuePrompt();
  }
  if(pickedWord) {
    word = new Word(pickedWord);
    word.makeLetters();
    makeGuess();
  }
}

function getWord() {
  let rand = Math.floor(Math.random() * wordBank.length);
  let randomWord = wordBank[rand];
  if(pickedWords.indexOf(randomWord) === -1) {
    pickedWords.push(randomWord);
    return randomWord;
  } else {
    return getWord();
  }
}

function makeGuess() {
  let checker = [];
  inquirer.prompt([
    {
      name: "guessedLetter",
      message: word.update() + 
              "\nGuess a letter!" +
              "\nGuesses Left: " + guesses
    }
  ])
  .then(data => {
    word.letters.forEach(letter => {
      letter.checkLetter(data.guessedLetter);
      checker.push(letter.getCharacter());
    });
    if(guesses > 0 && checker.indexOf("_") !== -1) {
      guesses--;
      if(guesses === 0) {
        console.log("YOU RAN OUT OF GUESSES! GAME OVER.");
        continuePrompt();
      } else {
        makeGuess();
      }
    } else {
      console.log("CONGRATULATIONS! YOU GOT THE WORD!");
      console.log(word.update());
      playGame();
    }
  });
}

function continuePrompt() {
  inquirer.prompt([
      {
        name: "continue",
        type: "list",
        message: "Would you like to play again?",
        choices: ["Yes", "No"]
      }
    ])
  .then(data => {
      if(data.continue === "Yes") {
        init();
      } else {
        console.log("Thanks for playing!");
      }
  });
}

init();