


// **Basic JavaScript Questions:**

// 1. **What is JavaScript, and how does it differ from Java?**
//    - JavaScript is a high-level, interpreted programming language primarily used for front-end web development. It is not related to Java other than having a similar name. JavaScript is often used for adding interactivity to web pages, while Java is a separate, compiled language used for a wide range of applications.

// 2. **What are variables in JavaScript, and how are they declared?**
//    - Variables in JavaScript are used to store data values. You can declare a variable using `let`, `const`, or `var`. For example:
//      ```javascript
//      let age = 30; // Declaring a variable 'age' and initializing it with the value 30.
//      ```

// 3. **Explain the difference between `null` and `undefined`.**
//    - `null` is a value that represents the intentional absence of any object value, while `undefined` is a value that indicates a variable has been declared but has not been assigned a value yet.

// 4. **How do you comment on your code in JavaScript?**
//    - You can use `//` for single-line comments and `/* */` for multi-line comments.
//      ```javascript

// 5. **What is the purpose of the `let`, `const`, and `var` keywords in JavaScript?**
//    - `let` and `const` are used to declare block-scoped variables, with `const` being used for values that should not be reassigned. `var` is function-scoped and was used in older JavaScript versions.

// 6. **What is the difference between `==` and `===` in JavaScript?**
//    - `==` is a loose equality operator that compares values after type coercion, while `===` is a strict equality operator that compares values without type coercion. `===` checks both value and type.


// 7. **Explain the concept of hoisting in JavaScript.**
//    - Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during compilation. However, only the declarations are hoisted, not the initializations.

// **Data Types and Variables:**

// 8. **What are the primitive data types in JavaScript?**
//    - The primitive data types in JavaScript are: `number`, `string`, `boolean`, `null`, `undefined`, and `symbol`.

// 9. **How do you check the data type of a variable?**
//    - You can use the `typeof` operator to check the data type of a variable.
//      ```javascript
//      const num = 42;
//      console.log(typeof num); // "number"
//      ```

// 10.**What is Type coercion in javascript?**
// Type coercion in JavaScript refers to the automatic conversion of one data type to another when performing operations or comparisons that involve different data types. JavaScript is a dynamically typed language, which means that variables are not explicitly declared with data types, and the type of a variable can change during runtime. Type coercion occurs when JavaScript tries to make sense of operations involving values of different types.

// There are two types of type coercion in JavaScript:

//  **Implicit Type Coercion:** This occurs when JavaScript automatically converts one data type to another without explicit instructions from the developer. It usually happens in contexts like arithmetic operations, comparisons, and logical operations.

//    **Example 1 - Arithmetic Operation:**
//    ```javascript
//    const number = 5;
//    const string = "10";
//    const result = number + string; // JavaScript coerces 'number' to a string and performs string concatenation
//    console.log(result); // "510"
//    ```

//    **Example 2 - Comparison:**
//    ```javascript
//    const number = 5;
//    const string = "5";
//    console.log(number == string); // true (JavaScript coerces 'number' to a string for comparison)
//    ```

//  **Explicit Type Coercion (Type Casting):** This occurs when a developer explicitly converts a value from one data type to another using functions or operators like `parseInt()`, `parseFloat()`, `Number()`, `String()`, or the `+` operator.

//    **Example - Explicit Type Coercion:**
//    ```javascript
//    const number = 5;
//    const string = "10";
//    const result = number + Number(string); // Explicitly converting 'string' to a number
//    console.log(result); // 15
//    ```

// It's important to be aware of type coercion in JavaScript because it can lead to unexpected behavior and bugs in your code if you're not careful. To write robust and predictable code, you should understand how JavaScript performs type coercion and use explicit type conversion when necessary to ensure that your code behaves as intended.

// To mitigate potential issues related to type coercion, some developers prefer using the strict equality operator `===` (which does not perform type coercion) and strict inequality `!==` when comparing values to ensure that both value and type are taken into account.

// ```javascript
// const number = 5;
// const string = "5";
// console.log(number === string); // false (strict equality, considers type)
// ```

// Understanding type coercion is an essential aspect of JavaScript programming and contributes to writing code that behaves predictably and avoids common pitfalls.



// **11. What is a function in JavaScript?**

// In JavaScript, a function is a reusable block of code that can be defined and executed. Functions are used to perform specific tasks or calculations and can take input (parameters) and produce output (a return value). Functions are a fundamental building block of JavaScript and are used for organizing and reusing code.

// Here's a basic example of a function in JavaScript:

// ```javascript
// function greet(name) {
//   return `Hello, ${name}!`;
// }

// const greeting = greet("Alice");
// console.log(greeting); // Outputs: "Hello, Alice!"
// ```

// In this example, `greet` is a function that takes a `name` parameter and returns a greeting message.

// **12. What is a callback function, and how is it used?**

// A callback function in JavaScript is a function that is passed as an argument to another function and is executed after that function has completed its operation. Callback functions are often used in asynchronous code and event handling to perform tasks once certain conditions are met or when an operation is complete.

// Here's a simple example of a callback function:

// ```javascript
// function fetchData(url, callback) {
//   // Simulate fetching data from a URL (asynchronous operation)
//   setTimeout(() => {
//     const data = "Some data from the server";
//     callback(data);
//   }, 1000);
// }

// function processReceivedData(data) {
//   console.log(`Data received: ${data}`);
// }

// fetchData("https://example.com/api/data", processReceivedData);
// ```

// In this example, `fetchData` is a function that simulates fetching data from a URL asynchronously. It takes a callback function `processReceivedData` as an argument, which is executed when the data is received.

// **13. What is function declarations , function expressions and arrow function.**

//  **Function Declarations:**
//    - This is the most common way to declare a function. It uses the `function` keyword followed by a name, a parameter list enclosed in parentheses, and a block of code enclosed in curly braces.
//    - Function declarations are hoisted, meaning they can be used before they are defined in the code.

//    ```javascript
//    function add(a, b) {
//      return a + b;
//    }
//    ```

//  **Function Expressions:**
//    - Function expressions involve defining a function as part of an expression, often by assigning it to a variable. They can be named or anonymous.
//    - Function expressions are not hoisted and must be defined before they are used.

//    ```javascript
//    const add = function(a, b) {
//      return a + b;
//    };

//    ```

//  **Arrow Functions (ES6):**
//    - Arrow functions are a concise way to define functions in ES6. They use the `=>` syntax and do not have their own `this` context.
//    - Arrow functions are often used for short, one-liner functions.

//    ```javascript
//    const add = (a, b) => a + b;
//    const multiply = (x, y) => x * y;
//    ```


// **14. How do you create an array in JavaScript?**

// In JavaScript, you can create an array using square brackets `[]` and optionally populate it with elements. Here are a few examples:

// ```javascript
// // An empty array
// const emptyArray = [];

// // An array with elements
// const colors = ["red", "green", "blue"];

// // An array with mixed data types
// const mixedArray = [1, "apple", true, null];
// ```

// **15. Explain the difference between `push()` and `pop()` methods for arrays.**

// - `push()`: The `push()` method is used to add one or more elements to the end of an array. It modifies the original array and returns the new length of the array.

//    ```javascript
//    const fruits = ["apple", "banana"];
//    const newLength = fruits.push("cherry"); // Adds "cherry" to the end
//    // fruits is now ["apple", "banana", "cherry"]
//    // newLength is 3
//    ```

// - `pop()`: The `pop()` method is used to remove the last element from an array. It modifies the original array and returns the removed element.

//    ```javascript
//    const fruits = ["apple", "banana", "cherry"];
//    const removedFruit = fruits.pop(); // Removes "cherry" from the end
//    // fruits is now ["apple", "banana"]
//    // removedFruit is "cherry"
//    ```

// **16. How can you iterate over an array in JavaScript?**

// There are several ways to iterate over an array in JavaScript:

// - **Using a `for` loop:**
//    ```javascript
//    const fruits = ["apple", "banana", "cherry"];
//    for (let i = 0; i < fruits.length; i++) {
//      console.log(fruits[i]);
//    }
//    ```

// - **Using a `for...of` loop (ES6):**
//    ```javascript
//    const fruits = ["apple", "banana", "cherry"];
//    for (const fruit of fruits) {
//      console.log(fruit);
//    }
//    ```

// - **Using the `forEach()` method:**
//    ```javascript
//    const fruits = ["apple", "banana", "cherry"];
//    fruits.forEach(function(fruit) {
//      console.log(fruit);
//    });
//    ```

// - **Using the `map()` method (to create a new array):**
//    ```javascript
//    const fruits = ["apple", "banana", "cherry"];
//    const upperCaseFruits = fruits.map(function(fruit) {
//      return fruit.toUpperCase();
//    });
//    ```

// - **Using the `filter()` method (to create a new array with filtered elements):**
//    ```javascript
//    const numbers = [1, 2, 3, 4, 5];
//    const evenNumbers = numbers.filter(function(number) {
//      return number % 2 === 0;
//    });
//    ```

// - **Using the `reduce()` method (to accumulate a single value):**
//    ```javascript
//    const numbers = [1, 2, 3, 4, 5];
//    const sum = numbers.reduce(function(acc, current) {
//      return acc + current;
//    }, 0);
//    ```

// **17. What are array methods like `map()`, `filter()`, and `reduce()` used for?**

// - `map()`: The `map()` method is used to create a new array by applying a provided function to each element in an existing array. It transforms the elements and returns a new array of the same length.

//    ```javascript
//    const numbers = [1, 2, 3];
//    const doubled = numbers.map(function(number) {
//      return number * 2;
//    });
//    // doubled is now [2, 4, 6]
//    ```

// - `filter()`: The `filter()` method is used to create a new array containing elements that pass a given condition. It returns a new array with the elements that meet the specified criteria.

//    ```javascript
//    const numbers = [1, 2, 3, 4, 5];
//    const evenNumbers = numbers.filter(function(number) {
//      return number % 2 === 0;
//    });
//    // evenNumbers is now [2, 4]
//    ```

// - `reduce()`: The `reduce()` method is used to accumulate values of an array into a single value. It takes a callback function and an initial value and returns the final accumulated result.

//    ```javascript
//    const numbers = [1, 2, 3, 4, 5];
//    const sum = numbers.reduce(function(acc, current) {
//      return acc + current;
//    }, 0);
//    // sum is 15
//    ```




