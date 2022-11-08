/*
Logical operators are used to determine the logic between variables or values.
*/

const hasDriverLicence = true; //A
const hasGoodVision = false; //B

console.log(hasDriverLicence && hasGoodVision); //output:false;
console.log(!hasDriverLicence); //output:false

const shouldDrive = hasDriverLicence && hasGoodVision;

if (shouldDrive) {
  console.log("sarah is able to drive");
} else {
  console.log("Someone else should drive");
}

//output:Someone else should drive

const isTired = false;
console.log(hasDriverLicence && hasGoodVision && isTired); //false
if (hasDriverLicence && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}

//output:Someone else should drive
