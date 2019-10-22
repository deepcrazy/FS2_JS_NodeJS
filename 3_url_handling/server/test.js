try {
    const http = require("http");
    const hostname = 'localhost';
    const port = 1080;
    const url = require('url');
    const fs = require('fs');

    const server = http.createServer((req, res) => {

        var queryData = url.parse(req.url, true);   //  parse the URL data

        var pathName = queryData.pathname;          //  fetching the pathname for a file requested
        var fileName = pathName == "/" ? "../client/index.html" : "../client/" + pathName;
        console.log(fileName);
        //  Reading the file. If it exits, then sends the content back else returning 404 error
        fs.readFile(fileName, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("404 Not Found");
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });

    }).listen(port, () => {
        console.log('http://'+ hostname + ':' + port + '    ok');
    });

} catch (error) {
    console.log("Error occured: " + error);
}