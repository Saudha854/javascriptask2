//Task: 1 Initialize an empty multidimensional array.
let A = [[],[],[]];
//Task:2 initialize a multidimensional array representing matrix
let B = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
console.log ("B=",B);
//Task: 3 program to print numeric counting from 1 to 10.
for (let input = 1; input <= 10; input++) {
    console.log(input);
   }

//Task:4 program to print multiplication table
let number = parseInt(prompt("Enter a number to show its multiplication table"));
let range = parseInt(prompt("Enter a range to show its multiplication table"));

for (let i = 1; i <= range; i++) {
    let result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}
//Task: 5 program to print items of the following array
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
console.log (fruits);

// Task: 6 Counting from 1 to 15
let counting = [];
for (let i = 1; i <= 15; i++) {
    counting.push(i);
}
console.log (counting);

// Reverse counting from 10 to 1
let reverseCounting = [];
for (let i = 10; i >= 1; i--) {
    reverseCounting.push(i);
}
console.log (reverseCounting);

// Even numbers 
let even = [];
for (let i = 0; i <= 20; i += 2) {
    even.push(i);
}
console.log (even);

// Odd numbers 
let odd = [];
for (let i = 1; i <= 20; i += 2) {
    odd.push(i);
}
console.log (odd);

// Series with the k
let series = [];
for (let i = 2; i <= 20; i += 2) {
    series.push(i + "k");
}
console.log (series);

// Task :7 Given array
let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

// Example usage: Search by user input
let userInput = prompt("Enter an item to search:");

// Check if the item is in the array
if (bakeryItems.includes(userInput.toLowerCase())) {
    console.log(userInput + " is found in the list.");
} else {
    console.log(userInput + " is not found in the list.");
}

// Task :8 Given array
const C = [24, 53, 78, 91, 12];

// Finding the largest number 
const largestNumber = Math.max(...C);
console.log("The largest number in the array is:", largestNumber);

// Task :9 Given array
const D = [24, 53, 78, 91, 12];

// Finding the smallest number 
const smallestNumber = Math.min(...D);

// Display the largest number
console.log("The smallest  number in the array is:", smallestNumber);

// Task :10 program to print multiples of 5 ranging 1 to 100
for (let multiple= 5; multiple <= 100; multiple += 5 ){
    console.log (multiple)
}
