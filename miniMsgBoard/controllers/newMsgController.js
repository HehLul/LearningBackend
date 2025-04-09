const asyncHandler = require("express-async-handler");

const getNewMsg = asyncHandler(async (req, res) => {
  res.render("form", {});
});

module.exports = { getNewMsg };
