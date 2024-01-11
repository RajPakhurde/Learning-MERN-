import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let name = "";

app.use(bodyParser.urlencoded({ extended: true }));

function count(req, res, next) {
  name = req.body["fName"]+req.body["lName"];
  next();
}

app.use(count);

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
    // heading =  `There are ${name.length} letters in your name`
    var name = req.body["fName"]+req.body["lName"];
    res.render("index.ejs", {
      numberofletters: name.length
    })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
