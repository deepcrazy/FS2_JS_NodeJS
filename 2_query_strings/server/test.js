try {
    const http = require("http");
    const hostname = 'localhost';
    const port = 1080;
    const url = require('url');

    //  Creating the server
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        var urlRequestedData = url.parse(req.url, true).query;  //  Split URl into parts

        var d = new Date();
        //  Day, Date and Time
        var returnValue = "Day and Date: " + d.toDateString() + "\nTime: " + d.toLocaleTimeString();
        //  Url requested
        returnValue = url.parse(req.url, true).search != null ? returnValue + "\nUrl requested: " + "http://" + hostname + ":" + port + "/" + url.parse(req.url, true).search : returnValue + "\nUrl requested: " + "http://" + hostname + ":" + port;
        //  Names and Values of query data along with handling of no query string data
        returnValue = Object.keys(urlRequestedData).length != 0 ? returnValue + "\nQuery String Data: " + JSON.stringify(urlRequestedData) : returnValue + "\nNo Query String entered";

        res.end(returnValue);
    }).listen(port, () => {
        console.log('http://'+ hostname + ':' + port + '    ok');   //  Error Handling
    });

} catch (error) {
    console.log("Error occured: " + error);
}