const { Router } = require("express"); //import
const authorRouter = Router(); //attatch Router. Now can use Router methods
const { getAuthorById } = require("../controllers/authorController");

authorRouter.get("/", (req, res) => res.send("All authors"));
authorRouter.get("/:authorId", getAuthorById);

module.exports = authorRouter;
