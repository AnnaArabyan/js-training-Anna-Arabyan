// Task 1: Function Declaration
// Requirement: Declare a function using the function declaration syntax.
// The function should accept two parameters: 'firstName' and 'lastName',
// and return a full name by combining both parameters with a space in between.
// Write your code here

function returnFullName(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return fullName;
}
let output = returnFullName("Anna", "Arabyan");
console.log(output);

// Task 2: Function Expression
// Requirement: Declare a function using a function expression.
// The function should accept a number as a parameter and return whether the number is even or odd.
// Write your code here

let number = function (value) {
  return value % 2 === 1 ? "It is odd number" : "It is even number";
};
let result = number(15);
console.log(result);

// Task 3: Default Value with an Optional Parameter
// Requirement: Create a function that accepts a 'discount' parameter for an item price.
// If no 'discount' is provided, it should default to 0%. The function should calculate and return the final price after applying the discount.
// Write your code here

function priceCalculation(amount, discount = 0) {
  let finalPrice = amount - (amount * discount) / 100;
  return finalPrice;
}
let finalPrice1 = priceCalculation(1000);
console.log(finalPrice1);

let finalPrice2 = priceCalculation(1000, 10);
console.log(finalPrice2);
