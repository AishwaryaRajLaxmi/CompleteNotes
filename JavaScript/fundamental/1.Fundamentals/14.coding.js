/* Mark and john are trying to compare therir BMI(body mass index) wich is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) .

->(mass is kg and height in meter)*/

/*1.Store Mark's and John's mass and height in variables
2.Calculate both their BMIs using formula (you can even implement both versions)

3.Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI then john.

*/

const massMark = 70;
const heightMark = 1.69;
const massjohn = 92;
const heightjohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIjohn = massjohn / (heightjohn * heightjohn);
const marksHigherBMI = BMIMark > BMIjohn;

console.log(BMIMark, BMIjohn, marksHigherBMI);
