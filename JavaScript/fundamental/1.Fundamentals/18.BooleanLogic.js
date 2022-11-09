/*
#Boolean is a datatype that returns either of two values i.e. true or false. In JavaScript, Boolean is used as a function to get the value of a variable, object, conditions, expressions, etc. in terms of true or false.


->Here a1 and a2 stores the boolean value i.e. true and false respectively. 
 
var a1 = true;
var a2 = false;

->JavaScript Boolean Operators
Here is the list of Boolean operators supported by JavaScript:

1.Boolean OR “||” operator
2.Boolean AND “&&” operator
3.Boolean NOT “!” operator

*/

/*
----------------------
x	y	x || y  output
true	true	true
true	false	true
false	true	true
false	false	false
-----------------------

----------------------
x	y	x && y  output
true	true	true
true	false	false
false	true	false
false	false	false
----------------------

*/

/*
->The JavaScript Boolean NOT operator is used to inverse the value of an operand, and it is represented by an exclamation mark “!”
*/
let x = true,
  y = false;

console.log(!x); //output:false
console.log(!y); //output:true;
