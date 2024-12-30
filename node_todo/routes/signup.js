const express = require("express");
const router = express.Router();
const knex = require("../db/knex");

router.get("/", (req, res, next) => {
  res.render("signup", {
    title: "Sign up",
  });
});

router.post("/", (req, res, next) => {
  knex("users").where({ name: req.body.username }).select("*").then((result) => {
    if(result.length !== 0) {
      res.render("signup", {
        title: "Sign up",
        errorMessage: ["このユーザ名は既に使われています"],
      });
    } else if(req.body.password === req.body.repassword) {
      knex("users").insert({ name: req.body.username, password: req.body.password }).then(() => {
        res.redirect("/");
      }).catch((err) => {
        console.error(err);
        res.render("signup", {
          title: "Sign up",
          errorMessage: [err.sqlMessage],
        });
      });
    } else {
      res.render("signup", {
        title: "Sign up",
        errorMessage: ["パスワードが一致しません"],
      });
    };
  }).catch((err) => {
    console.error(err);
    res.render("signup", {
      title: "Sign up",
      errorMessage: [err.sqlMessage],
    });
  });
});

module.exports = router;