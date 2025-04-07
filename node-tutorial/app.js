const http = require("http");
// EXAMPLE: showing you can create your own module and then import
// const date = require("./myfirstmodule"); //can create a import your owm module.

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello World!, today the date is " + date.myDateTime());
//   })
//   .listen(8080);

const url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" }); //changed content type that will be shown to browser
    const q = url.parse(req.url, true).query; //parse the url
    var txt = q.year + " " + q.month; //fetch the corresponding data from url after the ? mark
    res.write(txt);
    res.end();
  })
  .listen(8080);
