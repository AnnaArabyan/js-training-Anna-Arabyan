// Task 1: Get String Length
// Requirement: Write a function that receives
// a string as input and returns the length of the string.
// Write your code here!

const { userInput } = require("../UserInput");
const myText = userInput("Please, enter a text ");
let result = myText.length
console.log(`The length of "${myText}" text is ${result} characters`)

// Task 2: Print Each Character
// Requirement: Write a function that receives a string and prints each character on a new line.
// The function should validate that the input is a string and that its length is between 1 and 50 characters.
// If the input is invalid, display an appropriate message.
// Write your code here!

const { userInput } = require("../UserInput");
const myString = userInput("Please, enter a text ");

function printEachCharacter(myString) {
    if (typeof myString === 'string' && myString.length >= 1 && myString.length <= 50) {
        for (let i = 0; i < myString.length; i++) {
            console.log(myString[i]);
        }
    } else {
        console.log(`The entered value "${myString}" is not a valid string or its length is out of range.`);
    }
}
printEachCharacter(myString);

// Task 3: Capitalize Name and Surname
// Requirement: Write a function that receives a string containing a name and surname.
// The function should convert the first letter of the name and surname to uppercase
// and return the updated string.
// The function should also validate that the input is a string and contains exactly two parts (name and surname).
// Write your code here!

const { userInput } = require("../UserInput");
const userInitials = userInput("Please, enter your name and surname ");

function initialsCapitalization(userInitials) {
  if (
    typeof userInitials !== "string" ||
    userInitials.split(" ").length !== 2
  ) {
    console.log("Invalid input. Please enter name and surname");
    return "";
  }

  let words = userInitials.split(" ");
  let capitalizedWords = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalizedWord =
      word[0].toUpperCase() + word.substring(1, word.length).toLowerCase();
    capitalizedWords = capitalizedWords + " " + capitalizedWord;
  }

  return capitalizedWords.trim();
}

let capitalizedName = initialsCapitalization(userInitials);
console.log(capitalizedName);

// Task 4: Alternate Case
// Requirement: Write a function that receives a string with a minimum length of 10
// and a maximum length of 20 characters.
// The function should return the string with characters alternated between uppercase and lowercase.
// For example, "test" should become "TeSt".
// If the string length is outside the specified range, display an appropriate message.
// Write your code here!

const { userInput } = require("../UserInput");
const inputText = userInput(
  "Please, enter a text that is between 10 and 20 characters long "
);
function alternateText(inputText) {
  if (typeof inputText !== "string" || inputText.length < 10 || inputText.length > 20 ) {
    console.log(
      "Invalid input. Please a text that is between 10 and 20 characters long"
    );
    return "";
  }
  let result = "";
  for (let i = 0; i < inputText.length; i++) {
    i % 2 === 0
      ? (result += inputText[i].toUpperCase())
      : (result += inputText[i].toLowerCase());
  }
  console.log(result);
  return result;
}
alternateText(inputText);

// Task 5: Check Palindrome
// Requirement: Write a function that receives a string and checks if the string is a palindrome
// (i.e., the string is the same forwards and backwards).
// The function should return true if the string is a palindrome and false otherwise.
// Ignore spaces and punctuation.
// Example:
// Input: "racecar"
// Output: true
// Explanation: The string "racecar" is the same forwards and backwards, so the output is true.
// Write your code here!

// const { userInput } = require("../UserInput");
// const inputText = userInput("Please, enter a text ")

// function palindromString(inputText){
//     let inputText1 = inputText.trim()

//     let reversedText="";
//     for (i=inputText1.length-1; i >= 0; i--){
//         reversedText  += inputText1[i];
//     }

//     if (inputText1 === reversedText) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let result  = palindromString(inputText)
// console.log(result)

// Task 6: Count Specific Character in String
// Requirement: Write a function that receives two values: a main string and a character.
// The function should return how many times the specified character appears in the string.
// Write your code here!

// const { userInput } = require("../UserInput");
// const inputText = userInput("Please, enter a text ")
// const inputChar = userInput("Please, enter a character ")

// function countCharacter(myString, char) {
//     let count = 0;
//     for (let i = 0; i < myString.length; i++) {
//         if (myString[i] === char) {
//             count++;
//         }
//     }
//     return count;
// }
// let result = countCharacter(inputText, inputChar);
// console.log(`The character "${inputChar}" appears ${result} times in the text.`);
