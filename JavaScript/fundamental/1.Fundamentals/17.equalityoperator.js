/*

The equality operator (==) is used to compare two values or expressions. It is used to compare numbers, strings, Boolean values, variables, objects, arrays, or functions. The result is TRUE if the expressions are equal and FALSE otherwise.

->it can olny be seems to be name not need to be same datatype

->the double == operator does the type conversion here '18'==18 will give the result true because first the String '18' will convert into number then it will compare to 18 and given the result is true but === is not perform the type conversion so while we use '18'===18 then the result would be false.it strictly check the value

*/

const age = 10;
const age2 = "10";

if (age == age2) {
  console.log("true");
} else {
  console.log("false");
}

/*

 const age=10;
 const age2='10';

 if(age===age2){
     console.log("true");
 }
 else{
     console.log("false");
 }

output:false
*/

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  //22===23 ->FALSE
  console.log("Cool 23 is an amazing number");
} else if (favourite === 7) {
  //'23' == 23
  console.log("7 is also a cool");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite != 23) console.log("why not 23?");
