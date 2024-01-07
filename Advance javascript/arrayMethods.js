/*
// important array methods

// forEach

const numbers = [4,2,5,8];

numbers.forEach(function(number, index) {
    console.log(`index is ${index} number is ${number}`);
})


const users = [
    {fisrtName: "harshit", age: 23},
    {fisrtName: "mohit", age: 23},
    {fisrtName: "raj", age: 23},
    {fisrtName: "nitsh", age: 23},
    {fisrtName: "garima", age: 23}
]

users.forEach((user) => {
    console.log(user.firstName, index);
})

****************************************************************************

// map

* map method will new array so we have to store in different variable to access it.
* it should return new array.

const numbers = [3,4,6,1,8];

const squareNumber = numbers.map((number, index) => {
    return ` index: ${index}, ${number * number}`
})

console.log(squareNumber)

const users = [
    {fisrtName: "harshit", age: 23},
    {fisrtName: "mohit", age: 23},
    {fisrtName: "raj", age: 23},
    {fisrtName: "nitsh", age: 23},
    {fisrtName: "garima", age: 23}
]

const userNames = users.map((user) => {
    return user.firsName;
})

console.log(userNames);

****************************************************************************

// filter 

*flter method will return true or false and if its true than it will store that value in new array.

const numbers = [1,2,3,4,4];

const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0 ;
})

console.log(evenNumbers);

****************************************************************************

// reduce

const numbers = [1,2,3,4,4,5];

numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;               * it will give sum of all elements of array
})


cosnt userCart = [
    {productID: 1, productName: "mobile", price: 12000},
    {productID: 2, productName: "laptop", price: 32000},
    {productID: 3, productName: "cain", price: 42000}
]

coast totalAmoutn = userCart.reduce((totalPrice, cureentProduct) => {
    return totalPrice + currentProduct.price;
}, 0);      * here 0 is the initial value of acumulator


****************************************************************************

// sort

* In javascript this array values will first convert into stirngs and than according to asci value it will sort the array.

const numbers = [5,9,1200,410,3000];
numbers.sort((a,b) => {
    return a-b;          * for accending order for descending b-a;
})

****************************************************************************

// find

* it will return first occurance according to condition

const myArray = ["hello", "cat", "dog", "lion"];

const ans = myArray.find((string) => string.length == 3);
console.log(ans);

const users = [
    {userId: 1, userName: "harshit"},
    {userId: 2, userName: "harsh"},
    {userId: 3, userName: "nitish"},
    {userId: 4, userName: "mohit"},
    {userId: 5, userName: "aditya"}
];

const myUser = users.find((user) => user.userId === 3);
console.log(myUser);

****************************************************************************

// every

* every method will return true if every element in array is true according to condition

const numbers = [2,4,6,8,10];
const ans = numbers.every((num) => num%2===0);
console.log(ans);       * it will return true


cosnt userCart = [
    {productID: 1, productName: "mobile", price: 12000},
    {productID: 2, productName: "laptop", price: 32000},
    {productID: 3, productName: "cain", price: 42000}
]

cosnt ans = userCart.every((cartItem) => cartItem.price < 30000);
console.log(ans);

****************************************************************************

// some

* if any element satisfies the condition it will return true

const numbers = [2,4,6,8,10];

const ans = numbers.some((num) => num%2 ===0);
console.log(ans);

****************************************************************************

// fill
// value, start, end


const myArray = new Array(10).fill(-1);
console.log(myArray);

const myArray = [1,2,3,4,5,6,7];
myArray. fill(0,2,5);
console.log(myArray);      * it will fill like :- 1,2,0,0,0,6,7,8

****************************************************************************

// splice 
// start , delete, insert

const myArray = ["item1", "item2", "item3"];

//delete
myArray.splice(1,1);
console.log(myArray);   *ans :-  ['item1', 'item3']

// insert
myArray.splice(1,0,"iserted item");
console.log(myArray)      * ans :- ['item1', 'inserted item', 'item3'];

// insert and delete
myArray.splice(1,2,'inserted item1', 'inserted item2');
console.log(myArray);   * ans :- ['item1', 'inserted item1', 'inserted item2'];

*/
