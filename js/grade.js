// ###grade.js
// Write a program that will print the letter grade, given a variable with a test score.
// Display either "A", "B", "C", "D", or "F", for an score that is an integer between
// 0 and 100.

function letterGrade(num) {
  switch(true) {
    case (num >= 90 && num <= 100):
      console.log("A");
      break;
    case (num >= 80 && num < 90):
      console.log("B");
      break;
    case (num >= 70 && num < 80):
      console.log("C");
      break;
    case (num >= 60 && num < 70):
      console.log("D");
      break;
    case (num >= 0 && num < 60):
      console.log("F, come on, man!");
      break;
    default:
      console.log("Can't have a number less than 0 or greater than 100.")
      break;
  }
}

letterGrade(94);
