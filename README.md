# constructorWordGuess-Game

Task
Using two objects, Letter and Word, make a Hangman-style word guess game. When invoked from command line,pick a random word, display placeholders for the letters. Prompt the player for letter guesses. If correct, display the word with placeholders filled in. If incorrect, reduce the number of incorrect guesses remaining.

Structure of the project
After you clone the repository, navigate to the project root directory (constructor-hangman). The project directory structure is set up as follows:

Letter.js: Contains a constructor, Letter. This constructor displays an underlying character or a blank placeholder (underscore), depending on whether or not the user has guessed the letter. This constructor includes:

A string value to store the underlying character for the letter.
A boolean value that stores whether that letter has been guessed yet by the user.
A function that returns the underlying character if the letter has been guessed, or a placeholder (underscore) if the letter has not been guessed.
A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. The constructor includes:

An array of new Letter objects representing the letters of the underlying word.
A function that returns a string representing the word. This calls the function on each letter object (defined in Letter.js) that displays the character or an underscore and concatenates those together.
A function that takes a character as an argument and calls the guess function on each letter object (defined in Letter.js).
index.js: The file containing the logic for the course of the game, which depends on Word.js and:

Randomly selects a word and uses the Word constructor to store it.
Prompts the user for each guess and keeps track of the user's remaining guesses.
package.json: Lists the project dependencies (third party npm packages) and their version numbers.
.gitignore: Any file or directory listed inside this file will not be tracked by GitHub when code is committed.
package-lock.json: Dependency tree for the project. Lists all the dependencies and their versions.

Technologies used to build app
Node.js (https://nodejs.org/en/)
Javascript constructor functions