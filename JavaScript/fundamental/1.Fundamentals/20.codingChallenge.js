/*Calculate the average score for each team, using the test data below

2.Compare the team's average scores to determine the winner of the competition, and print it to the console, 
Don't forget that there can be a draw, so test for that as well (draw means they have the average score).

3.BONUS 1:Include a requirement for a minimum score of 100. with this rule, a team only wins if it has a higher score than the other tean and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks

4.BONUS 2:Minimum score also applies to a draw! so a draw only happens when both teams have the same score and both have a score greateer or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA:Dolphins score 96, 108 and 89. Koasas score 88, 91 and 110

TEST DATA BONUS 1:Dolphins score 97, 112 and 101.Koalas scrore 109, 95 and 123

TEST DATA BONUS 2:Dolphins score 97, 112 and 101.Koalas score 109, 95 and 106

*/

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100)
  console.log("Dolphin wins");
else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100)
  console.log("Koalas wins");
else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
)
  console.log("Both win the trophy");
else console.log("No one wins the trophy");
