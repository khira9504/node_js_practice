const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

require("dotenv").config();

const dbGet = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.mysql_pwd,
  database: process.env.mysql_db_name
});

router.get("/", function(req, res, next) {
  dbGet.query(`select * from tasks;`, (err, results) => {
    res.render('index', {
      title: 'ToDo App',
      todos: results,
    });
  });
});

router.post('/', function (req, res, next) {
  dbGet.connect((err) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return
    }
    console.log('success');
  });
  dbGet.query(`insert into tasks (user_id, content) values (1, '${req.body.add}');`, (error, results) => {
    console.log(error);
    res.redirect('/');
  });
});

router.get("/users", function(req, res, next) {
  res.render("users", {
    title: "Users | ToDo App",
  });
});

module.exports = router;
