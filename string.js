//Task :1 program that takes two user inputs
let firstName = prompt ("Enter your first name");
let secondNmae = prompt ("Enter your second name");

//merge them in a new variable
let fullName = firstName + " " + secondNmae;

//Greet the user using his full name
alert ("Welcome to our Page" + " " + fullName);

// Task :2 program to take a user input
let phoneModel = prompt ("Enter your favourite mobile phone model");
 if (phoneModel){
    let inputlength = phoneModel.length;
    alert ("My favourite phone is:" + " " + phoneModel + " " + "Length of String:"+ " " + inputlength);
 }

//Task:3 program to find the index of letter “n”
let word = "Pakistani";
let index = word.indexOf ("n");
document.write ("String:" + " " + word + "<br>"  + "index of n :" + " " + index);

//Task:4 find the last index of letter “l”
let phrase = "Hello World";
let lastindex = phrase.lastIndexOf ("l");
document.write ("<br>" +"String:" + " " + phrase + "<br>"  + "index of l :" + " " + lastindex);

//Task: 5 find the character at 3rd index
let country = "Pakistani";
let character = word.charAt (3);
document.write ("<br>"+"String:" + " " + country + "<br>"  + "character at index 3 :" + " " + character);


// Task:6 Repeat Q1 using string concat() method
let FirstName = prompt("Enter your first name")
let secondName = prompt("Enter your second name")

// Check if both inputs are provided
if (FirstName === "" || secondName === "") {
    alert("Please enter both your first and second names.");
} else {
    // Merge them into a new variable
    let fullName = FirstName + " " + secondName;

    // Greet the user using their full name
    alert("Welcome to our page, " + fullName + "!");
}

//Task:7 replace the “Hyder” to “Islam
let originalWord = "Hyderabad";
let newWord = originalWord.replace ("Hyder" , "Islam");
document.write ( "<br>" +"City:" + " " + originalWord + "<br>" + "After replacement:" + " " + newWord);

//Task:8 replace “and” in the string with “&”
let originalMessage = "“Ali and Sami are best friends. They play cricket and football together";
let newMessage = originalMessage.replace (/and/g, "&");
document.write ("<br>" +"let message =" + " " + newMessage);

//Task:9 program that converts a string “472” to a number 472
let originalString = "472";
let convertedNumber = parseInt(originalString);
document.write ( "<br>" +"Value:" + " " + originalString + "<br>" + "Type:" + " " + typeof originalString);
document.write ("<br>" +"Value:" + " " + convertedNumber + "<br>" + "Type:" + " " + typeof convertedNumber);

//Task:10 Convert and show the input in capital letters
let userInput = prompt ("Write a word");
let newInput = userInput.toUpperCase();
document.write ("<br>" +"User Input:" + " " + userInput + "<br>" + "Upper case:" + " " + newInput);

//Task:11 Convert and show the input in title case
let language = prompt ("Which programming language you use?");
let titlecase = language.split (' ').map(word => 
    word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
).join(' ');
document.write ("<br>" +"User Input:" + " " + language + "<br>" + "Title case:" + " " + titlecase);

//Task:12 converts the variable num to string.
let numb = 35.36;
let newNumb = numb.toString().replace(".","");
document.write ("<br>" +"Number:" + " " + numb + "<br>" + "Replace:" + " " + newNumb);

//Task:13 take user input and store username in a variable
let userName = prompt ("Enter a User name");
if (userName.includes ("@")|| userName.includes (".")|| userName.includes (",")|| userName.includes ("!")){
alert ("Please enter a valid user name");
}else {
    alert("Username accepted: " + userName);
}

//Task:14 Perform case insensitive search
let A = ["cake", "Apple pie", "Cookie", "Chips", "Patties"];
let userOrder = prompt("Welcome to Appetizing Bakers! What do you want to order Sir/Ma'am?");
if (userOrder !== null) {  
    userOrder = userOrder.toLowerCase();  
    let itemFound = A.some(item => item.toLowerCase() === userOrder);  
    if (itemFound) {
        let userIndex = A.findIndex(item => item.toLowerCase() === userOrder);
        alert( userOrder + " " + "is availabe at index" + " " + userIndex);
    } else {
        alert("Item not found.");
    }
} 
//Task:15 program to take password as an input from user
let valid = false;
let password;

while (!valid) {
    password = prompt("Enter a strong password:");
if (password !== null) {
// at least 6 characters long
if (password.length >= 6) {
// Check if the password start with a number
if (isNaN(password.charAt(0))) {
// Check if the password contains both alphabets and numbers
let hasNumbers = /\d/.test(password);
let hasAlphabets = /[a-zA-Z]/.test(password);

 if (hasNumbers && hasAlphabets) {
alert("Password is valid.");
 valid = true; 
} else {
alert("Password must contain both alphabets and numbers.");
}
} else {
 alert("Password should not start with a number.");
}
} else {
alert("Password must be at least 6 characters long.");
}
} 
}

// Task:16 Convert String to array 
let university = "University of Karachi";
let characters = university.split('');  // Splitting string into characters
document.write("Array elements:<br>");
characters.forEach(function(character) {  // Use 'character' to correctly reflect the content
    document.write(character + "<br>");
});
// Task:17 write a programm to display last character
let UserInput = prompt("Enter a string:");

if (UserInput.length === 0) {
    console.log("You must enter a string.");
} else {
    let lastCharacter = userInput.charAt(userInput.length - 1);

    console.log("The last character of the input is: " + lastCharacter);
}


// Task:18to count number of occurrences of word “the” in given string
let str = "The quick brown fox jumps over the lazy dog";
let letter = "the";
let regex = new RegExp("\\b" + letter + "\\b", "gi"); 
let count = (str.match(regex) || []).length; 
document.write ( "<br>" +"The word '" + letter + "' appears " + count + " times in the given string.");