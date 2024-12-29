"use strict";

const http = require("http");

const server = http.createServer((req, res) => {
	res.writeHead(200, {
		"Content-type": "text/html",
	});

	const resMsg = "<h1>Hello Node.js</h1>";
	res.write(resMsg);
	res.end();
	console.log(`Sent a response : ${resMsg}`);
});

server.listen(3000);