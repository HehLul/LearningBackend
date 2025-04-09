const asyncHandler = require("express-async-handler");
const messages = require("../messages");

// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date(),
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date(),
//   },
// ];

const getMessages = asyncHandler(async (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = { getMessages };
