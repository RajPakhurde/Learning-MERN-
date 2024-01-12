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
*/
