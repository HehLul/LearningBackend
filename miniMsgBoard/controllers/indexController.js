const asyncHandler = require("express-async-handler");

const getMessages = asyncHandler(async (req, res) => {
  //do stuff to fetch messages from db
  res.send("Getting Messages...");
});

module.exports = { getMessages };
