const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();

  const log = `${Date.now()}: New Req Received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
//   console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("HomePage");
        break;

      case "/about":
        const username = myUrl.query.myname;
        console.log(myUrl.pathname);
        res.end(username);
        break;

      default:
        res.end("404 NOt found");
    }
  });
});

myServer.listen(8000, () => {
  console.log("Server running....");
});
