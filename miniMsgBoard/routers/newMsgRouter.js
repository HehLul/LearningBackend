const { Router } = require("express");
const newMsgRouter = Router();

const { getNewMsg, postNewMsg } = require("../controllers/newMsgController");

newMsgRouter.get("/", getNewMsg);
newMsgRouter.post("/", postNewMsg);

module.exports = newMsgRouter;
