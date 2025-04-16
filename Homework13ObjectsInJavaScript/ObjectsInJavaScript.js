// Task 1: Object-Based Shopping Cart Manager

// You should create an object `ShoppingCartManager` to manage a shopping cart.

// Requirements:
// 1. Create an object called `shoppingCart` with an initial property `cart` (array) containing items like `["Milk", "Bread", "Eggs"]`.
// 2. Add a method `addItem(item)` that adds a new item to the `cart`.
// 3. Add a method `removeItem(item)` that removes the first occurrence of an item from the `cart`.
// 4. Add a method `clearCart()` that removes all items from the `cart`.
// 5. Add a method `getCart()` that returns the current items in the cart.
// 6. Add a method `getItemCount()` that returns the number of items in the cart.
// 7. After performing all the above operations, print the final cart and the item count.

let shoppingCart = {
  cart: ["Milk", "Bread", "Eggs"],

  addItem(item) {
    this.cart.push(item);
    return this.cart;
  },

  removeItem(item) {
    this.cart.shift();
    return this.cart;
  },

  clearCart() {
    this.cart = [];
    return this.cart;
  },

  getCart() {
    return this.cart;
  },

  getItemCount() {
    return this.cart.length;
  },
};
console.log(shoppingCart.addItem("Butter"));
console.log(shoppingCart.removeItem());
console.log(shoppingCart.clearCart());
console.log(shoppingCart.getCart());
console.log(shoppingCart.getItemCount());
console.log(
  `The final cart is [${shoppingCart.getCart()}] with ${shoppingCart.getItemCount()} items`
);

// Task 2: Constructor Function and this
/*
Create an object-based `Person` using a constructor function.

Requirements:
1. Create a constructor function `Person` that takes `name` and `age` as parameters.
2. Inside the constructor, assign `name` and `age` to `this.name` and `this.age`.
3. Add a method `greet()` to the `Person` object that returns a message: `"Hello, my name is [name] and I am [age] years old."`
4. Create a new `Person` object and call the `greet()` method.
5. Bonus: If the person is under 18, modify the greeting to include `"I am a minor."`
*/
// Your code here

const { userInput } = require("../UserInput");
const inputText = userInput("Please, enter your name ");
const inputText1 = userInput("Please, enter your age ");

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    if (this.age < 18) {
      return "I am a minor";
    } else {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  };
}
let Person1 = new Person(inputText, inputText1);
console.log(Person1.greet());

// Task 3: Using Symbol for Unique Object Properties
/*
Create a task management system using `Symbol` to create unique property keys.

Requirements:
1. Create an object `Task` with a constructor that takes `title` and `description` as parameters.
2. Use `Symbol()` to create unique keys for the properties `taskID` and `status` (e.g., `"Completed"`, `"In Progress"`).
3. Add a method `updateStatus(newStatus)` to the object that updates the `status`.
4. Create a new `Task` object, set the status, and print the `taskID` and `status`.
5. Print out the task's properties to show the uniqueness of `Symbol`.
*/
// Your code here

const { userInput } = require("../UserInput");
const inputText2 = userInput("Please, enter task title ");
const inputText3 = userInput("Please, enter task description ");
const inputText4 = userInput("Please, enter task Id ");
const inputText5 = userInput(
  "Please, enter task status (e.g., Completed, In Progress)"
);

let taskId = Symbol(inputText4);
let status = Symbol(inputText5);

function Task(title, description) {
  this.title = title;
  this.description = description;
  this.taskId = taskId;
  this.status = status;
  this.updateStatus = function (newStatus) {
    this.status = Symbol(newStatus);
  };
}

let Task1 = new Task(inputText2, inputText3, inputText4, inputText5);

console.log(
  `Task Id is ${Task1.taskId.description}, Task status is ${Task1.status.description}`
);
console.log(Task1);

// Task 4: Optional Chaining with Deeply Nested Objects
/*
Create an object representing a company and use optional chaining to safely access deeply nested properties.

Requirements:
1. Create a `company` object with the following structure:
   {
     name: "TechCorp",
     department: {
       hr: {
         manager: {
           name: "Alice",
           office: {
             floor: 5,
             number: 101
           }
         }
       },
       engineering: {
         manager: {
           name: "Bob",
           office: {
             floor: 8,
             number: 202
           }
         }
       }
     }
   }
2. Using optional chaining, access `company.department.hr.manager.office.floor` and print it to the console.
3. Also, access `company.department.sales.manager.name` (which does not exist) using optional chaining and print the result.
4. Print a message if `hr.manager` or `sales.manager` is undefined using optional chaining.
*/
// Your code here

let company = {
  name: "TechCorp",
  department: {
    hr: {
      manager: {
        name: "Alice",
        office: {
          floor: 5,
          number: 101,
        },
      },
    },
    engineering: {
      manager: {
        name: "Bob",
        office: {
          floor: 8,
          number: 202,
        },
      },
    },
  },
};

console.log(company?.department?.hr?.manager?.office?.floor);
console.log(company?.department?.sales?.manager?.name);

if (!company?.department?.hr?.manager) {
  console.log("HR manager is undefined");
}

if (!company?.department?.sales?.manager) {
  console.log("Sales manager is undefined");
}

// Task 5: Constructor Function for Calculator with Objects
/*
Create a `Calculator` constructor function to perform basic arithmetic operations on object properties.

Requirements:
1. Create a constructor function `Calculator` that accepts two parameters: `num1` and `num2`.
2. Inside the constructor, assign `num1` and `num2` to `this.num1` and `this.num2`.
3. Add methods `add()`, `subtract()`, `multiply()`, and `divide()` to perform the respective operations using `this.num1` and `this.num2`.
4. Create a new `Calculator` object and perform calculations by calling these methods.
5. Print the results of each operation.
*/
// Your code here

function calculator(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
  this.add = function () {
    return num1 + num2;
  };

  this.substract = function () {
    return num1 - num2;
  };

  this.multiply = function () {
    return num1 * num2;
  };

  this.divide = function () {
    return num1 / num2;
  };
}

let calculator1 = new calculator(10, 2);
console.log(calculator1.add());
console.log(calculator1.substract());
console.log(calculator1.multiply());
console.log(calculator1.divide());

// Task 6: Using Nullish Coalescing (??) with Objects
/*
Create a function `getUserInfo()` that returns the user's name or a default message if the name is undefined or null.

Requirements:
1. Create an object `user` with a `name` property, which could be undefined or null.
2. Use nullish coalescing (`??`) to return the `name` property if it exists, or `"Anonymous"` if the `name` is undefined or null.
3. Call `getUserInfo()` with a `user` object where the `name` is `null` and another where the `name` is a string.
4. Print the results to demonstrate how nullish coalescing works.
*/
// Your code here

const { userInput } = require("../UserInput");
const inputText6 = userInput("Please, enter your name ");

let user = {
  name: inputText6,
};

function getUserInfo(user) {
  return user.name ?? "Anonymous";
}

console.log(getUserInfo(user));
