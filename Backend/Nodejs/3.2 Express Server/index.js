import express from "express";
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>");
})

app.listen(port, () => {
    console.log(`3.2 Server running in port ${port}`);
})