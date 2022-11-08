/*
#JavaScript uses type coercion (implicit conversion of values from one data type to another) in Boolean contexts, such as conditionals. This means that values are considered either truthy (evaluate to true) or falsy (evaluate to false) depending on how they are evaluated in a Boolean context.

->There are 6 values that are considered falsy in JavaScript:

1.The keyword false
2.The primitive value undefined
3.The primitive value null
4.The empty string ('', "")
5.The global property NaN
6.A number or BigInt representing 0 (0, -0, 0.0, -0.0, 0n)

Every other value is considered truthy. It's important to remember that this applies to all JavaScript values, even ones that might seem falsy, such as empty arrays ([]) or empty objects ({}).

->You can check a value's truthiness using either the Boolean() function or a double negation (!!).

Boolean(false);         // false
Boolean(undefined);     // false
Boolean(null);          // false
Boolean('');            // false
Boolean(NaN);           // false
Boolean(0);             // false
Boolean(-0);            // false
Boolean(0n);            // false

Boolean(true);          // true
Boolean('hi');          // true
Boolean(1);             // true
Boolean([]);            // true
Boolean([0]);           // true
Boolean([1]);           // true
Boolean({});            // true

*/

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("")); //false
console.log({}); //true;

//Some more examples

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a  job");
}

//output=You should get a job because 0 is a falsy value

const money2 = 100;
if (money2) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a  job");
}

//output:Don't spend it all
