/*
// setTimeout 
 * it will call only one time after given time

 console.log("script start");

 const id = setTimeout(() => {
     console.log("inside setTimeout");
 }, 1000);

 for (let i = 0; i< 100; i++) {
     console.log(".....");
 }

 console.log("setTimeout id is ", id);
 console.log("clearing time out");

 clearTimeout(id);

 console.log("Script end");

// output
 script start
 (100) .....
 setTimeout id is 1
 clearing time out
 Script end         * if we have useing clearTimeout(id) it will not run that function.

 *if we don't use clearTimeout(id)

// output
 script start
 (100) .....
 setTimeout id is 1
 Script end 
 inside setTimeout

***************************************************************************************************

// setInterval

 * it is use to call that function after some interval again and again

 console.log("script start");

 setInterval(() => {
     console.log(".....");
 }, 1000);

 function myfunc() {
     setTimeout(() => {
          console.log("settimout .....");
     }, 1000);
      console.log("Inside function");
  }

  myfunc();

 console.log("script end");

***************************************************************************************************



// callback

function getTowNum(callback, ...num) {
    callback(num);
}


var total = 0;
function addTwoNum(num) {
    num.forEach(element => {
        total += element;
     });
     console.log(total);
}

getTowNum(addTwoNum,3,4,5,6,7,10);

***************************************************************************************************

// callback hell

setTimeout(() => {
    code here
    setTimeout(() => {
    code here
        setTimeout(() => {
        code here
             setTimeout(() => {
               code here
             },1000)
        },1000)
    },1000)
},1000)


***************************************************************************************************

// Promises



const bucket = ["coffee", "chips", "vegetables", 'salt', "rice"];

// here we have produce promise
const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    resolve("Fried Rice");
  } else {
    reject("coudn't do it");
  }
});

// here we are consuming promise

setTimeout(() => {
    console.log("inside settimeout");
}, 0);

friedRicePromise.then(
  // jab promise resolve hoga  
  (myFriedRice) => {
    console.log("lets eat", myFriedRice);
  },
  // jab promise reject hoga
  (err) => {
    console.log(err);
  }
);


***************************************************************************************************

// Function returning promise


function ricePromise() {
    const bucket = ["coffee", "chips", "vegetables", 'salt', "rice"];
    
    return new Promise((resolve, reject) => {
        if(bucket.includes("vegetables") &&
        bucket.includes("salt") &&
        bucket.includes("rice")) {
            resolve({value: "Friedrice"});
        } else {
            reject("Coudn't find it");
        }
    })
}

ricePromise().then((myfriedrice) => {
    console.log("lets eat", myfriedrice);
}, (err) => {
    console.log(err);
})


***************************************************************************************************

// promise and settimeout
// I want to resolve / reject promise after 2 seconds


function myPromsie() {
    return new Promise((resolve, reject) => {
        const value = false;
        setTimeout(() => {
            if(value) {
                resolve();
            } else {
                reject();
            }
        }, 2000)
    })
}

myPromsie()
    .then(() => {console.log("resolved");})
    .catch(() => {console.log("rejected");})

***************************************************************************************************

// Promise.resolve

const myPromise = Promise.resolve(5);

myPromise.then((value) => {
    console.log((value));
})


***************************************************************************************************

// Promise caining
    

function myPromise() {
    return new Promise((resolve, reject) => {
        resolve("foo");
    })
}

myPromise()
    .then((value) => {
        console.log(value);
        value += "bar";
        return value;    // internally it is reaturing promise like return Promise.resolve(value);
    })
    .then((value) => {
        console.log(value);
    })
***************************************************************************************************

// real project Promises example

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");

function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.style.color = color;
                element.textContent = text;
                resolve();
            } else {
                reject();
            }
        }, time);
    })
}

changeText(heading1, "One", "red", 1000)
  .then(() => changeText(heading2, "two", "purple", 1000))
  .then(() => changeText(heading5, "three", "green", 1000))
  .then(() => changeText(heading4, "four", "orange", 1000))
  .then(() => changeText(heading3, "five", "blue", 1000))
  .then(() => changeText(heading6, "six", "brown", 1000))
  .then(() => changeText(heading7, "seven", "yellow", 1000))
  .then(() => changeText(heading8, "eight", "black", 1000))
  .catch(err => {
    console.log(err);
  })

  ***************************************************************************************************
  
*/