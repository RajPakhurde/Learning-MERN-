/*
// BASIC THEORY

// AJAX : asynchronous javascript and XML

Http request

is a set of "web development techniques"
using many web technologies on the "client-side"
to create asynchronous web applications.

With Ajax, web applications can send and retrieve 
data from a server asynchronouly (in the background)
without interfering with the display and 
behaviour of the existing page

We don't use data in XML format anymore.
we use JSON now.

we have 3 most commonm ways to create and send request to server

1. xmlHttpRequest (old way of doing)
2. fetch API (new way of doing)
3. asiox (this is thrid party library)

*******************************************************************************


// xmlHttpRequest


const URL = "https://jsonplaceholder.typicode.com/posts";
// we are creating new object of xmlhttprequest
const xhr = new XMLHttpRequest();

// requesting data from the url
xhr.open("GET", URL);

// when ready state will change this function will run
// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4) {
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//     }
// }

xhr.onload = () => {
    if(xhr.status >= 200 && xhr.response < 300) {
        const response = xhr.response;
        const data = JSON.parse(response);
        console.log(data);
    } else {
        console.log("someting went wrong");
    }
}

// onerror will run when there is network problem or network disconnected of client side.
xhr.onerror = () => {
    console.log("network error");
}

xhr.send();


*******************************************************************************

// xmlHttprequest using promises


const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(mehtod, url) {
    return new Promise((resove, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(mehtod, url);
        xhr.onload = function () {
            if(xhr.status >= 200 && xhr.status < 300) {
                resove(xhr.response);
            } else {
                reject(new Error("Something went wrong"));
            }
        }

        xhr.onerror = function () {
            reject(new Error("Something went wrong"));
        }

        xhr.send();
    })
}

sendRequest("GET", URL)
    .then(resopnse => {
        const data = JSON.parse(resopnse);
        return data;
    })
    .then(data => {
         const id = data[3].id;
         return id;
    })
    .then(id => {
        const url = `${URL}/${id}`;
        return sendRequest("GET", url);
    })
    .then(newResponse => {
        const newData = JSON.parse(newResponse);
        console.log(newData);
    })
    .catch(err => {
        console.log(err);
    })
 
*******************************************************************************

// fetch api


const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
 .then(response => {
       if(response.ok) {
            return response.json();
        }
        else {
            throw new Error("Something went wrong");
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

 *******************************************************************************

 // async await

console.log("Script start");

const URL = "https://jsonplaceholder.typicode.com/posts";

async function getPost () {
    const resopnse = await fetch(URL);
    if(!resopnse.ok) {
        throw new Error("Something went wrong");
    }
    const data = await resopnse.json()
    return data;
}

getPost()
    .then(data => {
        return data[2];
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })


console.log("Script end");    

*/

console.log("Script start");

setTimeout(() => {
    console.log("inside settimout");
}, 1000);

console.log("Script end");
 