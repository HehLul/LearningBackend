const express = require("express");
const app = express();

const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routers/indexRouter");
const newMsgRouter = require("./routers/newMsgRouter");

app.use("/new", newMsgRouter);
app.use("/", indexRouter);

app.listen(3000, (req, res) => {
  console.log("starting mini message board...");
});
