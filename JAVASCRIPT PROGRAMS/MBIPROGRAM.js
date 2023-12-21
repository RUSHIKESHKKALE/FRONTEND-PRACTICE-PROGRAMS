var weight = 58;
var height = 1.6;

var BMI = weight / (height * height);

console.log("Your Body Mass Index is: " + BMI + " and");

if (BMI <= 18.5) {
  console.log("You are Underweight.");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("You are healthy.");
} else if (BMI >= 25 && BMI <= 25.9) {
  console.log("You are Overweight.");
} else if (BMI > 30) {
  console.log("You are Obese.");
} else {
  console.log("invalid input");
}
