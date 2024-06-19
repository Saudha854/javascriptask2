// Task :1 
let input = prompt("Enter a character:");

// Check if the input is exactly one character long
if (input.length !== 1) {
    console.log("Please enter exactly one character.");
} else {
    // Get the ASCII code of the input character
    let asciiCode = input.charCodeAt(0);

    // Check if the input is a number
    if (asciiCode >= 48 && asciiCode <= 57) { // ASCII codes for 0-9
        console.log("The input is a number.");
    }
    // Check if the input is an uppercase letter
    else if (asciiCode >= 65 && asciiCode <= 90) { // ASCII codes for A-Z
        console.log("The input is an uppercase letter.");
    }
    // Check if the input is a lowercase letter
    else if (asciiCode >= 97 && asciiCode <= 122) { // ASCII codes for a-z
        console.log("The input is a lowercase letter.");
    }
    // If the input is none of the above
    else {
        console.log("The input is neither a number nor a letter.");
    }
}
//Task: 2
let num1 = parseInt(prompt("Enter the first integer:"));

// Prompt user to enter the second integer
let num2 = parseInt(prompt("Enter the second integer:"));

// Check if the input is valid
if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid input. Please enter valid integers.");
} else {
    // Compare the two integers and display the larger one or if they are equal
    if (num1 > num2) {
        console.log(`The larger number is: ${num1}`);
    } else if (num1 < num2) {
        console.log(`The larger number is: ${num2}`);
    } else {
        console.log("Both numbers are equal.");
    }
}
//Task: 3
let userInput = prompt("Enter a number:");

// Convert the input to a number
let number = parseFloat(userInput);

// Check if the input is a valid number
if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    // Determine if the number is positive, negative, or zero
    if (number > 0) {
        console.log("The number is positive.");
    } else if (number < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}
//Task: 4
let char = prompt("Enter a single character:");

// Check if the input is exactly one character long
if (char.length !== 1) {
    console.log("Please enter exactly one character.");
} else {
    // Convert the character to lowercase to handle both cases
    let lowerChar = char.toLowerCase();


    let vowels = ['a', 'e', 'i', 'o', 'u'];

    // Check if the character is a vowel
    if (vowels.includes(lowerChar)) {
        console.log(true); 
    } else {
        console.log(false); 
    }
}
//Task: 5
let correctPassword = "Password123";

// b. Ask user to enter his/her password
let userPassword = prompt("Please enter your password:");

// c. Validate the two passwords
if (userPassword === "") {
    // i. Check if user has entered a password
    console.log("Please enter your password");
} else if (userPassword === correctPassword) {
    // ii. Check if both passwords are the same
    console.log("Correct! The password you entered matches the original password");
} else {
    // Show “Incorrect password” otherwise
    console.log("Incorrect password");
}
//Task:6 
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting); 

// Task:7 
let time24 = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");

// Extract hours and minutes from input
let hours24 = parseInt(time24.substring(0, 2));
let minutes = time24.substring(2, 4);

// Initialize variables for 12-hour format
let hours12;
let period;

// Validate the input
if (isNaN(hours24) || isNaN(minutes) || hours24 < 0 || hours24 > 23 || minutes < 0 || minutes > 59) {
    console.log("Invalid time format. Please enter time in 24-hour format (e.g., 1900).");
} else {
    // Convert 24-hour time to 12-hour time
    if (hours24 === 0) {
        hours12 = 12;
        period = "AM";
    } else if (hours24 === 12) {
        hours12 = 12;
        period = "PM";
    } else if (hours24 > 12) {
        hours12 = hours24 - 12;
        period = "PM";
    } else {
        hours12 = hours24;
        period = "AM";
    }

    // Output the converted time
    console.log(`The time is ${hours12}:${minutes} ${period}`);
}
