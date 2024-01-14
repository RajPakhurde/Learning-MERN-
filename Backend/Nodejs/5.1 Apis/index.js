import axios from "axios";
const URL = "https://api.wheretheiss.at/v1/satellites/25544";

// async function getLocation () {
//      const response = await fetch(URL);
//      console.log(typeof response);
//      const data = await response.json()
//      console.log(typeof data);
//      console.log(data);   
//      return data;       
// }

// console.log(typeof getLocation);
// getLocation()
//     .then((data) => {
//         const latitude = data.latitude;
//         const longitude = data.longitude;
//         return `Latitude is : ${latitude} and Logitude is :  ${longitude} `
//     })
//     .then((res) => {
//         console.log(res);
//     })

async function getLocation() {
    const response = await axios.get(URL);
    const data = response.data;
    return data;
}

getLocation()
    .then((data) => {
            
        const latitude = data.latitude;
        const longitude = data.longitude;
        return `Latitude is : ${latitude} and Logitude is :  ${longitude} `
    })
    .then((res) => {
        console.log(res);
    })