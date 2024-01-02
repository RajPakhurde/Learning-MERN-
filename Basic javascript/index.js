/*
alert("Hello world");
Promt("What is your name?");

*************************************************

// Data types

/* Primitive Data Types.

1. String: "Hello world"
2. number: 123
3. boolean: ture or false
4. undefined
5. null
6. BigInt
7. symbol

var firstName = "raj";
console.log(typeof firstName);
* we can check type of any variable using typeof(variablename) or typeof variablename;

// undefined

let firstName;
console.log(typeof firstName);       * it will print undefined.

const firstName;
console.log(typeof firstName);       * it will give an error bcoz when we const to declare a variable we have to inisialize the variable at the time of declearatino only other wise it will give an error.

// BigInt

let myNumber = BigInt(23782382783728738273827382);
let sameMyNumber = 21313n;
 
// *******************************************

// Variables
 
var myName = "Raj";          * we can change value of variable and we can redefine same variable.
let myName = "raj";          * We can change value of variable but we cannot redefine same variable with let.
const pi = 3.14;            * we cannot change value of this variable.
 

// ******************************************************

// Name Conventions
 
1. should not be keywords
2. should not start with number
3. should not contain space
4. should only contain abc123$_
5. use camel case
 
*************************************************

// String indexing

let firstName = "raj";
console.log(firstName[1]);       * It will print 'a'

*****************************************************

// String Methods

let firstName = "   Harshit  "

// trim()   * It will remove all white spaces
firstName = firstName.trim();

// toUpperCase()  * It will make string capital
firstName = firstName.toUpperCase();

// slice()   * It will return subpart of string.
 
var name = "Angela";
name.slice(0,3);   ans:- Ang
name.slice(0,1);   ans:- A
name.slice(1,3);   ans:- ng

**************************************************

// convert number to string

let age = 12;
age = age + "";    * we have to add empty string to number.
age = String(age); * this is second method to convert.

// convert string to number
 
let myStr = +"34"   * we have to add + before string.
myStr = Number(myStr) * this is second method to convert.

********************************************************

// Concatenation String

alert("hello there, " + myname + " is Raj");

// Template string
let age = 22; 

let name = "raj";
let aboutMe = `my name is ${name} and my age is ${age}`;


****************************************************************

// truthy and falsy values

// truthy values
1. "abc"
2. 1, -1

// falsy values
1. ""
2. null
3. false
4. undefined
5. 0

**************************************************************

// Ternary operator / conditional operator

let age = 15;
let drink = age >= 5 ? "coffee" : "milk";

****************************************************************


*/