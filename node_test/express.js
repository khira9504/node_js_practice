const port = 3000;
const express = require("express");
const app = express();

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.writeHead(200);
  res.end();
});

app.listen(port);