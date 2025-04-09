const Router = require("express");
const bookRouter = Router();

bookRouter.get("/", (req, res) => {
  res.send("GET /books");
});

bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`GET /books/:bookId ${bookId}`);
});

bookRouter.get("/:bookId/reserve", (req, res) => {
  res.send("GET /books/:bookId/reserve");
});

bookRouter.post("/:bookId/reserve", (req, res) => {
  res.send("POST /books/:bookId/reserve");
});

module.exports = bookRouter;
