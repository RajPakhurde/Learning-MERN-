import experss from "express";

const app = experss();
const port = 3000;

const date = new Date();
const sec = date.getSeconds()

console.log(sec);

app.get("/", (req, res) => {
    res.render("index.ejs", {
        tag: "Ejs Tag",
        currentSecond: `Current Second: ${sec}`,
        list: ["hello", "world", "nodejs"],
        htmlContent: "<em>This is some em text</em>",
    })
})

app.listen(port, () => {
    console.log("Server is running...");
})
