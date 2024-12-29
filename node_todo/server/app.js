const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "text/html",
  });
  const resMsg = "<h1>Hello World!!!!</h1>";
  res.end(resMsg);
  console.log(`port: ${port} / resMsg: ${resMsg}`);
  
});

server.listen(port);