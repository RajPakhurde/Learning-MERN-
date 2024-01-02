/*
 // Objects

 var houseKeeper = {
    name: "jane",
    age: 12,
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"],
    isFemale: true
 }

 console.log(houseKeeper.name);    * dot notation
 console.log(houseKeeper["name"])  * bracket notaion

*********************************************************************************

// Iterate through objects

for( let key in houseKeeper) {
    console.log(hosueKeeper[key]);   * this will print only values
    console.log(`${key} : ${person[key]}`);   * this will print key value
}

for(let key of object.keys(houseKeeper)) {
    console.log(houseKeeper[key]);
}

*********************************************************************************

// Computed properties

const key1 = "objkey1";
const key2 = "objkey2";

cosnt value1 = "myValue1";
cosnt value2 = "myValue2";

cont obj = {
    [key1] = [value1];
    [key2] = [value2];
}

*********************************************************************************

// spred operator in objects

const obj1 = {
    key1 : "value1";
    key2 : "value2";
}

const obj12 = {
    key3 : "value3";
    key4 : "value4";
}

const newObject = {...obj1, ...obj2, key69: "value69"};


*********************************************************************************
 // Constructor funtion for createing Objects

 function HouseKeeper(name, age , cleaingRepertoire , isFemale) {
    this.name = name;
    this.age = age;
    this.cleaningRepertoire = cleaningRepertoire;
    this.isFemale = isFemale;
    this.clean = function () {
        alert("Cleaning in progress");
    }
 }

 // inisializing objects

 var housekeeper1 = new HouseKeeper("jane", 12, ["bathroom", "bedroom"], true);

*********************************************************************************

// Object Destructuring

const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1999,
    newSong: "kashmir"
};

let {bandName, famousSong, ...newObj} = band;


*********************************************************************************

// Objects inside array

const users = [
    {userId: 1, firstName: "harshit", gender: 'male},
    {userId: 2, firstName: "rohit", gender: 'male},
    {userId: 3, firstName: "raj", gender: 'male},
]

for(let user of users) {
    console.log(user.userId);
}

* Desturcturing objects

cosnt [user1, user2, user3] = users;      * in user1, user2 and user3 variable objects will be store
const [{fristName: userFirstName, userId}, , {gender: user3Gender}];         * in userfirstName variable it will store 'harshit' and in user3Gender it will store 'male'
*********************************************************************************
 // Switch Statement

 switch (key) {
    case value:
        
        break;

    default:
        break;
}

*****************************************************************

// Higher Order Functions

* Higher order funcations are the functinons which take functions as an input.

button.addEventListner('click', funtionxyz);

function functionxyz() {

}

* In above code addEventListner is the higher order function.

// CallBacks

* callbacks are the function which is we are passing as an argument
  in abouve example functionxyz is the callback function.

*/

