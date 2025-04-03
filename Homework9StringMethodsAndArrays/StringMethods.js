// Task 1: Check for a Forbidden Word (Using includes)
// Write a function containsForbiddenWord(text, forbiddenWord)
// that checks if a given string contains a specific forbidden word.
// The function should return true if the word is found, otherwise false.
// Requirements:
// The function should be case-insensitive.
// Use includes() to check for the word presence.
// Write your code here

// const { userInput } = require("../UserInput");
// const inputText1 = userInput("Please, enter a text ");
// const specWord = userInput("Please, enter a forbidden word ");

// function containsForbiddenWord(text, forbiddenWord) {
//   return text.toLowerCase().includes(forbiddenWord.toLowerCase()) ? true : false;
// }
// console.log(containsForbiddenWord(inputText1, specWord));

// Task 2: Get Last N Characters of a String (Using slice)
// Write a function getLastNCharacters(text, n)
// that extracts the last n characters of a string using slice().
// Requirements:
// If n is greater than the string length, return the full string.
// Use slice() to extract the portion.
// Write your code

// const { userInput } = require("../UserInput");
// const inputText = userInput("Please, enter a text ");
// const charCount = Number(userInput("Please, enter a character count you want to extract "));

// function getLastNCharacters(text, n) {
//   if (n > text.length) {
//     return text;
//   }
//   {
//     return text.slice(-n);
//   }

// }

// console.log(getLastNCharacters(inputText, charCount));

// Task 3: Extract the Middle Part of a String (Using substring)
// Write a function extractMiddle(text) that returns the middle portion of a string.
// If the string length is even, return the middle two characters.
// If the string length is odd, return only the middle character.
// Requirements:
// Use substring() to extract the middle part of the string.
// The function should handle both even and odd lengths.
// Write your code

const { userInput } = require("../UserInput");
const inputText = userInput("Please, enter a text ");

function extractMiddle(text) {
  if (text.length % 2 === 0) {
    console.log(
      `The middle two characters of given string are ${text.substring(
        text.length / 2 - 1,
        text.length / 2 + 1
      )}`
    );
  } else {
    console.log(
      `The  middle character of given string is ${text.charAt(
        Math.floor(text.length / 2)
      )}`
    );
  }
}

extractMiddle(inputText);
