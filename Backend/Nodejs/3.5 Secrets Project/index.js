//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
let password = "";

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

function getPassword(req, res, next) {
    password = req.body["password"];
    next();
}
app.use(getPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res) => {
    //  password = req.body["password"];
     if(password === "ILoveProgramming") {
        res.sendFile(__dirname + "/public/secret.html")
     } else {
        // res.sendFile(__dirname + "/public/index.html");
        res.redirect("/")
     }
})

app.listen(port, (req, res) => {
    console.log(`Server running on ${port}`);
})