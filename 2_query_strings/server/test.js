try {
    const http = require("http");
    const hostname = 'localhost';
    const port = 1080;
    const url = require('url');

    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        var urlRequestedData = url.parse(req.url, true).query;

        var d = new Date();
        // var returnValue = res.write("Date and Day: " + d.toDateString() + "<br/>" + "Time: " + d.toLocaleTimeString());
        var returnValue = "Day and Date: " + d.toDateString() + "\nTime: " + d.toLocaleTimeString();

        returnValue = url.parse(req.url, true).search != null ? returnValue + "\nUrl requested: " + "http://" + hostname + ":" + port + "/" + url.parse(req.url, true).search : returnValue + "\nUrl requested: " + "http://" + hostname + ":" + port;

        returnValue = Object.keys(urlRequestedData).length != 0 ? returnValue + "\nQuery String Data: " + JSON.stringify(urlRequestedData) : returnValue;

        res.end(returnValue);
    }).listen(port, () => {
        console.log('http://'+ hostname + ':' + port + '    ok');
    });

} catch (error) {
    console.log("Error occured: " + error);
}