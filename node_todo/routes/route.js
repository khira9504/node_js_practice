const express = require("express");
const router = express.Router();
const mysql = require("mysql");

require('dotenv').config();
const env = process.env.mysql_pwd;

const dbGet = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.mysql_pwd,
  database: process.env.mysql_db_name
});

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
