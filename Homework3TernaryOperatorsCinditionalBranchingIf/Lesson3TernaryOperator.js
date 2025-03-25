// Note: For all the tasks in this file, write the code using both and the conditional branching (if) and the ternary operator(?).
// Task 1: Even or Odd Number
// Write a program that checks if a number is even or odd.
// Write two programs one using the conditional branching if
// Another using the ternary operator (?)
// Write your code here

let inputNumber = 60
if (inputNumber % 2 === 1)
    {console.log ("It is odd number")}
else 
    {console.log ("It is even number")};


let userInput = 40
let userInput1 = userInput % 2 === 1 ? "It is odd number":"It is even number";
console.log(userInput1)

// Task 2: Pass or Fail
// Ask the user for their exam score (0-100).
// If the score is 50 or above, print "Pass"; otherwise, print "Fail".
// Write two programs one using the conditional branching if
// Another using the ternary operator (?)
// Write your code here

let userScore = 11
if (userScore >=50 && userScore <=100)
    {console.log ("Pass")}
else 
    {console.log ("Fail")}


let userScore1 = 11
let userScore2 = userScore1 >=50 && userScore1 <=100 ? "Pass":"Fail";
console.log(userScore2)