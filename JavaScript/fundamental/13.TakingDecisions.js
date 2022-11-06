/*

->ES6 conditional statements are used to perform different actions based on various conditions. The conditional statement evaluates a condition before the execution of instructions.


->In JavaScript we have the following conditional statements:

->Use if to specify a block of code to be executed, if a specified condition is true

->Use else to specify a block of code to be executed, if the same condition is false

->Use else if to specify a new condition to test, if the first condition is false

->Use switch to specify many alternative blocks of code to be executed

*/

const age = 15;
if (age > 10) {
  console.log("Hello World");
} else {
  console.log("Good Morning");
}

//output: Hello World

let century;
const birhtYear = 1991;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 50;
}
console.log(century);

//output: 1991
