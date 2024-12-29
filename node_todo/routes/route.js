const express = require("express");
const router = express.Router();

let todos = [];

router.get("/", function(req, res, next) {
  res.render("index", {
    title: "ToDo App",
    todos: todos,
  });
});

router.post("/", function(req, res, next) {
  const todo = req.body.add;
  todos = [...todos, todo];
  res.redirect("/");
});

router.get("/users", function(req, res, next) {
  res.render("users", {
    title: "Users | ToDo App",
  });
});

module.exports = router;