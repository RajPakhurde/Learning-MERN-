/*
// HOw to generate random number

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Expected output: 0, 1 or 2

console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number from 0 to <1

******************************************************

// Conditional statements

if (condition) {
    
} else {
    
}

*******************************************************

// Reference types DATA TYPE

// Arrays

var guestList = ["raj","jack", "pam"];
console.log(guestlist);
console.log(guestList[1]);   ans:- jack

console.log(Array.isArray(guestList));   ans:- it will return true if it is array.

guestList.includes("raj");   ans:- it will return ture if given input is in array

guestList.push("hello");     ans:- it will add "hello" in array at the end of array

guestLIst.pop();             ans:- it will remove last element

guestList.unshift("rohit")   ans:- it will add "rohit" at the begining of array.

guestList.shift();           ans:- it will remove element from start.

********************************************************

// Clone array

let array1 = ["item1", "item2"];

let array2 = array1.slice(0);
let array2 = [].concat(array1);

*spread operator
let array2 = [...array1];


let array2 = array1.slice(0).concat(["item3", "item4"]);
let array2 = [].concat(array1, ["item3", "item4"]);
let array2 = [...array1, ...oneMoreArray];



********************************************************
// loops

while (condition) {
  // code here
}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

for( let fruit of fruits) {
  console.log(fruit);
}

for (let index in fruits) {
  console.log(index);
}

********************************************************

// Array Destructuring

const myArray = ["value1", "value2", "value3"];

let [myvar1, myvar2] = myArray;

* if we want to skip any value 
let [myvar1, , myvar2] = myArray;

* if we want to put value2 and vlaue3 in seperate array
let [myvar1, ...newArray] = myArray;


********************************************************

 
*/



