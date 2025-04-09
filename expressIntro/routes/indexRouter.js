const Router = require("express");
const indexRouter = Router();

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];
const users = ["Rose", "Cake", "Biff"];

indexRouter.get("/", (req, res) => {
  // res.render("index", { message: "This is a Message to home page!" });
  res.render("index", { links: links, users: users });
});
indexRouter.get("/about", (req, res) => {
  res.render("about", {});
});
indexRouter.get("/contact", (req, res) => {
  res.send("GET /contact");
});
indexRouter.post("/contact", (req, res) => {
  res.send("POST /contact");
});

module.exports = indexRouter;
