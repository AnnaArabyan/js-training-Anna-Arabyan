// ✅ Task 1: Implement customForEach
// Description:
// Create a function customForEach that takes an array and a callback function.
// It should loop over each element of the array and apply the callback to each element — just like the built-in forEach() method.
// Requirements:
// Use a regular for loop or a while loop (do not use .forEach()).
// The callback should receive 3 arguments: currentValue, index, and array.

let myArr = [10, 20, 30, 40, 50];

function customForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function callbackForArray(currentValue, index, array) {
  console.log(`Value: ${currentValue}, Index: ${index}, Array: [${array}]`);
}

customForEach(myArr, callbackForArray);

// ✅ Task 2: Implement customMap
// Description:
// Write a function customMap that works like Array.prototype.map().
// It should return a new array with the results of applying a given function to every element in the input array.
// Requirements:
// Do not use .map().
// Use your own logic with a loop.
// Must return a new array (do not modify the original array).

let myArr1 = [10, 20, 30, 40, 50];

function customMap(array, callback) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i], i, array));
  }
  return newArr;
}
function callbackForArray1(currentValue) {
  return currentValue * 10;
}

console.log(customMap(myArr1, callbackForArray1));

// ✅ Task 3: Implement customReverse
// Description:
// Create a function customReverse that reverses the elements of an array and returns the reversed array.
// Requirements:
// Do not use .reverse().
// You may use a loop or swap elements manually.
// Should not use built-in methods that directly reverse arrays.

let myArr2 = [10, 20, 30, 40, 50];

function customReverse(array) {
  let reversedArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArr.push(array[i]);
  }
  return reversedArr;
}
console.log(customReverse(myArr2));

// ✅ Task 4: Implement Bubble Sort
// Description:
// Write a function that sorts an array of numbers using the bubble sort algorithm.
// Requirements:
// Do not use .sort().
// Implement the bubble sort algorithm using loops.
// Return the sorted array.

myArr = [4, 7, 8, 0, 3, -1, 6];
console.log("Before:", myArr);

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort(myArr));

// ✅ Task 5: Implement customReduce
// Description:
// Create a function customReduce that takes an array, a callback function, and an optional initial value.
// It should apply the callback to accumulate a single result from the array elements — just like the built-in reduce() method.
//
// Requirements:
// - If an initialValue is provided, use it as the starting accumulator and begin iteration from index 0.
// - If no initialValue is provided, use the first element of the array as the accumulator and start from index 1.
// - The callback should receive 4 arguments: accumulator, currentValue, index, and array.
// - Return the final accumulated value.
// - Do not use the built-in .reduce() method.
// - If the array is empty and no initialValue is provided, return undefined.

let myArr4 = [10, 20, 30, 40, 50];

function customReduce(array, callback, initialValue) {
  if (array.length === 0 && initialValue === undefined) {
    return undefined;
  }
  let accumulator;
  let index;
  if (initialValue !== undefined) {
    accumulator = initialValue;
    index = 0;
  } else {
    accumulator = array[0];
    index = 1;
  }

  for (let i = index; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}

function callbackforArray4(accumulator, currentValue, index, array) {
  console.log(`Value: ${currentValue}, Index: ${index}, Array: [${array}]`);
  return (accumulator += currentValue);
}

console.log(customReduce(myArr4, callbackforArray4, 100));
