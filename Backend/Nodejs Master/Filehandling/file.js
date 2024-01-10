const fs = require("fs");

fs.writeFileSync("./test.txt", "Hey there");

// syncronas will return so we have to store in variable
const result = fs.readFileSync("./test.txt", "utf-8");
console.log(result);

// async.. 
fs.readFile("./test.txt", "utf-8", (err, result) => {
    if(err){
        console.log(err);
    } else {
        console.log(result);
    }
})

// add aditional data to file
fs.appendFileSync("./test.txt", "\nhello world")

// copy files
// fs.cpSync("./test.txt", "./copy.txt");

// delete file
// fs.unlinkSync("./copy.txt");

// create folders
// fs.mkdirSync("my-docs");

// create folders inside folders
// fs.mkdirSync("my-docs/a/b", {recursive: true});

// delete folder
// fs.rmdirSync("my-docs");