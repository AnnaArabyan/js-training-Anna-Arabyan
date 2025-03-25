const { userInput } = require("../UserInput");

// 1. While Loop Task – Reverse Counting
// Requirements:

// Start from 10 and count down to 1.
// Use a while loop.
// Print each number in the console.
// Write your code here

// let num = 10;
// while (num >= 1) {
//     console.log(`The reduced number is ${num}`);
//     num--;
// }

// 2. Do-While Loop Task – User Input Until Negative Number
// Requirements:

// Continuously ask the user to enter a number.
// Stop asking when the user enters a negative number.
// Use a do-while loop.
// Print each entered number.
// After exiting, print a message indicating the loop has ended.
// Write your code here

// let negativeNumber;
// do {
//     const num = userInput("Please, enter a negative number ");
//     negativeNumber = +num;
// } while (negativeNumber >= 0);
// console.log('The loop has ended')

//3. For Loop Task – Multiplication Table
// Requirements:

// Choose a number (e.g., 5).
// Use a for loop to print the multiplication table from 1 to 10.
// Print the result in the format: 5 x 1 = 5.
// Write your code here

// const myInput = userInput("Please, enter a number ")
// let num = +myInput;
// let result;
// for (i=1; i<=10; i++){
//     result = num*i;
//     console.log(`${num} x ${i} = ${result}`);

//4. Break Statement Task – Find the First Multiple of 7
// Requirements:

// Use a for loop to check numbers from 1 to 50.
// Find the first number that is a multiple of 7.
// Print the number and exit the loop using break.
// Write your code here

// let num = 7;
// for (let i=1; i<=50; i++){
//     if (i % num === 0){
//         console.log("First multiple of 7 is:", i);
//         break;
//     }
// }

//5. Continue Statement Task – Skip Multiples of 3
// Requirements:

// Use a for loop to print numbers from 1 to 20.
// If a number is a multiple of 3, skip it using continue.
// Print the rest of the numbers normally.
// Write your code here
// let num = 3;
// for (let i=1; i<=20; i++){
//     if (i % num === 0){
//         continue;
//     }
//     console.log(`The ${i} is not multiple of 3`)
// }

//6. Nested Loop Task – Print a Square of Stars
// Requirements:

// Use nested for loops to print a square pattern of stars (*).
// The square should have a size of 4x4 (4 rows and 4 columns).
// Your output should be:
//   * * * *
//   * * * *
//   * * * *
//   * * * *
// Write your code here

// let symbol = "*";

// for (let j = 1; j <= 4; j++) {
//   let row = "";
//   for (let i = 1; i <= 4; i++) {
//     row += symbol + " ";
//   }
//   console.log(row);
// }
