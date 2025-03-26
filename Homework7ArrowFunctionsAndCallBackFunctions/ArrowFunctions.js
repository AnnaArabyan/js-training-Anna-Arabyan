// Task 1. Convert to Arrow Functions
// Requirement: Convert the given regular functions into arrow functions.

function multiply(a, b) {
  return a * b;
}
let resultMultiply = (a, b) => a * b;


function cube(n) {
  return n * n * n;
}
let resultCube = (n) => n * n * n;



function sayHello(name) {
  return "Hello, " + name + "!";
}
let resultSayHello = (name) => "Hello, " + name + "!"


// Task 2. Arrow Function with Default Parameters
// Requirement:
// Create an arrow function greet that takes a name parameter.
// The parameter should have a default value of "Guest".
// The function should return "Hello, [name]!".
// Writhe your code here

let greet = (name = "Guest") => `Hello, [${name}]!`;


// Task 3. Calculate Percentage
// Requirement:
// Write an arrow function that takes two arguments:
// total: the total value
// percentage: the percentage to calculate
// The function should return the calculated percentage of the total.
// Writhe your code here

let percentage = (total,percentage) => (total * percentage) / 100;
