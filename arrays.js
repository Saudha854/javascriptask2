//Task :1 JS literal notation to store
let studentNames = [];

// Task : 2 Declare an empty array using object notation
let studentnames = new Array();

// Task :3 Declare and initialize a strings array.
let stringsArray = ["Pizza", "juice", "chips"];
console.log(stringsArray); 

// Task: 4 Declare and initialize a number array
let numberArray = [1,2,5,8];
console.log(numberArray);

// TASK :5 declare and initialize a boolean array
let booleanArray = [true, false, true, false];
console.log(booleanArray); 

//Task :6 Declare and initialize a mixed array
let mixedArray = ["Alice", 30, true, null, { key: "value" }];
console.log(mixedArray); 

// Task :7 education qualifications in Pakistan
let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write ("Qualification"+ " " + educationQualifications);

// Task:8 student names in an array
let UserNames = ["Saudha", "Ayesha", "kainat"];

// Store scores of these three students in another array
let studentScores = [480, 250, 380];

// Assume total marks are 500 for each student
let totalMarks = 500;

for (let i = 0; i < UserNames.length; i++) {
    let percentage = (studentScores[i] / totalMarks) * 100;
    console.log('Student Name: ${studentNames[i]}');
    console.log('Score: ${studentScores[i]}');
    console.log('Percentage: ${percentage.toFixed(2)}%');
    console.log("---------------");
}
//Task: 9 
let colors = ["Pink","Yellow","Blue","Green","Orange"];
// Function to display the array
function displayArray(message) {
    document.write("<p>" + message + ": " + colors.join(", ") + "</p>");
}

// Initial array display
displayArray("Initial colors");

// a. Ask user to add a color to the beginning
let colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
if (colorToAddAtBeginning) {
    colors.unshift(colorToAddAtBeginning);
    displayArray("After adding color to the beginning");
}

// b. Ask user to add a color to the end
let colorToAddAtEnd = prompt("Enter a color to add to the end:");
if (colorToAddAtEnd) {
    colors.push(colorToAddAtEnd);
    displayArray("After adding color to the end");
}

// c. Add two more colors to the beginning
colors.unshift("Purple", "Orange");
displayArray("After adding two more colors to the beginning");

// d. Delete the first color in the array
colors.shift();
displayArray("After deleting the first color");

// e. Delete the last color in the array
colors.pop();
displayArray("After deleting the last color");

// f. Ask user at which index to add a color
let indexToAddColor = parseInt(prompt("Enter the index at which to add a color:"));
let colorToAddAtIndex = prompt("Enter the color to add:");
if (!isNaN(indexToAddColor) && colorToAddAtIndex && indexToAddColor >= 0 && indexToAddColor <= colors.length) {
    colors.splice(indexToAddColor, 0, colorToAddAtIndex);
    displayArray("After adding color at index " + indexToAddColor);
} else {
    document.write("<p>Invalid index or color for adding.</p>");
}

// g. Ask user at which index to delete color(s) and how many
let indexToDeleteColor = parseInt(prompt("Enter the index at which to delete color(s):"));
let numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
if (!isNaN(indexToDeleteColor) && !isNaN(numberOfColorsToDelete) && indexToDeleteColor >= 0 && indexToDeleteColor < colors.length) {
    colors.splice(indexToDeleteColor, numberOfColorsToDelete);
    displayArray("After deleting " + numberOfColorsToDelete + " color(s) from index " + indexToDeleteColor);
} else {
    document.write("<p>Invalid index or number for deletion.</p>");
}

// Task: 10 
let Scores = [85, 72, 90, 67, 88, 79, 92];

// Display the original array
console.log("Original Scores: " + Scores.join(", "));

// Sort the array in ascending order
Scores.sort(function(a, b) {
    return a - b;
});

// Task :11 Display the sorted array
console.log("Sorted Scores: " + Scores.join(", "));

// Initialize an array with city names
let cities = ["Lahore", "Islamabad", "Hyderabad", "Peshawar", "Karachi"];

// Copy 3 array elements from cities array to selectedCities array
let selectedCities = cities.slice(0, 3); 

// Display the original cities array
console.log("Original Cities: " + cities.join(", "));

// Display the selected cities array
console.log("Selected Cities: " + selectedCities.join(", "));

// Task :12 Initialize the array
var arr = ["This ", " is ", " my ", " cat"];

// Create a single string from the array using the join method
var singleString = arr.join("");

// Display the resulting string
console.log(singleString); 
// Task :13 Initialize an empty array
let fifoArray = [];

// Store values one by one using push (FIFO principle)
fifoArray.push("First");
fifoArray.push("Second");
fifoArray.push("Third");
fifoArray.push("Fourth");

// Access values in the order they were stored using shift
let firstValue = fifoArray.shift(); 
let secondValue = fifoArray.shift(); 
let thirdValue = fifoArray.shift(); 
let fourthValue = fifoArray.shift(); 

// Display the accessed values
console.log(firstValue);  
console.log(secondValue); 
console.log(thirdValue);  
console.log(fourthValue); 

// Task :14 Initialize an empty array
let lifoArray = [];

// Store values one by one using push (LIFO principle)
lifoArray.push("First");
lifoArray.push("Second");
lifoArray.push("Third");
lifoArray.push("Fourth");

// Access values in reverse order using pop
let firstOutValue = lifoArray.pop(); 
let secondOutValue = lifoArray.pop(); 
let thirdOutValue = lifoArray.pop(); 
let fourthOutValue = lifoArray.pop(); 

// Display the accessed values
console.log(firstOutValue);  
console.log(secondOutValue); 
console.log(thirdOutValue);  
console.log(fourthOutValue); 

// Task:15 Array to store phone manufacturers
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Start the dropdown menu
document.write('<select>');

// Loop through the array to create options
for (let i = 0; i < phoneManufacturers.length; i++) {
    document.write('<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>');
}

// End the dropdown menu
document.write('</select>');

