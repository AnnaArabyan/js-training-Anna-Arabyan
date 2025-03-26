// Task1: Square a Number (Simple Callback)
// Requirements:
// Write a function calculateSquare(n, callback) that takes a number n
// and calls the callback function with the square of n.
// Write your code here

function calculateSquare(n, callback) {
  return callback(n * n);
}

function result(n) {
  return n;
}

// Task 2: Login Status (Simple Callback)
// Requirements:
// Write a that checks if the provided username and password match the correct credentials.
// The function should call the callback function with a message indicating
// whether the user is logged in or if the credentials are wrong.
// Write your code here

const { userInput } = require("../UserInput");
const username = userInput("Please, enter a username ");
const password = userInput("Please, enter a password ");

function credentialsCheck(username, password, callback) {
  let username1 = "Anna";
  let password1 = "1234";
  username === username1 && password === password1
    ? callback(validResultMessage)
    : callback(invalidResultMessage);
}

function validResultMessage() {
  console.log("Valid Input, The user is logged in");
}

function invalidResultMessage() {
  console.log("Invalid input");
}

credentialsCheck(username, password, function (resultFunction) {
  resultFunction();
});

// Task 3: Sum of Numbers (Using for Loop and Callback)
// Requirements:
// Write a function sumNumbersUpTo(n, callback) that takes a number n
// and calculates the sum of numbers from 1 to n using a for loop.
// After the calculation, call the callback function with the result.
// Write your code here

const { userInput } = require("../UserInput");
const number = userInput("Please, enter a number ");
let inputNum = +number;

if (isNaN(inputNum)) {
  console.log("Invalid input. Please enter a valid number.");
} else {
  function sumNumbersUpTo(n, callback) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
      sum += i;
    }
    callback(sum);
  }
  sumNumbersUpTo(inputNum, function (result) {
    console.log(`The sum of numbers from 1 to ${inputNum} is ${result}`);
  });
}
