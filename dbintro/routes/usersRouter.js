// routes/usersRouter.js
const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.get("/", usersController.usersListGet);
usersRouter.get("/new", usersController.userCreateGet);
usersRouter.post("/new", usersController.userCreatePost);

module.exports = usersRouter;
