const summarizer = require("./summarizer.js");
const http = require("http");

var summary = summarizer.getSummary(
    "On October 10, 1985, the hijacking of the Italian cruise ship Achille Lauro reaches a dramatic climax when U.S. Navy F-14 fighters intercept an Egyptian airliner attempting to fly the Palestinian hijackers to freedom and force the jet to land at a NATO base in Sigonella, Sicily. American and Italian troops surrounded the plane, and the terrorists were taken into Italian custody. "
);

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        summary = Promise.resolve(summary);
        summary.then(function (val) {
            res.write(val);
            res.end();
        });
    }
});

server.listen(8080);
