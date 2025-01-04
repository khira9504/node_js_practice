const passport = require("passport");
const LocalStrategy = require("passport-local");

module.exports = (app) => {
  passport.use(new LocalStrategy({
    usernameField: "username",
    passwordField: "password"
  }, (username, password, done) => {
    
  }));
};