/*

 #Type Conversion:Type conversion (or typecasting) means transfer of data from one data type to another. Implicit conversion happens when the compiler (for compiled languages) or runtime (for script languages like JavaScript) automatically converts data types. The source code can also explicitly require a conversion to take place.

 ->Type conversion in JavaScript is the conversion of one data type to another data type (such as string to a number, object to a boolean, and so on) which is required by the function or operator to work in the right way to give the expected results.

->Type conversions take place when any operation is done with different data types, these conversions can be either done by the javascript compiler or manually by us.

*/

// Number is converted into String
console.log("5" + 3); // '53'

// String is converted into Number for calculation
console.log("5" - 3); // 2
console.log("5" * 3); // 15

// expression is converted into boolean
console.log(null == 1); // false

// When the result is not a number
console.log("Ale" - 2021); // NaN

/*

Any data type, whether it’s primitive or an objects, is valid subject to type conversions, and the logic behind objects and primitives work differently, but both primitives and objects can only be converted into these three types :

1.to string
2.to number
3.to boolean

->Implicit type conversions - Automatic type conversion done by javascript compiler.These conversions are also known as type coercion in Javascript.Such conversions are also referred as typecasting in JavaScript.

->Explicit type conversions - Manual type conversion done by us.Such conversions are also referred as typecasting in JavaScript.
*/

// Explicit conversions solved previous problem
const pensInBag = Number(prompt("How many pens you have in your bag?"));
const pensInHand = 10;
const totalPens = pensInHand + pensInBag;
console.log(totalPens);
// here now if i enter 5 then
// result appeared as expected: 15

// Implicit conversion to string
"25" + 15; // '2515'

// Implicit conversions to a number
23 * "2"; // 46
23 - true; // 22  // true is converted into 1
true - null; // 1
false + undefined; // NaN  // undefined into NaN

// Implicit conversions in statements
const arr = [];
if (arr) {
  console.log("Hello World");
} // Hello World
// Here the empty arr is converted into a Boolean true
