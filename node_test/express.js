const port = 3000;
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/view/index.html');
}); 

app.get("/public/css/style.css", (req, res) => {
  res.sendFile(__dirname + '/public/css/style.css');
});

app.listen(port);