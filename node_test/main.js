"use strict";

const port = 3000;
const http = require("http");
const fs = require("node:fs");

function readFile(file, res) {
  fs.readFile(`./${file}`, (err, data) => {
    if(err) {
      console.error("Not reading file");
    };
    res.end(data);
  });
};

const app = http.createServer((req, res) => {
  if(req.url === "/" && req.method === "GET") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    readFile("view/index.html", res);
  } else if(req.url === "/public/image/nodejs.png" && req.method === "GET") {
    res.writeHead(200, {
      "Content-type": "image/png",
    });
    readFile("public/image/nodejs.png", res);
  } else if(req.url === "/public/css/style.css" && req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "text/css",
    });
    readFile("public/css/style.css", res);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
    });
    res.end(`Not found : ${res.url}`);
    console.log();
  };
});

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);