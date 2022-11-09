/*
The switch statement executes a block of code depending on different cases.

->In switch statement we paas an expression and compare the expression value with case vlaue and there is a match that case block will be executed

->The switch statement is often used together with a break or a default keyword(or both). these are both optional:

->The break keyword breaks out of the switch block. This will stop the execution of more execution of code and/or case testing inside the block. If break is omitted, the next code block in the switch statement is executed.

->The default keyword specifies some code to run if there is no case match. it is kind of else statement if no any match found it will execute the default block
*/

switch (expression) {
  case n:
    break;
  case n:
    break;

  default:
}

//Example

const day = "thursday";

switch (day) {
  case "monday":
    console.log("plan course structure");
    break;
  case "tuesday":
    console.log("prepare theory videos");
    break;
  case "wednesday":
    console.log("write code examples");
    break;
  case "thursday":
    console.log("record videos");
    break;

  default:
    console.log("Invalid");
}

//output:record videos
