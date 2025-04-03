// Task 1: Get the First and Last Elements of an Array
// Write a function getFirstAndLast(arr) that returns
// the first and last elements of the given array as separate values.
// Requirements:
// The function should return two values: the first and last elements.
// If the array has only one element, return that element as both the first and last element.
// Assume the array will always have at least one element.
// Write you code here

const { userInput } = require("../UserInput");
const inputText = userInput("Please, enter a text ");

let myArray = inputText.split("");
function getFirstAndLast(arr) {
  if (arr.length === 0) {
    throw new Error("The array should have at least one element");
  } else if (arr.length === 1) {
    return console.log(`The first and last element of given array is ${myArray[0]}`);
  } else {
    let firstElement = arr[0];
    let lastElement = arr[arr.length - 1];
    let result = [firstElement, lastElement];
    console.log(`The first element of given array is ${firstElement}`);
    console.log(`The last element of given array is ${lastElement}`);
    return result;
  }
}
getFirstAndLast(myArray);

// Task 2: Get the Second Element in an Array
// Write a function getSecondElement(arr) that returns the second element of the array.
// Requirements:
// The second element is at index 1.
// If the array has fewer than two elements,
// throw an error with the message "Array should have a minimum of 2 elements.".
// Write you code here

const { userInput } = require("../UserInput");
const inputText1 = userInput("Please, enter a text ");

let myArray1 = inputText1.split("");

function getSecondElement(arr) {
  if (arr.length < 2) {
    throw new Error("Array should have a minimum of 2 elements.");
  } else {
    return console.log(`The second element of the given array is ${arr[1]}`);
  }
}

getSecondElement(myArray1);

// Task 3: Access the First Element That is Greater Than 10
// Write a function getFirstGreaterThanTen(arr)
// that returns the first element from the array that is greater than 10.
// Requirements:
// Use indexing to access each element.
// If no elements are greater than 10, return undefined.
// Stop once the first element greater than 10 is found.
// Write you code here

let myArray2 = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 60];
let myArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getFirstGreaterThanTen(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      console.log(`The first element greater than 10 is ${arr[i]}`);
      return;
    }
  }
  throw new Error("No element greater than 10 found.");
}

getFirstGreaterThanTen(myArray2);
//getFirstGreaterThanTen(myArray3);
