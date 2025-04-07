const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    fs.readFile("demoFile1.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
    fs.appendFile("newFile.txt", "Hello new file!", (err) => {
      console.error(err);
    });
  })
  .listen(8080);

fs.open("mynewfile2.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("Saved!");
});
