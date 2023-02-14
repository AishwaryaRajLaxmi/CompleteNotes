/*
 * JavaScript functions are defined with the function keyword.You can use a function *declaration or a function expression.
*/
 

function functionName(parameters) {
    // code to be executed
  }

//   Function Expressions
// A JavaScript function can also be defined using an expression.

// A function expression can be stored in a variable:

   //Example:-
const ab = function (a, b) {return a * b};


/*
The Function() Constructor
As you have seen in the previous examples, JavaScript functions are defined with the function keyword.

Functions can also be defined with a built-in JavaScript function constructor called Function().
*/
const myFunction = new Function("a", "b", "return a * b");

let x = myFunction(4, 3);

// You actually don't have to use the function constructor. it is the same as writing:

const myFunction2 = function (a, b) {return a * b};

let x2 = myFunction(4, 3);

// Most of the time, you can avoid using the new keyword in JavaScript.

// When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function, as shown in the following example:

function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

// xy gets the value "Honda"
const xy = mycar.make;

// the make property is changed by the function
myFunc(mycar);
// yz gets the value "Toyota"
const yz = mycar.make;


// When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function, as shown in the following example:]

function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30


// In the following code, the function receives a function defined by a function expression and executes it for every element of the array received as a second argument:

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const f = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
const cube = map(f, numbers);
console.log(cube);

// Function returns: [0, 1, 8, 125, 1000].


/*
Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

Hoisting applies to variable declarations and to function declarations.

Because of this, JavaScript functions can be called before they are declared:*/

myFunction(5);

function myFunction(y) {
  return y * y;
}


// Functions defined using an expression are not hoisted.

const fun = function (x) {
    return x * x * x;
  };
  

//   Arrow functions do not have their own this. They are not well suited for defining object methods.

// Arrow functions are not hoisted. They must be defined before they are used.

// Using const is safer than using var, because a function expression is always constant value.

// You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

Example
const num = (x, y) => { return x * y };