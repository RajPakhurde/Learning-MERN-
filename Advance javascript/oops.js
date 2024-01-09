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



*/


