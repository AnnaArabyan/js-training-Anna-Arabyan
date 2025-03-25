//Task 1: Identify When to Use let or const
// Below are some situations. Decide whether let or const should be used and declare the variables accordingly.

// 1. A variable that stores a user's name and does not change.
const userName = 'Anna'

// 2. A counter that starts from 0 and will be updated later.
let counter = 0

// 3. The value of Pi (3.14159).
const pi = 3.14159

// 4. A variable to hold a user’s age, which might be updated later.
let age = 15

// 5. A list of colors that should remain the same throughout the program.
const listOfColors = ["red", "blue","yellow","white","black"]

// Write your answers in JavaScript:


// Task 2: Use typeof to Check Data Types
// Declare variables of different types:

// - A number
let num = 100
console.log(typeof num)

// - A string
const firstName = "Anna"
console.log(typeof firstName)

// - A boolean
let isActivated = true
console.log(typeof isActivated)

// - null
let finishTime = null
console.log(typeof finishTime)

// - undefined
let y;
console.log(typeof y)

// - A symbol
let icon = Symbol("icon");
console.log(typeof icon)


// - A BigInt
let number = 25325666633333333n
console.log(typeof number)


// Use typeof to check and log their types.
// Example:
// let num = 5
// console.log(typeof num)
// Write your answers in JavaScript:

// Task 3: Convert Different Values to Strings, Numbers and Booleans
// Log the result and write the answer next to the console.log() statement
// Example:
// Convert the following number to a string and log the result:

const orderNumber = 98765;
console.log(String(orderNumber)); // output -> "98765"

// Convert the following boolean to a string and log the result:
const isActive = true;
console.log(String(isActive));
console.log(typeof String(isActive));

// Convert the following string to a number and log the result:
const price = "49.99";
console.log(Number(price));
console.log(typeof Number(price));

// Convert the following boolean to a number and log the result:
const hasAccess = false;
console.log(Number(hasAccess));
console.log(typeof Number(hasAccess));

// Convert the following empty string to a number and log the result:
const emptyText = "";
console.log(Number(emptyText));
console.log(typeof Number(emptyText));

// Convert the following string to a boolean and log the result:
const username = "JohnDoe";
console.log(Boolean(username));
console.log(typeof Boolean(username));

// Convert the following number to a boolean and log the result:
const itemCount = 0;
console.log(Boolean(itemCount));
console.log(typeof Boolean(itemCount));

// Convert the following undefined value to a number and log the result:
const notDefined = undefined;
console.log(Number(notDefined));
console.log(typeof Number(notDefined));

// Convert the following string containing spaces to a boolean and log the result:
const spaceString = "   ";
console.log(Boolean(spaceString));
console.log(typeof Boolean(spaceString));

// Convert the following null value to a string and log the result:
const emptyValue = null;
String(emptyValue)
console.log(typeof emptyValue);
console.log(typeof String(emptyValue));

