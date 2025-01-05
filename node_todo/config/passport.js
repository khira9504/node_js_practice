const passport = require("passport");
const LocalStrategy = require("passport-local");
const knex = require("../db/knex");
const bcrypt = require("bcrypt");

module.exports = (app) => {
  passport.use(new LocalStrategy({
    usernameField: "username",
    passwordField: "password"
  }, (username, password, done) => {
    knex("users").where({ name: username }).select("*").then(async (results) => {
      if (results.length === 0) {
        return done(null, false, { message: "Invalid User" });
      } else if (await bcrypt.compare(password, results[0].password)) {
        return done(null, results[0]);
      } else {
        return done(null, false, { message: "Invalid User" });
      }
    }).catch((err) => {
      console.error(err);
      return done(null, false, { message: err.toString() })
    });
  }));
};