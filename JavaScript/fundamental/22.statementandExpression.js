/*
#Statement and Expressions

->Expression: A JS expression is any valid code that resolves into a value and can be written whenever you would expect a value. Usually expression are written in only one line. For example:

3+4=7 //it produces a value

42 // a number
“Hello World” // a string
42 + 1 // a calculation
x = 42 + 1 // calculation
myVar // a variable
myFun() // a function that returns a value

->But it’s more complicated than you think . There are different types of expressions:

Arithmetic: Resolves to a number, e.g.
42

42 + 1

etc.

String: Resolves to a string, e.g.
"Hello World"

"123"

etc.

Logical: Resolves to true or false and often uses a logical operator, e.g.
true

1 === 0

etc.

Primary expressions: Basic keywords and general expressions, e.g.
this

grouping operator (...): (1 + 2) * 3

etc.

Left-hand-side-expressions: Left values are the destination of the assignment, e.g.
var x = 42 + 1

new operator: var myVar = new Object()

super keyword to call the object’s parent: super.functionOnParent

etc.


->Statement: You can write an expression when a statement is expected. These kind of expression are called expression statements. The distinction between an expression and a statement is important because an expression is a subset of a statement. You can use an expression wherever a statement is expected, but this does not work vice versa.

ternary operator: ... ? ... : ...
function calls: alert("Hello World")
So expression, statement, and expression statement is connected in the following way:

->We we take eg as English grammer that means if expression are words the Statement is sentence

*/

//Example:-

if (23 > 10) {
  const str = "23 is bigger";
}

//in the above it performs some action

const me = "jonas";
console.log(`I am ${2037 - 1991} years old ${me}`);

// me is a expression because it produces the value
