const { Router } = require("express");
const newMsgRouter = Router();

const { getNewMsg } = require("../controllers/newMsgController");

newMsgRouter.get("/", getNewMsg);

module.exports = newMsgRouter;
