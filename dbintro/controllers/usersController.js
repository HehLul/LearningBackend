const db = require("../db/queries");

exports.usersListGet = async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
};
exports.userCreateGet = (req, res) => {
  res.render("index", {});
};
exports.userCreatePost = async (req, res) => {
  const { user } = req.body;
  await db.insertUsername(user);
  res.redirect("/");
};
