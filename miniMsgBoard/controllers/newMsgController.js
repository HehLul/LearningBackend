const asyncHandler = require("express-async-handler");
const messages = require("../messages");

const getNewMsg = asyncHandler(async (req, res) => {
  res.render("form", {});
});
const postNewMsg = asyncHandler(async (req, res) => {
  const newUser = req.body.userName;
  const newText = req.body.userText;
  messages.push({ text: newText, user: newUser, added: new Date() });
  // res.json({ newUser: newUser, newText: newText });
  res.redirect("/");
});

module.exports = { getNewMsg, postNewMsg };
