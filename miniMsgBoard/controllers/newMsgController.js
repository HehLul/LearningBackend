const asyncHandler = require("express-async-handler");

const getNewMsg = asyncHandler(async (req, res) => {
  //do stuff to fetch new msg
  res.send("Getting NEW Messages...");
});

module.exports = { getNewMsg };
