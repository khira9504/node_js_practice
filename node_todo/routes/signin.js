const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const bcrypt = require("bcrypt");

router.get("/", (req, res, next) => {
  res.render("signin", {
    title: "Sign in",
    isAuth: Boolean(req.session.userid),
  });
});

router.post("/", (req, res, next) => {
  knex("users").where({ name: req.body.username }).select("*").then(async (results) => {
    if(results.length === 0) {
      res.render("signin", {
        title: "Sign in",
        errorMessage: ["ユーザが見つかりません"],
        isAuth: Boolean(req.session.userid),
      });
    } else if (await bcrypt.compare(req.body.password, results[0].password)) {
      req.session.userid = results[0].id;
      res.redirect("/");
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
      isAuth: Boolean(req.session.userid),
    });
  });
});

module.exports = router;