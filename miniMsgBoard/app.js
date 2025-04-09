const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

//setup for views
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//including routes
const indexRouter = require("./routers/indexRouter");
const newMsgRouter = require("./routers/newMsgRouter");

//seting up routes
app.use("/new", newMsgRouter);
app.use("/", indexRouter);

//starting server
app.listen(3000, (req, res) => {
  console.log("starting mini message board...");
});
