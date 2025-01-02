const express = require("express");
const router = express.Router();
const knex = require("../db/knex");

router.get("/", (req, res, next) => {
  res.render("signin", {
    title: "Sign in",
  });
});

router.post("/", (req, res, next) => {
  knex("users").where({ name: req.body.username, password: req.body.password }).select("*").then((results) => {
    if (results.length === 0) {
      res.render("signin", {
        title: "Sign in",
        errorMessage: ["ユーザが見つかりません"],
      });
    } else {
      req.session.userid = results[0].id;
      res.redirect("/");
    }
  })
  .catch(function (err) {
    console.error(err);
    res.render("signin", {
      title: "Sign in",
      errorMessage: [err.sqlMessage],
    });
  });
});

module.exports = router;