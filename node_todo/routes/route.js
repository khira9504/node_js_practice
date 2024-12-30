const express = require("express");
const router = express.Router();
const knex = require("../db/knex");

router.get("/", (req, res, next) => {
  knex("tasks").select("*").then((results) => {
    console.log(results);
    res.render("index", {
      title: "ToDo App",
      todos: results,
    });
  }).catch((err) => {
    console.error(err);
    res.render("index", {
      title: "ToDo App",
      todos: results,
    });
  });
});

router.post("/", function (req, res, next) {
  knex("tasks").insert({ user_id: 1, content: req.body.add }).then(() => {
    res.redirect("/");
  }).catch((err) => {
    console.error(err);
    res.render("index", {
      title: "ToDo App",
    });
  });
});

router.use("/signup", require("./signup"));

module.exports = router;
