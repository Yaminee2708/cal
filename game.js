const prompt = require('prompt-sync')();

console.log("🎲 Welcome to the Number Guessing Game!");
console.log("I'm thinking of a number between 1 and 100... Can you guess it?\n");

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guess;

do {
  guess = parseInt(prompt("Enter your guess: "));
  attempts++;

  if (guess > secretNumber) {
    console.log("📉 Too high! Try again.\n");
  } else if (guess < secretNumber) {
    console.log("📈 Too low! Try again.\n");
  } else if (isNaN(guess)) {
    console.log("🚫 Please enter a valid number.\n");
  } else {
    console.log( Correct! The number was ${secretNumber}.);
    console.log( You guessed it in ${attempts} attempts!\n);
  }
} while (guess !== secretNumber);