// Update with your config settings.
require("dotenv").config();
module.exports = {
  development: {
    client: "mysql",
    connection: {
      database: process.env.mysql_db_name,
      user: "root",
      password: process.env.mysql_pwd,
    },
    pool: {
      min: 2,
      max: 10
    },
  },
  staging: {
    client: "mysql",
    connection: {
      database: process.env.mysql_db_name,
      user: "root",
      password: process.env.mysql_pwd,
    },
    pool: {
      min: 2,
      max: 10
    },
  },
  production: {
    client: "mysql",
    connection: {
      database: process.env.mysql_db_name,
      user: "root",
      password: process.env.mysql_pwd,
    },
    pool: {
      min: 2,
      max: 10
    },
  }
};