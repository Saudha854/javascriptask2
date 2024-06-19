//take “city” name as input from user.
let city = prompt("Enter a city name");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights!");
}

//take “gender” as input from user.
let Gender = prompt("Enter your gender");
if (Gender.toLowerCase() === "male") {
    alert("Good Morning Sir");
}else if (Gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am");
  }
  // Traffic signal program
  let color = prompt("Enter a color");
  if (color.toLowerCase() === "red") {
      alert("Must Stop");
  } else if (color.toLowerCase() === "yellow") {
      alert("Ready to move");
  } else if (color.toLowerCase() === "green") {
      alert("Move now");
  }

  //input remaining fuel in car
  let fuel = prompt("How much fuel is remaining?");
if (fuel.toLowerCase() <= "0.25litres") {
    alert("Please refill the fuel in your car");
}

// Run this script 
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
}

// Prompt user for marks in three subjects
let subject1 = parseInt(prompt("Enter marks for Subject 1:"));
let subject2 = parseInt(prompt("Enter marks for Subject 2:"));
let subject3 = parseInt(prompt("Enter marks for Subject 3:"));
let totalMarks = parseInt(prompt("Enter total Marks"));

// Calculate total obtained marks and percentage
let marksObtained = subject1 + subject2 + subject3;
let percentage = (marksObtained / totalMarks) * 100;
let grade, remarks;

// Determine grade and remarks based on the percentage
if (percentage >= 90) {
    grade = 'A+';
    remarks = 'Excellent';
} else if (percentage >= 80) {
    grade = 'A';
    remarks = 'Very Good';
} else if (percentage >= 70) {
    grade = 'B';
    remarks = 'Good';
} else if (percentage >= 60) {
    grade = 'C';
    remarks = 'Fair';
} else if (percentage >= 50) {
    grade = 'D';
    remarks = 'Pass';
} else {
    grade = 'F';
    remarks = 'You need to improve';
}

// Display the mark sheet
document.write("Mark Sheet:<br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);

// Guess game
let secretNumber = 8;
let guessedNumber = parseInt(prompt("Enter a number ranging from 1 to 10")); 

if (guessedNumber === secretNumber) {
    alert("Bingo! Correct answer");
} else if (guessedNumber + 1 === secretNumber) {
    alert("Close enough to the correct answer");
}

//Given number is divisible by 3.
let number = parseInt(prompt("Enter a number"));
if (number%3 === 0) {
    alert ("Given number is divisible by 3");
} else{
    alert ("Given number is not divisible by 3");
}
// given input is an even number or an odd number.
let givenNumb = parseInt(prompt("Enter a number"));
if (givenNumb%2 === 0){
    alert ("you have entered Even number");
} else {
    alert (" you have entered odd number");
}
//takes temperature as input
let temperature = parseFloat(prompt("Enter the temperature"));

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today's Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today's weather is so Cool.");
} else {
    alert("It is very cold outside.");
}

// Simple Calculator
let firstNumber = parseFloat(prompt("Enter the first number"));
let secondNumber = parseFloat(prompt("Enter the second number"));
let operation = prompt("Enter the operation (+, -, *, /, %)");
let result;
if (operation === "+") {
    result = firstNumber + secondNumber;
    alert("Result: " + result);
} else if (operation === "-") {
    result = firstNumber - secondNumber;
    alert("Result: " + result);
} else if (operation === "*") {
    result = firstNumber * secondNumber;
    alert("Result: " + result);
} else if (operation === "/") {
    result = firstNumber / secondNumber;
    alert("Result: " + result);
}else if (operation === "%"){
    result = firstNumber % secondNumber;
    alert ("Result:" + result);
}