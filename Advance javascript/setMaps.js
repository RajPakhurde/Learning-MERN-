/*
//Iterables
*Arrays
*Strings
*sets

// set
// store data
// sets also have its own methods
// NO index-based access
// order is not guranteed
// uinque items only only (no duplicates allowed)

const numbers = new Set([1,2,3,4]);

// set methods

const numbers = new set();

* add
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(['item1','item2']);

* has

if(numbers.has(1)) {           // it will return true or false
    // code here...
}


*************************************************************************

* in object keys are only strings and symbols but in maps we can define any type of keys

// Maps

const person = new Map();

person.set('firstName', 'harshit');
person.set('age', 8);
person.set(1, 'one');

const person1 = {
    id: 1,
    firstName: "raj"
}

const person2 = {
    id: 2,
    firstName: "rohit"
}

const extraInfo = new Map();
extraInfo.set(peron1, {age: 8, gender: "male"});
extraInfo.set(peron2, {age: 9, gender: "male"});

console.log(person.id);
console.log(extraInfo.get(person1).gender);

*************************************************************************

// clone using Object.assign

const obj = {
    key1: "value1",
    key2: "value2"
}

* using spread operator
const obj2 =  {...obj};

* using object.assin
const obj2 = Object.assign({}, obj);

*************************************************************************

// optional chaining

const user = {
    firstName: "harshit",
    address: {houseNumber: '1234'}
}

console.log(user?.firstName);
console.log(user?.address?.houseNumber);

*************************************************************************


*/

