Intro to Express.
https://www.theodinproject.com/lessons/node-path-nodejs-introduction-to-express

Learned how to setup express and some express methods like app.get(), .listen() etc..

npm init -y -> sets up package.json
npm install express -> setup express

ALWAYS place specific routes before dynamic ones

For 404 page, do the following...

app.use((req, res) => {
res.writeHead(404, { "Content-Type": "text/html" });
fs.readFile("404.html", "utf-8", (err, data) => {
if (err) {
console.error(err);
res.end("404 Page Not Found");
} else {
res.write(data);
res.end();
}
});
});

place this at the END of all routes

ROUTERS: https://www.theodinproject.com/lessons/nodejs-routes#assignment

assignment: integrate routers to create a basic library backend app.

CONTROLLERS: https://www.theodinproject.com/lessons/nodejs-controllers

VIEWS: https://www.theodinproject.com/lessons/nodejs-views
