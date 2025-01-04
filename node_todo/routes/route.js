const express = require("express");
const router = express.Router();
const knex = require("../db/knex");

router.get("/", (req, res, next) => {
  const userId = req.session.userid;
  const isAuth = Boolean(userId);
  knex("tasks").select("*").then((results) => {
    console.log(results);
    res.render("index", {
      title: "ToDo App",
      todos: results,
      isAuth: isAuth,
    });
  }).catch((err) => {
    console.error(err);
    res.render("index", {
      title: "ToDo App",
      todos: results,
      isAuth: isAuth,
    });
  });
});

router.post("/", function (req, res, next) {
  const userId = req.session.userid;
  const isAuth = Boolean(userId);
  knex("tasks").insert({ user_id: 1, content: req.body.add }).then(() => {
    res.redirect("/");
  }).catch((err) => {
    console.error(err);
    res.render("index", {
      title: "ToDo App",
      isAuth: isAuth,
    });
  });
});

router.use("/signup", require("./signup"));

router.use("/signin", require("./signin"));

module.exports = router;
