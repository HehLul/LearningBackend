const db = require("../db");
const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

// function name => METHOD + name of controller/router
const getAuthorById = asyncHandler(async (req, res) => {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId)); //use await when dealing with db

  if (!author) {
    throw new CustomNotFoundError("Author NOT found");
  }

  res.send(`Author Name: ${author.name}`);
});

module.exports = { getAuthorById };
