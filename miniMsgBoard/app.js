const express = require("express");
const app = express();

const indexRouter = require("./routers/indexRouter");
const newMsgRouter = require("./routers/newMsgRouter");

app.use("/new", newMsgRouter);
app.use("/", indexRouter);

app.listen(3000, (req, res) => {
  console.log("starting mini message board...");
});
