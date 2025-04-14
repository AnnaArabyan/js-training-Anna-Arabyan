//  ✅ Task 1: Create a User Object
// Description:
// Create a function createUser that takes three arguments: name, age, and isAdmin.
// It should return an object with those properties and values.
// Requirements:
// - Use object literal syntax to build the object.
// - The returned object should look like: { name: 'Alice', age: 30, isAdmin: true }

function createUser(name, age, isAdmin) {
  let user = { name: name, age: age, isAdmin: isAdmin };
  return user;
}
console.log(createUser("Anna", 18, true));

// ✅ Task 2: Calculate Total Sales
// Description:
// Write a function calculateTotalSales that takes a nested object representing products sold during the day.
// Each product key contains an object with price and quantitySold.
// The function should return the total revenue.
// Requirements:
// - Use a for...in loop to iterate over the object.
// - Multiply price * quantitySold for each product and sum the results.

let salesData = {
  bread: {
    price: 200,
    quantitySold: 10,
  },
  cheese: {
    price: 10,
    quantitySold: 1000,
  },
  butter: {
    price: 5,
    quantitySold: 2000,
  },
};

function calculateTotalSales(salesData, callback) {
  let total = 0;
  for (let item in salesData) {
    let product = salesData[item];
    total += callback(product.price, product.quantitySold);
  }
  return total;
}

function callbackForSalesData(price1, quantitySold1) {
  let sum = price1 * quantitySold1;
  return sum;
}

console.log(calculateTotalSales(salesData, callbackForSalesData));

// ✅ Task 3: Convert Array to Object
// Description:
// Create a function arrayToObject that takes an array and returns an object.
// The object should have the array indexes as keys and the elements as values.
// Requirements:
// - Use a loop to build the object manually (no Object.fromEntries).
// - Return the constructed object.

myArray = [7, 8, 2, 9, 2, 3, 6, 5, 4, 0, 8];

function arrayToObject(arr) {
  let myObj = {};

  for (let i = 0; i < arr.length; i++) {
    myObj[i] = arr[i];
  }
  return myObj;
}
console.log(arrayToObject(myArray));

// ✅ Task 4: Get Keys with String Values Only
// Description:
// Create a function getStringKeys that takes an object and returns an array of keys
// whose values are strings.
// Requirements:
// - Use a loop or Object.keys() to iterate through the object.
// - Return only the keys where the value is of type 'string'.

let mixData = {
  name: "John",
  age: 18,
  role: "student",
  gender: "male",
  isMariied: false
};

function getStringKeys(obj) {
  let newArr = [];
  for (let i in obj) {
    if (typeof obj[i] === "string") {
      newArr.push(i);
    }
  }
  return newArr;
}
console.log(getStringKeys(mixData));

// ✅ Task 5: Merge Two Objects
// Description:
// Write a function mergeObjects that takes two objects and returns a new object that combines the properties of both.
// If the same key exists in both, the value from the second object should overwrite the first.
// Requirements:
// - Do not modify the original objects.

object1 = {
  name: "Alice",
  age: 28,
  city: "New York",
  hobbies: ["reading", "cycling"],
  is_active: true,
};

object2 = {
  age: 32,
  city: "San Francisco",
  profession: "Engineer",
  hobbies: ["traveling", "photography"],
  is_verified: false,
};

function mergeObjects(obj1, obj2) {
  let mergedObject = Object.assign({}, object1, object2);
  return mergedObject;
}
console.log(mergeObjects(object1, object2));
