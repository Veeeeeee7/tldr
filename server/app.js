const summarizer = require("./summarizer.js");
const http = require("http");

var summary = summarizer.getSummary("This is a test.");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write(summary);
        res.end();
    }
});

server.listen(8080);
