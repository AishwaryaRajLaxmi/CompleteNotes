//  #String and Template Literals

const firstName = "jonas";
const job = "teacher";
const birhtYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a" + (year - birhtYear) + "years old" + job + "!";

console.log(jonas);
//output: I'm jonas, a 46 years old teacher!

/*->we can see in the about it is kind of difficult to concatanate the string manually and manage the spaces so we have a great solution for that using template literals */

/*  What is the use of string template in JavaScript?
->Template strings are a powerful feature of modern JavaScript released in ES6. It lets us insert/interpolate variables and expressions into strings without needing to concatenate like in older versions of JavaScript. It allows us to create strings that are complex and contain dynamic elements*/

//here we use backticks ``

/* The template literal was introduced in the newer version of JavaScript (ES6).

->Some browsers may not support the use of template literals. 

*/

//Example
const jonasNew = `I'm ${firstName}, a${year - birhtYear} year old ${job}!`;
console.log(jonasNew);
//using the $ symbol we can paas any expression to it

/*we can also use backticks(``) with normal strings means any regular strings
 */

console.log(`Just a regular string..`);
//output:Just a regular string..

//->Multiline String: A multiline string is created using the \n\

Example: console.log("String with \n multiple \n lines");

//Multiline string with backticks
console.log(`String 
   multiple
   lines`);
