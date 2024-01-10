// we have created over own module called math.js
const math = require("./math");
console.log(math.add(2,4));


// we can destucture the export object
const {add, sub} = require("./math");
console.log(sub(5,3));

