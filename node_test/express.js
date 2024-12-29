const port = 3000;
const express = require("express");
const app = express();

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.writeHead(200);
  res.end();
}); 

// app.get("/public/css/style.css", (req, res) => {
  // res.sendFile(__dirname + '/public/css/style.css');
// });

app.listen(port);