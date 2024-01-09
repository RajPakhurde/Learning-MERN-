/*

// Methods

* methods are nothing but function inside object.

const person = {
    firstName : "harsh",
    age: 18,
    about: function () {
        console.log(`person name is ${this.firstName}`);
    }
}

person.about();

*********************************************************************

// call , apply , bind

const user1 = {
    firstName: "harshit",
    age: 2,
    about: function(hobby, favMusic) {
        console.log(this.firstName, this.age);
    }
}

const user2 = {
    firstName: "mohit",
    age: 5,
}

user1.about();        * it will print 'harshit 2'
user1.about.call();   * it will print undefine, bcoz if we use call() then we have to pass 'this' value in ()
user1.about.call(user1) * it will print 'harshit 2'
user1.about.call(user2) * if we want to use about method for uer2 as well
user1.about.call(user1, "guitar", "bach");

// apply

* apply is same as call only difference is while calling the method in argument will will pass array insted of normal strings
user1.about.apply(user1, ["guitar", "bach"]);

// bind

* bind will return function so we should store this in variable.
const func = user1.about.bind(user2, "guiter", "bash");
func();

*********************************************************************

// inherite key values from other object

var obj1 = {
    key1: "value1",
    key2: "value2"
}

var obj2 = Object.create(obj1);     * it is creating new object as well as we are seting obj2 __proto__ to obj1
obj2.key3 = "value3";

console.log(obj2);
 
*********************************************************************

// Prototype

function hello() {
    console.log("hello world");
}

// javascript function ====> function + object;   * we can treat function as an object as well.
console.log(hello.name);        * it will print name of the function.

// you can add your own properties
hello.myOwnProperty = "very unique vlue";
console.log(hello.myOwnProperty);

// function provides more userfull properties.

console.log(hello.prototype); // {}   * function provides free space called prototype in whihc we can add key value pairs.

// only functions provide prototype property

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function () {
    return "lalalla";
};

console.log(hello.prototype.sing());

*********************************************************************

// new 

* it will create new object which is equal to 'this'   this = {}
* it will return that object

// constructor function
function CreateUser(firstName, lastName){
    this.firstName = firstName;
    this.lastName= lastName;
}

CreateUser.prototype.about = function() {
    // code here
}

CreateUser.prototype.sing = function() {
    // code here
}

const uer1 = new CreateUser('harsit', 'vashith');
const uer2 = new CreateUser('harsit', 'vashith');

console.log(user1);
console.log(user1.about());

*********************************************************************

// class

class CreateUser {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName= lastName;
    }

    about(){
        //code here
    }
    sing(){
        //code here
    }
}

const uer1 = new CreateUser('harsit', 'vashith');
const uer2 = new CreateUser('harsit', 'vashith');

console.log(user1);
console.log(user1.about());

*********************************************************************

// Inheritance

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating`;
    }

    isCute() {
        return true;
    }
}

class Dog extends Animal {                  * extends keyword is use to inherite properties from parent class
    constructor(name, age, speed) {         * super()   this keyword is use to call the parent class constructor
        super(name, age);
        this.speed = speed;
    }

    run() {
        return `${this.name} is running at ${this.speed} kmph`;
    }
}

*********************************************************************

// getters and setters

class Person {
    constructor(firstName, lastName) {        
        this.firstName = firstName
        this.lastName = lastName;
    }

    get fullName() {                        * getters we use for accessing functions like properties.
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {               * setters we use to modified values 
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("raj", "pakhurde");
console.log(person1.fullName());      * if we are not useing getter
console.log(person1.fullName);      * if we are using getter

person1.fullName = "harshit vashist";
cosnole.log(person1.fullName);

*********************************************************************

// static methods and properties

class Person {
    constructor(firstName, lastName) {        
        this.firstName = firstName
        this.lastName = lastName;
    }
      
    static classInfo() {
        // code here
    }

    static xyzvariable = "dkfjdkf";
}    

*for static methods and static properties we don't have to create object of this class.

Person.classInfo();
console.log(Person.xyzvariable);       * we cannot access this static properties and methods using objects it will give an error.

*********************************************************************
*/


